import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      {/* Navbar */}
      <nav className="bg-gradient-to-r from-gray-800 to-gray-900 bg-opacity-90 backdrop-blur-lg shadow-md p-4 md:px-8 flex justify-between items-center  w-full  z-50">
        {/* Logo */}
        <h1 className="text-2xl font-extrabold tracking-wide text-blue-300">
          🚀 EventX
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-lg font-semibold">
          {["Home", "Contact", "Profile"].map((item, index) => (
            <li key={index}>
              <a
                href="#"
                onClick={() => {
                  if (item === "Profile") {
                    navigate(`/${item.toLowerCase()}`);
                  }
                  else if (item === "Home") {
                    navigate(`/${item.toLowerCase()}`);
                  }
                  else if (item === "Contact") {
                    navigate(`/${item.toLowerCase()}`);
                  }
                }}
                className="text-white hover:text-blue-300 transition-all duration-300 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-blue-300 hover:after:w-full after:transition-all after:duration-300"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="absolute top-14 right-4 bg-gray-900 text-white shadow-lg p-4 rounded-md w-40 flex flex-col gap-4 font-semibold">
            {["Home", "Contact", "Profile"].map((item, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="block hover:text-blue-300 transition duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </>
  );
};

export default Navbar;
