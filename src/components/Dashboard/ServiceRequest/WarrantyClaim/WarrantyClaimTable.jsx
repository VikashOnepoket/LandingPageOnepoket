import React from 'react'
import { TbMessage } from 'react-icons/tb'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'

const WarrantyClaimTable = ({ warrantyData }) => {
    const navigate = useNavigate()
    const boxShadowStyle = {
        boxShadow: '0px 1px 4px 0px rgba(0, 0, 0, 0.25)', // X-offset, Y-offset, blur, spread, color
    };
    const formatDate = (dateString) => {
        const date = new Date(dateString); // Parse the date string
        const options = { year: 'numeric', month: 'long', day: 'numeric' }; // Formatting options
        return date.toLocaleDateString('en-US', options); // Format the date
    };

    const handleNavigate = () => {
        navigate(`/service_request/warranty_claims/${warrantyData?.id}`)
    }
    return (
        <>
            <div className='flex justify-between gap-10 items-center rounded-xl p-10 mt-5 cursor-pointer' style={boxShadowStyle} onClick={handleNavigate}>
                <div className='flex md:gap-5 2xl:gap-20 items-center'>
                    <div>
                        <h3 className='text-xs font-semibold text-[#20212380]'>Warranty ID</h3>
                        <p className='text-[#202123] text-base mt-1'>{warrantyData?.warranty_id}</p>
                    </div>
                    {/* date of claim */}
                    <div>
                        <h3 className='text-xs font-semibold text-[#20212380]'>Date of Claim</h3>
                        <p className='text-[#202123] text-base mt-1'>{formatDate(warrantyData?.created_on)}</p>
                    </div>
                    {/* owner name */}
                    <div>
                        <h3 className='text-xs font-semibold text-[#20212380]'>Owner Name</h3>
                        <p className='text-[#0052CC] text-base mt-1'>{warrantyData?.owner_name ? warrantyData?.owner_name : "Null"}</p>
                    </div>
                    {/* products */}
                    <div>
                        <h3 className='text-xs font-semibold text-[#20212380]'>Product</h3>
                        <p className='text-[#202123] text-base mt-1'>{warrantyData?.product_name}</p>
                    </div>

                    {/* status */}
                    <div>
                        <h3 className='text-xs font-semibold text-[#20212380]'>Status</h3>
                        <p className="bg-[#FFAB7C] text-[#A93D00] py-2 px-5 rounded text-xs font-semibold  mt-1">{warrantyData?.warranty_status}</p>
                    </div>

                </div>
                <div className='flex justify-between gap-5'>

                    <TbMessage size={22} />
                    <RiDeleteBin6Line size={22} />

                </div>
            </div>
        </>
    )
}

export default WarrantyClaimTable
