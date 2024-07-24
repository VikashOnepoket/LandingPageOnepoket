import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logo = () => {
  const navigate = useNavigate()
  const handleNavigate = () => {
    navigate(`/profile/logo/add_logo`)
  }
  return (
    <div className='mt-10'>
      <div className='flex sm:justify-between gap-10 sm:items-center sm:flex-row flex-col '>
        <div>
          <h3 className='text-[1.2rem] leading-[1.5rem] font-semibold text-[#202123]'>Logo</h3>
        </div>
        <div onClick={handleNavigate}>
          <button
            className='bg-[#0052CC] text-white hover:bg-[#0052cc] hover:text-white border border-[#0052cc] text-[14px] leading-[18px] font-bold rounded-md flex items-center px-3 py-2'>
            <span className="material-symbols-outlined mr-2">add</span>
            Add Logo
          </button>
        </div>
      </div>

      {/* table */}
      <div className="container mx-auto mt-10">
        <div className="overflow-x-auto">
          <table className="min-w-full border-gray-200">
            <thead className="">
              <tr>
                <th className="py-2 px-4 border-b text-left text-[#202123BF] text-[12px] leading-[17px] font-semibold">Logo </th>
                <th className="py-2 px-4 border-b text-left text-[#202123BF] text-[12px] leading-[17px] font-semibold">Name</th>
                <th className="py-2 px-4 border-b text-left text-[#202123BF] text-[12px] leading-[17px] font-semibold">Action</th>
              </tr>
            </thead>
            <tbody className=''>
              <tr className="p-5">
                <td className="py-5 px-4 border-b  font-medium text-[#202123BF] text-[12px] leading-[16px]">
                  <div className="h-[50px] w-[50px] border border-[#F1F1F1] rounded-md bg-[#D9D9D9]">
                    <img src='https://via.placeholder.com/50' alt="Logo" className='h-full w-full object-cover rounded-md' />
                  </div>
                </td>
                <td className="py-5 px-4 border-b  font-medium text-[#202123BF] text-[12px] leading-[16px]">Default</td>
                <td className="py-5 px-4 border-b  font-medium text-[#202123BF] text-[12px] leading-[16px]">
                  <span className="material-symbols-outlined mr-2 text-[20px] leading-[28px]">edit</span>
                  <span className="material-symbols-outlined mr-2 text-[20px] leading-[28px]">delete</span>
                </td>
              </tr>
              <tr className="p-5">
                <td className="py-5 px-4 border-b  font-medium text-[#202123BF] text-[12px] leading-[16px]">
                  <div className="h-[50px] w-[50px] border border-[#F1F1F1] rounded-md bg-[#D9D9D9]">
                    <img src='https://via.placeholder.com/50' alt="Logo" className='h-full w-full object-cover rounded-md' />
                  </div>
                </td>
                <td className="py-5 px-4 border-b  font-medium text-[#202123BF] text-[12px] leading-[16px]">Another Logo</td>
                <td className="py-5 px-4 border-b  font-medium text-[#202123BF] text-[12px] leading-[16px]">

                  <span className="material-symbols-outlined mr-2 text-[20px] leading-[28px]">edit</span>
                  <span className="material-symbols-outlined mr-2 text-[20px] leading-[28px]">delete</span>

                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Logo;
