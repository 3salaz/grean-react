import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, createUserDocument } from "../../firebase";

function SignUp() {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const SignUp = (e) => {
    e.preventDefault();
    const { user } = createUserWithEmailAndPassword(
      auth,
      email,
      password,
      displayName
    ).then((userCredential) => {
      console.log(userCredential);
    });
    createUserDocument(user, { displayName }).catch((error) => {
      console.log(error);
    });
  };
  return (
    <div className="container bg-white">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm px-4 pb-4 pt-12 rounded-md md:mt-4">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto rounded-full"
            src="https://firebasestorage.googleapis.com/v0/b/grean-de04f.appspot.com/o/logos%2FGrean-Logo.png?alt=media&token=f67c584a-d6a6-472b-bb5b-593c06211d94"
            alt="Your Company"
          ></img>
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign Up For Your Account
          </h2>
        </div>
        <div className="mt-8">
          <form className="space-y-4" onSubmit={SignUp}>
            <label
              htmlFor="displayName"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Name
            </label>
            <div className="mt-2">
              <input
                onChange={(e) => setDisplayName(e.target.value)}
                id="displayName"
                value={displayName}
                name="displayName"
                type="name"
                placeholder="Enter Your Name"
                required
                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              ></input>
            </div>
            <div>
              <label
                for="checkboxLabelThree"
                class="flex cursor-pointer select-none items-center"
              >
                <div class="relative">
                  <input
                    type="checkbox"
                    id="checkboxLabelThree"
                    class="sr-only"
                  />
                  <div class="box mr-4 flex h-5 w-5 items-center justify-center rounded border">
                    <span class="text-primary opacity-0">
                      <svg
                        class="h-[14px] w-[14px] stroke-current"
                        fill="none"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M6 18L18 6M6 6l12 12"
                        ></path>
                      </svg>
                    </span>
                  </div>
                </div>
                Are you a business?
              </label>
            </div>
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
                className="bg-[#75B657] drop-shadow-2xl rounded-xl w-24 p-1 text-lg text-white shadow-2xl"
              >
                Sign Up
              </button>
            </div>
          </form>
          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?
            <a
              href="/signUp"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Start a 14 day free trial
            </a>
          </p>
        </div>
        <div className="w-full flex items-center justify-center gap-8 py-8">
          <button className="bg-white border-2 rounded-lg w-16 h-16">
            Google
          </button>
          <button className="bg-white border-2 rounded-lg w-16 h-16">
            Facebook
          </button>
          <button className="bg-white border-2 rounded-lg w-16 h-16">
            Twitter
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
