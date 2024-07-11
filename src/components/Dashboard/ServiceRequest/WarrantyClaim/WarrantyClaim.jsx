import React from 'react'
import { TbMessage } from 'react-icons/tb'
import { RiDeleteBin6Line } from 'react-icons/ri'

const WarrantyClaim = () => {
    const boxShadowStyle = {
        boxShadow: '0px 1px 4px 0px rgba(0, 0, 0, 0.25)', // X-offset, Y-offset, blur, spread, color
    };
    return (
        <>
            <div className='mt-3 p-5'>
                <div className="lg:flex items-center justify-between mb-4">
                    <h3 className="mb-4 lg:mb-0 text-[1.5rem] leading-[2.5rem] font-semibold text-[#0052CC]">Service Request</h3>
                    {/* <FilterWarranty /> */}
                </div>
                <div className='mt-12'>
                    <div>
                        <h3 className='text-[2.5rem] leading-[3rem] font-bold text-[#202123]'>24</h3>
                    </div>
                    <div className=' mt-5 flex justify-between items-center'>
                        <div>
                            <h3 className='text-[#0052CC] text-[1.2rem] leading-[2rem] font-semibold'>Warranty Claims</h3>
                        </div>
                    </div>
                    <div className='mt-5'>

                        <div className='flex justify-between gap-10 items-center'>
                            <div>
                                <h3 className='text-[#58595A] text-[1.2rem] leading-[2rem] font-semibold'>Show All</h3>
                            </div>
                            <div>
                                <button block className='bg-[#0052CC] text-white hover:bg-[#0052cc] hover:text-white border border-[#0052cc] text-[14px] leading-[18px] font-bold rounded-md flex  items-center px-3 py-2' >
                                    <span className="material-symbols-outlined mr-2">add</span>
                                    Send Broadcast
                                </button>
                            </div>
                        </div>
                        <div className="p-4">

                            <div className='flex justify-between gap-10 items-center rounded-xl p-10 mt-5' style={boxShadowStyle}>
                                <div className='flex md:gap-5 2xl:gap-20 items-center'>
                                    <div>
                                        <h3 className='text-xs font-semibold text-[#20212380]'>Warranty ID</h3>
                                        <p className='text-[#202123] text-base mt-1'>WBKJ2562146556</p>
                                    </div>
                                    {/* date of claim */}
                                    <div>
                                        <h3 className='text-xs font-semibold text-[#20212380]'>Date of Claim</h3>
                                        <p className='text-[#202123] text-base mt-1'>07.06.2024</p>
                                    </div>
                                    {/* owner name */}
                                    <div>
                                        <h3 className='text-xs font-semibold text-[#20212380]'>Owner Name</h3>
                                        <p className='text-[#0052CC] text-base mt-1'>Sushovon Seth</p>
                                    </div>
                                    {/* products */}
                                    <div>
                                        <h3 className='text-xs font-semibold text-[#20212380]'>Product</h3>
                                        <p className='text-[#202123] text-base mt-1'>Boat Airdopes 131 Pro</p>
                                    </div>

                                    {/* status */}
                                    <div>
                                        <h3 className='text-xs font-semibold text-[#20212380]'>Status</h3>
                                        <p className="bg-[#FFAB7C] text-[#A93D00] py-2 px-5 rounded text-xs font-semibold  mt-1">Pending</p>
                                    </div>

                                </div>
                                <div className='flex justify-between gap-5'>

                                    <TbMessage size={22} />
                                    <RiDeleteBin6Line size={22} />

                                </div>
                            </div>


                            {/*  */}
                            <div className='flex justify-between gap-10 items-center rounded-xl p-10 mt-5' style={boxShadowStyle}>
                                <div className='flex md:gap-5 2xl:gap-20 items-center'>
                                    <div>
                                        <h3 className='text-xs font-semibold text-[#20212380]'>Warranty ID</h3>
                                        <p className='text-[#202123] text-base mt-1'>WBKJ2562146556</p>
                                    </div>
                                    {/* date of claim */}
                                    <div>
                                        <h3 className='text-xs font-semibold text-[#20212380]'>Date of Claim</h3>
                                        <p className='text-[#202123] text-base mt-1'>07.06.2024</p>
                                    </div>
                                    {/* owner name */}
                                    <div>
                                        <h3 className='text-xs font-semibold text-[#20212380]'>Owner Name</h3>
                                        <p className='text-[#0052CC] text-base mt-1'>Sushovon Seth</p>
                                    </div>
                                    {/* products */}
                                    <div>
                                        <h3 className='text-xs font-semibold text-[#20212380]'>Product</h3>
                                        <p className='text-[#202123] text-base mt-1'>Boat Airdopes 131 Pro</p>
                                    </div>

                                    {/* status */}
                                    <div>
                                        <h3 className='text-xs font-semibold text-[#20212380]'>Status</h3>
                                        <p className="bg-[#BAFFD3] text-[#00742A] py-2 px-5 rounded text-xs font-semibold  mt-1">Approved</p>
                                    </div>

                                </div>
                                <div className='flex justify-between gap-5'>

                                    <TbMessage size={22} />
                                    <RiDeleteBin6Line size={22} />

                                </div>
                            </div>

                            {/*  */}
                            <div className='flex justify-between gap-10 items-center rounded-xl p-10 mt-5' style={boxShadowStyle}>
                                <div className='flex md:gap-5 2xl:gap-20 items-center'>
                                    <div>
                                        <h3 className='text-xs font-semibold text-[#20212380]'>Warranty ID</h3>
                                        <p className='text-[#202123] text-base mt-1'>WBKJ2562146556</p>
                                    </div>
                                    {/* date of claim */}
                                    <div>
                                        <h3 className='text-xs font-semibold text-[#20212380]'>Date of Claim</h3>
                                        <p className='text-[#202123] text-base mt-1'>07.06.2024</p>
                                    </div>
                                    {/* owner name */}
                                    <div>
                                        <h3 className='text-xs font-semibold text-[#20212380]'>Owner Name</h3>
                                        <p className='text-[#0052CC] text-base mt-1'>Sushovon Seth</p>
                                    </div>
                                    {/* products */}
                                    <div>
                                        <h3 className='text-xs font-semibold text-[#20212380]'>Product</h3>
                                        <p className='text-[#202123] text-base mt-1'>Boat Airdopes 131 Pro</p>
                                    </div>

                                    {/* status */}
                                    <div>
                                        <h3 className='text-xs font-semibold text-[#20212380]'>Status</h3>
                                        <p className="bg-[#E4EFFF] text-[#0052CC] py-2 px-5 rounded text-xs font-semibold  mt-1">In Review</p>
                                    </div>

                                </div>
                                <div className='flex justify-between gap-5'>

                                    <TbMessage size={22} />
                                    <RiDeleteBin6Line size={22} />

                                </div>
                            </div>
                            {/*  */}

                            <div className='flex justify-between gap-10 items-center rounded-xl p-10 mt-5' style={boxShadowStyle}>
                                <div className='flex md:gap-5 2xl:gap-20 items-center'>
                                    <div>
                                        <h3 className='text-xs font-semibold text-[#20212380]'>Warranty ID</h3>
                                        <p className='text-[#202123] text-base mt-1'>WBKJ2562146556</p>
                                    </div>
                                    {/* date of claim */}
                                    <div>
                                        <h3 className='text-xs font-semibold text-[#20212380]'>Date of Claim</h3>
                                        <p className='text-[#202123] text-base mt-1'>07.06.2024</p>
                                    </div>
                                    {/* owner name */}
                                    <div>
                                        <h3 className='text-xs font-semibold text-[#20212380]'>Owner Name</h3>
                                        <p className='text-[#0052CC] text-base mt-1'>Sushovon Seth</p>
                                    </div>
                                    {/* products */}
                                    <div>
                                        <h3 className='text-xs font-semibold text-[#20212380]'>Product</h3>
                                        <p className='text-[#202123] text-base mt-1'>Boat Airdopes 131 Pro</p>
                                    </div>

                                    {/* status */}
                                    <div>
                                        <h3 className='text-xs font-semibold text-[#20212380]'>Status</h3>
                                        <p className="bg-[#FFAB7C] text-[#A93D00] py-2 px-5 rounded text-xs font-semibold  mt-1">Pending</p>
                                    </div>

                                </div>
                                <div className='flex justify-between gap-5'>

                                    <TbMessage size={22} />
                                    <RiDeleteBin6Line size={22} />

                                </div>
                            </div>


                            {/* denied */}
                            <div className='flex justify-between gap-10 items-center rounded-xl p-10 mt-5' style={boxShadowStyle}>
                                <div className='flex md:gap-5 2xl:gap-20 items-center'>
                                    <div>
                                        <h3 className='text-xs font-semibold text-[#20212380]'>Warranty ID</h3>
                                        <p className='text-[#202123] text-base mt-1'>WBKJ2562146556</p>
                                    </div>
                                    {/* date of claim */}
                                    <div>
                                        <h3 className='text-xs font-semibold text-[#20212380]'>Date of Claim</h3>
                                        <p className='text-[#202123] text-base mt-1'>07.06.2024</p>
                                    </div>
                                    {/* owner name */}
                                    <div>
                                        <h3 className='text-xs font-semibold text-[#20212380]'>Owner Name</h3>
                                        <p className='text-[#0052CC] text-base mt-1'>Sushovon Seth</p>
                                    </div>
                                    {/* products */}
                                    <div>
                                        <h3 className='text-xs font-semibold text-[#20212380]'>Product</h3>
                                        <p className='text-[#202123] text-base mt-1'>Boat Airdopes 131 Pro</p>
                                    </div>

                                    {/* status */}
                                    <div>
                                        <h3 className='text-xs font-semibold text-[#20212380]'>Status</h3>
                                        <p className="bg-[#FF7070] text-[#870000] py-2 px-5 rounded text-xs font-semibold  mt-1">Denied</p>
                                    </div>

                                </div>
                                <div className='flex justify-between gap-5'>

                                    <TbMessage size={22} />
                                    <RiDeleteBin6Line size={22} />

                                </div>
                            </div>



                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default WarrantyClaim
