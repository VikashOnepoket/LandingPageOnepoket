import React, { useState } from 'react';

const Switch = ({ label }) => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <div className="flex  gap-5 mt-5 flex-col">
      <span className="text-[14px] leading-[18px] text-[#58595A] font-semibold">{label}</span>
      <div
        onClick={toggleSwitch}
        className={`relative inline-flex  h-6 w-11 items-center rounded-full cursor-pointer transition-colors duration-200 ${isOn ? 'bg-[#0052cc]' : 'bg-gray-300'}`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${isOn ? 'translate-x-6' : 'translate-x-1'}`}
        />
      </div>
      {/* <span className={`text-[14px] leading-[18px] font-semibold ${isOn ? 'text-[#0052cc]' : 'text-gray-500'}`}>{isOn ? 'On' : 'Off'}</span> */}
    </div>
  );
};

const BasicInformation = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col gap-2">
        <label className="text-[14px] leading-[18px] text-[#58595A] font-semibold">Product Name</label>
        <input
          type="text"
          className="input border border-gray-300 dark:border-gray-600 dark:bg-transparent rounded-md w-full py-2 px-3 focus:border-[#0052cc] focus:border focus-within:ring-1 appearance-none transition duration-150 dark:text-gray-100 ease-in-out"
          placeholder="Enter Product name"
        />
      </div>

      <div className="flex flex-col gap-2 mt-5">
        <label className="text-[14px] leading-[18px] text-[#58595A] font-semibold">Model Number</label>
        <input
          type="text"
          className="input border border-gray-300 dark:border-gray-600 dark:bg-transparent rounded-md w-full py-2 px-3 focus:border-[#0052cc] focus:border focus-within:ring-1 appearance-none transition duration-150 dark:text-gray-100 ease-in-out"
          placeholder="Enter Model number"
        />
      </div>

      <div className="flex flex-col gap-2 mt-5">
        <label className="text-[14px] leading-[18px] text-[#58595A] font-semibold">Description Number</label>
        <textarea
          type="text"
          className="input border h-28 border-gray-300 dark:border-gray-600 dark:bg-transparent rounded-md w-full py-2 px-3 focus:border-[#0052cc] focus:border focus-within:ring-1 appearance-none transition duration-150 dark:text-gray-100 ease-in-out"
          placeholder="Enter Description"
        ></textarea>
      </div>

      <div className="mt-5 flex gap-10">
        <Switch label="Show Manufacture Date" />
        <Switch label="Installation Details" />
      </div>
    </div>
  );
};

export default BasicInformation;
