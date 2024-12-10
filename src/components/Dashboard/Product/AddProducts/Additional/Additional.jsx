import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';

const AdditionalInfoEdit = ({ additionalInfo = [], onAdditionalInfoChange, error }) => {
  const [sections, setSections] = useState(additionalInfo.length > 0 ? additionalInfo : [{ title: '', description: '' }]);

  useEffect(() => {
    if (additionalInfo.length === 0) {
      onAdditionalInfoChange([{ title: '', description: '' }]);
    }
  }, []);

  const handleSectionChange = (index, name, value) => {
    const newSections = [...sections];
    newSections[index] = { ...newSections[index], [name]: value };
    setSections(newSections);
    onAdditionalInfoChange(newSections);
  };

  const addSection = () => {
    const newSections = [...sections, { title: '', description: '' }];
    setSections(newSections);
    onAdditionalInfoChange(newSections);
  };

  const removeSection = (index) => {
    if (index === 0) {
      // Prevent deletion of the first option
      return toast.error("At least one required")
    }
    const newSections = sections.filter((_, i) => i !== index);
    setSections(newSections);
    onAdditionalInfoChange(newSections);
  };


  return (
    <div className='w-[100%] mt-10'>
      <div className='flex justify-between'>
        <h1 className='text-[18px] leading-[23px] font-semibold'>Product Highlights</h1>
        {/* {error?.errAddInfo && <span className="text-red-500 text-xs">{error.errAddInfo}</span>} */}
      </div>
      {sections.map((section, index) => (
        <div key={index} className='mt-2 border rounded-md p-5'>
          <div className='flex flex-col gap-2 mt-5'>
            <label className='ml-2 text-[14px] leading-[18px] text-[#58595A] font-semibold'>
              <span className="text-[#EE4444] mr-1"> *</span>
              Section Title</label>
            {error?.errAddInfo?.[index]?.title && (
              <span className="text-red-500 text-xs">{error.errAddInfo[index].title}</span>
            )}

            <input
              type='text'
              className='input border  rounded-md w-full py-2 px-3 focus:border-[#0052cc] focus:border focus-within:ring-1  transition duration-150 text-black  ease-in-out'
              placeholder='Section Title'
              value={section.title}
              onChange={(e) => handleSectionChange(index, 'title', e.target.value)}
            />
          </div>
          <div className='flex flex-col gap-2 mt-5'>
            <label className='ml-2 text-[14px] leading-[18px] text-[#58595A] font-semibold'>
              <span className="text-[#EE4444] mr-1"> *</span>
              Description</label>
            {error?.errAddInfo?.[index]?.description && (
              <span className="text-red-500 text-xs">{error.errAddInfo[index].description}</span>
            )}
            <textarea
              className='input border h-28 border-gray-300 dark:border-gray-600 dark:bg-transparent rounded-md w-full py-2 px-3 focus:border-[#0052cc] focus:border focus-within:ring-1 appearance-none transition duration-150 text-black  ease-in-out'
              placeholder='Description'
              value={section.description}
              onChange={(e) => handleSectionChange(index, 'description', e.target.value)}
            ></textarea>
          </div>
          <div className='flex justify-end'>
            <button
              className='mt-2 text-[#FF4040] text-[12px] leading-[16px] font-semibold flex items-center px-3 py-2'
              onClick={() => removeSection(index)}
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
          onClick={addSection}
        >
          <span className="material-symbols-outlined mr-2">add</span>
          Add Section
        </button>
      </div>
    </div>
  );
};

export default AdditionalInfoEdit;
