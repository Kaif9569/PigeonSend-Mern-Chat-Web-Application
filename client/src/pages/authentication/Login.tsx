import { useState } from "react";
import { Form } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Login = () => {

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");
  const navigate=useNavigate();

  const handleSendOtp=async(e:React.MouseEvent<HTMLButtonElement>)=>{
    e.preventDefault();
    if(!email)return setMessage("Please Enter YOur Email");
    setLoading(true);
    setMessage("");

    try {
      const response=await axios.post("http://10.69.209.181:5000/api/auth/send-otp",{email});
      if(response.data.success){
        setOtpSent(true);
        setMessage("OTP sent successfullt to your email")
      }
      else{
        setMessage(response.data.message||"Failed to send OTP")
      }
    } catch (error:any) {
      console.error(error)
      setMessage("Server error. Try again later.")
    }
    finally{
      setLoading(false);
    }
  }

  const handleVerifyOtp=async(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    if(!otpSent)return setMessage("Please Sent OTP first")
    if(!otp)return setMessage("Please Enter OTP");

    setLoading(true);
    setMessage("");

    try {
      const response=await axios.post("http://10.69.209.181:5000/api/auth/verify-otp",{email,otp});
      if(response.data.success){
        setMessage("OTP verified successfully!");
        navigate("/home");
      }else{
        setMessage(response.data.message ||"Invalid OTP. please Try again")
      }
    } catch (error:any) {
      console.error(error)
      setMessage("Server error. try again later");
    }finally{
      setLoading(false)
    }
  }

  return (
    <Form onSubmit={handleVerifyOtp} className="flex w-full h-screen items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-10  px-6 py-8">
        <div className="flex flex-col items-center sm:justify-center  sm:py-0  w-full gap-3 sm:gap-5">
          <h1 className="text-2xl sm:text-3xl font-semibold">
            Enter your Email address
          </h1>
          <p className="text-neutral-200 text-sm sm:text-md">
            PigeonSend will need to verify your Email address
          </p>
        </div>
        <div className="flex flex-col w-full gap-1">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email" // ensures valid email format
            name="email" // form field name
            id="email" // unique id for label
            placeholder="Enter your email"
            required // must fill
            autoComplete="email" // browser autocomplete
            maxLength={100} // optional max length
            className="w-full py-2 pl-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
          <button onClick={handleSendOtp} disabled={loading} className="flex justify-end pr-1 text-blue-300 hover:text-blue-400 text-sm">
            {loading?"Sending...":otpSent?"Resend":"Send"}
          </button>
        </div>
        <div className="flex w-full ">
          <input
            type="text"
            value={otp}
            onChange={(e)=>setOtp(e.target.value)}
            placeholder="Enter OTP"
            maxLength={6}
            className="w-full py-2 pl-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="flex items-center justify-center border w-full py-3 rounded-md hover:bg-emerald-600 "
        >
          {loading?"verifing...":"Next"}
        </button>
        {
          message && (
                      <p
            className={`text-sm text-center ${
              message.toLowerCase().includes("success")
                ? "text-green-400"
                : "text-red-400"
            }`}
          >
            {message}
          </p>
          )
        }
      </div>
    </Form>
  );
};

export default Login;
