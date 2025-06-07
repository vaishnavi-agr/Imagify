import React, { useState, useEffect, useContext } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import { motion } from "framer-motion";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const [state, setState] = useState("Login");
  const { setShowLogin, backendURL, setToken, setUser } =
    useContext(AppContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const toggleState = () => {
    setState(state === "Login" ? "Sign Up" : "Login");
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    // alert(`${state} form submitted`);
    try {
      if (state === "Login") {
        const { data } = await axios.post(backendURL + "/api/user/login", {
          email,
          password,
        });
        if (data.success) {
          setToken(data.token);
          setUser(data.user);
          localStorage.setItem("token", data.token);
          setShowLogin(false);
        } else {
          toast.error(data.message);
        }
      }

      else{
        const { data } = await axios.post(backendURL + "/api/user/register", {
          name,
          email,
          password,
        })
        if (data.success) {
          setToken(data.token);
          setUser(data.user);
          localStorage.setItem("token", data.token);
          setShowLogin(false);
        } else {
          toast.error(data.message);
        }
      }
      

    } catch (error) {
      toast.error(error.message);
    }
  };

  // Disable scrolling when the component mounts
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset"; // restore on unmount
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center">
      <motion.form
        initial={{ opacity: 0.2, y: 100 }}
        transition={{ duration: 0.3 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        onSubmit={onSubmitHandler}
        className="bg-white relative p-10 rounded-xl shadow-lg text-slate-500 w-96"
      >
        <h1 className="text-center text-2xl text-neutral-500 font-medium">
          {state}
        </h1>
        <p className="mb-4 text-gray-600 text-sm">
          {state === "Login"
            ? "Welcome back! Please sign in to continue"
            : "Create a new account to get started"}
        </p>

        {state !== "Login" && (
          <div className="flex items-center border px-6 py-2 gap-2 rounded-full mt-4">
            <img
              src={assets.user_icon}
              alt="User Icon"
              className="w-6 h-6 mr-2"
            />
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              placeholder="Full Name"
              required
              className="w-full outline-none text-sm"
            />
          </div>
        )}

        <div className="flex items-center border px-6 py-2 gap-2 rounded-full mt-4">
          <img
            src={assets.email_icon}
            alt="Email Icon"
            className="w-6 h-6 mr-2"
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Email ID"
            required
            className="w-full outline-none text-sm"
          />
        </div>

        <div className="flex items-center border px-6 py-2 gap-2 rounded-full mt-5">
          <img
            src={assets.lock_icon}
            alt="Lock Icon"
            className="w-6 h-6 mr-2"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="Password"
            required
            className="w-full outline-none text-sm"
          />
        </div>

        <p className="text-sm text-blue-600 my-4 cursor-pointer">
          Forgot Password
        </p>

        <button
          type="submit"
          className="bg-blue-600 w-full text-white py-2 rounded-full"
        >
          {state}
        </button>

        <p className="mt-5 text-center">
          {state === "Login" ? (
            <>
              Don't have an account?{" "}
              <span
                onClick={toggleState}
                className="text-blue-600 cursor-pointer"
              >
                Sign up
              </span>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <span
                onClick={toggleState}
                className="text-blue-600 cursor-pointer"
              >
                Login
              </span>
            </>
          )}
        </p>

        <img
          onClick={() => setShowLogin(false)}
          src={assets.cross_icon}
          alt="Close"
          className="absolute top-5 right-5 cursor-pointer"
        />
      </motion.form>
    </div>
  );
};

export default Login;
