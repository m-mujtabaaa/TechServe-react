import React, { useState } from "react";

function Registeration() {
  const [isLogin, setIsLogin] = useState(false);
  const toggleAuth = () => setIsLogin(!isLogin);

  return (
    <>
      {/* Header */}
      <div className='bg-[#08182C6E] bg-cover h-[160px] md:h-[220px]  mt-[60px] -z-1'>
        <img src="computerlab.jpg" alt="" className='absolute -z-2 h-[160px] md:h-[220px] w-full' />
        <div className='px-[30px] md:px-[50px] py-[35px] md:py-[50px]'>
          <h2 className='text-white font-bold text-[35px] md:text-[50px]'>REGISTERATION</h2>
          <div className=''>
            <h4 className='text-[19px] text-gray-400 font-bold'><span className='text-white'>Registeration</span> / <a href="/" className='hover:text-white duration-300'>Home</a></h4>
          </div>
        </div>
      </div>

      {/* Auth Container */}
      <div className="flex items-center justify-center px-4 py-30">
        <div className="relative w-full max-w-[1100px] md:h-[450px] bg-white rounded-lg shadow-xl overflow-hidden">

          {/* Forms */}
          <div className="flex flex-col md:flex-row h-full">

            {/* Register */}
            <div
              className={`bg-[#e7e7e7ff] w-full md:w-1/2 flex items-center justify-center transition-opacity duration-500 ${isLogin ? "opacity-0 md:pointer-events-none hidden md:flex" : ""
                }`}
            >
              <form className="w-4/5 py-10">
                <h2 className="text-[#13345B] text-3xl font-bold mb-6">
                  Register
                </h2>

                <input className="w-full mb-4 px-4 py-2 border-b-2 border-[#13345B] outline-none" placeholder="Name" />
                <input className="w-full mb-4 px-4 py-2 border-b-2 border-[#13345B] outline-none" placeholder="Email" />
                <input className="w-full mb-4 px-4 py-2 border-b-2 border-[#13345B] outline-none" placeholder="Password" />

                <div className="text-sm text-[#13345B] mb-6">
                  <input type="checkbox" /> Remember Me
                </div>

                <button className="h-10 w-full font-bold duration-300 text-white bg-[#075197] hover:bg-[#200459] rounded">
                  Register
                </button>
              </form>
            </div>

            {/* Login */}
            <div
              className={`bg-[#e7e7e7ff] w-full md:w-1/2 flex items-center justify-center transition-opacity duration-500 ${!isLogin ? "opacity-0 md:pointer-events-none hidden md:flex" : ""
                }`}
            >
              <form className="w-4/5 py-10">
                <h2 className="text-[#13345B] text-3xl font-bold mb-6">
                  Login
                </h2>

                <input className="w-full mb-4 px-4 py-2 border-b-2 border-[#13345B] outline-none" placeholder="Email" />
                <input className="w-full mb-4 px-4 py-2 border-b-2 border-[#13345B] outline-none" placeholder="Password" />

                <a href="/" className="text-sm text-[#13345B] hover:underline">
                  Forgot password?
                </a>

                <button className="h-10 w-full font-bold duration-300 mt-6 text-white bg-[#075197] hover:bg-[#200459] rounded">
                  Login
                </button>
              </form>
            </div>
          </div>

          {/* Sliding Panel (desktop only) */}
          <div
            className={`hidden md:flex absolute top-0 h-full w-1/2 bg-[#13345B] text-white flex-col items-center justify-center transition-all duration-700 ${isLogin ? "left-0" : "left-1/2"
              }`}
          >
            <h1 className="text-3xl font-bold mb-4">Welcome!</h1>
            <p className="mb-6 text-sm">
              {isLogin ? "Already have an account?" : "Don't have an account?"}
            </p>
            <button
              onClick={toggleAuth}
              className="h-12 w-28 bg-white text-[#13345B] font-bold duration-300 hover:bg-[#13345B] hover:text-white border-2 border-white rounded-full"
            >
              {isLogin ? "Register" : "Login"}
            </button>
          </div>

          {/* Mobile Toggle Button */}
          <div className="md:hidden text-center py-4 text-[#13345B] bg-[#e7e7e7ff]">
            <button
              onClick={toggleAuth}
              className="text-[#13345B] font-semibold underline"
            >
              {isLogin ? "Create an account" : "Already have an account?"}
            </button>
          </div>

        </div>
      </div>
    </>
  );
}

export default Registeration;
