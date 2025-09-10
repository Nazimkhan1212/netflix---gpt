import { Link } from "react-router";
import Header from "./Header";
import { useRef, useState } from "react";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../slices/userSlice";
import { BG_URL } from "../utils/constants";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleSignIn = () => {
    setIsSignIn(!isSignIn);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const message = checkValidData(
      email.current.value,
      password.current.value,
      name?.current?.value
    );
    setErrorMessage(message);

    if (message) return;

    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          user.displayName = name.current.value;
          const { uid, email, displayName } = user;
          dispatch(addUser({ uid, email, displayName }));
        })
        .catch((error) => {
          const errorCode = error.code;
          // const errorMessage = error.message;
          setErrorMessage(errorCode);
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          // const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          // const errorMessage = error.message;
          setErrorMessage(errorCode);
        });
    }
  };
  return (
    <div className="min-h-screen min-w-full">
      <Header />
      <div>
        <img
          src={BG_URL}
          className="absolute max-h-full min-w-full"
          alt="Banner"
        />
      </div>
      <form
        onSubmit={handleSubmit}
        className="w-4/12 rounded-sm absolute mt-20 mx-auto right-0 left-0 py-10 font-semibold px-16 bg-black opacity-90 text-white"
      >
        <h1 className="font-bold text-4xl py-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        <div className="my-6">
          {!isSignIn && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="p-3 w-full bg-transparent border-[1px] rounded-sm border-white "
            />
          )}
          {errorMessage?.includes("name") && (
            <span className="text-[#E90C0C]">{errorMessage}</span>
          )}
        </div>
        <div className="my-6">
          <input
            ref={email}
            type="text"
            placeholder="Email Address"
            className="p-3 w-full bg-transparent border-[1px] rounded-sm border-white "
          />
          {errorMessage?.includes("Please enter a valid email") && (
            <span className="text-[#E90C0C]">{errorMessage}</span>
          )}
        </div>
        <div className="mt-6 mb-4">
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-3 w-full bg-transparent border-[1px] rounded-sm border-white"
          />
          {errorMessage?.includes("Invalid password") && (
            <span className="text-[#E90C0C]">{errorMessage}</span>
          )}
          {errorMessage?.includes("auth") && (
            <span className="text-[#E90C0C]">{errorMessage}</span>
          )}
        </div>
        <button className="p-2  my-2 w-full bg-[#E90C0C] rounded-sm opacity-1 ">
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
