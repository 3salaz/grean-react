import { Link } from "react-router-dom";
import { UserAuth } from "../context/AuthContext"
function Account() {
  const { user } = UserAuth();
  console.log(user.uid);
  return (
      <div className="mx-auto max-w-[400px] gap-2 bg-blue-300 rounded-md drop-shadow-xl h-[500px]">
        <div className="flex flex-col items-center justify-center h-full">
        <img className="rounded-full" src="https://via.placeholder.com/200" alt="placeholder"></img>
        <h1 className="pt-4 text-md">Erik Salazar</h1>
        <h4 className="text-xl">3salaz Development</h4>
        <p className="text-sm text-slate-600 pb-4">Users ID:{user.uid}</p>
        <Link to="/settings" className="rounded-xl bg-grean text-white p-2">Settings</Link>
        </div>
      </div>
  )
}

export default Account