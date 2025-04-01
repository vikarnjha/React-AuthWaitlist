import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import signUpImage from "../assets/web_dark_rd_SI.svg";

const Auth = () => {
  const [action, setAction] = useState("Sign Up");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePassword = () => setShowPassword(!showPassword);
  const toggleConfirmPassword = () =>
    setShowConfirmPassword(!showConfirmPassword);

  const handleValidation = (e) => {
    const { name, value } = e.target;

    if (name === "name") {
      setName(value);
      setNameError(
        value.length < 3
          ? "Name is too short"
          : value.length > 16
          ? "Name is too long"
          : ""
      );
    }
    if (name === "email") {
      setEmail(value);
      setEmailError(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)
          ? ""
          : "Enter a valid Email address"
      );
    }
    if (name === "password") {
      setPassword(value);
      setPasswordError(
        value.length < 8 ? "Password must be at least 8 characters long" : ""
      );
    }
    if (name === "confirmPassword") {
      setConfirmPassword(value);
      setPasswordError(value !== password ? "Passwords do not match" : "");
    }
  };

  // const handleGoogleLogin = () => {
  //   if (!email || !password) return toast.error("Invalid Credentials!");
  //   else {
  //     return toast.success("Sign In Successfully!");
  //   }
  // };

  const handleRegister = () => {
    if (!name || !email || !password || !confirmPassword)
      return toast.warn("All fields are compulsory!");

    localStorage.setItem("user", JSON.stringify({ name, email, password }));
    toast.success("Sign Up Successfully!");
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setAction("Sign In");
  };

  const handleLogin = () => {
    if (!email || !password) return toast.error("Invalid Credentials!");

    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);
    toast.success("Sign In Successfully!");
    setTimeout(() => (window.location.href = "/home"), 3000);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="bg-gray-900 p-6 md:p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6">{action}</h2>

        {/* Sign Up Name Field */}
        {action === "Sign Up" && (
          <div className="mb-3">
            <label className="block text-gray-400 mb-1">Name</label>
            <div className="flex items-center bg-gray-700 p-2 rounded-lg border border-gray-600">
              <FaUser className="text-gray-400 mr-2" />
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={name}
                onChange={handleValidation}
                className="w-full bg-transparent outline-none text-white"
                required
              />
            </div>
            {nameError && (
              <p className="text-red-500 text-sm mt-1">{nameError}</p>
            )}
          </div>
        )}

        {/* Email Field */}
        <div className="mb-3">
          <label className="block text-gray-400 mb-1">Email</label>
          <div className="flex items-center bg-gray-700 p-2 rounded-lg border border-gray-600">
            <FaEnvelope className="text-gray-400 mr-2" />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleValidation}
              className="w-full bg-transparent outline-none text-white"
              required
            />
          </div>
          {emailError && (
            <p className="text-red-500 text-sm mt-1">{emailError}</p>
          )}
        </div>

        {/* Password Field */}
        <div className="mb-3">
          <label className="block text-gray-400 mb-1">Password</label>
          <div className="flex items-center bg-gray-700 p-2 rounded-lg border border-gray-600">
            <FaLock className="text-gray-400 mr-2" />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter password"
              value={password}
              onChange={handleValidation}
              className="w-full bg-transparent outline-none text-white"
              required
            />
            <span
              onClick={togglePassword}
              className="cursor-pointer text-gray-400"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
        </div>

        {/* Confirm Password Field (Sign Up Only) */}
        {action === "Sign Up" && (
          <div className="mb-3">
            <label className="block text-gray-400 mb-1">Confirm Password</label>
            <div className="flex items-center bg-gray-700 p-2 rounded-lg border border-gray-600">
              <FaLock className="text-gray-400 mr-2" />
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={handleValidation}
                className="w-full bg-transparent outline-none text-white"
                required
              />
              <span
                onClick={toggleConfirmPassword}
                className="cursor-pointer text-gray-400"
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            {passwordError && (
              <p className="text-red-500 text-sm mt-1">{passwordError}</p>
            )}
          </div>
        )}

        {/* Forgot Password (Sign In Only) */}
        {action === "Sign In" && (
          <div className="text-right text-sm text-gray-400 mb-3">
            <a href="#" className="hover:text-blue-400 transition">
              Forgot Password?
            </a>
          </div>
        )}

        {/* Buttons */}
        <div className="flex justify-between gap-3">
          <button
            className={`w-full py-2 mt-3 rounded-lg font-semibold shadow-md transition-all ${
              action === "Sign Up"
                ? "bg-blue-600 hover:bg-blue-500"
                : "bg-gray-700 hover:bg-gray-600"
            }`}
            onClick={() =>
              action === "Sign Up" ? handleRegister() : setAction("Sign Up")
            }
          >
            Sign Up
          </button>
          <button
            className={`w-full py-2 mt-3 rounded-lg font-semibold shadow-md transition-all ${
              action === "Sign In"
                ? "bg-blue-600 hover:bg-blue-500"
                : "bg-gray-700 hover:bg-gray-600"
            }`}
            onClick={() =>
              action === "Sign In" ? handleLogin() : setAction("Sign In")
            }
          >
            Sign In
          </button>
        </div>
        <div className="w-full flex justify-center   mt-4">
          {action === "Sign In" && (
            <button>
              <img
                src={signUpImage}
                onClick={handleLogin}
                alt="google-signup-btn"
                className="cursor-pointer transition-transform duration-300 hover:scale-110 active:scale-90 focus:outline-none"
              />
            </button>
          )}
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
      />
    </div>
  );
};

export default Auth;
