import { doc, setDoc } from "firebase/firestore";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { useEffect, useState } from "react";
function Account() {
  const { user } = UserAuth();
  const [isBusiness, setIsBusiness] = useState(true);
  const [userName, setUsername] = useState(String);
  const [address1, setAddress1] = useState(String);
  const [address2, setAddress2] = useState(String);
  const [city, setCity] = useState(String);
  const [state, setState] = useState(String);
  const [venmoUsername, setVenmoUsername] = useState(String);
  const handleSubmit = async () => {
    console.log("hello");
  };

  return (
    <div className="w-full drop-shadow-xl h-[83vh] flex justify-center items-center">
      <div className="container bg-white gap-2 border-4 py-8 px-2 border-grean rounded-md ">
        <div className="flex flex-col items-center justify-between py-4 h-full">
          <div className="flex items-center justify-center gap-4">
            <img
              className="rounded-full basis-1/4"
              src={user.photoURL}
              alt="placeholder"
            ></img>
            <h2 className="rounded-full basis-3/4 text-slate-800 text-2xl text-left">
              {user.displayName}
            </h2>
          </div>
          <form className="container flex flex-col items-center flex-wrap">
            <div className="flex flex-col gap-1 justify-center">
              <div>
                <label htmlFor="IsBusiness?">Are you a business: </label>
                <input
                  onChange={(e) => {
                    setIsBusiness(e.target.checked);
                  }}
                  className="border-2 border-grean"
                  type="checkbox"
                />
              </div>
              <hr />
              {console.log(isBusiness)}
              {isBusiness ? (
                <div>
                  <h3 className="text-center font-bold">Business Address</h3>
                  <div>
                    <label htmlFor="address">Address 1: </label>
                    <input
                      onChange={(e) => setAddress1(e.target.value)}
                      className="border-2 border-grean"
                      type="text"
                      placeholder="1240 3rd Street"
                    />
                  </div>
                  <div>
                    <label htmlFor="address">Address 2: </label>
                    <input
                      onChange={(e) => setAddress2(e.target.value)}
                      className="border-2 border-grean"
                      type="text"
                      placeholder="Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="city">City </label>
                    <input
                      onChange={(e) => setCity(e.target.value)}
                      className="border-2 border-grean"
                      type="text"
                      placeholder="San Francisco"
                    />
                  </div>
                  <div>
                    <label htmlFor="state">State </label>
                    <input
                      onChange={(e) => setState(e.target.value)}
                      className="border-2 border-grean"
                      type="text"
                      placeholder="Ca"
                    />
                  </div>
                </div>
              ) : (
                <div>Hello</div>
              )}
            </div>
            <button
              type="submit"
              className="rounded-md bg-orange px-2 p-1 mt-2"
              onClick={handleSubmit}
            >
              Save
            </button>
          </form>
          <h4 className="text-xl">3salaz Development</h4>
          <p className="text-sm bg-grean text-white font-bold px-4 py-2 rounded-xl">
            Users ID:{user.email}
          </p>
          {/* <Link to="/settings" className="rounded-xl bg-grean text-white p-2">Settings</Link> */}
        </div>
      </div>
    </div>
  );
}

export default Account;
