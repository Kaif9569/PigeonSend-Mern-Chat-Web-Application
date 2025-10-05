import nodemailer from "nodemailer";
import "dotenv/config"
const {
  SMTP_HOST,
  SMTP_PORT,
  SMTP_USER,
  SMTP_PASS,
  EMAIL_FROM = "mokaifshaikh@gmail.com",
} = process.env;
export const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: SMTP_PORT ? parseInt(SMTP_PORT, 10) : 587,
  secure: SMTP_PORT === "465", // true for 465, false for other ports
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASS,
  },
});
export const verifyTransporter = async () => {
  try {
    await transporter.verify();
    console.log("mail transporter is ready");
  } catch (error: any) {
    console.warn("mail transporter verification failed:", error);
  }
};
export async function sendOtpEmail(to:string,otp:string,expiresInMinutes=5) {
      const subject = "Your OTP code";
  const text = `Your verification code is ${otp}. It expires in ${expiresInMinutes} minutes. If you didn't request this, ignore this email.`;
  const html = `
    <p>Your verification code is <strong>${otp}</strong>.</p>
    <p>This code will expire in ${expiresInMinutes} minutes.</p>
  `;

  const info = await transporter.sendMail({
    from: EMAIL_FROM,
    to,
    subject,
    text,
    html,
  });

  return info;
}