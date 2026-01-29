import React from 'react'

const about = [
  "Expert Trainers",
  "Lifetime Access",
  "Remote Learning",
  "Self Development"
]

function Certification() {
  return (
    <>
      <div className='flex flex-col md:flex-row h-[105vh] my-5 md:h-[95vh] bg-gray-200 shadow-lg' id='About'>
        <div className=' flex flex-col px-5 md:px-17 justify-center py-10'>
          <h5 className='text-[#075197] font-bold text-sm md:text-base mb-2'>ABOUT US</h5>
          <h3 className='text-[#13345B] font-bold text-2xl sm:text-3xl md:text-4xl leading-8 md:leading-10 w-full md:w-[90%] mb-4' >Develop Your Skills, Learn Something New, and Grow Your Skills From Anywhere in the World!</h3>
          <p className="text-gray-900 text-sm sm:text-base md:text-lg leading-6 md:leading-7 w-full md:w-[90%] ">We understand better that online-based learning can make a significant change to reach students from all over the world! Giving options to learn better always can offer the best outcomes!</p>
          <ul className='text-gray-900 py-4 list-disc font-bold ml-4 text-[17px]'>
            {about.map((items, index) =>
              <li key={index}>{items}</li>
            )}
          </ul>
          <button className="h-[50px] w-[200px] md:w-[230px] text-white font-semibold text-[15px] md:text-[17px] bg-[#075197] rounded-md hover:bg-[#200459] duration-300">View All Coursers</button>
        </div>
        <div className="my-auto grid grid-cols-2 gap-0 w-full gap-5 md:w-[75vw] px-5">
          <img
            src="about-img1.png"
            alt=""
            className="w-full h-[170px] md:h-[200px]"
          />
          <img
            src="about-img2.png"
            alt=""
            className="w-full h-[170px] md:h-[200px]"
          />
          <img
            src="about-img3.png"
            alt=""
            className="w-full h-[170px] md:h-[200px]"
          />
          <img
            src="about-img4.png"
            alt=""
            className="w-full h-[170px] md:h-[200px]"
          />
        </div>

      </div>
    </>
  )
}

export default Certification