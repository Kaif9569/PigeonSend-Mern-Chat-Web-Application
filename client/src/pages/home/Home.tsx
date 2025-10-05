import { useState } from "react";
import NavHeader from "./NavHeader";
// import UserSidebar from "../../components/userSidebar/UserSidebar";
// import MessageBox from "../../components/messageBox/MessageBox";
import AsideContent from "./AsideContent";
import MainContent from "./MainContent";

const Home = () => {
    const [activeTab, setActiveTab] = useState<
    "chat" | "status" | "community" | "channel" | "setting" | "profile"
  >("chat");
  return (
    <div className="flex flex-col xl:flex-row xl:h-screen ">
      <NavHeader activeTab={activeTab} setActiveTab={setActiveTab}/>
      <AsideContent activeTab={activeTab} />
      <MainContent activeTab={activeTab}/>
    </div>
  )
}

export default Home
