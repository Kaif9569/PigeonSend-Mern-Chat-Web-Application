import { Input } from "@/components/ui/input";
import { IoMdSearch } from "react-icons/io";

export function SearchBox() {
  return (
    <div className="mx-4 flex gap-3 items-center justify-center mb-8">
      <div className="relative w-full ">
        <IoMdSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 " />
        <Input placeholder="Search Contacts" className="pl-10 bg-[#2e2f2f]" />
      </div>
    </div>
  );
}
