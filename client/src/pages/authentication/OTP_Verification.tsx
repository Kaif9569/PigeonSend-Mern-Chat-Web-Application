"use client";

import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

export default function OTPVerification() {
  return (
    <form className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center gap-15 bg-gray-900 px-8 py-14 rounded-3xl">
        <p>OTP Verification</p>
        <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS_AND_CHARS}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
        <button className="w-full mx-2 border rounded-md py-2 ">Submit</button>
      </div>
    </form>
  );
}
