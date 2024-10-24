import React, { useEffect, useState } from 'react'
import { MdOutlineArrowOutward } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import axios from '../../../api/api';

const ServiceRequest = () => {
    const navigate = useNavigate();
    const boxShadowStyle = {
        boxShadow: '0px 1px 4px 0px rgba(0, 0, 0, 0.15)', // X-offset, Y-offset, blur, spread, color
    };

    // api calling rejetcted
    const [totalRejected, setTotalRejected] = useState("")
    const token = useSelector((state) => state.auth.token)
    const rejectedInstallation = async () => {
        try {
            const { data } = await axios.get('/lp_rejected_installation', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log(data, "pending installation data")
            setTotalRejected(data?.count)
        }
        catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        rejectedInstallation()
    }, [])

    // api calling completedd
    const [totalCompleted, setTotalCompleted] = useState("")

    const completedInstallation = async () => {
        try {
            const { data } = await axios.get('/lp_completed_installation', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log(data, "pending installation data")
            setTotalCompleted(data?.count)
        }
        catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        completedInstallation()
    }, [])

    // api calling pending
    const [totalPending, setTotalPneding] = useState("")

    const pendingInstallation = async () => {
        try {
            const { data } = await axios.get('/lp_pending_installation', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log(data, "pending installation data")
            setTotalPneding(data?.count)
        }
        catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        pendingInstallation()
    }, [])

    return (
        <>
            <div className='mt-3 p-8'>
                <div className="lg:flex items-center justify-between mb-4">
                    <h3 className="mb-4 lg:mb-0 text-[1.5rem] leading-[2.5rem] font-semibold text-[#0052CC]">Service Requests</h3>
                    {/* <ProductTableTools /> */}
                </div>
                {/* card */}
                <div className='mt-12 2xl:grid-cols-4 grid xl:grid-cols-3 md:grid-cols-2 gap-8'>
                    {/* completed installation card */}
                    <div style={boxShadowStyle} className='px-5 pt-5 pb-[110px] rounded-xl w-[300px] cursor-pointer' onClick={() => navigate(`/service_request/completed_installation`)}>
                        <div>
                            <h3 className='text-[2.5rem] leading-[3rem] font-bold text-[#202123]'>{totalCompleted}</h3>
                        </div>
                        <div className='flex items-center text-[#0052cc] gap-2 mt-5'>
                            <div>
                                <h3 className='text-[#0052CC] text-[1.2rem] leading-[2rem] font-semibold'>Completed Installations</h3>
                            </div>
                            <div className=' '>
                                <MdOutlineArrowOutward size={28} />
                            </div>
                        </div>
                    </div>
                    {/* pending card */}
                    <div style={boxShadowStyle} className='px-5 pt-5 pb-[110px] rounded-xl w-[300px] cursor-pointer' onClick={() => navigate(`/service_request/pending_installation`)}>
                        <div>
                            <h3 className='text-[2.5rem] leading-[3rem] font-bold text-[#202123]'>{totalPending}</h3>
                        </div>
                        <div className='flex items-center text-[#0052cc] gap-2 mt-5'>
                            <div>
                                <h3 className='text-[#0052CC] text-[1.2rem] leading-[2rem] font-semibold'>Pending Installation</h3>
                            </div>
                            <div className=' '>
                                <MdOutlineArrowOutward size={28} />
                            </div>
                        </div>
                    </div>
                    {/* rejected installation */}
                    <div style={boxShadowStyle} className='px-5 pt-5 pb-[110px] rounded-xl w-[300px] cursor-pointer' onClick={() => navigate(`/service_request/reject_installation`)}>
                        <div>
                            <h3 className='text-[2.5rem] leading-[3rem] font-bold text-[#202123]'>{totalRejected}</h3>
                        </div>
                        <div className='flex items-center text-[#0052cc] gap-2 mt-5'>
                            <div>
                                <h3 className='text-[#0052CC] text-[1.2rem] leading-[2rem] font-semibold'>Rejected Installation</h3>
                            </div>
                            <div className=' '>
                                <MdOutlineArrowOutward size={28} />
                            </div>
                        </div>
                    </div>
                    {/* serive network details */}
                    <div style={boxShadowStyle} className='px-5 pt-5 pb-[110px] rounded-xl w-[300px] cursor-pointer' onClick={() => navigate(`/service_request/service_network`)}>
                        <div>
                            <h3 className='text-[2.5rem] leading-[3rem] font-bold text-[#202123]'>32</h3>
                        </div>
                        <div className='flex items-center justify-between text-[#0052cc] gap-2 mt-5'>
                            <div className='w-[70%]'>
                                <h3 className='text-[#0052CC] text-[1.2rem] leading-[2rem] font-semibold'>Service Network Details</h3>
                            </div>
                            <div className=' w-[10%]'>
                                <MdOutlineArrowOutward size={28} />
                            </div>
                        </div>
                    </div>
                    {/* warranty claims */}
                    <div style={boxShadowStyle} className='px-5 pt-5 pb-[110px] rounded-xl w-[300px] cursor-pointer' onClick={() => navigate(`/service_request/warranty_claims`)}>
                        <div>
                            <h3 className='text-[2.5rem] leading-[3rem] font-bold text-[#202123]'>12</h3>
                        </div>
                        <div className='flex items-center text-[#0052cc] gap-2 mt-5'>
                            <div>
                                <h3 className='text-[#0052CC] text-[1.2rem] leading-[2rem] font-semibold'>Warranty Claims</h3>
                            </div>
                            <div className=' '>
                                <MdOutlineArrowOutward size={28} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServiceRequest
