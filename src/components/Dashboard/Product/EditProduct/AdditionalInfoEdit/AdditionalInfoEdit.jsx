import React, { useState, useEffect } from 'react';

const AdditionalInfoEdit = ({ additionalInfo = [], onAdditionalInfoChange, formData, error }) => {
  // Initialize sections state with additionalInfo from formData if available
  const [sections, setSections] = useState([{ title: '', description: '' }]);
  // Update sections state when formData.additionalInfo changes
  useEffect(() => {
    if (formData && formData.additional_info) {
      setSections(formData.additional_info.length ? formData.additional_info : [{ title: '', description: '' }]);
    }
  }, []);


  const handleSectionChange = (id, name, value) => {
    const newSections = sections.map(section =>
      section?.id === id ? { ...section, [name]: value } : section
    );
    setSections(newSections);
    onAdditionalInfoChange(newSections);
  };

  const addSection = () => {
    const newSections = [...sections, { title: '', description: '' }];
    setSections(newSections);
    onAdditionalInfoChange(newSections);
  };

  console.log(sections, "sections")

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
        <div key={section?.id} className='mt-2 border rounded-md p-5'>
          <div className='flex flex-col gap-2 mt-5'>
            <label className='ml-2 text-[14px] leading-[18px] text-[#58595A] font-semibold'>
              <span className="text-[#EE4444] mr-1"> *</span>
              Section Title</label>
            <input
              type='text'
              className='input border border-gray-300 dark:border-gray-600 dark:bg-transparent rounded-md w-full py-2 px-3 focus:border-[#0052cc] focus:border focus-within:ring-1 appearance-none transition duration-150 text-black   ease-in-out bg-[#F7F7F7]'

              placeholder='Section Title'
              value={section.title}
              onChange={(e) => handleSectionChange(section?.id, 'title', e.target.value)}
            />
            {error?.errAddInfo?.[index]?.title && (
              <span className="text-red-500 text-xs">{error.errAddInfo[index].title}</span>
            )}
          </div>
          <div className='flex flex-col gap-2 mt-5'>
            <label className='ml-2 text-[14px] leading-[18px] text-[#58595A] font-semibold'>
              <span className="text-[#EE4444] mr-1"> *</span>
              Description</label>
            <textarea
              className='input border h-28 border-gray-300 dark:border-gray-600 dark:bg-transparent rounded-md w-full py-2 px-3 focus:border-[#0052cc] focus:border focus-within:ring-1 appearance-none transition duration-150 text-black   ease-in-out bg-[#F7F7F7]'
              placeholder='Description'
              value={section.description}
              onChange={(e) => handleSectionChange(section?.id, 'description', e.target.value)}
            ></textarea>
            {error?.errAddInfo?.[index]?.description && (
              <span className="text-red-500 text-xs">{error.errAddInfo[index].description}</span>
            )}
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
