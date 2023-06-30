import { useState } from "react";
import { auth } from "../../firebase";
import { FcGoogle } from "react-icons/fc";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { Link, useNavigate} from 'react-router-dom';
import { UserAuth } from "../../context/AuthContext";
function SignUpForm() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const {createUser} = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) =>{
    e.preventDefault()
    setError('')
    try{
      await createUser(auth, email, password)
      navigate('/account')
    } catch (e) {
      setError(e.message)
      console.log(e.message)
    }
  }

  return (
    <div className="container bg-white">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm px-4 pb-4 pt-12 rounded-md">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign Up For Your Account
          </h2>
        </div>
        <div className="mt-4">
          <form className="space-y-2" onSubmit={handleSubmit}>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                value={email}
                name="email"
                type="email"
                autoComplete="email"
                placeholder="Enter Your Email"
                required
                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              ></input>
            </div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="text-sm">
                <a
                  href="https://google.com"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              ></input>
            </div>

            <div className="w-full flex items-center justify-end">
              <button
                type="submit"
                className="bg-[#75B657] rounded-xl w-24 p-1 text-lg text-white "
              >
                Sign Up
              </button>
            </div>
          </form>
          <p className="mt-4 text-center text-sm text-gray-500">
            Already a member?
            <a
              href="/login"
              className="pl-2 font-semibold leading-6 text-[#75B657] hover:text-green-700"
            >
              Login
            </a>
          </p>
        </div>
        <div className="w-full flex items-center justify-center gap-8 py-8">
          <button className="bg-white border-2 rounded-lg w-16 h-16">
            <a href="https://google.com">
              <FcGoogle className="w-full text-4xl" />
            </a>
          </button>
          <button className="bg-white border-2 rounded-lg w-16 h-16">
            <a href="https://google.com">
              <AiFillTwitterCircle className="w-full text-4xl text-[#1DA1F2]" />
            </a>
          </button>
          <button className="bg-white border-2 rounded-lg w-16 h-16">
            <a href="https://google.com">
              <BsFacebook className="w-full text-4xl text-[#4267B2]" />
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;
