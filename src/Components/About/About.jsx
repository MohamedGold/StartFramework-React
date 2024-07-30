import React from 'react';
import aboutStyle from './About.module.css';

export default function About() {
  return (
    <>
      <div
        className={` flex items-center  text-white justify-center flex-col py-5 pb-10 bg-[--main-color] ${aboutStyle.about}`}
      >
        <h2 className="md:text-[40px] text-[30px] text-center uppercase  font-[700] py-3">
          about component
        </h2>
        <div className="style_box flex  items-center justify-center mb-3">
          <div className="ruler_1 h-[4px] w-[80px]  me-4 bg-white"></div>
          <i className="fa-solid fa-star  "></i>
          <div className="ruler_2 h-[4px] w-[80px]  ms-4 bg-white"></div>
        </div>
        <div className="box flex justify-center items-center px-[3rem] md:px-[8rem] md:mx-12 flex-wrap md:flex-nowrap  container  ">
          <div className="about_1  md:w-1/2 md:ps-[3rem] me-[3rem] my-3 ">
            <p>
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>
          <div className="about_2  md:w-1/2 md:pe-[3rem] my-3">
            <p>
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
