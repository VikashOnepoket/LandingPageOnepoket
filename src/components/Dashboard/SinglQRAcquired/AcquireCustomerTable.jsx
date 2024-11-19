import React from 'react'
import { MdOutlineFileDownload } from 'react-icons/md'

const AcquireCustomerTable = ({ acquiredData }) => {
    return (
        <>
            <tbody>
                <td className="py-4 px-4 border-b text-[14px] leading-4 text-[#8F9091] font-medium">
                    {acquiredData?.availed_on.split('T')[0]}
                </td>
                <td className="py-4 px-4 border-b  text-[14px] leading-4 text-[#8F9091] font-medium">
                    {acquiredData?.name}
                </td>
                <td className="py-4 px-4 border-b text-[14px] leading-4 text-[#8F9091] font-medium">
                    {acquiredData?.email}
                </td>
                <td className="py-4 px-4 border-b  text-[14px] leading-4 text-[#8F9091] font-medium">
                    {acquiredData?.phone_number}
                </td>
                <td className="py-4 px-4 border-b  text-[14px] leading-4 text-[#8F9091] font-medium">
                    {acquiredData?.product_name}
                </td>
                <td className="py-4 px-4 border-b  text-[14px] leading-4 text-[#8F9091] font-medium">
                    <a href={acquiredData?.invoice} target="_blank" rel="noopener noreferrer">
                        <MdOutlineFileDownload className="text-[16px] leading-5 text-[#8F9091]" />
                    </a>
                </td>
                <td className="py-4 px-4  border-b text-[14px] leading-4 text-[#8F9091] font-medium">
                    {acquiredData?.IP_city}
                </td>
            </tbody>
        </>
    )
}

export default AcquireCustomerTable
