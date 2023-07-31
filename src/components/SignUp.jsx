import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import GoogleButton from "react-google-button";

function SignUpForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const {createUser,user,googleSignIn } = UserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async (e) => {
    try {
      await googleSignIn()
      navigate('/profile');
    } catch(e) {
      console.log(e)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUser(email, password)
      await setDoc(doc(db, `users`,`${user.uid}`), {
        email : email,
        createdAt: new Date()
      });
      navigate('/profile');
    } catch(e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  useEffect((user, navigate) => {
    if(user != null) {
      navigate('/profile');
    }
  },[]);

  return (
    <div className="flex justify-center items-center w-full">
      <div className="px-3 container h-[86vh] flex items-center justify-cente max-w-lg">
        <div className="container max-w-3xl mx-auto bg-white rounded-md md:drop-shadow-lg">
          <div className="w-full p-4 py-12 rounded-md">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-[#75B657]">
                Sign Up For Your Account
              </h2>
            </div>
            <div className="mt-8">
              <form className="space-y-4" onSubmit={handleSubmit}>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-[#75B657]"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    onChange={(e) => setEmail(e.target.value)}
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
                <Link
                  to="/signIn"
                  className="pl-2 font-semibold leading-6 text-[#75B657] hover:text-green-700"
                >
                  Login
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

export default SignUpForm;
