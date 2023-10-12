import { Link } from "react-router-dom";
import { UserAuth } from "../context/AuthContext"
function Account() {
  const { user } = UserAuth();
  console.log(user.uid);
  return (
      <div className="mx-auto max-w-[400px] gap-2 border-4 bg-white border-grean rounded-md drop-shadow-xl h-[500px]">
        <div className="flex flex-col items-center justify-between py-4 h-full">
        <div className="flex items-center justify-center gap-4">
          <img className="rounded-full basis-1/4"src="https://via.placeholder.com/100" alt="placeholder"></img>
          <h2 className="rounded-full basis-3/4 text-slate-800 text-2xl text-left">Company Name</h2>
        </div>
        <h1 className="pt-4 text-md">Erik Salazar</h1>
        <h4 className="text-xl">3salaz Development</h4>
        <p className="text-sm text-slate-600 pb-4">Users ID:{user.uid}</p>
        <Link to="/settings" className="rounded-xl bg-grean text-white p-2">Settings</Link>
        </div>
      </div>
  )
}

export default Account