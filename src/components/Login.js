import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="relative h-screen w-screen">
      <Header />
      <div className="relative h-full w-full">
        {/* Background Image */}
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/2bcf01ee-7ef6-4930-b0d5-c6863853c461/web/IN-en-20241125-TRIFECTA-perspective_a47db038-756f-4f26-b1f7-cfc882b98746_large.jpg"
          alt="background"
          className="h-full w-full object-cover"
        />

        {/* Centered Form */}
        <form className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-80 p-6 rounded-lg shadow-lg space-y-4 w-[450px] h-auto flex flex-col justify-between gap-8 text-white">
          <h2 className="text-3xl text-white font-bold text-left ">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h2>

          {!isSignInForm && (
            <input
              type="text"
              placeholder="Full Name"
              autoFocus
              className="block w-full p-3 rounded focus:outline-none focus:ring-2 focus:ring-red-500 bg-black mb-4"
            />
          )}

          <input
            type="text"
            placeholder="Email"
            autoFocus
            className="block w-full p-3  rounded focus:outline-none focus:ring-2 focus:ring-red-500 bg-black mb-4"
          />
          <input
            type="password"
            placeholder="Password"
            className="block w-full p-3  rounded focus:outline-none focus:ring-2 focus:ring-red-500 bg-black"
          />

          <button
            type="submit"
            className="w-full p-3 bg-red-700 text-white font-bold rounded hover:bg-red-800"
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p
            className="py-2 font-semibold cursor-pointer"
            onClick={toggleSignInForm}
          >
            {isSignInForm
              ? "New to Netflix? Sign up now"
              : "Already a user? Sign In"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
