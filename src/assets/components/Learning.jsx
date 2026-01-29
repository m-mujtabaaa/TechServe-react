import React from "react";
import { useNavigate } from "react-router-dom";


function Learning() {

   const navigate = useNavigate();
  
    const handleClick = () => {
      navigate("/registeration"); }
  return (
    <div className="flex flex-col md:flex-row bg-gray-200 shadow-lg  my-5 md:h-[80vh] h-auto">
      
      {/* Left Text Content */}
      <div className="flex flex-col justify-center px-5 md:px-16 py-10 md:py-0 md:w-1/2">
        <h5 className="text-[#075197] font-bold text-sm md:text-base mb-2">
          DISTANT LEARNING
        </h5>
        <h3 className="text-[#13345B] font-bold text-2xl sm:text-3xl md:text-4xl leading-8 md:leading-10 w-full md:w-[90%] mb-4">
          You Are Attending Your Classes Physically!
        </h3>
        <p className="text-gray-900 text-sm sm:text-base md:text-lg leading-6 md:leading-7 w-full md:w-[90%] mb-6">
          Can bring you a super exciting experience of learning through online! You never face any negative experience while enjoying your classes virtually by sitting in your comfort zone. Our flexible learning initiatives will help you to learn better and quicker than the traditional ways of learning skills.
        </p>
        <button onClick={handleClick} className="h-[50px] w-[200px] md:w-[230px] text-white font-semibold text-[15px] md:text-[17px]-base bg-[#075197] rounded-md hover:bg-[#200459] duration-300">
          Start for Free
        </button>
      </div>

      <div className="flex items-center justify-center md:w-1/2 ">
      <img src="bigTab.jpg" alt="" />
      </div>

    </div>
  );
}

export default Learning;
