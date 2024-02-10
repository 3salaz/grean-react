import { UserAuth } from "../context/AuthContext";

function HeaderUser() {
  const { user } = UserAuth();
  return (
    <header className="w-full basis-1/6 flex items-center justify-center py-4 gap-3">
      <img
        className="rounded-full w-20"
        alt="placeholder"
        src={user.photoURL}
      ></img>
      <div>
        <h2 className="text-lg font-bold text-grean">{user.displayName}</h2>
        <p className="text-xs bg-grean text-white font-bold px-2 py-2 rounded-xl flex flex-wrap">
          ID:{user.uid}
        </p>
      </div>
    </header>
  );
}

export default HeaderUser;
