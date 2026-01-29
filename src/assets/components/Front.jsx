import React from 'react'

function Front() {
  return (
    <>
    <div className='h-screen pt-[17vh] md:pt-[25vh] mt-[60px] md:mt-0 bg-[#9abddfff]'>
        <h3 className='w-[90vw] font-[poppins] md:w-[50vw] text-[40px] md:text-[55px] text-[#0b274b] leading-12 md:leading-14 font-bold mx-5 md:mx-17'>TechServe Computer Academy - where knowledge meets innovation!</h3>
        <p className='w-[90vw] md:w-[40vw] text-[20px]  text-gray-700 leading-6 font-bold my-6 mx-5 md:mx-17'>Develop Your Skills, Learn Something New, and Grow Your Skills From Anywhere in the World!</p>
        <div>
        <button className='h-[50px] md:h-[50px] w-[200px] md:w-[230px] text-white font-semibold text-[15px] md:text-[17px] bg-[#075197] duration-300 hover:bg-[#200459] rounded-[5px] ml-5 md:ml-17'>Get Started Now !</button>
        <button className='h-[50px] md:h-[50px] w-[135px] md:w-[175px]  text-[#075197] font-semibold text-[15px] md:text-[17px] bg-white duration-300 hover:bg-[#200459] hover:text-white rounded-[5px] mx-2'>Contact Us</button>
        </div>
    </div>
    </>
  )
}

export default Front