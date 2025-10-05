import { Request, Response } from "express";
import userModel from "../../models/user.model";
interface RegisterRequestBody {
  email: string;
  username: string;
}
const register =async (req:Request<{},{},RegisterRequestBody>,res:Response)=>{
  try {
    const { email,username } = req.body;

    //checking user already exist or not
    const exist = await userModel.findOne({ email });
    if (exist) {
      return res.json({ success: false, message: "user already exist" });
    }
    const newUser = new userModel({
        email,
        username
    });
    const user = await newUser.save();
    console.log(user)
  } catch (error:any) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }


}
export {register}