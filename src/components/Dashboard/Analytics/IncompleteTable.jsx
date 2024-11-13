import React, { useEffect, useState } from 'react';
import { MdOutlineFileDownload, MdInfoOutline } from 'react-icons/md';


const IncompleteTable = ({ scan , updateWarranty }) => {
    const handleApproveClick = () => {
        updateWarranty(scan?.customer_id); // Only triggers on click
    };
    return (
        <tr className="border-b border-gray-200 w-full">
            <td className="py-4 px-4 text-[14px] leading-4 text-[#8F9091] font-medium">{scan?.name}</td>
            <td className="py-4 px-4 text-[14px] leading-4 text-[#8F9091] font-medium">{scan?.email}</td>
            <td className="py-4 px-4 text-[14px] leading-4 text-[#8F9091] font-medium">{scan?.phone_number}</td>
            <td className="py-4 px-4 text-[14px] leading-4 text-[#8F9091] font-medium">{scan?.product_name}</td>
            <td className="py-4 px-4 relative  flex items-center space-x-2">
                <a href={scan.invoice} target="_blank" rel="noopener noreferrer">
                    <MdOutlineFileDownload className="text-[18px] leading-5 text-[#8F9091]" />
                </a>
                <MdInfoOutline className="text-[14px] leading-5 text-[#870000] absolute top-1" />
            </td>
            <td className="py-4 px-4 text-[14px] leading-4 text-[#8F9091] font-medium">{scan?.location || 'W.B, India'}</td>
            <td className="py-4 px-4 flex space-x-7 items-center">
                <span className=" text-[14px] font-semibold leading-4 text-[#00742A] bg-[#BAFFD3] rounded w-[10rem] p-2 cursor-pointer" onClick={handleApproveClick}>Approved Warranty</span>
                {/* <span className="p-2 text-[14px] font-semibold leading-4 text-[#4040A0] bg-[#B2B2FF] rounded w-[8rem]">Send Reminder</span>
                <span className="p-2 text-[14px] font-semibold leading-4 text-[#A93D00] bg-[#FFAB7C] rounded w-[10rem]">Warranty Denied</span> */}
            </td>
        </tr>
    );
};

export default IncompleteTable;
