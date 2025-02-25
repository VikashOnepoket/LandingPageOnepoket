import React from 'react';

const Switch = ({ label, value, onChange }) => {
    const toggleSwitch = () => {
        onChange(!value);
    };

    return (
        <div className="flex gap-5 mt-5 flex-col">
            <span className="text-[14px] leading-[18px] text-[#58595A] font-semibold">{label}</span>
            <div
                onClick={toggleSwitch}
                className={`relative inline-flex h-6 w-11 items-center rounded-full cursor-pointer transition-colors duration-200 ${value ? 'bg-[#0052cc]' : 'bg-gray-300'}`}
            >
                <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${value ? 'translate-x-6' : 'translate-x-1'}`}
                />
            </div>
        </div>
    );
};

const BasicInformationEdit = ({ formData, onInputChange, error }) => {
    console.log(formData, "formData")
    return (
        <div className="w-full">
            <div className="flex flex-col gap-2">
                <label className="ml-2 text-[14px] leading-[18px] text-[#58595A] font-semibold">
                    <span className="text-[#EE4444] mr-1"> *</span>
                    Product Name
                </label>

                <input
                    type="text"
                    className="input border border-gray-300 dark:border-gray-600 dark:bg-transparent rounded-md w-full py-2 px-3 focus:border-[#0052cc] focus:border focus-within:ring-1 appearance-none transition duration-150 text-black   ease-in-out bg-[#F7F7F7]"
                    placeholder="Enter Product name"

                    value={formData?.product_name}
                    onChange={(e) => onInputChange('product_name', e.target.value)}
                />
                {error?.errProductName && <span className="text-red-500 text-xs">{error.errProductName}</span>}
            </div>

            <div className="flex flex-col gap-2 mt-5">
                <label className="ml-2 text-[14px] leading-[18px] text-[#58595A] font-semibold">
                    <span className="text-[#EE4444] mr-1"> *</span>
                    Model Number</label>
                <input
                    type="text"
                    className="input border border-gray-300 dark:border-gray-600 dark:bg-transparent rounded-md w-full py-2 px-3 focus:border-[#0052cc] focus:border focus-within:ring-1 appearance-none transition duration-150 text-black   ease-in-out bg-[#F7F7F7]"
                    placeholder="Enter Model number"
                    value={formData?.model_number}
                    onChange={(e) => onInputChange('model_number', e.target.value)}
                />
                {error?.errModelNumber && <span className="text-red-500 text-xs">{error.errModelNumber}</span>}
            </div>

            <div className="flex flex-col gap-2 mt-5">
                <label className="ml-2 text-[14px] leading-[18px] text-[#58595A] font-semibold">
                    <span className="text-[#EE4444] mr-1"> *</span>
                    Product Description</label>
                <textarea
                    className="input border h-28 border-gray-300 dark:border-gray-600 dark:bg-transparent rounded-md w-full py-2 px-3 focus:border-[#0052cc] focus:border focus-within:ring-1 appearance-none transition duration-150 text-black   ease-in-out bg-[#F7F7F7]"
                    placeholder="Enter Description"
                    value={formData?.description}
                    onChange={(e) => onInputChange('description', e.target.value)}
                ></textarea>
                {error?.errProductDescription && <span className="text-red-500 text-xs">{error.errProductDescription}</span>}
            </div>

            <div className="mt-5 flex gap-10">
                <Switch
                    label="Show Manufacture Date"
                    value={formData?.show_manufacture_date}
                    onChange={(value) => onInputChange('show_manufacture_date', value)}
                />
                <Switch
                    label="Installation Details"
                    value={formData?.installation_details}
                    onChange={(value) => onInputChange('installation_details', value)}
                />
            </div>
        </div>
    );
};

export default BasicInformationEdit;
