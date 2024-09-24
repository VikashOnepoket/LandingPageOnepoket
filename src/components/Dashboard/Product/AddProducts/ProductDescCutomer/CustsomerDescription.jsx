import React from 'react'

const CustsomerDescription = ({formData,onInputChange}) => {
    return (
        <div className='w-[100%] mt-10'>
            <div>
                <h1 className='text-[18px] leading-[23px] font-semibold'>Product  Description for Customers</h1>
            </div>
            <div className='mt-2'>
                <textarea
                    type='text'
                    className='input  border 
            border-gray-300 
            dark:border-gray-600 
            dark:bg-transparent 
            rounded-md 
            h-28
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
                    placeholder='Description'
                    value={formData?.product_desc_for_customer}
                        onChange={(e) => onInputChange('product_desc_for_customer', e.target.value)}

                ></textarea>
            </div>

        </div>
    )
}

export default CustsomerDescription
