import React from 'react'

function MainCourse() {
  return (
    <>
    <div className='h-[100%] my-20 bg-white mx-auto flex flex-col  items-center justify-center'>
        <h5 className='text-[#075197] font-bold text-[15px]'>LEARN AT YOUR PACE</h5>
        <h3 className='text-[#13345B] font-bold text-[35px]' >Popular Courses</h3>
        <p className='text-gray-700 w-[80vw] md:w-[45vw] text-center'>Explore all of our courses and pick your suitable ones to enroll and start learning with us! We ensure that you will never regret it!</p>
        <div className='block md:flex gap-5 my-5'>
        <div className='h-[26vh] md:h-[35vh] w-[90vw] md:w-[35vw] flex flex-col text-center justify-center items-center shadow-lg rounded-lg bg-[#13345B] border-[#2541638f] text-white'>
        <h5  className='font-bold text-[26px]'>Designing / Developtment</h5>
        <h6 className='font-bold text-[15px]'>Boost your yourself creative thinking and Problem solving skills,push them to make their imagination real.</h6>
        <button className='h-[50px] w-[115px] text-[#13345B] font-semibold text-[15px] bg-[#e7e7e7ff] duration-300 hover:bg-[#13345B] border-[2px] border-white hover:text-white rounded-[15px] m-5'>Start Now!</button>
        </div>

        <div className='h-[26vh] md:h-[35vh] w-[90vw] md:w-[35vw] flex flex-col text-center justify-center items-center shadow-lg rounded-lg bg-[#e7e7e7ff] border-[#1d36557a] text-[#13345B] mt-4 md:mt-0'>
        <h5  className='font-bold text-[26px]'>E-commerce / Digital marketing</h5>
        <h6 className='font-bold text-[15px]'>Help your yourself to acknowledge about how to run business online and sell product through internet.</h6>
        <button className='h-[50px] w-[115px] text-white font-semibold text-[15px] bg-[#13345B] duration-300 hover:bg-[#e7e7e7ff] border-[2px] border-[#13345B] hover:text-[#13345B] rounded-[15px] m-5'>Start Now!</button>

        </div>

        </div>
        <p className='text-gray-700 w-[80vw] md:w-[45vw] text-center'>Enjoy the top notch learning methods and achieve next level skills! You are the creator of your own career & we will guide you through that!</p>
    </div>
    </>
  )
}

export default MainCourse