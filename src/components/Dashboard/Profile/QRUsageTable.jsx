import React from 'react'

const QRUsageTable = ({ qrTransaction }) => {
  return (
    <>
      <tbody>
        <tr className="p-5">
          <td className="py-5 px-4 border-b font-medium text-[#202123BF] text-[12px] leading-[16px] "><a href="#">{qrTransaction?.datetime?.slice(0, 10)}</a></td>
          <td className="py-5 px-4 border-b font-medium text-[#202123BF] text-[12px] leading-[16px]">{qrTransaction?.product_name}</td>
          <td className="py-5 px-4 border-b font-medium text-[#202123BF] text-[12px] leading-[16px]">{qrTransaction?.category_title}</td>
          <td className="py-5 px-4 border-b font-medium text-[#202123BF] text-[12px] leading-[16px]">{qrTransaction?.debit}</td>
          <td className="py-5 px-4 border-b font-medium text-[#202123BF] text-[12px] leading-[16px]">{qrTransaction?.running_balance}</td>
        </tr>
      </tbody>
    </>
  )
}

export default QRUsageTable
