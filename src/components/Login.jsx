
import React, { useState } from "react";
import image from "../assets/login.png";
import Swal from "sweetalert2";
import { FaEye, FaRegUser } from "react-icons/fa";
import { auth, googleProvider } from "./configuration/firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { Link, NavLink, useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const login = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      Swal.fire({
        icon: "warning",
        title: "Missing Fields",
        text: "Please enter email and password.",
      });
      return;
    }
    try {
      await signInWithEmailAndPassword(auth, email, password);
      Swal.fire({
        icon: "success",
        title: "Welcome",
        text: "Login Successful!",
      });
      setEmail("");
      setPassword("");
      navigate("/home")
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: error.message,
      });
    }
  };

  const googleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      Swal.fire({
        icon: "success",
        title: "Welcome!",
        text: `Logged in as ${user.displayName || user.email}`,
      });
      navigate("/home")
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Google Sign-In Failed",
        text: error.message,
      });
    }
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen"
      style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col gap-4 border-4 py-10 px-8 bg-white/10 p-12 rounded-3xl shadow-2xl border border-white/20 backdrop-blur-md">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl text-white font-bold">Login</h1>
          <p className="text-sm text-white">
            Welcome back please enter email and password
          </p>
        </div>
        <div>
          <form className="flex flex-col  gap-4" onSubmit={login}>
            <div className="flex justify-center w-full border-2 p-3 rounded-lg border-white ">
              <input
                 className="outline-none text-white text-2xl font-bold"
                type="text"
                placeholder="User Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <FaRegUser size={25} color="white" />
            </div>
            <div className="flex justify-between w-full border-2 p-3 rounded-lg  border-white">
              <input
                className="outline-none text-white text-2xl font-bold"
                type="text"
                placeholder="User Password"
                value={password}
            onChange={(e) => setPassword(e.target.value)}
              />
              <FaEye size={25} color="white" />
            </div>{" "}
            <div className="flex gap-2 ml-1.5">
              <input type="checkbox" />
              <span className="text-sm text-white">Remember me</span>
            </div>
            <button className="text-white text-2xl bg-green-500 w-full rounded-lg p-3 font-bold">
              Login
            </button>
            <button type="button" className="text-white text-2xl bg-green-500 w-full rounded-lg p-3 font-bold" onClick={googleLogin} >
              Continue With Google
            </button>
            <p className="text-sm text-white text-center  ">
              Don't have an account?
            <Link to="/signup" className="font-bold text-lg cursor-pointer underline hover:text-green-400" >
              Signup
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;