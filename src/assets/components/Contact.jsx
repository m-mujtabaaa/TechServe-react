import React from 'react'

function Contact() {
  return (
    <>
      {/* Header */}
      <div className='bg-[#08182C6E] bg-cover h-[160px] md:h-[220px]  mt-[60px] -z-1'>
        <img src="computerlab.jpg" alt="" className='absolute -z-2 h-[160px] md:h-[220px] w-full' />
        <div className='px-[30px] md:px-[50px] py-[35px] md:py-[50px]'>
          <h2 className="text-white font-bold text-[35px] md:text-[50px]">CONTACT US</h2>
          <h4 className="text-[19px] text-gray-400 font-bold">
            <span className="text-white">Contact Us</span> / <a href="/" className="hover:text-white duration-300">Home</a>
          </h4>
        </div>
      </div>

      {/* Form + Info Panel */}
      <div className="flex flex-col md:flex-row justify-center items-center md:h-[450px] w-screen md:w-[1100px] rounded-lg shadow-xl overflow-hidden md:mx-auto my-20">
        {/* Form */}
        <div className="w-[90%] md:w-1/2 h-[500px] md:h-full bg-[#e7e7e7ff] flex items-center justify-center  rounded-lg md:rounded-[0px]">
          <form className="w-4/5 py-10">
            <h2 className="text-[#13345B] text-[28px] font-bold mb-6">Send Message</h2>

            <input
              type="text"
              placeholder="Name"
              className="w-full mb-4 px-4 py-2 border-b-2 border-[#13345B] outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full mb-4 px-4 py-2 border-b-2 border-[#13345B] outline-none"
            />
            <textarea
              placeholder="Type your Message..."
              className="w-full mb-4 px-4 py-2 border-b-2 border-[#13345B] outline-none resize-none min-h-[120px]"
            />

            <button className="h-10 mt-6 w-full font-bold duration-300 text-white bg-[#075197] hover:bg-[#200459] rounded">
              Send Message
            </button>
          </form>
        </div>

        {/* Info Panel */}
        <div className="w-[90%] md:w-1/2 h-[500px] md:h-full bg-[#13345B] text-white flex items-center justify-center mt-6 md:mt-0  rounded-lg md:rounded-[0px]">
          <div className="px-8 md:px-10 space-y-6">
            <h2 className="text-3xl font-bold">Let’s Talk</h2>
            <p className="text-md text-white">
              Have a question or need help? Fill out the form and our team will get back to you shortly.
            </p>

            <div className="space-y-4 text-gray-200">
              {/* Address */}
              <div className="flex items-start space-x-3">
                <span className="flex items-center justify-center w-8 h-8 bg-[#075197] rounded-full text-white text-lg">📍</span>
                <p className="text-sm md:text-base">
                  3-A 12/1 Near Tayaba Masjid, Nazimabad No. 3, Karachi
                </p>
              </div>

              {/* Phone 1 */}
              <div className="flex items-center space-x-3">
                <span className="flex items-center justify-center w-8 h-8 bg-[#075197] rounded-full text-white text-lg">📞</span>
                <a href="tel:+923115994479" className="text-sm md:text-base hover:text-white transition-colors">
                  +92 311 5994479
                </a>
              </div>

              {/* Phone 2 */}
              <div className="flex items-center space-x-3">
                <span className="flex items-center justify-center w-8 h-8 bg-[#075197] rounded-full text-white text-lg">📞</span>
                <a href="tel:+923350354042" className="text-sm md:text-base hover:text-white transition-colors">
                  +92 335 0354042
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-3">
                <span className="flex items-center justify-center w-8 h-8 bg-[#075197] rounded-full text-white text-lg">✉</span>
                <a href="mailto:contact@thetechserve.com" className="text-sm md:text-base hover:text-white transition-colors">
                  contact@thetechserve.com
                </a>
              </div>

              {/* Working Hours */}
              <div className="flex items-start space-x-3">
                <span className="flex items-center justify-center w-8 h-8 bg-[#075197] rounded-full text-white text-lg">⏰</span>
                <div className="space-y-1 text-sm md:text-base">
                  <p><strong>Monday - Friday:</strong> 09:00 - 20:00</p>
                  <p><strong>Saturday & Sunday:</strong> 10:30 - 22:30</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Google Map */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3618.4829626168303!2d67.029322!3d24.915612!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33fa2235b5867%3A0xbc45d3b350c0d8f9!2sTechServe%20Computing%20Institute!5e0!3m2!1sen!2sus!4v1769589663816!5m2!1sen!2sus"
        className="w-screen md:w-full h-[80vh] border-0"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="TechServe Location"
      ></iframe>
    </>
  )
}

export default Contact
