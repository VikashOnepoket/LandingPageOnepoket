import React from 'react';
import { MdOutlineFileDownload } from 'react-icons/md';

const Table = ({ scan }) => {
    return (


        <tr className="border-b border-gray-200">
            <td className="py-4 px-4 w-[15%] text-[14px] leading-4 text-[#8F9091] font-medium">{scan?.name}</td>
            <td className="py-4 px-4 w-[15%] text-[14px] leading-4 text-[#8F9091] font-medium">{scan?.email}</td>
            <td className="py-4 px-4 w-[15%] text-[14px] leading-4 text-[#8F9091] font-medium">{scan?.phone_number}</td>
            <td className="py-4 px-4 w-[20%] text-[14px] leading-4 text-[#8F9091] font-medium">{scan?.product_name}</td>
            <td className="py-4 px-4  w-[15%]">
                <a href={scan.invoice} target="_blank" rel="noopener noreferrer">
                    <MdOutlineFileDownload className="text-[16px] leading-5 text-[#8F9091]" />
                </a>
            </td>
            <td className="py-4 px-4 w-[15%] whitespace-nowrap text-[14px] leading-4 text-[#8F9091] font-medium">Varansi</td>
        </tr>



    );
};

export default Table;
