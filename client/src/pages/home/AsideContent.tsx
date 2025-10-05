import ChannelSidebar from "@/components/sidebars/channelSidebar/ChannelSidebar";
import CommuniySidebar from "@/components/sidebars/communitySidebar/CommuniySidebar";
import ProfileSidebar from "@/components/sidebars/profileSidebar/ProfileSidebar";
import SettingSidebar from "@/components/sidebars/settingSidebar/SettingSidebar";
import StatusSidebar from "@/components/sidebars/statusSidebar/StatusSidebar";
import UserSidebar from "@/components/sidebars/userSidebar/UserSidebar"
interface AsideProps {
  activeTab: "chat" | "status" | "community" | "channel" | "setting" | "profile";
}
const AsideContent = ({activeTab}:AsideProps) => {
  return (
    <div className=" flex flex-col  xl:max-w-[30em] xl:w-full xl:border-r xl:border-neutral-500 xl:overflow-y-auto scrollbar-green">
      {activeTab === "chat" && <UserSidebar />}
      {activeTab === "status" && <StatusSidebar/>}
      {activeTab === "channel" && <ChannelSidebar />}
      {activeTab === "community" && <CommuniySidebar/>}
      {activeTab === "setting" && <SettingSidebar />}
      {activeTab === "profile" && <ProfileSidebar/>}
    </div>
  )
}

export default AsideContent
