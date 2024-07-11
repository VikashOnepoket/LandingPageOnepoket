import React from 'react'

const BasicInformation = () => {
    return (
        <>

            <div className='w-[100%]'>
                {/* product name */}
                <div className='flex flex-col gap-2'>
                    <label className='text-[14px] leading-[18px] text-[#58595A] font-semibold'>Product Name</label>
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
            dark:text-gray-100
            ease-in-out'
                        placeholder='Enter Product name'

                    />
                </div>

                {/* model number */}
                <div className='flex flex-col gap-2 mt-5'>
                    <label className='text-[14px] leading-[18px] text-[#58595A] font-semibold'>Model Number</label>
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
            dark:text-gray-100
            ease-in-out'
                        placeholder='Enter Model number'

                    />
                </div>

                {/* description */}
                <div className='flex flex-col gap-2 mt-5'>
                    <label className='text-[14px] leading-[18px] text-[#58595A] font-semibold'>Description Number</label>
                    <textarea
                        type='text'
                        
                        className='input border h-24  border-gray-300  dark:border-gray-600  dark:bg-transparent  rounded-md  w-full   py-2 px-3   focus:border-[#0052cc]  focus:border focus-within:ring-1  appearance-none  transition  duration-150 dark:text-gray-100 ease-in-out'
                        placeholder='Enter Description'
        
                    ></textarea>
                      

                </div>

            </div>

        </>
    )
}

export default BasicInformation
