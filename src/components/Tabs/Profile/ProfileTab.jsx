import ProfileForm from "./ProfileForm";
import UserHeader from "../../UserHeader";

function ProfileTab() {

  return (
    <section
      id="profileTab"
      className="w-full h-[83svh] z-10 bg-white absolute top-0 flex items-center justify-center"
    >
      {/* Card */}
      <main className="container mx-auto h-full flex items-center justify-center">
        <div className="w-full h-full flex flex-col items-center relative">
            <UserHeader/>
            <ProfileForm/>
        </div>
      </main>
    </section>
  );
}

export default ProfileTab;
