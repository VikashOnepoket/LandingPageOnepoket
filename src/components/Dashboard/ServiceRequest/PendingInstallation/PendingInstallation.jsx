import React from 'react'
import { FiMessageSquare } from 'react-icons/fi'
const PendingInstallation = () => {
    return (
        <>
            <div className='mt-3 p-5'>
                <div className="lg:flex items-center justify-between mb-4">
                    <h3 className="mb-4 lg:mb-0 text-[1.5rem] leading-[2.5rem] font-semibold text-[#0052CC]">Service Requests</h3>
                    {/* <FilterCompletion/> */}
                </div>
                <div className='mt-12'>
                    <div>
                        <h3 className='text-[2.5rem] leading-[3rem] font-bold text-[#202123]'>24</h3>
                    </div>
                    <div className=' mt-5'>
                        <div>
                            <h3 className='text-[#0052CC] text-[1.2rem] leading-[2rem] font-semibold'>Pending Installations</h3>
                        </div>

                    </div>

                </div>

                <div className="container mx-auto mt-8">
                    <div className="overflow-x-auto">
                        <table className="min-w-full  border-gray-200">
                            <thead className="">
                                <tr>
                                    <th className="py-2 px-4 border-b text-left  text-[#202123BF] text-[12px] leading-[17px] font-semibold">Request Date-Time</th>
                                    <th className="py-2 px-4 border-b text-left  text-[#202123BF] text-[12px] leading-[17px] font-semibold">Name</th>
                                    <th className="py-2 px-4 border-b text-left  text-[#202123BF] text-[12px] leading-[17px] font-semibold">Product</th>
                                    <th className="py-2 px-4 border-b text-left  text-[#202123BF] text-[12px] leading-[17px] font-semibold">Category</th>
                                    <th className="py-2 px-4 border-b text-left  text-[#202123BF] text-[12px] leading-[17px] font-semibold">Installation Date-Time</th>
                                    <th className="py-2 px-4 border-b text-left  text-[#202123BF] text-[12px] leading-[17px] font-semibold">Status</th>

                                    <th className="py-2 px-4 border-b text-left  text-[#202123BF] text-[12px] leading-[17px] font-semibold">Remarks</th>

                                </tr>
                            </thead>
                            <tbody className=''>

                                <tr className="p-5">
                                    <td className="py-5 px-4 border-b  text-[#202123BF] text-[12px] leading-[17px] font-semibold">26-03-2024 13:04 PM</td>
                                    <td className="py-5 px-4 border-b  text-[12px] leading-[17px] font-semibold text-[#0052cc] hover:underline"><a href="#">Vishesh Keshri</a></td>
                                    <td className="py-5 px-4 border-b  text-[12px] leading-[17px] font-semibold text-[#202123BF]">Lloyd AC</td>
                                    <td className="py-5 px-4 border-b  text-[12px] leading-[17px] font-semibold text-[#202123BF]">Air Conditioner</td>
                                    <td className="py-5 px-4 border-b  text-[12px] leading-[17px] font-semibold text-[#202123BF]">28-03-2024 14:00 PM</td>

                                    <td className="py-5 px-4 border-b  font-medium text-[#202123BF]">
                                        <span className="bg-[#FFAB7C] text-[#A93D00] py-2 px-5 rounded text-xs font-semibold  ">Pending</span>
                                    </td>
                                    <td className="py-5 px-4 border-b text-right text-[#FFB800]">
                                        <FiMessageSquare size={22} />
                                    </td>
                                </tr>
                                <tr className="p-5">
                                    <td className="py-5 px-4 border-b  text-[12px] leading-[17px] font-semibold text-[#202123BF]">26-03-2024 13:04 PM</td>
                                    <td className="py-5 px-4 border-b  text-[12px] leading-[17px] font-semibold  text-[#0052cc] hover:underline"><a href="#">Vishesh Keshri</a></td>
                                    <td className="py-5 px-4 border-b  text-[12px] leading-[17px] font-semibold text-[#202123BF]">Lloyd AC</td>
                                    <td className="py-5 px-4 border-b  text-[12px] leading-[17px] font-semibold text-[#202123BF]">Air Conditioner</td>
                                    <td className="py-5 px-4 border-b  text-[12px] leading-[17px] font-semibold text-[#202123BF]">28-03-2024 14:00 PM</td>

                                    <td className="py-5 px-4 border-b  font-medium text-[#202123BF]">
                                        <span className="bg-[#FFAB7C] text-[#A93D00] py-2 px-5 rounded text-xs font-semibold  ">Pending</span>
                                    </td>
                                    <td className="py-5 px-4 border-b text-right text-[#FFB800]">
                                        <FiMessageSquare size={22} />
                                    </td>
                                </tr>
                                <tr className="p-5">
                                    <td className="py-5 px-4 border-b  text-[12px] leading-[17px] font-semibold text-[#202123BF]">26-03-2024 13:04 PM</td>
                                    <td className="py-5 px-4 border-b  text-[12px] leading-[17px] font-semibold  text-[#0052cc] hover:underline"><a href="#">Vishesh Keshri</a></td>
                                    <td className="py-5 px-4 border-b  text-[12px] leading-[17px] font-semibold text-[#202123BF]">Lloyd AC</td>
                                    <td className="py-5 px-4 border-b  text-[12px] leading-[17px] font-semibold text-[#202123BF]">Air Conditioner</td>
                                    <td className="py-5 px-4 border-b  text-[12px] leading-[17px] font-semibold text-[#202123BF]">28-03-2024 14:00 PM</td>
                                    <td className="py-5 px-4 border-b  font-medium text-[#202123BF]">
                                        <span className="bg-[#FFAB7C] text-[#A93D00] py-2 px-5 rounded text-xs font-semibold  ">Pending</span>
                                    </td>

                                    <td className="py-5 px-4 border-b text-right text-[#FFB800]">
                                        <FiMessageSquare size={22} />
                                    </td>
                                </tr>


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PendingInstallation
