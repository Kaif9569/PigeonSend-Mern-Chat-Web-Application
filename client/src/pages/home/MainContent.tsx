import Channel from "@/components/contentPart/channel/Channel"
import Community from "@/components/contentPart/community/Community"
import MessageBox from "@/components/contentPart/messageBox/MessageBox"
import Profile from "@/components/contentPart/Profile/Profile"
import Setting from "@/components/contentPart/settingcontent/Setting"
import Status from "@/components/contentPart/Status/Status"

interface MainProps {
  activeTab: "chat" | "status" | "community" | "channel" | "setting" | "profile";
}
const MainContent = ({activeTab}:MainProps) => {
  return (
    <div className="flex items-center justify-center w-full">
      {activeTab === "chat" && <MessageBox />}
      {activeTab === "status" && <Status />}
      {activeTab === "channel" && <Channel />}
      {activeTab === "community" && <Community />}
      {activeTab === "setting" && <Setting />}
      {activeTab === "profile" && <Profile />}
    </div>
  )
}

export default MainContent
