import React from 'react';
import homeLogo from '../../assets/home_avatar.svg';
import homeStyle from './Home.module.css';

export default function Home() {
  return (
    <>
      <header className={`bg-[--main-color] relative   pt-5 ${homeStyle.home}`}>
        <div className="home__logo flex   justify-center items-center flex-col    ">
          <img className="w-[250px] mt-14 my-10" src={homeLogo} alt="home-logo" />

          <div className="title text-center text-white">
            <h2 className="uppercase text-[30px] md:text-[40px] font-[700] mb-3">
              start Framework
            </h2>
            <div className="style_box flex  items-center justify-center mb-3">
              <div className="ruler_1 h-[4px] w-[80px]  me-4 bg-white"></div>
              <i className="fa-solid fa-star  "></i>
              <div className="ruler_2 h-[4px] w-[80px]  ms-4 bg-white"></div>
            </div>
            <span className="details mb-3 block ">
              Graphic Artist - Web Designer - Illustrator
            </span>
          </div>
        </div>
      </header>
    </>
  );
}
