import mongoose, { Document, Schema } from "mongoose";

export interface IOtp extends Document {
  email: string;
  otpHash:string;
  createdAt: Date;
  expiresAt:Date;
  attempts:number;
  used:boolean;
}

const OtpSchema = new Schema<IOtp>(
  {
    email: { type: String, required: true,index:true,lowercase:true,trim:true },
    otpHash: { type: String, required: true },
    createdAt: { type: Date, default: Date.now},
    expiresAt: { type: Date, required: true },
    attempts:{type:Number,default:0},
    used:{type:Boolean,default:false},
  },

  { timestamps: true }
);
OtpSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });

const OtpModel = mongoose.models.Otp || mongoose.model<IOtp>("Otp", OtpSchema);
export default OtpModel;