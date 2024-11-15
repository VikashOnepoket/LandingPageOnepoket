import React from 'react'
import { MdOutlineFileDownload } from 'react-icons/md'

const AcquireCustomerTable = ({ acquiredData }) => {
    return (
        <>
            <tbody>
                <td className="py-3 px-4 border-b text-[12px] leading-4 font-medium text-[#58595A]">
                    {acquiredData?.availed_on.split('T')[0]}
                </td>
                <td className="py-3 px-4 border-b text-[12px] leading-4 font-medium text-[#58595A]">
                    {acquiredData?.name}
                </td>
                <td className="py-3 px-4 border-b text-[12px] leading-4 font-medium text-[#58595A]">
                    {acquiredData?.email}
                </td>
                <td className="py-3 px-4 border-b text-[12px] leading-4 font-medium text-[#58595A]">
                    {acquiredData?.phone_number}
                </td>
                <td className="py-3 px-4 border-b text-[12px] leading-4 font-medium text-[#58595A]">
                    <a href={acquiredData?.invoice} target="_blank" rel="noopener noreferrer">
                        <MdOutlineFileDownload className="text-[16px] leading-5 text-[#8F9091]" />
                    </a>
                </td>
                <td className="py-3 px-4 border-b text-[12px] leading-4 font-medium text-[#58595A]">
                    {acquiredData?.IP_city}
                </td>
            </tbody>
        </>
    )
}

export default AcquireCustomerTable
