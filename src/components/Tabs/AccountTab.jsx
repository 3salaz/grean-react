import { UserAuth } from "../../context/AuthContext";
import ProfileForm from "../ProfileForm";

function AccountTab() {
  const { user } = UserAuth();

  return (
    <section
      id="accountTab"
      className="w-full h-[82svh] bg-black bg-opacity-40 bg-blur-10 absolute top-0 flex items-center justify-center"
    >
      {/* Card */}
      <main className="container mx-auto max-w-[750px] h-full overflow-scroll flex items-center justify-center md:py-4">
        <div className="bg-white w-full h-full overflow-scroll md:rounded-lg z-20 drop-shadow-lg p-2 flex flex-col gap-3">
          <header className="w-full flex items-center justify-center py-4 gap-3">
            <img
              className="rounded-full w-20"
              alt="placeholder"
              src={user.photoURL}
            ></img>
            <div>
              <h2 className="text-lg font-bold text-grean">
                {user.displayName}
              </h2>
              <p className="text-xs bg-grean text-white font-bold px-2 py-2 rounded-xl flex flex-wrap">
                ID:{user.uid}
              </p>
            </div>
          </header>
          <section className="flex flex-col items-center justify-between">
            <ProfileForm/>
          </section>
        </div>
      </main>
    </section>
  );
}

export default AccountTab;
