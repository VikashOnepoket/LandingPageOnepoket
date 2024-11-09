import React from 'react'

const IncompleteTable = ({ scan }) => {
    return (
        <tr className="border-b border-gray-200 w-full">
            <td className="py-4 px-4  text-[14px] leading-4 text-[#8F9091] font-medium ">{scan?.product_name}</td>
            <td className="py-4 px-4  text-[14px] leading-4 text-[#8F9091] font-medium ">{scan?.serial_number}</td>
            <td className="py-4 px-4  text-[14px] leading-4 text-[#8F9091] font-medium ">{scan?.warranty}</td>
        </tr>
    )
}

export default IncompleteTable
