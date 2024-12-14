import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';

const Purchase = ({ PurchaseOptions = [], onPurchaseOptionsChange, error }) => {
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
  console.log(error, "error purchase options")
  return (
    <div className='w-[100%] mt-10'>
      <div>
        <h1 className='text-[18px] leading-[23px] font-semibold'>Purchase Options</h1>
      </div>
      <div className='border mt-2  w-full  rounded-md p-5'>
        <div className='flex w-full'>
          <div className='w-[40%]'>
            <label className='ml-2 text-[14px] leading-[18px] text-[#58595A] font-semibold'>
              <span className="text-[#EE4444] mr-1"> *</span>
              Store Name</label>
              
          </div>
          <div className='w-[50%]'>
            <label className='ml-5 text-[14px] leading-[18px] text-[#58595A] font-semibold'>
              <span className="text-[#EE4444] mr-1"> *</span>
              Product Review Link</label>
          </div>
        </div>
        {options.map((option, index) => (
          <div key={index} className='mt-3 flex gap-5 '>
            <div className='flex flex-col gap-2  w-[40%]'>
              <input
                type='text'
                className='input border border-gray-300 dark:border-gray-600 dark:bg-transparent rounded-md w-full py-2 px-3 focus:border-[#0052cc] focus:border focus-within:ring-1 appearance-none transition duration-150 text-black ease-in-out bg-[#F7F7F7]'
                placeholder='Store Name'
                value={option.title}
                onChange={(e) => handleOptionChange(index, 'title', e.target.value)}
              />
              {error?.errPurchase?.[index]?.title && (
                <span className="text-red-500 text-xs">{error.errPurchase[index].title}</span>
              )}
            </div>
            <div className='flex flex-col gap-2  w-[50%]'>  
              <input
                type='text'
                className='input border border-gray-300 dark:border-gray-600 dark:bg-transparent rounded-md w-full py-2 px-3 focus:border-[#0052cc] focus:border focus-within:ring-1 appearance-none transition duration-150 text-black ease-in-out bg-[#F7F7F7]'
                placeholder='Product Review URL'
                value={option.link}
                onChange={(e) => handleOptionChange(index, 'link', e.target.value)}
              />
               {error?.errPurchase?.[index]?.link && (
                <span className="text-red-500 text-xs">{error.errPurchase[index].link}</span>
              )}
            </div>
            <div className='flex flex-col gap-2  items-center w-[5%]'>
              <button
                className=' text-[#FF4040] text-[1.125rem] leading-[16px] font-semibold flex items-center px-3 py-1'
                onClick={() => removeOption(index)}
              >
                <span className="material-symbols-outlined mr-2">delete</span>

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
    </div>
  );
};

export default Purchase;
