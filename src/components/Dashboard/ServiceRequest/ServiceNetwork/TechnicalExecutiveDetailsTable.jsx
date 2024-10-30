import React from 'react'

const TechnicalExecutiveDetailsTable = ({ data }) => {
    return (
        <>
            <tbody className=''>
                <tr className="p-5">
                    <td className="py-5 px-4 border-b  text-[12px] leading-[17px] font-semibold  text-[#0052cc] ">{data?.name}</td>
                    <td className="py-5 px-4 border-b  text-[12px] leading-[17px] font-semibold text-[#202123BF]">{data?.phone_number}</td>
                    <td className="py-5 px-4 border-b  text-[12px] leading-[17px] font-semibold text-[#202123BF]">{data?.email}</td>

                </tr>
            </tbody>
        </>
    )
}

export default TechnicalExecutiveDetailsTable
