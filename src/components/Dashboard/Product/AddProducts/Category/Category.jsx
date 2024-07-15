import React, { useState } from 'react';

const mockCategories = [
    { id: 1, name: 'TWS' },
    { id: 2, name: 'Smart Wearables' },
    { id: 3, name: 'Cooktop' },
    { id: 4, name: 'Light' },
];

const Category = () => {
    const [selectedCategories, setSelectedCategories] = useState([]);

    const handleCheckboxChange = (event) => {
        const { value } = event.target;
        setSelectedCategories((prevSelected) =>
            prevSelected.includes(value)
                ? prevSelected.filter((category) => category !== value)
                : [...prevSelected, value]
        );
    };

    const isCategorySelected = (category) => selectedCategories.includes(category);

    return (
        <>
            <div className='mt-10'>
                <div className='flex justify-between gap-10'>
                    <p className='text-[14px] leading-[18px] text-[#58595A] font-semibold'>Category</p>
                    <p className='text-[12px] leading-[16px] text-[#FF0000BF] font-normal'>Select at least one category!</p>
                </div>
                <div className="bg-white rounded-md border p-6 mt-2 h-[220px] overflow-y-auto">
                    {mockCategories.map((category) => (
                        <div key={category.id} className="flex items-center mb-3">
                            <input
                                type="checkbox"
                                id={`category-${category.id}`}
                                value={category.name}
                                checked={isCategorySelected(category.name)}
                                onChange={handleCheckboxChange}
                                className="mr-5  cursor-pointer"
                                style={{ accentColor: isCategorySelected(category.name) ? '#0052cc' : 'initial' }}
                            />
                            <label htmlFor={`category-${category.id}`} className="text-[12px] leading-[16px] text-[#58595A]">
                                {category.name}
                            </label>
                        </div>
                    ))}
                   <div className='flex justify-end'>
                   <button className="text-[#0052cc] text-[12px] leading-[16px] font-semibold mt-2 flex items-center">
                        <span className="material-symbols-outlined mr-2">add</span>
                        Add New Category
                    </button>
                   </div>
                </div>
            </div>
        </>
    );
};

export default Category;
