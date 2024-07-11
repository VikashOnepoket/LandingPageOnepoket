import React from 'react'
import BasicInformation from './BasicInformation/BasicInformation'
import ProductImge from './ProductImage/ProductImge'

const AddProduct = () => {
  return (
    <>
      <div className='mt-3 p-5 mb-[80px]'>
        <div>
          <h3 className="mb-4 lg:mb-0 text-[1.5rem] leading-[2.5rem] text-[#0052CC] font-semibold">Add New Product</h3>
          <p className='text-[1.2rem] pt-5 leading-[1.5rem] font-semibold text-[#000000]'>Basic Information</p>
        </div>

        {/* information basic require */}
        <div className='mt-10 flex   gap-10 '>
          <div className='w-[70%] '>
            <BasicInformation />
          </div>
          <div className='w-[30%]'>
            <ProductImge />
          </div>
        </div>
      </div>

    </>
  )
}

export default AddProduct
