function RequestPickupModal() {
  const user = {
    locationAddress: "3033 24th St. San Francisco, CA 94110",
  }
  return (
    <div className="w-full items-center justify-center text-center">
      <div className="bg-white w-full h-[40vh] gap-p flex flex-col">
        <fieldset className="text-2xl py-3">Request Pickup</fieldset>
        <form className="flex flex-col px-3 w-full">
          <div className="gap-3">
            <input type="checkbox" id="location" name="location" />
            <label className="text-sm" htmlFor="location">{user.locationAddress || '3033 24th St. San Francisco, CA 94110'}</label>
          </div>

          <div>
            <input className="border-orange border-2 w-full rounded-sm" type="notes" placeholder=" Notes" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default RequestPickupModal;
