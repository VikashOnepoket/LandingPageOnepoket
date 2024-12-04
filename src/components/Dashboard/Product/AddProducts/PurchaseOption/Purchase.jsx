import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';

const Purchase = ({ PurchaseOptions = [], onPurchaseOptionsChange }) => {
  const [options, setOptions] = useState(PurchaseOptions.length > 0 ? PurchaseOptions : [{ title: '', link: '' }]);

  useEffect(() => {
    if (PurchaseOptions.length === 0) {
      onPurchaseOptionsChange([{ title: '', link: '' }]);
    }
  }, []);

  const handleOptionChange = (index, name, value) => {
    const newOptions = [...options];
    newOptions[index] = { ...newOptions[index], [name]: value };
    setOptions(newOptions);
    onPurchaseOptionsChange(newOptions);
  };

  const addOption = () => {
    const newOptions = [...options, { title: '', link: '' }];
    setOptions(newOptions);
    onPurchaseOptionsChange(newOptions);
  };

  const removeOption = (index) => {
    if (index === 0) {
      // Prevent deletion of the first option
      return toast.error("At least one required")
    }
    const newOptions = options.filter((_, i) => i !== index);
    setOptions(newOptions);
    onPurchaseOptionsChange(newOptions);
  };

  return (
    <div className='w-[100%] mt-10'>
      <div>
        <h1 className='text-[18px] leading-[23px] font-semibold'>Purchase Options</h1>
      </div>
      {options.map((option, index) => (
        <div key={index} className='mt-2 border rounded-md p-5'>
          <div className='flex flex-col gap-2 mt-5'>
            <label className='ml-2 text-[14px] leading-[18px] text-[#58595A] font-semibold'>
            <span className="text-[#EE4444] mr-1"> *</span>
              Store Name</label>
            <input
              type='text'
              className='input border border-gray-300 dark:border-gray-600 dark:bg-transparent rounded-md w-full py-2 px-3 focus:border-[#0052cc] focus:border focus-within:ring-1 appearance-none transition duration-150 text-black ease-in-out'
              placeholder='Store Name'
              value={option.title}
              onChange={(e) => handleOptionChange(index, 'title', e.target.value)}
            />
          </div>
          <div className='flex flex-col gap-2 mt-5'>
            <label className='ml-2 text-[14px] leading-[18px] text-[#58595A] font-semibold'>
            <span className="text-[#EE4444] mr-1"> *</span>
              Product Review Link</label>
            <input
              type='text'
              className='input border border-gray-300 dark:border-gray-600 dark:bg-transparent rounded-md w-full py-2 px-3 focus:border-[#0052cc] focus:border focus-within:ring-1 appearance-none transition duration-150 text-black ease-in-out'
              placeholder='Product Review URL'
              value={option.link}
              onChange={(e) => handleOptionChange(index, 'link', e.target.value)}
            />
          </div>
          <div className='flex justify-end'>
            <button
              className='mt-2 text-[#FF4040] text-[12px] leading-[16px] font-semibold flex items-center px-3 py-2'
              onClick={() => removeOption(index)}
            >
              <span className="material-symbols-outlined mr-2">delete</span>
              Delete Section
            </button>
          </div>
        </div>
      ))}
      <div className='mt-3 flex justify-end'>
        <button
          className='text-[#0052cc] text-[12px] leading-[16px] font-semibold rounded-md flex items-center px-3 py-2'
          onClick={addOption}
        >
          <span className="material-symbols-outlined mr-2">add</span>
          Add Section
        </button>
      </div>
    </div>
  );
};

export default Purchase;
