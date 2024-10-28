import React, { useState, useEffect } from 'react';

const PurchaseOptionEdit = ({ PurchaseOptions = [], onAdditionalInfoChange, formData }) => {
    const [options, setOptions] = useState([{ title: '', link: '' }]);

    useEffect(() => {
        if (formData && formData.PurchaseOptions) {
            setOptions(formData.PurchaseOptions.length ? formData.PurchaseOptions : [{ title: '', link: '' }]);
        }
    }, [formData]);
    console.log(formData.PurchaseOptions, "options")

    const handleOptionChange = (id, name, value) => {
        const newOptions = options.map(option =>
            option.id === id ? { ...option, [name]: value } : option
        );
        setOptions(newOptions);
        onPurchaseOptionChange(newOptions);
    };

    const addOption = () => {
        const newOptions = [...options, { title: '', link: '' }];
        setOptions(newOptions);
        onPurchaseOptionChange(newOptions);
    };

    const removeOption = (index) => {
        const newOptions = options.filter((_, i) => i !== index);
        setOptions(newOptions);
        onPurchaseOptionChange(newOptions);
    };



    return (
        <div className='w-[100%] mt-10'>
            <div>
                <h1 className='text-[18px] leading-[23px] font-semibold'>Purchase Options</h1>
            </div>
            {options.map((option) => (
                <div key={option?.id} className='mt-2 border rounded-md p-5'>
                    <div className='flex flex-col gap-2 mt-5'>
                        <label className='text-[14px] leading-[18px] text-[#58595A] font-semibold'>Store Name</label>
                        <input
                            type='text'
                            className='input border border-gray-300 dark:border-gray-600 dark:bg-transparent rounded-md w-full py-2 px-3 focus:border-[#0052cc] focus:border focus-within:ring-1 appearance-none transition duration-150 text-black   ease-in-out'
                            placeholder='Store Name'
                            value={option.title}
                            onChange={(e) => handleOptionChange(option?.id, 'title', e.target.value)}
                        />
                    </div>
                    <div className='flex flex-col gap-2 mt-5'>
                        <label className='text-[14px] leading-[18px] text-[#58595A] font-semibold'>Product Review Link</label>
                        <input
                            type='text'
                            className='input border border-gray-300 dark:border-gray-600 dark:bg-transparent rounded-md w-full py-2 px-3 focus:border-[#0052cc] focus:border focus-within:ring-1 appearance-none transition duration-150 text-black   ease-in-out'
                            placeholder='Product Review URL'
                            value={option.link}
                            onChange={(e) => handleOptionChange(option?.id, 'link', e.target.value)}
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
