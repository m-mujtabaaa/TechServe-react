import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const navLinks = [
  { name: "Home", link: "/" },
  { name: "About Us", link: "#About" },
  { name: "Courses", link: "#Courses" },
  { name: "Privacy Policy", link: "/privacypolicy" },
  { name: "Contact", link: "/contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/registeration"); }
  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-white h-[60px] flex items-center justify-between shadow-lg">
        
        {/* Logo */}
        <img
          className="h-[55px] w-[67px] mx-0 lg:mx-10"
          src="/TechLogo-removebg-preview.png"
          alt="Logo"
        />

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center font-bold">
          {navLinks.map((item, index) => (
            <li key={index} className="px-5">
              <a
                href={item.link}
                className="relative font-bold text-[15px] text-[#41445c] 
                  before:content-[''] before:absolute before:left-1/2 before:-translate-x-1/2 before:bottom-0 before:w-0 before:h-[2px] before:bg-[#093adb] before:transition-all before:duration-300 before:invisible 
                  hover:before:visible hover:before:w-full hover:text-black"
              >
                {item.name}
              </a>
            </li>
          ))}

          <li>
            <button onClick={handleClick} className="h-[40px] w-[85px] text-white font-semibold text-[15px] bg-[#075197] duration-300 hover:bg-[#200459] rounded-[5px] mx-10">
              Login
            </button>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="lg:hidden mx-5">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none text-gray-700"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden mt-[0px] bg-white shadow-lg w-full fixed z-40">
          <ul className="flex flex-col items-center py-4 space-y-3 font-bold">
            {navLinks.map((item, index) => (
              <li key={index}>
                <a
                  href={item.link}
                  className="text-[#41445c] text-[15px] hover:text-[#075197] transition-colors duration-300"
                >
                  {item.name}
                </a>
              </li>
            ))}
            <li>
              <button onClick={handleClick} className="h-[40px] w-[85px] text-white font-semibold text-[15px] bg-[#075197] duration-300 hover:bg-[#200459] rounded-[5px]">
                Login
              </button>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Navbar;
