import { UserAuth } from "../context/AuthContext";
import avatar from "../assets/avatar.svg";

function ProfileHeader() {
  const { user } = UserAuth();
  return (
    <header className="w-full flex items-center justify-start p-2 gap-3 bg-white">
      <img
        className="rounded-full w-20"
        alt="profilePic"
        src={user.photoURL || avatar }
      ></img>
      <div>
        <h2 className="text-lg font-bold text-black">{user.displayName}</h2>
        <p className="text-xs bg-grean text-white font-bold px-2 py-2 rounded-xl flex flex-wrap">
          ID:{user.uid}
        </p>
      </div>
    </header>
  );
}

export default ProfileHeader;
