import React, { useEffect, useState } from 'react'
import earbud from '../../../../assets/image 6.png'
import { useParams } from 'react-router-dom'
import axios from '../../../../api/api'

const WarrantyClaimDetails = () => {
    const [loading, setLoading] = useState(false)
    const { id } = useParams()
    const fetchDetails = async () => {
        try {
            const { data } = await axios.get('/get_warranty_claim_by_id', { params: { id } })
            console.log(data, 'details')
            setLoading(false)
        } catch (error) {
            setLoading(false)
        }

    }
    useEffect(() => {
        fetchDetails()
    }, [id])
    return (
        <>
            <div className='mt-3 p-8'>
                <div className="lg:flex items-center justify-between mb-4">
                    <h3 className="mb-4 lg:mb-0 text-[1.5rem] leading-[2.5rem] font-semibold text-[#0052CC]">Service Request</h3>
                    {/* <ProductTableTools /> */}
                </div>
                <div className='mt-12'>
                    <div className='flex justify-between gap-10 p-5'>
                        <div className='w-[60%]'>
                            <div className='flex gap-10'>
                                {/* 1st box */}
                                <div className=''>
                                    <div>
                                        <h3 className='text-xs font-semibold text-[#20212380]'>Warranty ID</h3>
                                        <p className='text-[#202123] text-base mt-1'>WBKJ2562146556</p>
                                    </div>
                                    <div className='mt-5'>
                                        <h3 className='text-xs font-semibold text-[#20212380]'>Date of Claim</h3>
                                        <p className='text-[#202123] text-base mt-1'>7-06-2024</p>
                                    </div>
                                    <div className='mt-5'>
                                        <h3 className='text-xs font-semibold text-[#20212380]'>Owner Name</h3>
                                        <p className='text-[#202123] text-base mt-1'>Sushovon Seth</p>
                                    </div>
                                    <div className='mt-5'>
                                        <h3 className='text-xs font-semibold text-[#20212380]'>Phone Number</h3>
                                        <p className='text-[#202123] text-base mt-1'>123456789</p>
                                    </div>
                                    <div className='mt-5'>
                                        <h3 className='text-xs font-semibold text-[#20212380]'>Address</h3>
                                        <p className='text-[#202123] text-base mt-1'>Gorakhpur , Deoria</p>
                                    </div>
                                </div>
                                {/* 2nd box */}
                                <div className=''>
                                    <div>
                                        <h3 className='text-xs font-semibold text-[#20212380]'>Warranty Registered</h3>
                                        <p className='text-[#202123] text-base mt-1'>WBKJ2562146556</p>
                                    </div>
                                    <div className='mt-5'>
                                        <h3 className='text-xs font-semibold text-[#20212380]'>Date of Claim</h3>
                                        <p className='text-[#202123] text-base mt-1'>7-06-2024</p>
                                    </div>
                                    <div className='mt-5'>
                                        <h3 className='text-xs font-semibold text-[#20212380]'>Owner Name</h3>
                                        <p className='text-[#202123] text-base mt-1'>Sushovon Seth</p>
                                    </div>
                                    <div className='mt-5'>
                                        <h3 className='text-xs font-semibold text-[#20212380]'>Phone Number</h3>
                                        <p className='text-[#202123] text-base mt-1'>123456789</p>
                                    </div>
                                    <div className='mt-5'>
                                        <h3 className='text-xs font-semibold text-[#20212380]'>Address</h3>
                                        <p className='text-[#202123] text-base mt-1'>Gorakhpur , Deoria</p>
                                    </div>
                                </div>
                                {/* 3rd box */}
                                <div className=''>
                                    <div className='mt-[60px]'>
                                        {/* <h3 className='text-xs font-semibold text-[#20212380]'>Warranty ID</h3>
                                        <p className='text-[#202123] text-base mt-1'>WBKJ2562146556</p> */}
                                    </div>
                                    <div className='mt-5'>
                                        <h3 className='text-xs font-semibold text-[#20212380]'>Date of Claim</h3>
                                        <p className='text-[#202123] text-base mt-1'>7-06-2024</p>
                                    </div>
                                    <div className='mt-5'>
                                        <h3 className='text-xs font-semibold text-[#20212380]'>Owner Name</h3>
                                        <p className='text-[#202123] text-base mt-1'>Sushovon Seth</p>
                                    </div>
                                    <div className='mt-5'>
                                        <h3 className='text-xs font-semibold text-[#20212380]'>Phone Number</h3>
                                        <p className='text-[#202123] text-base mt-1'>123456789</p>
                                    </div>
                                    <div className='mt-5'>
                                        <h3 className='text-xs font-semibold text-[#20212380]'>Address</h3>
                                        <p className='text-[#202123] text-base mt-1'>Gorakhpur , Deoria</p>
                                    </div>
                                </div>


                            </div>
                            <div className='mt-12'>
                                <h3 className='text-xs font-semibold text-[#20212380]'>Problem</h3>
                                <p className='text-[#202123] text-base mt-5'>Lorem ipsum dolor sit amet consectetur. Non ullamcorper proin ac venenatis pharetra sem orci velit. Fringilla varius diam scelerisque vivamus hendrerit accumsan. Tortor ultrices velit cras lobortis venenatis id eu habitasse odio. Facilisis eros volutpat cursus eget.</p>
                            </div>
                        </div>
                        <div className='w-[40%]'>
                            <div className=''>
                                <h3 className='text-xs font-semibold text-[#20212380]'>Product Image</h3>
                                <div className='border rounded-md h-[280px] flex justify-center items-center mt-3'>
                                    <img src={earbud} className='w-[200px] h-[200px]' />
                                </div>

                            </div>
                            <div className='mt-8'>
                                <h3 className='text-xs font-semibold text-[#20212380]'>Invoice</h3>
                                <div className='border rounded-md h-[60px] mt-3'>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WarrantyClaimDetails
