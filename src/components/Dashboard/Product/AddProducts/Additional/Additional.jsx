import React, { useState, useEffect } from 'react';

const AdditionalInfoEdit = ({ additionalInfo = [], onAdditionalInfoChange }) => {
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
    const newSections = sections.filter((_, i) => i !== index);
    setSections(newSections);
    onAdditionalInfoChange(newSections);
  };

  return (
    <div className='w-[100%] mt-10'>
      <div>
        <h1 className='text-[18px] leading-[23px] font-semibold'>Additional Info</h1>
      </div>
      {sections.map((section, index) => (
        <div key={index} className='mt-2 border rounded-md p-5'>
          <div className='flex flex-col gap-2 mt-5'>
            <label className='text-[14px] leading-[18px] text-[#58595A] font-semibold'>Section Title</label>
            <input
              type='text'
              className='input border  rounded-md w-full py-2 px-3 focus:border-[#0052cc] focus:border focus-within:ring-1  transition duration-150 text-black  ease-in-out'
              placeholder='Section Title'
              value={section.title}
              onChange={(e) => handleSectionChange(index, 'title', e.target.value)}
            />
          </div>
          <div className='flex flex-col gap-2 mt-5'>
            <label className='text-[14px] leading-[18px] text-[#58595A] font-semibold'>Description</label>
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
