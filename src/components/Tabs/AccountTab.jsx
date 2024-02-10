import AccountForm from "../AccountForm";
import HeaderUser from "../HeaderUser";

function AccountTab() {

  return (
    <section
      id="accountTab"
      className="w-full h-[82svh] bg-black bg-opacity-40 bg-blur-10 absolute top-0 flex items-center justify-center"
    >
      {/* Card */}
      <main className="container mx-auto max-w-[750px] h-full flex items-center justify-center md:py-4">
        <div className="bg-white w-full h-full md:rounded-lg z-20 md:shadow-md md:drop-shadow-lg p-2 flex flex-col gap-3">
          <HeaderUser/>
          <AccountForm/>
        </div>
      </main>
    </section>
  );
}

export default AccountTab;
