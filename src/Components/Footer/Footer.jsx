import React from 'react';
import footerStyle from './Footer.module.css';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <>
      <footer className="py-5 bg-[--second-color]  ">
        <div className="flex flex-wrap  justify-center items-center bg-[var(--second-color)] text-white p-[40px]  ">
          <div className=" card w-full my-5  p-[1rem] sm:w-1/3 md:w-1/3   text-center ">
            <h3 className="font-[500] text-[28px]">LOCATION</h3>
            <p className="mb-3">2215 John Daniel Drive</p>
            <span>Clark, MO 65465</span>
          </div>
          <div className="card w-full my-5 p-[1rem] sm:w-1/3 md:w-1/3   text-center">
            <h3 className="font-[500] text-[28px]">AROUND THE WEB</h3>
            <ul className="flex items-center justify-center my-1">
              <li>
                <Link to="">
                  <i
                    className={`fa-brands fa-facebook mx-1 ${footerStyle.icon}`}
                  ></i>
                </Link>
              </li>
              <li>
                <Link to="">
                  <i
                    className={`fa-brands fa-twitter mx-1 ${footerStyle.icon}`}
                  ></i>
                </Link>
              </li>
              <li>
                <Link to="">
                  <i
                    className={`fa-brands fa-linkedin-in mx-1 icon ${footerStyle.icon}`}
                  ></i>
                </Link>
              </li>
              <li>
                <Link to="">
                  <i
                    className={`fa-solid fa-globe mx-1 icon ${footerStyle.icon}`}
                  ></i>
                </Link>
              </li>
            </ul>
          </div>
          <div className="card w-full sm:w-1/3 p-[1rem] md:w-1/3 my-5  text-center">
            <h3 className="font-[500] text-[28px]">ABOUT FREELANCER</h3>
            <p className=" mx-auto">
              Freelance is a free to use, licensed Bootstrap theme created by
              Route
            </p>
          </div>
        </div>
      </footer>
      <div className="footer text-center bg-[#1A252F] text-white py-6">
        <p>Copyright © Your Website 2024</p>
      </div>
    </>
  );
}
