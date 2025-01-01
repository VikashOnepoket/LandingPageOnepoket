import React from 'react';
import './HeroMain.css'

const items = [
  "Simplify Warranties, Empower Customers",
  "Actionable Insights, Smarter Decisions",
  "Scan, Register, Engage Instantly"
];

const HeroMain = () => {
  return (
    <div className=' mb-[6rem] text-center mt-[4.62rem] '>
      <div className="overflow-hidden h-[100px] flex justify-center items-center relative ">
        <ul className="flex flex-col items-center justify-center h-full absolute animation-loop">
          {items.map((item, index) => (
            <li
              key={index}
              className="text-center md:text-[3.5rem] md:leading-[6rem] text-[2rem] leading-[3rem] font-bold text-[#0052CC] sintony animation-item"
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
      <div className='mt-[1.13rem] text-center'>
        <p className='text-[1.2rem] leading-[2rem] font-normal text-color'>For D2C brands looking to build lasting loyalty, Onepoket simplifies <br/> warranty management, onboarding, and post-purchase engagement <br/> through QR-powered technology and real-time insights.</p>
      </div>
      <div className='flex justify-center items-center mt-[3.75rem]'>
        <button className='flex items-center justify-center  py-[1rem] px-[2.3125rem] rounded-[1.875rem]  bg-[#0052CC] text-white button-shadow text-[1rem] font-bold leading-[2rem]'
          onClick={() => window.location.href = 'https://calendly.com/ujjwal-onepoket'}
        >Request a free demo
          <span className='ml-5'>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" viewBox="0 0 14 12" fill="none"><path d="M8.33333 1L13 5.66667M13 5.66667L8.33333 10.3333M13 5.66667H1" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path></svg>
          </span>
        </button>
      </div>
      <div className='mt-[4.12rem] text-center '>
        <p className='text-[1.2rem] leading-[2rem] font-normal text-color'>We turn warranty frustration into seamless and hassle free solutions and superior <br/> customer experiences.</p>
      </div>
    </div>
  );
};

export default HeroMain;
