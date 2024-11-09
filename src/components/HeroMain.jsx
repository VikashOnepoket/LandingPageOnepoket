import React from 'react';
import './HeroMain.css'

const items = [
  "Simplify Warranties, Empower Brands",
  "Actionable Insights, Smarter Decisions",
  "Scan, Register, Engage Instantly"
];

const HeroMain = () => {
  return (
    <div className='md:mt-[9rem] mb-[6rem] text-center mt-[5rem]'>
      <div className="overflow-hidden h-[100px] flex justify-center items-center relative ">
        <ul className="flex flex-col items-center justify-center h-full absolute animation-loop">
          {items.map((item, index) => (
            <li
              key={index}
              className="text-center md:text-[4rem] md:leading-[6rem] text-[2rem] leading-[3rem] font-bold text-[#0052CC] sintony animation-item"
              style={{ animationDelay: `${index * 1}s` }}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <h1 className='text-center md:text-[4rem] md:leading-[6rem] text-[2rem] leading-[3rem] font-bold text-[#282828] sintony mt-[1rem]'>
        With One QR
      </h1>
      <div className='flex justify-center items-center mt-[3.81rem]'>
        <button className='flex items-center justify-center  py-[1rem] px-[2.3125rem] rounded-[0.625rem]  bg-[#0052CC] text-white button-shadow text-[1rem] font-bold leading-[2rem]'
         onClick={() => window.location.href = 'https://calendly.com/ujjwal-onepoket'}
        >BOOK YOUR DEMO
          <span className='ml-5'>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" viewBox="0 0 14 12" fill="none"><path d="M8.33333 1L13 5.66667M13 5.66667L8.33333 10.3333M13 5.66667H1" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path></svg>
          </span>
        </button>
      </div>
      <div className='mt-[4.5rem] text-center md:w-[65%] mx-auto w-[90%]'>
        <p className='text-[18px] leading-[30px] font-normal text-color'>
          Onepoket’s QR technology not only gets you <span className='text-[18px] leading-[30px] font-bold'>Customer Name, Number,</span> and <span className='text-[18px] leading-[30px] font-bold'>Demographics</span>; it's your <span className='text-[18px] leading-[30px] font-bold'>VIP pass</span> to the first-party data of your target market.
        </p>
      </div>
    </div>
  );
};

export default HeroMain;
