import React from 'react'

const QRUsage = () => {
  const boxShadowStyle = {
    boxShadow: '0px 1px 4px 0px rgba(0, 0, 0, 0.15)', // X-offset, Y-offset, blur, spread, color
  };
  return (
    <div className='mt-10'>
      <div className='flex justify-between mt-3 items-center  lg:w-[70%] md:w-[80%] w-full'>
        <div>
          <h3 className='text-[1.2rem] leading-[1.5rem] font-semibold text-[#202123]'> Usage History</h3>
        </div>

      </div>
      <div className='mt-8 rounded-lg' style={boxShadowStyle}>
        <div className='flex justify-between items-center '>
          <div className='mt-3 mb-10'>
            <h3 className='text-[2.5rem] leading-[3.2rem] font-bold text-[#0052CC] px-5 py-2'>Total Credits Left</h3>
            <div style={{ borderRadius: '0px 23px 23px 0px' }} className='mt-3 border border-[#E4EFFF] bg-[#E4EFFF] '>
              <h3 className='text-[1.5rem] leading-[2rem] font-semibold text-[#0052CC] px-5 py-2'>Track your credits in Real-Time.</h3>
            </div>

          </div>
          <div className="flex items-center mt-3 mb-10 px-5 py-2">
            <p className="text-[3rem] leading-[4rem] font-semibold text-[#00742A]">1436</p>
            <div className="h-[4rem] w-[1px] border border-[#2021231A] mx-4"></div>
            <p className="text-[3rem] leading-[4rem] font-semibold text-[#0052cc]">2000</p>
          </div>

        </div>
      </div>

      {/* table */}
      <div className="container mx-auto mt-10">
        <div className="overflow-x-auto">
          <table className="min-w-full  border-gray-200">
            <thead className="">
              <tr>

                <th className="py-2 px-4 border-b text-left  text-[#202123BF] text-[12px] leading-[17px] font-semibold">Created On </th>
                <th className="py-2 px-4 border-b text-left  text-[#202123BF] text-[12px] leading-[17px] font-semibold">Product</th>
                <th className="py-2 px-4 border-b text-left  text-[#202123BF] text-[12px] leading-[17px] font-semibold">Category</th>
                <th className="py-2 px-4 border-b text-left  text-[#202123BF] text-[12px] leading-[17px] font-semibold">No. of QR Generated</th>
                <th className="py-2 px-4 border-b text-left  text-[#202123BF] text-[12px] leading-[17px] font-semibold">No. of QR Left</th>


              </tr>
            </thead>
            <tbody className=''>
              <tr className="p-5">
                <td className="py-5 px-4 border-b  font-medium  text-[#202123BF] text-[12px] leading-[16px] hover:underline"><a href="#">20-06-2024</a></td>
                <td className="py-5 px-4 border-b  font-medium text-[#202123BF] text-[12px] leading-[16px]">IPhone 15 Pro</td>
                <td className="py-5 px-4 border-b  font-medium text-[#202123BF] text-[12px] leading-[16px]">Smartphone</td>
                <td className="py-5 px-4 border-b  font-medium text-[#202123BF] text-[12px] leading-[16px]">2000</td>
                <td className="py-5 px-4 border-b  font-medium text-[#202123BF] text-[12px] leading-[16px]">1597</td>
              </tr>
            

            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default QRUsage
