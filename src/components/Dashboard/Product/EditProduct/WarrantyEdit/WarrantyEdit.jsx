import React, { useState } from 'react'

const WarrantyEdit = ({ formData, onInputChange, error }) => {

    return (
        <div className='w-[100%] mt-10'>
            <div>
                <h1 className='text-[18px] leading-[23px] font-semibold'>Warranty</h1>
            </div>
            {error?.errWarranty && <span className="text-red-500 text-xs">{error.errWarranty}</span>}
            <div className='flex gap-5'>
                <div className='flex flex-col gap-2 mt-5 w-1/2'>
                    <label className='text-[14px] leading-[18px] text-[#58595A] font-semibold'>Years</label>
                    <input
                        type='text'
                        className='input  border 
            border-gray-300 
            dark:border-gray-600 
            dark:bg-transparent 
            rounded-md 
            w-full 
            py-2 px-3 
            focus:border-[#0052cc]
            focus:border
           
            focus-within:ring-1 
            appearance-none 
            transition 
            duration-150 
            text-black  
            ease-in-out'
                        placeholder='years'
                        value={formData?.warranty_years}
                        onChange={(e) => onInputChange('warranty_years', e.target.value)}

                    />
                </div>
                <div className='flex flex-col gap-2 mt-5 w-1/2'>
                    <label className='text-[14px] leading-[18px] text-[#58595A] font-semibold'>Months</label>
                    <input
                        type='text'
                        className='input  border 
            border-gray-300 
            dark:border-gray-600 
            dark:bg-transparent 
            rounded-md 
            w-full 
            py-2 px-3 
            focus:border-[#0052cc]
            focus:border
           
            focus-within:ring-1 
            appearance-none 
            transition 
            duration-150 
            text-black  
            ease-in-out'
                        placeholder='month'
                        value={formData?.warranty_months}
                        onChange={(e) => onInputChange('warranty_months', e.target.value)}

                    />
                </div>
            </div>

        </div>
    )
}

export default WarrantyEdit;
