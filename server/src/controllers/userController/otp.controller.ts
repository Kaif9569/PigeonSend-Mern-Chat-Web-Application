import { Request, Response } from "express";
import otpGenerator from "otp-generator";
import bcrypt from "bcrypt";
import OtpModel from "../../models/otp.model";
import { sendOtpEmail } from "../../utils/mailer";
import userModel from "../../models/user.model";
import "dotenv/config";
const OTP_LENGTH = 6;
const OTP_TTL_MINUTES = 5;
const MAX_ATTEMPTS = 5;
const BCRYPT_SALT_ROUNDS = 10;

export const sendOtp = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;
    if (!email)
      return res
        .status(400)
        .json({ success: false, message: "Email is required" });

    const normalizedEmail = String(email).toLowerCase().trim();
    //generate OTP
    const otp = otpGenerator.generate(OTP_LENGTH, {
      upperCaseAlphabets: false,
      specialChars: false,
      digits: true,
    });
    //hashed otp
    const otpHash = await bcrypt.hash(otp, BCRYPT_SALT_ROUNDS);
    //compute expiry
    const expiresAt = new Date(Date.now() + OTP_TTL_MINUTES * 60 * 1000);
    //remove old OTPs for this email
    await OtpModel.deleteMany({ email: normalizedEmail });

    //save hashed OTP
    await OtpModel.create({
      email: normalizedEmail,
      otpHash,
      expiresAt,
      attempts: 0,
      used: false,
    });

    //send email(send opt not hashed otp)
    await sendOtpEmail(normalizedEmail, otp, OTP_TTL_MINUTES);

    await userModel.findOneAndUpdate(
      { email: normalizedEmail },
      { $setOnInsert: { email: normalizedEmail } },
      { upsert: true, new: true }
    );

    return res.json({ success: true, message: "OTP sent to Email" });
  } catch (err: any) {
    console.error("sendOTP error:", err);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server error" });
  }
};
export const verifyOtp = async (req: Request, res: Response) => {
  try {
    const { email, otp } = req.body;
    if (!email || !otp)
      return res
        .status(400)
        .json({ success: false, message: "Email and OTP are required" });

    const normalizedEmail = String(email).toLowerCase().trim();

    //find latest otp Doc for this email
    const otpDoc = await OtpModel.findOne({
      email: normalizedEmail,
      used: false,
    }).sort({ createdAt: -1 });
    if (!otpDoc)
      return res.status(400).json({
        success: false,
        message: "No active OTP found or otp is expired",
      });

    //check attemps
    if (otpDoc.attempts >= MAX_ATTEMPTS) {
      await otpDoc.deleteOne();
      return res.status(429).json({
        success: false,
        message:
          "Maximum verification attempts exceeded. Please request a new OTP.",
      });
    }

    //check expiry
    if (otpDoc.expiresAt.getTime() < Date.now()) {
      await otpDoc.deleteOne();
      return res.status(400).json({
        success: false,
        message: "OTP has expired. Request a new one.",
      });
    }
    const match = await bcrypt.compare(String(otp).trim(), otpDoc.otpHash);
    if (!match) {
      await otpDoc.save();
      const attemptsLeft = Math.max(0, MAX_ATTEMPTS - otpDoc.attempts);
      return res.status(400).json({
        success: false,
        message: `Invalid OTP. Attempts left: ${attemptsLeft}`,
      });
    }
    otpDoc.used = true;
    await otpDoc.save();

    const user = await userModel.findOneAndUpdate(
      { email: normalizedEmail },
      { $set: { isVerified: true } },
      { new: true, upsert: true }
    );
    return res.json({ success: true,user });
  } catch (err: any) {
    console.error("verifyOtp error:", err);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};
