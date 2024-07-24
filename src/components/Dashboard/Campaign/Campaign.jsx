import React, { useState } from 'react'
import SearchInput from '../SearchInput/SearchInput'
import { Drawer } from '@mui/material';
import { RiDeleteBin6Line, RiWhatsappFill } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import { TbMessage } from 'react-icons/tb';


const Campaign = () => {
    const navigate = useNavigate()
    const [drawerOpen, setDrawerOpen] = useState(false);
    const openDrawer = () => {
        setDrawerOpen(true);
    };

    const closeDrawer = () => {
        setDrawerOpen(false);
    };
    const boxShadowStyle = {
        boxShadow: '0px 1px 4px 0px rgba(0, 0, 0, 0.25)', // X-offset, Y-offset, blur, spread, color
    };
    return (
        <div className='p-8'>
            <div className='flex sm:justify-between gap-10 sm:flex-row flex-col'>
                <div>
                    <h3 className="mb-4 lg:mb-0 text-[1.5rem] leading-[2.5rem] text-[#0052CC] font-semibold">Campaign</h3>
                </div>
                <div className='flex sm:flex-row flex-col gap-5'>
                    <SearchInput />
                    <button className='bg-[#0052CC] text-white hover:bg-[#0052cc] hover:text-white border border-[#0052cc] text-[14px] leading-[18px] font-bold rounded-md flex items-center px-3 py-2' onClick={() => navigate(`/campaign/create_campaign`)}>
                        <span className="material-symbols-outlined mr-2">add</span>
                        Create Campaign
                    </button>
                    <button block className='text-[#58595A] text-[14px] leading-[18px] font-bold rounded-md flex items-center px-3 py-2' onClick={openDrawer}>
                        <span className="material-symbols-outlined mr-2">filter_alt</span>
                        Filter
                    </button>
                </div>
                {/* drawewr */}
                <Drawer anchor="right" open={drawerOpen} onClose={closeDrawer}>
                    <div style={{ width: '350px' }}>
                        {/* Content of your filter drawer */}
                        <div style={{ padding: '20px' }}>
                            <div className='flex justify-between gap-5 items-center'>
                                <h2 className='text-[22px] leading-[28px] font-semibold text-[#0052cc]'>Filter</h2>
                                <span className="material-symbols-outlined text-[#8F9091] text-[20px] cursor-pointer" onClick={closeDrawer}>
                                    close
                                </span>
                            </div>
                        </div>
                        <div className='border-t'></div>
                        <div style={{ padding: "20px" }}>

                        </div>
                        {/* footee button */}
                        <div className='flex justify-end  mt-5 mb-5 gap-5'>
                            <button className='text-[#58595A]  border border-[#8F9091] text-[14px] leading-[18px] font-bold rounded-md flex  items-center px-3 py-2'>
                                Discard
                            </button>
                            <button block className='bg-[#0052CC] text-white hover:bg-[#0052cc] hover:text-white border border-[#0052cc] mr-5 text-[14px] leading-[18px] font-bold rounded-md flex  items-center px-3 py-2' >
                                Apply
                            </button>
                        </div>
                    </div>
                </Drawer>
            </div>

            <div className='mt-12'>
                <div className='flex sm:justify-between sm:items-center gap-10 sm:flex-row flex-col'>
                    <div>
                        <h3 className='text-[#58595A] text-[1.2rem] leading-[2rem] font-semibold'>Show All</h3>
                    </div>
                    <div className='flex gap-10'>
                        <h3 className='text-[#58595A] text-[1.2rem] leading-[2rem] font-semibold'>Draft</h3>
                        <h3 className='text-[#58595A] text-[1.2rem] leading-[2rem] font-semibold'>Archive</h3>
                    </div>
                </div>
                {/* data */}
                {/* <div className="bg-white  rounded-lg p-8 mt-8" style={boxShadowStyle}>

                    <div className='flex gap-16'>
                        <div>
                            <p className='text-[12px] font-semibold leading-[16px] text-[#8F9091]'>Campaign Name</p>
                            <p className='text-[16px] mt-2 leading-[20px] font-semibold text-[#202123]'>Warranty Registration</p>
                        </div>
                        <div>
                            <p className='text-[12px] font-semibold leading-[16px] text-[#8F9091]'>Medium</p>
                            <p className='text-[16px] mt-2 leading-[20px] font-semibold text-[#202123]'>Warranty Registration</p>
                        </div>
                        <div>
                            <p className='text-[12px] font-semibold leading-[16px] text-[#8F9091]'>Created On</p>
                            <p className='text-[16px] mt-2 leading-[20px] font-semibold text-[#202123]'>07-06-2024</p>
                        </div>
                        <div>
                            <p className='text-[12px] font-semibold leading-[16px] text-[#8F9091]'>Status</p>
                            <p className='bg-[#BAFFD3] text-[#00742A] py-1 px-5 rounded text-[16px] mt-1 leading-[20px] font-semibold '>Active</p>
                        </div>
                        <div className=''>

                            <div className='flex justify-between gap-5'>
                                <TbMessage size={22} />
                                <RiDeleteBin6Line size={22} />
                            </div>

                        </div>
                    </div>
                </div> */}
            </div>

        </div>
    )
}

export default Campaign
