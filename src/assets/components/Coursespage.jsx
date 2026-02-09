import React from 'react'

function Coursespage() {
  return (
    <>
    {/* Header */}
      <div className='bg-[#08182C6E] bg-cover h-[160px] md:h-[220px]  mt-[60px] -z-1'>
        <img src="computerlab.jpg" alt="" className='absolute -z-2 h-[160px] md:h-[220px] w-full' />
        <div className='px-[30px] md:px-[50px] py-[35px] md:py-[50px]'>
          <h2 className='text-white font-bold text-[35px] md:text-[50px]'>COURSES</h2>
          <div className=''>
            <h4 className='text-[19px] text-gray-400 font-bold'><span className='text-white'>Courses</span> / <a href="/" className='hover:text-white duration-300'>Home</a></h4>
          </div>
        </div>
      </div>

    <div className='h-full py-30 w-full bg-white flex flex-col items-center justify-center' id='Courses'>
      
      <h5 className='text-[#075197] font-bold text-sm md:text-base mb-2'>EDUCATION FOR EVERYONE</h5>
      <h3 className='text-[#13345B] font-bold text-2xl md:text-3xl lg:text-4xl text-center mb-4 px-4 md:px-0'>
        Affordable Courses and Learning Opportunities
      </h3>
      <p className='text-gray-700 text-center text-sm md:text-base w-11/12 md:w-3/5 lg:w-2/5 mb-12'>
        Finding your own space and utilizing better learning options can result in faster learning than traditional methods. Enjoy the beauty of Techserve!
      </p>

      {/* Courses Grid */}
      <div className="max-w-6xl w-full px-4 md:px-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">

          {/* Course Card */}
          <div className="bg-gray-200 h-auto  p-6 rounded-lg shadow-lg hover:shadow-2xl duration-300 flex flex-col">
            <h4 className='text-[#13345B] font-bold leading-5 text-lg md:text-xl lg:text-2xl mb-2'>Software Development</h4>
            <p className='text-gray-800 py-4 text-sm md:text-base leading-5'>
              Learn coding, development, and software engineering from the best.
            </p>
            <b>OUTLINE :</b>
            <ul className='list-disc px-4'>
                <li>html</li>
                <li>css</li>
                <li>js</li>
            </ul>
          </div>

          <div className="bg-gray-200 h-auto  p-6 rounded-lg shadow-lg hover:shadow-2xl duration-300 flex flex-col">
            <h4 className='text-[#13345B] font-bold leading-5 text-lg md:text-xl lg:text-2xl mb-2'>Web Designing</h4>
            <p className='text-gray-800 py-4 text-sm md:text-base leading-5'>
              Unleash your creativity with our expert-led Graphic Designing course and bring ideas to life!
            </p>
            <b>OUTLINE :</b>
            <ul className='list-disc px-4'>
                <li>html</li>
                <li>css</li>
                <li>js</li>
            </ul>
          </div>

          <div className="bg-gray-200 h-auto  p-6 rounded-lg shadow-lg hover:shadow-2xl duration-300 flex flex-col">
            <h4 className='text-[#13345B] font-bold leading-5 text-lg md:text-xl lg:text-2xl mb-2'>Microsoft</h4>
            <p className='text-gray-800 py-4 text-sm md:text-base leading-5'>
              Master in-demand skills with our Microsoft-certified courses and elevate your tech career!
            </p>
            <b>OUTLINE :</b>
            <ul className='list-disc px-4'>
                <li>html</li>
                <li>css</li>
                <li>js</li>
            </ul>
          </div>

          <div className="bg-gray-200 h-auto  p-6 rounded-lg shadow-lg hover:shadow-2xl duration-300 flex flex-col">
            <h4 className='text-[#13345B] font-bold leading-5 text-lg md:text-xl lg:text-2xl mb-2'>Web Design & Development</h4>
            <p className='text-gray-800 py-4 text-sm md:text-base leading-5'>
              Build stunning and functional websites with modern tools.
            </p>
            <b>OUTLINE :</b>
            <ul className='list-disc px-4'>
                <li>html</li>
                <li>css</li>
                <li>js</li>
            </ul>
          </div>

        </div>
      </div>
    </div></>
  )
}

export default Coursespage