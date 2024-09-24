import React from 'react'

const ProductVideoEdit = ({ formData, onInputChange }) => {
    return (
        <div className='w-[100%] mt-10'>
            <div>
                <h1 className='text-[18px] leading-[23px] font-semibold'>Product Videos Link</h1>
            </div>
            <div className='mt-2 border rounded-md p-5'>
                <div className='flex flex-col gap-2 mt-5 '>
                    <label className='text-[14px] leading-[18px] text-[#58595A] font-semibold'>Link</label>
                    <input
                        type='text' className='input  border  border-gray-300  dark:border-gray-600  dark:bg-transparent  rounded-md  w-full  py-2 px-3  focus:border-[#0052cc] focus:border focus-within:ring-1  appearance-none  transition   duration-150   text-black    ease-in-out'
                        placeholder='Link'
                        value={formData?.product_video_link}
                        onChange={(e) => onInputChange('product_video_link', e.target.value)}

                    />
                </div>

                {/* <div className='flex justify-end'>
                    <button block className='mt-2 text-[#FF4040] text-[12px] leading-[16px] font-semibold flex  items-center px-3 py-2' >
                        <span className="material-symbols-outlined mr-2">delete</span>
                        Delete Section
                    </button>
                </div> */}

            </div>
            {/* <div className='mt-3 flex justify-end'>
                <button className=' text-[#0052cc] text-[12px] leading-[16px] font-semibold rounded-md flex  items-center px-3 py-2'>
                    <span className="material-symbols-outlined mr-2">add</span>
                    Add Section
                </button>
            </div> */}
        </div>
    )
}

export default ProductVideoEdit;
