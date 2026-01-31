import React from 'react'
import { User, BookOpen, CreditCard, CheckSquare } from "lucide-react";

function Profile() {
  const menu = [
    { name: "Profile", icon: <User size={20} /> },
    { name: "Course", icon: <BookOpen size={20} /> },
    { name: "Payment", icon: <CreditCard size={20} /> },
    { name: "Attendance", icon: <CheckSquare size={20} /> },
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
      <div className='bg-gray-200 h-auto py-15 px-[2vw]'>



        <div className='bg-white h-[95%] flex'>
          {/* Sidebar */}
          <aside className="w-[20%]  bg-[#075197] text-white p-6">
            <h2 className="text-3xl font-semibold mb-6">Dashboard</h2>
            <nav className="space-y-4">
              {menu.map((item) => (
                <button
                  key={item.name}
                  className="flex items-center gap-3 w-full px-4 py-2 rounded-lg hover:bg-[#13345B] transition"
                >
                  {item.icon}
                  <span>{item.name}</span>
                </button>
              ))}
            </nav>
          </aside>
          <div className='w-[80%] px-5 py-8'>
            <div className='flex items-center'>
            <img src="Guest.png" alt="" className='rounded-[50%] h-[70px]'/>
            <div className='mx-5'>
            <h3 className='text-[#13345B] text-xl font-bold inline'>Muhammad Mujtaba</h3>
            <h4 className='inline float-right'>GR No. 121507</h4>
            <hr className='w-[65vw] my-1'/>
            <p>Student</p>
            </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Profile