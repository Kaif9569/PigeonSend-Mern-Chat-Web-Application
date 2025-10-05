import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import { MdModeEdit } from "react-icons/md";
const ProfileSidebar = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="ml-4 mt-4">
        <h1 className="text-2xl font-semibold select-none">Profile</h1>
      </div>
      <div className="mt-20 mb-10 flex items-center justify-center">
        <Avatar className="w-30 h-30">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex flex-col flex-1 mx-8 mt-10 gap-10">
        <div className="flex items-center justify-between w-full mx-4">
          <div className="flex flex-col gap-3">
            <p className="text-neutral-300 font-semibold text-lg">Name</p>
            <p className="text-white font-semibold text-lg">mokaifshaikh0</p>
          </div>
            <MdModeEdit />
        </div>
        <div className="flex items-center justify-between w-full mx-4">
          <div className="flex flex-col gap-3">
            <p className="text-neutral-300 font-semibold">About</p>
            <p className="text-white font-semibold text-lg">mokaifshaikh0</p>
          </div>
            <MdModeEdit />
        </div>
        <div className="flex items-center justify-between w-full mx-4">
          <div className="flex flex-col gap-3">
            <p className="text-neutral-300 font-semibold text-lg">Phone</p>
            <p className="text-white font-semibold text-lg">+91 9120770518</p>
          </div>
            <MdModeEdit />
        </div>
      </div>
    </div>
  );
};

export default ProfileSidebar;
