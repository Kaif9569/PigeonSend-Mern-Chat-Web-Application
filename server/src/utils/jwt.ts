import jwt, { Secret, SignOptions } from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

interface JwtPayload {
  userId: string;
  email: string;
}

export function generateToken(payload: JwtPayload): string {
  const secret: Secret = process.env.JWT_SECRET || "CHANGE_THIS_SECRET";
  const expiresIn: string | number = process.env.JWT_EXPIRES_IN || "2d";
  return jwt.sign(payload, secret, { expiresIn });
}
