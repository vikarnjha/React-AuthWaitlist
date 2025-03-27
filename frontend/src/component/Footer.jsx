import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-2">
        <div className="container mx-auto px-2 flex flex-col md:flex-row justify-between items-center">
          {/* Left - Brand Info */}
          <div>
            <p className="text-center text-gray-400 text-xs mx-2 border-gray-700 px-1">
              The best place to experience exciting events!
            </p>
          </div>

          {/* Bottom - Copyright */}
          <div className="text-center text-gray-400 text-xs mx-2 border-gray-700 px-1">
              © {new Date().getFullYear()} AuthWaitlist. All rights reserved.
            </div>

          {/* Right - Social Icons */}
          <div className="flex space-x-3 mr-3">
            <FaFacebook
              className="text-blue-600 hover:text-blue-800 transition duration-300"
              size={20}
            />
            <FaInstagram
              className="text-pink-500 hover:text-pink-700 transition duration-300"
              size={20}
            />
            <FaTwitter
              className="text-blue-400 hover:text-blue-600 transition duration-300"
              size={20}
            />
            
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
