import { FaUserCircle, FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

const Profile = () => {
  const { user } = useAuth();
  const [passwords, setPasswords] = useState({
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const [showPassword, setShowPassword] = useState({
    currentPassword: false,
    newPassword: false,
    confirmNewPassword: false,
  });

  const handleChange = (e) => {
    setPasswords({ ...passwords, [e.target.name]: e.target.value });
  };

  const toggleShowPassword = (field) => {
    setShowPassword((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  return (
    <>
    {/* Profile Section */}
    <div className="h-full flex justify-center items-center bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="bg-gray-900 p-6 rounded-2xl shadow-xl w-96 text-center">
        {/* Profile Image */}
        <div className="relative">
          <FaUserCircle className="w-28 h-28 mx-auto rounded-full border-4 border-gray-700 shadow-lg" />
        </div>

        {/* User Info */}
        <h2 className="text-2xl font-semibold mt-4">{user.name || "User"}</h2>
        <p className="text-gray-300 mt-2">{user.email || "Email"}</p>

        {/* Change Password Section */}
        <div className="mt-6 text-left">
          <h3 className="text-lg font-semibold text-gray-300 mb-3">🔒 Change Password</h3>

          {/* Password Fields */}
          {["currentPassword", "newPassword", "confirmNewPassword"].map((field, index) => (
            <div key={index} className="mb-3 relative">
              <label className="block text-gray-400 mb-1">
                {field === "currentPassword"
                  ? "Current Password"
                  : field === "newPassword"
                  ? "New Password"
                  : "Confirm New Password"}
              </label>
              <input
                type={showPassword[field] ? "text" : "password"}
                name={field}
                placeholder={`Enter ${field.replace(/([A-Z])/g, " $1").toLowerCase()}`}
                value={passwords[field]}
                onChange={handleChange}
                className="w-full p-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
              />
              {/* Eye Icon to Toggle Password Visibility */}
              <span
                className="absolute right-3 top-10 text-gray-400 cursor-pointer"
                onClick={() => toggleShowPassword(field)}
              >
                {showPassword[field] ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
              </span>
            </div>
          ))}

          {/* Buttons */}
          <div className="flex justify-center gap-4 mt-5">
            <button className="w-full py-2 bg-blue-600 hover:bg-blue-500 rounded-lg text-white font-semibold shadow-md transition-all duration-300 ease-in-out cursor-pointer hover:scale-105">
              Change Password
            </button>
            <button className="px-4 py-2 bg-red-600 hover:bg-red-500 rounded-lg text-white shadow-md transition-all duration-300 ease-in-out cursor-pointer hover:scale-105">
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Profile;
