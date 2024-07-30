import React from 'react';
import errorStyle from './Error.module.css';
import errorImg from '../../assets/error.svg';
export default function Error() {
  return (
    <>
      <div
        className={`md:w-[50%] md:mt-8  flex items-center justify-center  mx-auto ${errorStyle.error}`}
      >
        <img className="w-full" src={`${errorImg}`} alt="error" />
      </div>
    </>
  );
}
