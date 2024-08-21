import React, { useState, useEffect } from 'react';

const PurchaseOptionEdit = ({ PurchaseOptions = [], onPurchaseOptionsChange, formData }) => {
    const [options, setOptions] = useState(formData?.Purchase_options || [{ title: '', link: '' }]);

    //   useEffect(() => {
    //     if (PurchaseOptions.length === 0) {
    //       onPurchaseOptionsChange([{ title: '', link: '' }]);
    //     }
    //   }, []);

    //   const [sections, setSections] = useState(formData?.additional_info || [{ title: '', description: '' }]);
    //   console.log(formData?.additional_info , "additonal")

    //   // Update sections state when formData.additionalInfo changes
    useEffect(() => {
        if (formData && formData?.Purchase_options) {
            setOptions(formData?.Purchase_options);
        }
    }, [formData]);

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
                        <label className='text-[14px] leading-[18px] text-[#58595A] font-semibold'>Store Name</label>
                        <input
                            type='text'
                            className='input border border-gray-300 dark:border-gray-600 dark:bg-transparent rounded-md w-full py-2 px-3 focus:border-[#0052cc] focus:border focus-within:ring-1 appearance-none transition duration-150 dark:text-gray-100 ease-in-out'
                            placeholder='Store Name'
                            value={option.title}
                            onChange={(e) => handleOptionChange(index, 'title', e.target.value)}
                        />
                    </div>
                    <div className='flex flex-col gap-2 mt-5'>
                        <label className='text-[14px] leading-[18px] text-[#58595A] font-semibold'>Product Review Link</label>
                        <input
                            type='text'
                            className='input border border-gray-300 dark:border-gray-600 dark:bg-transparent rounded-md w-full py-2 px-3 focus:border-[#0052cc] focus:border focus-within:ring-1 appearance-none transition duration-150 dark:text-gray-100 ease-in-out'
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

export default PurchaseOptionEdit;
