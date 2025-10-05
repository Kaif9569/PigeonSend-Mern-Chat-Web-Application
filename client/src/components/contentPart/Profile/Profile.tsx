import { FaRegCircleUser } from "react-icons/fa6";

const Profile = () => {
  return (
    <div className="flex flex-col items-center gap-6">
      <FaRegCircleUser className="w-20 h-20 text-neutral-500" />
      <h1 className="font-semibold text-2xl">Profile</h1>
    </div>
  );
};

export default Profile;
