import { SearchBox } from "@/components/SearchBox";
import { Avatar } from "@/components/ui/avatar";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { BsKey } from "react-icons/bs";
import { MdLockOutline } from "react-icons/md";
import { BsChatSquareText } from "react-icons/bs";
import {
  IoIosHelpCircleOutline,
  IoIosNotificationsOutline,
} from "react-icons/io";
import { FaRegKeyboard } from "react-icons/fa";
import { CiLogin } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const SettingSidebar = () => {
    const navigate = useNavigate();

  const handleLogout = () => {
    // 🔹 Clear auth (token, cookies, localStorage)
    localStorage.removeItem("token");

    // 🔹 Redirect to login
    navigate("/login");
  };
  return (
    <div className="flex flex-col w-full">
      <div className="sticky top-0 z-10 bg-black">
        <h1 className="mx-4 my-6 text-2xl font-semibold select-none">
          Settings
        </h1>
        <SearchBox />
      </div>
      <div>
        <div className="flex items-center flex-1 mx-4 mt-4 gap-5 rounded-md hover:bg-neutral-700 py-5 px-5 cursor-pointer">
          <Avatar className="w-15 h-15 rounded-full">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <p className=" text-white text-lg select-none">mokaifshaik0</p>
            <p className="text-neutral-300 text-lg select-none">
              Hey there,i am using whatsApp
            </p>
          </div>
        </div>
        <div className="h-[1px] bg-neutral-700 mx-8 my-8" />
        <div className="flex items-center flex-1 mx-4 mt-4 gap-5 rounded-md hover:bg-neutral-700 py-5 px-5 cursor-pointer">
          <BsKey className="w-5 h-5" />
          <div className="flex flex-col">
            <p className=" text-white select-none ">Account</p>
            <p className="text-neutral-400 select-none ">
              Security notifications, account info
            </p>
          </div>
        </div>
        <div className="flex items-center flex-1 mx-4 mt-4 gap-5 rounded-md hover:bg-neutral-700 py-5 px-5 cursor-pointer">
          <MdLockOutline className="w-5 h-5" />
          <div className="flex flex-col">
            <p className=" text-white select-none ">Privacy</p>
            <p className="text-neutral-400 select-none ">
              Blocked contacts, disappearing messages
            </p>
          </div>
        </div>
        <div className="flex items-center flex-1 mx-4 mt-4 gap-5 rounded-md hover:bg-neutral-700 py-5 px-5 cursor-pointer">
          <BsChatSquareText className="w-5 h-5" />
          <div className="flex flex-col">
            <p className=" text-white select-none ">Chats</p>
            <p className="text-neutral-400 select-none ">
              theme, wallpaper, chat setting
            </p>
          </div>
        </div>
        <div className="flex items-center flex-1 mx-4 mt-4 gap-5 rounded-md hover:bg-neutral-700 py-5 px-5 cursor-pointer">
          <IoIosNotificationsOutline className="w-5 h-5" />
          <div className="flex flex-col">
            <p className=" text-white select-none ">Notifications</p>
            <p className="text-neutral-400 select-none ">
              Mesages notification
            </p>
          </div>
        </div>
        <div className="flex items-center flex-1 mx-4 mt-4 gap-5 rounded-md hover:bg-neutral-700 py-5 px-5 cursor-pointer">
          <FaRegKeyboard className="w-5 h-5" />
          <div className="flex flex-col">
            <p className=" text-white select-none ">Keyboard Shortcuts</p>
            <p className="text-neutral-400 select-none ">Quick actions</p>
          </div>
        </div>
        <div className="flex items-center flex-1 mx-4 mt-4 gap-5 rounded-md hover:bg-neutral-700 py-5 px-5 cursor-pointer">
          <IoIosHelpCircleOutline className="w-5 h-5" />
          <div className="flex flex-col">
            <p className=" text-white select-none ">Help</p>
            <p className="text-neutral-400 select-none ">
              Help center, contact us, privacy policy
            </p>
          </div>
        </div>
      </div>
      <div className="h-[1px] bg-neutral-700 mx-8" />

      <div onClick={handleLogout} className="flex gap-6 mx-8 my-5 rounded-md hover:bg-neutral-700 py-5 px-5 cursor-pointer">
        <CiLogin className="w-8 h-8" />
        <p className="font-semibold text-lg select-none">LogOut</p>
      </div>
      <div className="h-[1px] bg-neutral-700 mx-8 my-4" />
    </div>
  );
};

export default SettingSidebar;
