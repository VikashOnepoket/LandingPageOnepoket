import React from 'react'
import BasicInformation from './BasicInformation/BasicInformation'
import ProductImge from './ProductImage/ProductImge'
import Warranty from './Warranty/Warranty'
import CustsomerDescription from './ProductDescCutomer/CustsomerDescription'
import Category from './Category/Category'
import Logo from './Logo/Logo'
import Purchase from './PurchaseOption/Purchase'
import ProductVideo from './Video/ProductVideo'
import AdditionalInfo from '../Additional/Additional'

const AddProduct = () => {
  return (
    <>
      <div className='mt-3 p-8 mb-[80px]'>
        <div>
          <h3 className="mb-4 lg:mb-0 text-[1.5rem] leading-[2.5rem] text-[#0052CC] font-semibold">Add New Product</h3>
          <p className='text-[1.2rem] pt-5 leading-[1.5rem] font-semibold text-[#000000]'>Basic Information</p>
        </div>

        {/* information basic require */}
        <div className='mt-10 flex   gap-10 '>
          <div className='w-[70%] '>
            <BasicInformation />
            <AdditionalInfo />
            <Purchase />
            <Warranty />
            <ProductVideo />
            <CustsomerDescription />
            <div className='flex justify-end mt-10 gap-5'>
              <button className='text-[#58595A]  border border-[#8F9091] text-[14px] leading-[18px] font-bold rounded-md flex  items-center px-3 py-2'>
                Discard
              </button>
              <button block className='bg-[#0052CC] text-white hover:bg-[#0052cc] hover:text-white border border-[#0052cc] mr-5 text-[14px] leading-[18px] font-bold rounded-md flex  items-center px-3 py-2' >
                Save
              </button>
            </div>
          </div>
          <div className='w-[30%]'>
            <ProductImge />
            <Category />
            <Logo />
          </div>
        </div>
      </div>

    </>
  )
}

export default AddProduct
