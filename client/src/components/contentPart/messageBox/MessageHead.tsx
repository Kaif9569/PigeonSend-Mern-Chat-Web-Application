import { BsThreeDotsVertical } from "react-icons/bs";
import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar";
import { IoIosArrowBack } from "react-icons/io";

const MessageHead = () => {
  return (
    <div className="flex w-full justify-between gap-5 xl:w-auto py-4 xl:px-4 bg-[#0A0A0A]">
      <div className="flex gap-2">
        <div className="flex xl:hidden items-center ">
          <IoIosArrowBack className="p-1 h-8 w-8 rounded-full hover:bg-neutral-600" />
        </div>
        <div>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <div>
          <h1 className="line-clamp-1">
            Mohamad Kaif Shaikhfromfaizabaduttarpradesh
          </h1>
          <p className="text-neutral-400 text-sm">recent message</p>
        </div>
      </div>
      <div className="flex items-center">
        <BsThreeDotsVertical className="w-5 h-5 cursor-pointer" />
      </div>
    </div>
  );
};

export default MessageHead;
