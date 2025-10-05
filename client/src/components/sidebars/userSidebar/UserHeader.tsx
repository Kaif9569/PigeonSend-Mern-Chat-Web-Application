import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { BiMessageAdd } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoMdSearch } from "react-icons/io";

const UserHeader = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      className={`flex flex-col bg-foreground sticky top-0 lg:static z-10 justify-between m-4 gap-4 ${scrolled ? " py-4 px-4  mx-0" : ""
      }`}
    >
      <div className="flex justify-between">
      <div className=" text-2xl">PigeonSend</div>
      <div className="flex gap-2  text-2xl">
        <div className="hover:bg-neutral-700 transition duration-200 rounded-full p-2">
          <BiMessageAdd className="w-5 h-5 cursor-pointer" />
        </div>
        <div className="hover:bg-neutral-700 transition duration-200 rounded-full p-2">
          <BsThreeDotsVertical className="w-5 h-5 cursor-pointer" />
        </div>
      </div>
      </div>
      <div className="flex  gap-3 w-full items-center justify-center">
        <div className="relative w-full ">
          <IoMdSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 " />
          <Input placeholder="Search Contacts" className="pl-10 bg-[#2e2f2f]" />
        </div>
      </div>
    </div>
  );
};

export default UserHeader;
