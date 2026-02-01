import React, { useState } from "react";
import { User, BookOpen, CreditCard, CheckSquare, ChevronDown, Menu, X  } from "lucide-react";

function Profile() {
  const [active, setActive] = useState("profile");

  const months = ["January", "February", "March", "April"];
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("February");


  const menu = [
    { name: "Profile", key: "profile", icon: <User size={20} /> },
    { name: "Course", key: "course", icon: <BookOpen size={20} /> },
    { name: "Fees", key: "fees", icon: <CreditCard size={20} /> },
    { name: "Attendance", key: "attendance", icon: <CheckSquare size={20} /> },
  ];

  return (
    <>
      {/* Header */}
      <div className="bg-[#08182C6E] h-[160px] md:h-[220px] mt-[60px] relative">
        <img
          src="library.jpg"
          alt=""
          className="absolute h-full w-full object-cover -z-10"
        />
        <div className="px-[30px] md:px-[50px] py-[35px] md:py-[50px]">
          <h2 className="text-white font-bold text-[35px] md:text-[50px]">
            STUDENT PORTAL
          </h2>
          <h4 className="text-[19px] text-gray-400 font-bold">
            <span className="text-white">Student Portal</span> / Home
          </h4>
        </div>
      </div>

      <div className="flex">


        {/* Hamburger Icon for Mobile */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setOpen(true)}
          className="p-2 bg-[#075197] text-white rounded-md shadow-md"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-opacity-50 z-40"
          onClick={() => setOpen(false)}
        ></div>
      )}

        {/* Sidebar */}
      <aside className={`bg-[#075197] text-white p-6 
        fixed top-0 left-0 h-full z-50
        w-64 transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0 md:static md:w-[20%]`}
      >
        {/* Close button on mobile */}
        <div className="flex justify-between items-center mb-6 md:hidden">
          <h2 className="text-3xl font-semibold">Dashboard</h2>
          <button onClick={() => setOpen(false)}>
            <X size={24} />
          </button>
        </div>

        {/* Desktop Title */}
        <h2 className="hidden md:block text-3xl font-semibold mb-6">Dashboard</h2>

        {/* Menu */}
        <nav className="space-y-3">
          {menu.map((item) => (
            <button
              key={item.key}
              onClick={() => {
                setActive(item.key);
                setOpen(false); // Close on mobile after click
              }}
              className={`flex items-center gap-3 w-full px-4 py-2 rounded-lg transition
                ${active === item.key ? "bg-[#13345B]" : "hover:bg-[#13345B]"}`
              }
            >
              {item.icon}
              <span>{item.name}</span>
            </button>
          ))}
        </nav>
      </aside>

        {/* Content Area */}
        <div className="bg-gray-200 w-full py-12 px-[2vw] w-full">
          <div className="bg-white min-h-screen px-5 py-4 rounded">

            {/* PROFILE CONTENT */}
            {active === "profile" && (
              <>
                <div className='p-3 rounded flex items-center h-[15vh] my-8'>
                  <img src="Guest.png" alt="" className='rounded-[50%] h-[70px]' />
                  <div className='mx-5'>
                    <h3 className='text-[#13345B] text-2xl font-bold inline'>Muhammad Mujtaba</h3>
                    <h4 className='inline float-right'>GR No. 121507</h4>
                    <hr className='w-[65vw] my-1' />
                    <p>Student</p>
                  </div>
                </div>

                <div className='border-1 border-gray-400 h-[45vh] p-3 rounded'>
                  <h3 className='text-[#13345B] text-3xl font-bold inline'>Diploma In Information Technology</h3>
                  <p className='text-xs inline float-right border-2 border-blue-300 rounded px-2 px-1 bg-blue-100'>ENROLLED</p>
                  <p className='my-5'><span className='leading-9 text-lg'>Time : </span> <br /><span className='bg-gray-200 mr-2 px-2 px-1 border-1 border-gray-500 rounded'>Monday - Friday </span><span className='bg-gray-200 mx-2 px-2 px-1 border-1 border-gray-500 rounded'>8:00pm - 9:00pm</span></p>
                  <p className='my-5 leading-9 text-lg inline'>Progress :</p>
                  <p className='inline float-right mt-3'>80%</p>
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-5">
                    <div
                      className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${80}%` }}
                    />
                  </div>
                  <p className='my-5 leading-9 text-lg inline'>Attendence :</p>
                  <p className='inline float-right mt-3'>67%</p>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${67}%` }}
                    />
                  </div>
                </div>

                <div className='border-1 border-gray-400 p-3 rounded my-5'>
                  <h3 className='text-[#13345B] text-3xl font-bold inline'>Fee :</h3>

                  <table className='w-full my-2'>
                    <div className='flex justify-between p-1 border-1 border-gray-400 bg-gray-200 '>
                      <th className='w-[140px]'>Month</th>
                      <th className='w-[140px]'>Ammount</th>
                      <th className='w-[140px]'>Due Date</th>
                      <th className='w-[140px]'>Voucher ID</th>
                      <th className='w-[140px]'>Date of Payment</th>
                      <th className='w-[140px]'>Status</th>
                    </div>
                    <div className='flex justify-between text-center p-1 border-1 border-gray-400'>
                      <tr className='w-[140px]'>January</tr>
                      <tr className='w-[140px]'>PKR 3000 -/</tr>
                      <tr className='w-[140px]'>08-Jan-2026</tr>
                      <tr className='w-[140px]'>123456</tr>
                      <tr className='w-[140px]'>01-Jan-2026</tr>
                      <tr className='bg-green-200 w-[140px] text-green-900 border-1 border-green-400 text-sm rounded-md'>Paid</tr>
                    </div>
                  </table>
                </div>

              </>
            )}



            {/* COURSE (EMPTY) */}
            {active === "course" && (
              <div>
                <div className='border-1 border-gray-400 h-[45vh] p-3 rounded'>
                  <h3 className='text-[#13345B] text-3xl font-bold inline'>Diploma In Information Technology</h3>
                  <p className='text-xs inline float-right border-2 border-blue-300 rounded px-2 px-1 bg-blue-100'>ENROLLED</p>
                  <p className='my-5'><span className='leading-9 text-lg'>Time : </span> <br /><span className='bg-gray-200 mr-2 px-2 px-1 border-1 border-gray-500 rounded'>Monday - Friday </span><span className='bg-gray-200 mx-2 px-2 px-1 border-1 border-gray-500 rounded'>8:00pm - 9:00pm</span></p>
                  <p className='my-5 leading-9 text-lg inline'>Progress :</p>
                  <p className='inline float-right mt-3'>80%</p>
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-5">
                    <div
                      className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${80}%` }}
                    />
                  </div>
                  <p className='my-5 leading-9 text-lg inline'>Attendence :</p>
                  <p className='inline float-right mt-3'>67%</p>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${67}%` }}
                    />
                  </div>
                </div>
              </div>
            )}



            {/* FEES (EMPTY) */}
            {active === "fees" && (
              <div>
                <div className='border-1 border-gray-400 p-3 rounded my-5'>
                  <h3 className='text-[#13345B] text-3xl font-bold inline'>Fee :</h3>

                  <table className='w-full my-5'>
                    <div className='flex justify-between p-1 border-1 border-gray-400 bg-gray-200 '>
                      <th className='w-[140px]'>Month</th>
                      <th className='w-[140px]'>Ammount</th>
                      <th className='w-[140px]'>Due Date</th>
                      <th className='w-[140px]'>Voucher ID</th>
                      <th className='w-[140px]'>Date of Payment</th>
                      <th className='w-[140px]'>Status</th>
                    </div>
                    <div className='flex justify-between text-center p-1 border-1 border-gray-400'>
                      <tr className='w-[140px]'>September</tr>
                      <tr className='w-[140px]'>PKR 3000 -/</tr>
                      <tr className='w-[140px]'>08-Sept-2025</tr>
                      <tr className='w-[140px]'>123456</tr>
                      <tr className='w-[140px]'>06-Sept-2025</tr>
                      <tr className='bg-green-200 w-[140px] text-green-900 border-1 border-green-400 text-sm rounded-md'>Paid</tr>
                    </div>
                    <div className='flex justify-between text-center p-1 border-1 border-gray-400'>
                      <tr className='w-[140px]'>October</tr>
                      <tr className='w-[140px]'>PKR 3000 -/</tr>
                      <tr className='w-[140px]'>08-Oct-2025</tr>
                      <tr className='w-[140px]'>123456</tr>
                      <tr className='w-[140px]'>04-Oct-2025</tr>
                      <tr className='bg-green-200 w-[140px] text-green-900 border-1 border-green-400 text-sm rounded-md'>Paid</tr>
                    </div>
                    <div className='flex justify-between text-center p-1 border-1 border-gray-400'>
                      <tr className='w-[140px]'>November</tr>
                      <tr className='w-[140px]'>PKR 3000 -/</tr>
                      <tr className='w-[140px]'>08-Nov-2025</tr>
                      <tr className='w-[140px]'>123456</tr>
                      <tr className='w-[140px]'>02-Nov-2025</tr>
                      <tr className='bg-green-200 w-[140px] text-green-900 border-1 border-green-400 text-sm rounded-md'>Paid</tr>
                    </div>
                    <div className='flex justify-between text-center p-1 border-1 border-gray-400'>
                      <tr className='w-[140px]'>December</tr>
                      <tr className='w-[140px]'>PKR 3000 -/</tr>
                      <tr className='w-[140px]'>08-Dec-2025</tr>
                      <tr className='w-[140px]'>123456</tr>
                      <tr className='w-[140px]'>03-Dec-2025</tr>
                      <tr className='bg-green-200 w-[140px] text-green-900 border-1 border-green-400 text-sm rounded-md'>Paid</tr>
                    </div>
                    <div className='flex justify-between text-center p-1 border-1 border-gray-400'>
                      <tr className='w-[140px]'>January</tr>
                      <tr className='w-[140px]'>PKR 3000 -/</tr>
                      <tr className='w-[140px]'>08-Jan-2026</tr>
                      <tr className='w-[140px]'>123456</tr>
                      <tr className='w-[140px]'>05-Jan-2026</tr>
                      <tr className='bg-green-200 w-[140px] text-green-900 border-1 border-green-400 text-sm rounded-md'>Paid</tr>
                    </div>
                    <div className='flex justify-between text-center p-1 border-1 border-gray-400'>
                      <tr className='w-[140px]'>Febuary</tr>
                      <tr className='w-[140px]'>PKR 3000 -/</tr>
                      <tr className='w-[140px]'>08-Feb-2026</tr>
                      <tr className='w-[140px]'>123456</tr>
                      <tr className='w-[140px]'>-</tr>
                      <tr className='bg-gray-200 w-[140px] text-gray-900 border-1 border-gray-400 text-sm rounded-md'>Pending</tr>
                    </div>
                  </table>
                </div>
              </div>

            )}

            {/* ATTENDANCE (EMPTY) */}
            {active === "attendance" && (
              <div>

                <div className='border-1 border-gray-400 p-3 rounded my-5'>
                  <h3 className='text-[#13345B] text-3xl font-bold inline'>Attendence Overwiew:</h3>
                  <p className='inline float-right mt-3'>67%</p>
                  <div className="w-full bg-gray-200 rounded-full h-2 my-4">
                    <div
                      className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${67}%` }}
                    />
                  </div>
                  <p>Your attendance is below 75%. Please improve your attendance.</p>
                </div>

                <div className='border-1 border-gray-400 p-3 rounded my-5'>
                  <h3 className='text-[#13345B] text-3xl font-bold inline'>Attendence Details:</h3>

                  {/* Toggle Button */}
                  <button
                    onClick={() => setOpen(!open)}
                    className="w-[12vw] flex justify-between float-right px-4 py-2 bg-[#075197] text-white rounded"
                  >
                    {selected}
                    <ChevronDown
                      className={`transition-transform ${open ? "rotate-180" : ""
                        }`}
                    />
                  </button>

                  {/* Dropdown */}
                  {open && (
                    <div className="my-2 w-[100%] border float-right rounded overflow-hidden shadow bg-white inline-ened">
                      {months
                        .filter((m) => m !== selected)
                        .map((month) => (
                          <button
                            key={month}
                            onClick={() => {
                              setSelected(month);
                              setOpen(false);
                            }}
                            className="w-full text-left px-4 py-2 hover:bg-gray-100"
                          >
                            {month}
                          </button>
                        ))}
                    </div>
                  )}



                  {selected === "January" && <table className='w-full my-5'>
                    <div className='flex justify-between p-1 border-1 border-gray-400 bg-gray-200 '>
                      <th className='w-[140px]'>Date</th>
                      <th className='w-[140px]'>Status</th>
                    </div>
                    <div className='flex justify-between text-center p-1 border-1 border-gray-400'>
                      <tr className='w-[140px]'>01-Jan-2025</tr>
                      <tr className='bg-green-200 w-[140px] text-green-900 border-1 border-green-400 text-sm rounded-md'>Present</tr>
                    </div>
                    <div className='flex justify-between text-center p-1 border-1 border-gray-400'>
                      <tr className='w-[140px]'>02-Jan-2025</tr>
                      <tr className='bg-green-200 w-[140px] text-green-900 border-1 border-green-400 text-sm rounded-md'>Present</tr>
                    </div>
                    <div className='flex justify-between text-center p-1 border-1 border-gray-400'>
                      <tr className='w-[140px]'>03-Jan-2025</tr>
                      <tr className='bg-green-200 w-[140px] text-green-900 border-1 border-green-400 text-sm rounded-md'>Present</tr>
                    </div>
                    <div className='flex justify-between text-center p-1 border-1 border-gray-400'>
                      <tr className='w-[140px]'>04-Jan-2025</tr>
                      <tr className='bg-red-200 w-[140px] text-red-900 border-1 border-red-400 text-sm rounded-md'>Absent</tr>
                    </div>
                    <div className='flex justify-between text-center p-1 border-1 border-gray-400'>
                      <tr className='w-[140px]'>05-Jan-2026</tr>
                      <tr className='bg-green-200 w-[140px] text-green-900 border-1 border-green-400 text-sm rounded-md'>Present</tr>
                    </div>
                    <div className='flex justify-between text-center p-1 border-1 border-gray-400'>
                      <tr className='w-[140px]'>06-Jan-2026</tr>
                      <tr className='bg-red-200 w-[140px] text-red-900 border-1 border-red-400 text-sm rounded-md'>Absent</tr>
                    </div>
                  </table>}


                  {selected === "February" && <table className='w-full my-5'>
                    <div className='flex justify-between p-1 border-1 border-gray-400 bg-gray-200 '>
                      <th className='w-[140px]'>Date</th>
                      <th className='w-[140px]'>Status</th>
                    </div>
                    <div className='flex justify-between text-center p-1 border-1 border-gray-400'>
                      <tr className='w-[140px]'>01-Feb-2025</tr>
                      <tr className='bg-green-200 w-[140px] text-green-900 border-1 border-green-400 text-sm rounded-md'>Present</tr>
                    </div>
                    <div className='flex justify-between text-center p-1 border-1 border-gray-400'>
                      <tr className='w-[140px]'>02-Feb-2025</tr>
                      <tr className='bg-green-200 w-[140px] text-green-900 border-1 border-green-400 text-sm rounded-md'>Present</tr>
                    </div>
                    <div className='flex justify-between text-center p-1 border-1 border-gray-400'>
                      <tr className='w-[140px]'>03-Feb-2025</tr>
                      <tr className='bg-green-200 w-[140px] text-green-900 border-1 border-green-400 text-sm rounded-md'>Present</tr>
                    </div>
                    <div className='flex justify-between text-center p-1 border-1 border-gray-400'>
                      <tr className='w-[140px]'>04-Feb-2025</tr>
                      <tr className='bg-red-200 w-[140px] text-red-900 border-1 border-red-400 text-sm rounded-md'>Absent</tr>
                    </div>
                    <div className='flex justify-between text-center p-1 border-1 border-gray-400'>
                      <tr className='w-[140px]'>05-Feb-2026</tr>
                      <tr className='bg-green-200 w-[140px] text-green-900 border-1 border-green-400 text-sm rounded-md'>Present</tr>
                    </div>
                    <div className='flex justify-between text-center p-1 border-1 border-gray-400'>
                      <tr className='w-[140px]'>06-Feb-2026</tr>
                      <tr className='bg-red-200 w-[140px] text-red-900 border-1 border-red-400 text-sm rounded-md'>Absent</tr>
                    </div>
                  </table>}


                  {selected === "March" && <table className='w-full my-5'>


                    <div className='flex justify-between p-1 border-1 border-gray-400 bg-gray-200 '>
                      <th className='w-[140px]'>Date</th>
                      <th className='w-[140px]'>Status</th>
                    </div>
                    <div className='flex justify-between text-center p-1 border-1 border-gray-400'>
                      <tr className='w-[140px]'>01-Mar-2025</tr>
                      <tr className='bg-green-200 w-[140px] text-green-900 border-1 border-green-400 text-sm rounded-md'>Present</tr>
                    </div>
                    <div className='flex justify-between text-center p-1 border-1 border-gray-400'>
                      <tr className='w-[140px]'>02-Mar-2025</tr>
                      <tr className='bg-green-200 w-[140px] text-green-900 border-1 border-green-400 text-sm rounded-md'>Present</tr>
                    </div>
                    <div className='flex justify-between text-center p-1 border-1 border-gray-400'>
                      <tr className='w-[140px]'>03-Mar-2025</tr>
                      <tr className='bg-green-200 w-[140px] text-green-900 border-1 border-green-400 text-sm rounded-md'>Present</tr>
                    </div>
                    <div className='flex justify-between text-center p-1 border-1 border-gray-400'>
                      <tr className='w-[140px]'>04-Mar-2025</tr>
                      <tr className='bg-red-200 w-[140px] text-red-900 border-1 border-red-400 text-sm rounded-md'>Absent</tr>
                    </div>
                    <div className='flex justify-between text-center p-1 border-1 border-gray-400'>
                      <tr className='w-[140px]'>05-Mar-2026</tr>
                      <tr className='bg-green-200 w-[140px] text-green-900 border-1 border-green-400 text-sm rounded-md'>Present</tr>
                    </div>
                    <div className='flex justify-between text-center p-1 border-1 border-gray-400'>
                      <tr className='w-[140px]'>06-Mar-2026</tr>
                      <tr className='bg-red-200 w-[140px] text-red-900 border-1 border-red-400 text-sm rounded-md'>Absent</tr>
                    </div>
                  </table>}


                  {selected === "April" && <table className='w-full my-5'>
                    <div className='flex justify-between p-1 border-1 border-gray-400 bg-gray-200 '>
                      <th className='w-[140px]'>Date</th>
                      <th className='w-[140px]'>Status</th>
                    </div>
                    <div className='flex justify-between text-center p-1 border-1 border-gray-400'>
                      <tr className='w-[140px]'>01-Mar-2025</tr>
                      <tr className='bg-green-200 w-[140px] text-green-900 border-1 border-green-400 text-sm rounded-md'>Present</tr>
                    </div>
                    <div className='flex justify-between text-center p-1 border-1 border-gray-400'>
                      <tr className='w-[140px]'>02-Mar-2025</tr>
                      <tr className='bg-green-200 w-[140px] text-green-900 border-1 border-green-400 text-sm rounded-md'>Present</tr>
                    </div>
                    <div className='flex justify-between text-center p-1 border-1 border-gray-400'>
                      <tr className='w-[140px]'>03-Mar-2025</tr>
                      <tr className='bg-green-200 w-[140px] text-green-900 border-1 border-green-400 text-sm rounded-md'>Present</tr>
                    </div>
                    <div className='flex justify-between text-center p-1 border-1 border-gray-400'>
                      <tr className='w-[140px]'>04-Mar-2025</tr>
                      <tr className='bg-red-200 w-[140px] text-red-900 border-1 border-red-400 text-sm rounded-md'>Absent</tr>
                    </div>
                    <div className='flex justify-between text-center p-1 border-1 border-gray-400'>
                      <tr className='w-[140px]'>05-Mar-2026</tr>
                      <tr className='bg-green-200 w-[140px] text-green-900 border-1 border-green-400 text-sm rounded-md'>Present</tr>
                    </div>
                    <div className='flex justify-between text-center p-1 border-1 border-gray-400'>
                      <tr className='w-[140px]'>06-Mar-2026</tr>
                      <tr className='bg-red-200 w-[140px] text-red-900 border-1 border-red-400 text-sm rounded-md'>Absent</tr>
                    </div>
                  </table>}

                </div>


              </div>


            )}

          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
