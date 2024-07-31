import React from "react";
import { FcGoogle } from "react-icons/fc";
import Navbar from "./Navbar";

const Login = () => {
  const handleGoogleLogin = () => {
    const redirectUrl = encodeURIComponent("http://localhost:5173/handle-google-redirect");
    window.location.href = `https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=${redirectUrl}`;
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-black">
        <div className="bg-[#121212] p-8 rounded-[17px] shadow-lg w-full max-w-md flex flex-col gap-5 border border-gray-800">
          <h2 className="text-white text-center items-center w-full text-2xl">
            Create A New Account
          </h2>
          <button
            className="w-full gap-2 border border-gray-600 text-white py-2 px-4 rounded-md mb-4 items-center justify-center flex"
            onClick={handleGoogleLogin}
          >
            <FcGoogle size={24} />
            Sign Up with Google
          </button>
          <button className="ml-[95px] items-center justify-center flex w-[195px] h-[48px] bg-gradient-to-r from-blue-500 to-blue-800 text-white py-3 px-4 rounded-md mb-4 hover:bg-blue-600">
            Create an Account
          </button>
          <p className="text-center text-gray-400">
            Already have an account? <a href="/signin">Sign In</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
