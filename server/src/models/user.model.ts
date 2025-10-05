import mongoose, { Document, Schema } from "mongoose";

export interface IUser extends Document {
  email: string;
  name?: string;
  username?: string;
  phone?: string;
  profilePhoto?: string;
  description?: string;
  isVerified: boolean;
  createdAt: Date;
}

const userSchema = new Schema<IUser>(
  {
    email: { type: String, required: true, unique: true, lowercase:true,trim:true},
    name: { type: String },
    username: { type: String, unique: true, sparse: true },
    phone: { type: String },
    profilePhoto: { type: String },
    description: { type: String },
    isVerified: { type: Boolean,default:false },
  },
  { timestamps: true }
);

export default mongoose.model<IUser>("User", userSchema);
