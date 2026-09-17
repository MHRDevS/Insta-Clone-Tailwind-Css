import React from "react";
import pic from "../assets/login.png";
import logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";

const Clone = () => {
  return (
    <div className="min-h-screen w-full bg-[#FAFAFA] flex flex-col md:flex-row justify-center items-center">

      {/* Left Section */}
      <section className="m-auto flex flex-col items-center justify-center">
        <h1 className="text-3xl max-w-sm text-center mx-auto">
          See everyday moment from your{" "}
          <span className="bg-linear-to-r from-amber-500 via-rose-500 to-pink-500 bg-clip-text text-transparent">
            close friends
          </span>
        </h1>

        <img
          className="h-[450px] w-auto"
          src={pic}
          alt="Instagram"
        />
      </section>

      {/* Divider */}
      <div className="hidden md:block w-[1px] h-[100vh] bg-gray-300 self-center"></div>

      {/* Right Section */}
      <section className="flex flex-col justify-center m-auto items-center">
        <img
          className="w-[100px] h-[100px] object-cover"
          src={logo}
          alt="Instagram logo"
        />

        <h1 className="text-4xl max-w-lg text-center mx-auto leading-tight">
          Get the full experience with the tablet app
        </h1>

        <button className="bg-blue-600 rounded-lg mt-8 text-white font-medium py-2 px-6 w-full">
          Open Instagram
        </button>

        <div className="mt-4">
          <Link
            to="/login"
            className="text-blue-300 text-xl font-semibold underline hover:text-green-400"
          >
            Login
          </Link>

          <span className="mx-2.5 text-sm font-bold">or</span>

          <Link
            to="/signup"
            className="text-blue-300 text-xl font-semibold underline hover:text-green-400"
          >
            Signup
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Clone;
