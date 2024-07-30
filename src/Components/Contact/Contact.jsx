import React from 'react';
import contactStyle from './Contact.module.css';

export default function Contact() {
  return (
    <>
      <div className={`${contactStyle.contact}`}>
        <div className={`title text-[#2c3e50] `}>
          <h2 className="uppercase text-[30px] md:text-[40px] text-center font-bold ">
            contact section
          </h2>
          <div className="style_box flex items-center justify-center mt-3">
            <div className="ruler_1 h-[4px] w-[80px] me-4 bg-[#2c3e50]"></div>
            <i className="fa-solid fa-star"></i>
            <div className="ruler_2 h-[4px] w-[80px] ms-4 bg-[#2c3e50]"></div>
          </div>

          {/* Form  */}

          <form className="max-w-2xl mt-[5rem] px-5 md:px-0 mb-10  mx-auto">
            <div className="relative z-0 w-full mb-10 group">
              <input
                type="text"
                name="floating_text"
                id="floating_text"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[var(--main-color)]  peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_text"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[var(--main-color)] peer-focus:dark:text-[var(--main-color)] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                userName
              </label>
            </div>
            <div className="relative z-0 w-full mb-10 group">
              <input
                type="number"
                name="floating_number"
                id="floating_number"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[var(--main-color)] peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_number"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[var(--main-color)] peer-focus:dark:text-[var(--main-color)] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                userAge
              </label>
            </div>
            <div className="relative z-0 w-full  mb-10 group">
              <input
                type="email"
                name="floating_email"
                id="floating_email"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[var(--main-color)] peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_email"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[var(--main-color)] peer-focus:dark:text-[var(--main-color)] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                userEmail
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="password"
                name="floating_password"
                id="floating_password"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[var(--main-color)] peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_password"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[var(--main-color)] peer-focus:dark:text-[var(--main-color)] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                userPassword
              </label>
            </div>

            <button
              type="button"
              className="text-white bg-[var(--main-color)] transition-all hover:bg-green-700  focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center  "
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
