import React, { useEffect, useState } from "react";

export default function SpaceSection() {
  const [dots, setDots] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) =>
        prev.map((dot) =>
          dot.top > 110
            ? { ...dot, top: -10 }
            : { ...dot, top: dot.top + dot.speed }
        )
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const initialDots = Array.from({ length: 60 }).map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      speed: 0.3 + Math.random() * 0.8,
      size: Math.random() > 0.7 ? 2 : 1,
    }));
    setDots(initialDots);
  }, []);

  return (
    <div className="relative h-auto md:h-[60vh] w-full overflow-hidden bg-[#080808]">

      {dots.map((dot, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-purple-300 blur-[0.5px]"
          style={{
            left: `${dot.left}%`,
            top: `${dot.top}%`,
            width: dot.size,
            height: dot.size,
          }}
        />
      ))}

      {/* Dark tech overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60 pointer-events-none" />
      <div className="my-15 px-4">
        <div className="flex flex-col lg:flex-row justify-center gap-15 lg:gap-18 text-center lg:text-left">

          <div className="h-auto lg:h-[40vh]">
            <h2 className="text-white font-bold text-[28px] lg:text-[35px]">
              thetechserve.com
            </h2>
            <h2 className="text-gray-300 font-bold">
              TechServe IT Academy
            </h2>
          </div>

          <div className="h-auto lg:h-[40vh]">
            <h3 className="text-white text-[24px] lg:text-[28px] font-bold">
              Resources
            </h3>
            <hr className="h-1 w-28 bg-[#075197] mb-5 mx-auto lg:mx-0" />
            <ul className="text-white font-bold text-[15px] leading-8 list-none md:list-disc px-5 inline-block text-left">
              <li className="md:text-start text-center"><a href="/registeration" className="hover:text-[#075197] duration-300">Make an Account</a></li>
              <li className="md:text-start text-center"><a href="/profile" className="hover:text-[#075197] duration-300">Student Profile</a></li>
              <li className="md:text-start text-center"><a href="/privacyPolicy" className="hover:text-[#075197] duration-300">Privacy Policy</a></li>
              <li className="md:text-start text-center"><a href="/contact" className="hover:text-[#075197] duration-300">Contact Us</a></li>

            </ul>
          </div>

          <div className="h-auto lg:h-[40vh]">
            <h3 className="text-white text-[24px] lg:text-[28px] font-bold">
              Explore
            </h3>
            <hr className="h-1 w-20 bg-[#075197] mb-5 mx-auto lg:mx-0" />
            <ul className="text-white font-bold text-[15px] leading-8 list-none md:list-disc px-5 inline-block text-left ">
              <li className="md:text-start text-center"><a href="/" className="hover:text-[#075197] duration-300">Home</a></li>
              <li className="md:text-start text-center"><a href="#Courses" className="hover:text-[#075197] duration-300">Courses</a></li>
              <li className="md:text-start text-center"><a href="/privacyPolicy" className="hover:text-[#075197] duration-300">Terms and Conditions</a></li>
            </ul>
          </div>

          <div className="h-auto lg:h-[40vh]">
            <h3 className="text-white text-[24px] lg:text-[28px] font-bold">
              Address
            </h3>
            <hr className="h-1 w-24 bg-[#075197] mb-5 mx-auto lg:mx-0" />
            <ul className="text-white font-bold text-[15px] leading-7 list-none md:list-disc px-5 inline-block text-left ">
              <li className="w-55 leading-5 md:text-start text-center">
                <a href="https://maps.app.goo.gl/2wAc8pcwgwxqXMSw7" className="hover:text-[#075197] duration-300">
                  3-A 12/1 Near Tayaba Masjid Nazimabad No # 3, Karachi
                </a>
              </li>
              <li className="md:text-start text-center"><a href="tel:+923115994479" className="hover:text-[#075197] duration-300">+92 311 5994479</a></li>
              <li className="md:text-start text-center"><a href="mailto:contact@thetechserve.com" className="hover:text-[#075197] duration-300">contact@thetechserve.com</a></li>
            </ul>
          </div>
        </div>

        <div className="text-center px-2">
          <p className="text-white text-sm py-10 md:py-0 lg:text-base">
            ©2023 TechServe is Proudly Crafted by
            <span className="text-[#075197] font-bold"><a href=""> Muhammad Mujtaba </a></span> {/* and
      <span className="text-[#075197] font-bold"> Syed Muhammad Osama </span> */}.
          </p>
        </div>
      </div>

    </div>
  );
}
