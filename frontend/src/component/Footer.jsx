const Footer = () => {
  return (
    <>
      <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-3">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          {/* Left - Brand Info */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-blue-300">🚀 AuthWaitlist</h2>
            <p className="text-gray-400 text-sm mt-2">
              The best place to experience exciting events!
            </p>
          </div>

          {/* Center - Quick Links */}
          <ul className="flex gap-6 mt-4 md:mt-0 text-sm md:text-base font-medium">
            <li>
              <a
                href="#"
                className="hover:text-blue-300 transition duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-blue-300 transition duration-300"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-blue-300 transition duration-300"
              >
                FAQ
              </a>
            </li>
          </ul>

          {/* Right - Social Icons */}
          <div className="flex gap-4 mt-4 md:mt-0">
            <a
              href="#"
              className="hover:text-blue-300 transition duration-300"
            >
              🔵 FB
            </a>
            <a
              href="#"
              className="hover:text-blue-300 transition duration-300"
            >
              🟣 IG
            </a>
            <a
              href="#"
              className="hover:text-blue-300 transition duration-300"
            >
              🔵 TW
            </a>
          </div>
        </div>

        {/* Bottom - Copyright */}
        <div className="text-center text-gray-400 text-xs mt-3 border-t border-gray-700 pt-2">
          © {new Date().getFullYear()} AuthWaitlist. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;
