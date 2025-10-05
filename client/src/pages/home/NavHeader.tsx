import { FaRegUser } from "react-icons/fa";
import { GrChannel } from "react-icons/gr";
import { IoSettingsOutline } from "react-icons/io5";
import { RiUserCommunityLine } from "react-icons/ri";
import { TbSquareRoundedLetterS } from "react-icons/tb";
import { TiMessage } from "react-icons/ti";

interface NavheaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const NavHeader = ({ activeTab, setActiveTab }: NavheaderProps) => {
  return (
    <div className="flex flex-row xl:flex-col justify-between bg-[#1d1f1f] px-3 py-3 xl:border-r xl:border-neutral-500">
      {/* Top Group */}
      <div className="flex flex-row xl:flex-col gap-3">
        {/* Chat */}
        <div
          onClick={() => setActiveTab("chat")}
          className={`transition duration-200 cursor-pointer rounded-full p-2 ${
            activeTab === "chat" ? "bg-neutral-700" : "hover:bg-neutral-700"
          }`}
        >
          <TiMessage className="w-6 h-6" />
        </div>

        {/* Status */}
        <div
          onClick={() => setActiveTab("status")}
          className={`transition duration-200 cursor-pointer rounded-full p-2 ${
            activeTab === "status" ? "bg-neutral-700" : "hover:bg-neutral-700"
          }`}
        >
          <TbSquareRoundedLetterS className="w-6 h-6" />
        </div>

        {/* Channel */}
        <div
          onClick={() => setActiveTab("channel")}
          className={`transition duration-200 cursor-pointer rounded-full p-2 ${
            activeTab === "channel" ? "bg-neutral-700" : "hover:bg-neutral-700"
          }`}
        >
          <GrChannel className="w-6 h-6" />
        </div>

        {/* Community */}
        <div
          onClick={() => setActiveTab("community")}
          className={`transition duration-200 cursor-pointer rounded-full p-2 ${
            activeTab === "community" ? "bg-neutral-700" : "hover:bg-neutral-700"
          }`}
        >
          <RiUserCommunityLine className="w-6 h-6" />
        </div>
      </div>

      {/* Bottom Group */}
      <div className="flex flex-row xl:flex-col gap-3">
        {/* Settings */}
        <div
          onClick={() => setActiveTab("setting")}
          className={`transition duration-200 cursor-pointer rounded-full p-2 ${
            activeTab === "setting" ? "bg-neutral-700" : "hover:bg-neutral-700"
          }`}
        >
          <IoSettingsOutline className="w-6 h-6" />
        </div>

        {/* Profile */}
        <div
          onClick={() => setActiveTab("profile")}
          className={`transition duration-200 cursor-pointer rounded-full p-2 ${
            activeTab === "profile" ? "bg-neutral-700" : "hover:bg-neutral-700"
          }`}
        >
          <FaRegUser className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
};

export default NavHeader;
