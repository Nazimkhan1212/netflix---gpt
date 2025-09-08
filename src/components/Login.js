import { Link } from "react-router";
import Header from "./Header";
import { useState } from "react";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const handleSignIn = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div>
      <Header />
      <div>
        <img
          className="absolute"
          alt="Banner"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/8d617e19-3c3c-4c28-8998-c9b14dbc7200/web/QA-en-20250901-TRIFECTA-perspective_7b869839-f340-4617-b7ce-eb61e001e7e5_small.jpg"
        />
      </div>
      <form className="w-4/12 rounded-sm absolute mt-20 mx-auto right-0 left-0 py-8 font-semibold px-12 bg-black opacity-90 text-white">
        <h1 className="font-bold text-4xl py-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-3 my-4 w-full bg-transparent border-[1px] rounded-sm border-white "
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-3 my-4 w-full bg-transparent border-[1px] rounded-sm border-white "
        />
        <input
          type="password"
          placeholder="Password"
          className="p-3 w-full my-4 bg-transparent border-[1px] rounded-sm border-white"
        />
        <button className="p-2  my-2 w-full bg-red-700  rounded-sm ">
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-5 text-gray-500 ">
          {isSignIn ? "New to Netflix?" : "Already registered?"}
          <Link className="text-white hover:underline" onClick={handleSignIn}>
            {isSignIn ? " Sign up now." : " Sign in now."}
          </Link>{" "}
        </p>
      </form>
    </div>
  );
};

export default Login;
