import React from 'react'
import service from '../../../../assets/service-centre.png'
import { IoLocationOutline } from 'react-icons/io5'
import { MdOutlineMail, MdOutlinePhone } from 'react-icons/md';

const ServiceCentreDetails = () => {
    const boxShadowStyle = {
        boxShadow: '0px 1px 4px 0px rgba(0, 0, 0, 0.25)', // X-offset, Y-offset, blur, spread, color
    };
    return (
        <>
            <div className='mt-3 p-5'>
            <div className="lg:flex items-center justify-between mb-4">
                    <h3 className="mb-4 lg:mb-0 text-[1.5rem] leading-[2.5rem] font-semibold text-[#0052CC]">Service Request</h3>
                    {/* <ProductTableTools /> */}
                </div>
                <div className='mt-5 rounded-lg ' style={boxShadowStyle}>
                    <div className='flex lg:justify-between p-8 lg:flex-row flex-col'>
                        <div className='lg:w-[50%] w-full'>
                            <img src = {service} className='w-[100%] h-[100%]'/>
                        </div>
                        <div className='lg:w-[40%] w-full'>
                            <div className='mx-10'>
                                <h3 className='text-[4rem] leading-[5rem] font-bold text-[#0052CC]'>LG</h3>
                            </div>
                            <div className=' flex space-x-3 mt-5'>
                                <div className='text-[#0052cc]'>
                                    <IoLocationOutline size={35} />
                                </div>

                                <div> <p className='text-[18px] leading-[23px] font-semibold'>
                                    Lorem ipsum dolor sit amet consectetur. Id quisque massa eget auctor vitae vulputate cursus.
                                </p></div>
                            </div>
                            <div className=' flex space-x-3 mt-8'>
                                <div className='text-[#0052cc]'>
                                    <MdOutlinePhone size={35} />
                                </div>

                                <div> <p className='text-[18px] leading-[23px] font-semibold'>
                                   123456789
                                </p></div>
                            </div>
                            <div className=' flex space-x-3 mt-8'>
                                <div className='text-[#0052cc]'>
                                    <MdOutlineMail  size={35} />
                                </div>

                                <div> <p className='text-[18px] leading-[23px] font-semibold'>
                                   xyz@gmail.com
                                </p></div>
                            </div>
                        </div>
                    </div>
                    <div className='h-4 border border-[#0052cc] bg-[#0052cc] rounded-b-lg'></div>
                </div>
            </div>
        </>
    )
}

export default ServiceCentreDetails
