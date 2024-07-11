import React from 'react'
import { useNavigate } from 'react-router-dom';

const ServiceNetwork = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className='mt-3 p-5'>
                <div className="lg:flex items-center justify-between mb-4">
                    <h3 className="mb-4 lg:mb-0 text-[1.5rem] leading-[2.5rem] font-semibold text-[#0052CC]">Service Request</h3>
                    {/* <FilterServiceNetwork /> */}
                </div>
                <div className='mt-12'>
                    <div>
                        <h3 className='text-[2.5rem] leading-[3rem] font-bold text-[#202123]'>24</h3>
                    </div>
                    <div className=' mt-5 flex justify-between items-center'>
                        <div>
                            <h3 className='text-[#0052CC] text-[1.2rem] leading-[2rem] font-semibold'>Service Network Details</h3>
                        </div>
                        <div className='flex gap-5'>
                            <button block className='bg-[#0052CC] text-white hover:bg-[#0052cc] hover:text-white border border-[#0052cc] text-[14px] leading-[18px] font-bold rounded-md flex  items-center px-3 py-2' onClick={() => navigate(`/service_request/service_network/add_service_centre`)}>
                                <span className="material-symbols-outlined mr-2">add</span>
                                Add Service Centre
                            </button>

                        </div>

                    </div>
                </div>
                <div className="container mx-auto mt-8">
                    <div className="overflow-x-auto">
                        <table className="min-w-full  border-gray-200">
                            <thead className="">
                                <tr>

                                    <th className="py-2 px-4 border-b text-left  text-[#202123BF] text-[12px] leading-[17px] font-semibold">Name</th>
                                    <th className="py-2 px-4 border-b text-left  text-[#202123BF] text-[12px] leading-[17px] font-semibold">Phone Number</th>
                                    <th className="py-2 px-4 border-b text-left  text-[#202123BF] text-[12px] leading-[17px] font-semibold">Email</th>
                                    <th className="py-2 px-4 border-b text-left  text-[#202123BF] text-[12px] leading-[17px] font-semibold">Location</th>

                                </tr>
                            </thead>
                            <tbody className=''>
                                <tr className="p-5">
                                    <td className="py-5 px-4 border-b  text-[12px] leading-[17px] font-semibold  text-[#0052cc] hover:underline"><a href="#">LG Service Centre</a></td>
                                    <td className="py-5 px-4 border-b  text-[12px] leading-[17px] font-semibold text-[#202123BF]">1234567899</td>
                                    <td className="py-5 px-4 border-b  text-[12px] leading-[17px] font-semibold text-[#202123BF]">xyz123@gmail.com</td>
                                    <td className="py-5 px-4 border-b  text-[12px] leading-[17px] font-semibold text-[#202123BF]">CIT Road, Kolkata-700010, W.B</td>
                                </tr>
                                <tr className="p-5">
                                    <td className="py-5 px-4 border-b  text-[12px] leading-[17px] font-semibold  text-[#0052cc] hover:underline"><a href="#">LG Service Centre</a></td>
                                    <td className="py-5 px-4 border-b  text-[12px] leading-[17px] font-semibold text-[#202123BF]">1234567899</td>
                                    <td className="py-5 px-4 border-b  text-[12px] leading-[17px] font-semibold text-[#202123BF]">xyz123@gmail.com</td>
                                    <td className="py-5 px-4 border-b  text-[12px] leading-[17px] font-semibold text-[#202123BF]">CIT Road, Kolkata-700010, W.B</td>
                                </tr>
                                <tr className="p-5">
                                    <td className="py-5 px-4 border-b  text-[12px] leading-[17px] font-semibold  text-[#0052cc] hover:underline"><a href="#">LG Service Centre</a></td>
                                    <td className="py-5 px-4 border-b  text-[12px] leading-[17px] font-semibold text-[#202123BF]">1234567899</td>
                                    <td className="py-5 px-4 border-b  text-[12px] leading-[17px] font-semibold text-[#202123BF]">xyz123@gmail.com</td>
                                    <td className="py-5 px-4 border-b  text-[12px] leading-[17px] font-semibold text-[#202123BF]">CIT Road, Kolkata-700010, W.B</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServiceNetwork
