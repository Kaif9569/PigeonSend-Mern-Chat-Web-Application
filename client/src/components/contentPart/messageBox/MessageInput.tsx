import { IoIosSend } from "react-icons/io";

const MessageInput = () => {
  return (
      <div className="flex gap-2 items-center z-10 w-full p-4 bg-[#0A0A0A] shadow-2xl ">
        <input type="text" placeholder="Type here..." className="p-4 border-2 hover:border-green-900 focus:border-emerald-500 focus:outline-none w-full rounded-lg bg-neutral-800" />
        <div className="flex items-center border hover:border-emerald-500  hover:bg-neutral-700  p-3 rounded-lg"><IoIosSend className="w-8 h-8 "/></div>
      </div>

  );
};

export default MessageInput;
