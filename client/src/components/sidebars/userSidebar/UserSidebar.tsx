import UserHeader from "./UserHeader";
import ContactContainer from "@/components/sidebars/userSidebar/ContactContainer";
// import { useEffect, useState } from "react";
const UserSidebar = () => {
  return (
    <div className=" flex flex-col  xl:max-w-[30em] xl:w-full xl:border-r xl:border-neutral-500 xl:overflow-y-auto scrollbar-green">
      <UserHeader />
      {/* <SearchBox /> */}
        <ContactContainer />
        <ContactContainer />
        <ContactContainer />
        <ContactContainer />
        <ContactContainer />
        <ContactContainer />
        <ContactContainer />
        <ContactContainer />
        <ContactContainer />
        <ContactContainer />
        <ContactContainer />
        <ContactContainer />
        <ContactContainer />
        <ContactContainer />
        <ContactContainer />
        <ContactContainer />
        <ContactContainer />
        <ContactContainer />
        <ContactContainer />
        <ContactContainer />
    </div>
  );
};

export default UserSidebar;
