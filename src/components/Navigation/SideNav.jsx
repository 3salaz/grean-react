function SideNav() {
  return (
    <div className="hidden lg:flex h-[86vh] w-auto md:basis-1/3 justify-center items-center">
      <div className="flex flex-col gap-4 items-center justify-center p-2 h-full">
        <div className="h-56 max-h-60 w-96 bg-white border-4 border-[#75B657] drop-shadow-md rounded-md p-2">
        </div>
        <div className="h-56 max-h-60 w-96 bg-white border-4 border-[#75B657] drop-shadow-md rounded-md p-2">
        </div>
        <div className="h-56 max-h-60 w-96 bg-white border-4 border-[#75B657] drop-shadow-md rounded-md p-2">
        </div>
      </div>
    </div>
  );
}

export default SideNav;
