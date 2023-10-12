import {  useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { GoogleButton } from 'react-google-button';


function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState('');
  const { signIn, googleSignIn, user} = UserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn()
      navigate("/profile");
    } catch(e) {
      console.log(e)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')
    try {
      await signIn(email,password)
      console.log(user)
      navigate("/profile");
    } catch (e) {
      setError(e.message);
      console.log(setError);
      console.log(error);
    };
  };
  useEffect((user, navigate) => {
    if(user != null) {
      console.log(user)
      navigate('/profile');
    }
  },[]);

  return (
    <div className="flex w-full justify-center items-center">
      <div className="px-3 container h-[86vh] flex items-center justify-cente max-w-lg">
        <div className="container max-w-3xl mx-auto bg-white rounded-md md:drop-shadow-lg">
          <div className="w-full p-4 py-12 rounded-md">
            <div className="mx-auto w-full">
              <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-[#75B657]">
                Login to your account
              </h2>
            </div>
            <div className="mt-8">
              <form 
                className="space-y-4" 
                onSubmit={handleSubmit}>
                <label
                  id="email"
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-[#75B657]"
                >
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    id="email"
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
                    id="password"
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Password
                  </label>
                  <div className="text-sm">
                    <a
                      href="https://google.com"
                      className="font-semibold text-slate-500 hover:text-slate-800"
                    >
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    onChange={(e) => setPassword(e.target.value)}
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
                    className="bg-[#75B657] rounded-xl w-24 p-1 text-lg text-white"
                  >
                    Login
                  </button>
                </div>
              </form>
              <p className="mt-4 text-center text-sm text-gray-500">
                Not a member?
                <Link
                  to="/signup"
                  className="pl-1 font-semibold leading-6 text-[#75B657] hover:text-green-700"
                >
                  Sign up
                </Link>
              </p>
            </div>
            <div className="w-full flex items-center justify-center gap-8 py-8">
              <GoogleButton onClick={handleGoogleSignIn} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
