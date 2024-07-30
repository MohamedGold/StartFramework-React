import React, { useState } from 'react';
import portfolioStyle from './Portfolio.module.css';
import img1 from '../../assets/port1.png';
import img2 from '../../assets/port2.png';
import img3 from '../../assets/port3.png';
import img4 from '../../assets/port1.png';
import img5 from '../../assets/port2.png';
import img6 from '../../assets/port3.png';

const portfolioItems = [
  {
    id: 1,
    src: img1,
    alt: 'img1',
  },
  {
    id: 2,
    src: img2,
    alt: 'img2',
  },
  {
    id: 3,
    src: img3,
    alt: 'img3',
  },
  {
    id: 4,
    src: img4,
    alt: 'img3',
  },
  {
    id: 5,
    src: img5,
    alt: 'img5',
  },
  {
    id: 6,
    src: img6,
    alt: 'img6',
  },
];

export default function Portfolio() {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleClick = (item) => {
    setSelectedItem(item);
  };

  const handleClose = () => {
    setSelectedItem(null);
  };

  return (
    <>
      <div className={`portfolio ${portfolioStyle.portfolio}`}>
        <div className={`title text-center ${portfolioStyle.title}`}>
          <h2 className="uppercase text-[30px] md:text-[40px] font-bold">
            portfolio component
          </h2>
          <div className="style_box flex items-center justify-center mt-3">
            <div className="ruler_1 h-[4px] w-[80px] me-4 bg-[#2c3e50]"></div>
            <i className="fa-solid fa-star"></i>
            <div className="ruler_2 h-[4px] w-[80px] ms-4 bg-[#2c3e50]"></div>
          </div>
        </div>

        {/* =============== */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-[2rem]  max-w-screen-xl mx-auto  gap-10 my-8">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="portfolio-item relative  cursor-pointer"
              onClick={() => handleClick(item)}
            >
              <img
                src={item.src}
                alt={item.alt}
                className={`w-full   h-auto rounded-xl `}
              />
              <div
                className={`${portfolioStyle.layer__card} absolute inset-0 flex items-center justify-center rounded-xl`}
              >
                <i className="text-white fa-solid fa-plus fa-6x"></i>
              </div>
            </div>
          ))}
        </div>

        {selectedItem && (
          <div
            className="fixed inset-0   bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={handleClose}
          >
            <div
              className="relative bg-white  p-4 rounded-lg max-w-xl mx-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedItem.src}
                alt={selectedItem.alt}
                className="w-full h-auto"
              />
              <button
                className="absolute top-0 right-0  text-red-500 "
                onClick={handleClose}
              >
                <i class="fa-solid fa-square-xmark  p-5  text-[40px]"></i>
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
