import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import signUpImage from "../assets/web_dark_rd_SI.svg";
import { useNavigate } from "react-router-dom";
import Loading from "../loading/Loading";


const API_URL = "https://react-authwaitlist.onrender.com/api/auth"; // Update with your backend route

const Auth = () => {
  const [action, setAction] = useState("Sign Up");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    return toast.info("Google login clicked but not implemented yet!");
  };

  const handleForgotPassword = () => {
    toast.info("Forgot password functionality not implemented yet!");
  };

  const togglePassword = () => setShowPassword(!showPassword);
  const toggleConfirmPassword = () =>
    setShowConfirmPassword(!showConfirmPassword);

  const handleRegister = async (e) => {
    if (!name || !email || !password || !confirmPassword) {
      return toast.warn("All fields are required!");
    }
    if (password !== confirmPassword) {
      return toast.warn("Passwords do not match!");
    }
    e.preventDefault();
    setIsLoading(true); // Show loading
    try {
      const response = await axios.post(
        `${API_URL}/register`,
        { name, email, password },
        { withCredentials: true } // Important to include cookies
      );

      if (response.data.success) {
        toast.success("Sign Up Successful!");
        navigate("/home");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Signup failed!");
    } finally {
      setIsLoading(false); // Hide loading
    }
  };

  const handleLogin = async (e) => {
    if (!email || !password) {
      return toast.error("Invalid Credentials!");
    }
    e.preventDefault();
    setIsLoading(true); // Show loading
    try {
      const response = await axios.post(
        `${API_URL}/login`,
        { email, password },
        { withCredentials: true } // Important to include cookies
      );

      if (response.data.success) {
        toast.success("Sign In Successful!");
        navigate("/home");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed!");
    }finally {
      setIsLoading(false); // Hide loading
    }
  };

  return (
    <>
      {isLoading && <Loading />}
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="bg-gray-900 p-6 md:p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6">{action}</h2>

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
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-transparent outline-none text-white"
              />
            </div>
          </div>
        )}

        <div className="mb-3">
          <label className="block text-gray-400 mb-1">Email</label>
          <div className="flex items-center bg-gray-700 p-2 rounded-lg border border-gray-600">
            <FaEnvelope className="text-gray-400 mr-2" />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-transparent outline-none text-white"
            />
          </div>
        </div>

        <div className="mb-3">
          <label className="block text-gray-400 mb-1">Password</label>
          <div className="flex items-center bg-gray-700 p-2 rounded-lg border border-gray-600">
            <FaLock className="text-gray-400 mr-2" />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-transparent outline-none text-white"
            />
            <span
              onClick={togglePassword}
              className="cursor-pointer text-gray-400"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
        </div>

        {/* Forgot Password (Sign In Only) */}
        {action === "Sign In" && (
          <div className="text-right text-blue-500 active:scale-95 transition-transform cursor-pointer">
            <a
              href="#"
              className="hover:text-blue-400 transition"
              onClick={handleForgotPassword}
            >
              Forgot Password?
            </a>
          </div>
        )}

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
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full bg-transparent outline-none text-white"
              />
              <span
                onClick={toggleConfirmPassword}
                className="cursor-pointer text-gray-400"
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>
        )}

        <div className="flex justify-between gap-3">
          <button
            className="w-full py-2 mt-3 bg-blue-600 active:scale-90 active:bg-blue-700 hover:bg-blue-700 rounded-lg cursor-pointer "
            onClick={
              action === "Sign Up" ? handleRegister : () => setAction("Sign Up")
            }
          >
            Sign Up
          </button>
          <button
            className="w-full py-2 mt-3 bg-blue-600 active:scale-90 active:bg-blue-700 hover:bg-blue-700 rounded-lg cursor-pointer"
            onClick={
              action === "Sign In" ? handleLogin : () => setAction("Sign In")
            }
          >
            Sign In
          </button>
        </div>
        <div className="w-full flex justify-center mt-4">
          {action === "Sign In" && (
            <button>
              <img
                src={signUpImage}
                onClick={handleGoogleLogin}
                alt="google-signup-btn"
                className="cursor-pointer transition-transform duration-300 hover:scale-110 active:scale-90 focus:outline-none"
              />
            </button>
          )}
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={2000} />
      </div>
    </>
  );
};

export default Auth;
