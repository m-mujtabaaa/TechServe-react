import React from 'react'
import { useNavigate } from "react-router-dom";


function Certification() {

   const navigate = useNavigate();

  const handleClick = () => {
    navigate("/registeration"); }
  return (
    <>
    <div className='h-[100%] my-30 bg-white mx-auto flex flex-col  items-center justify-center'>
        <h5 className='text-[#075197] font-bold text-sm md:text-base'>AFFORDABLE CERTIFICATION</h5>
        <h3 className='text-[#13345B] w-[80vw] nd:w-[58vw] leading-9 text-center font-bold  text-2xl sm:text-3xl' >Get Your Quality Skills Certificate Through Exam in TechServe.</h3>
        <p className='text-gray-700 w-[80vw] md:w-[45vw] py-5 text-center text-sm sm:text-base md:text-lg'>Finding your own space and utilize better learning options can result in faster than the traditional ways. Enjoy the beauty of Techserve!</p>
        <button onClick={handleClick} className='h-[50px] w-[200px] md:w-[230px] text-white font-semibold text-[15px] md:text-[17px] bg-[#075197] duration-300 hover:bg-[#200459] rounded-[5px]'>Get Started Now !</button>
    </div>
    </>
  )
}

export default Certification