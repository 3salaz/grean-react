function SideNav() {
  return (
    <aside className="hidden lg:flex h-[86vh] w-auto md:basis-1/3 justify-center items-center">
      <nav className="flex flex-col gap-4 items-center justify-center p-2 h-full">
        <div className="h-56 max-h-60 w-96 bg-white border-4 border-[#75B657] drop-shadow-md rounded-md p-2">
          Stats
        </div>
        <div className="h-56 max-h-60 w-96 bg-white border-4 border-[#75B657] drop-shadow-md rounded-md p-2">
          Maps
        </div>
        <div className="h-56 max-h-60 w-96 bg-white border-4 border-[#75B657] drop-shadow-md rounded-md p-2">
          Account
        </div>
      </nav>
    </aside>
  );
}

export default SideNav;
