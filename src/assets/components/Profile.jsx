import React from 'react'
import { User, BookOpen, CreditCard, CheckSquare } from "lucide-react";

function Profile() {
  const menu = [
    { name: "Profile", icon: <User size={20} />, path: "/profile" },
    { name: "Course", icon: <BookOpen size={20} />, path: "/contact" },
    { name: "Payment", icon: <CreditCard size={20} />, path: "/profile" },
    { name: "Attendance", icon: <CheckSquare size={20} />, path: "/profile" },
  ];
  return (
    <>
      <div className='bg-[#08182C6E] bg-cover h-[160px] md:h-[220px]  mt-[60px] -z-1'>
        <img src="library.jpg" alt="" className='absolute -z-2 h-[160px] md:h-[220px] w-full' />
        <div className='px-[30px] md:px-[50px] py-[35px] md:py-[50px]'>
          <h2 className='text-white font-bold text-[35px] md:text-[50px]'>STUDENT PORTAL</h2>
          <div className=''>
            <h4 className='text-[19px] text-gray-400 font-bold'><span className='text-white'>Student Portal</span> / <a href="/" className='hover:text-white duration-300'>Home</a></h4>
          </div>
        </div>
      </div>
      <div className='flex'>
        {/* Sidebar */}
        <aside className="w-[20%] h-screen bg-[#075197] text-white p-6">
          <h2 className="text-3xl font-semibold mb-6">Dashboard</h2>
          <nav className="space-y-4">
            {menu.map((item) => (
              <a
                key={item.name}
                href={item.path}
                className="flex items-center gap-3 w-full px-4 py-2 rounded-lg hover:bg-[#13345B] transition"
              >
                {item.icon}
                <span>{item.name}</span>
              </a>
            ))}
          </nav>
        </aside>
        <div className='bg-gray-200 h-auto py-12 px-[2vw]'>

          <div className='bg-white h-[95%] px-5 '>


            <div className='flex items-center h-[25%]'>
              <img src="Guest.png" alt="" className='rounded-[50%] h-[70px]' />
              <div className='mx-5'>
                <h3 className='text-[#13345B] text-2xl font-bold inline'>Muhammad Mujtaba</h3>
                <h4 className='inline float-right'>GR No. 121507</h4>
                <hr className='w-[65vw] my-1' />
                <p>Student</p>
              </div>
            </div>

            <div className='border-1 border-gray-300 h-[40vh] p-3'>
              <h3 className='text-[#13345B] text-3xl font-bold inline'>Diploma In Information Technology</h3>
              <p className='text-xs inline float-right border-2 border-blue-300 rounded px-2 px-1 bg-blue-100'>ENROLLED</p>
              <p className='my-5'><span className='leading-9 text-lg'>Time : </span> <br /><span className='bg-gray-200 mr-2 px-2 px-1 border-1 border-gray-500 rounded'>Monday - Friday </span><span className='bg-gray-200 mx-2 px-2 px-1 border-1 border-gray-500 rounded'>8:00pm - 9:00pm</span></p>
              <p className='my-5 leading-9 text-lg inline'>Progress :</p>
              <p  className='inline float-right mt-3'>80%</p>
             <div className="w-full bg-gray-200 rounded-full h-2">
      <div
        className="bg-blue-600 h-2 rounded-full transition-all duration-500"
        style={{ width: `${80}%` }}
      />
    </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile