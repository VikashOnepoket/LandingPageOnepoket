import React from 'react'
import { useNavigate } from 'react-router-dom';

const RolesAndPermission = () => {
  const navigate = useNavigate();
  return (
    <div className='mt-3 p-8'>
      <div className='flex justify-between gap-10 items-center'>
        <div>
          <h3 className="mb-4 lg:mb-0 text-[1.5rem] leading-[2.5rem] text-[#0052CC] font-semibold">Roles & Permissions</h3>
        </div>
        <div>
          <button block className='bg-[#0052CC] text-white hover:bg-[#0052cc] hover:text-white border border-[#0052cc] text-[14px] leading-[18px] font-bold rounded-md flex  items-center px-3 py-2' onClick={() => navigate(`/roles/add_roles_permission`)}>
            <span className="material-symbols-outlined mr-2">add</span>
            Add New User
          </button>
        </div>
      </div>


      <div className="flex space-x-8 items-center mt-3">
        <p className="text-[14px] leading-[18px] font-semibold text-[#202123BF]">We Will help you onboard your team smoothly.</p>
        <p className="text-[12px] leading-[16px] font-semibold text-[#0052CC]">Request Demo</p>
      </div>

      {/* table */}
      <div className="container mx-auto mt-10">
        <div className="overflow-x-auto">
          <table className="min-w-full  border-gray-200">
            <thead className="">
              <tr>

                <th className="py-2 px-4 border-b text-left  text-[#202123BF] text-[12px] leading-[17px] font-semibold">Name</th>
                <th className="py-2 px-4 border-b text-left  text-[#202123BF] text-[12px] leading-[17px] font-semibold">Email</th>
                <th className="py-2 px-4 border-b text-left  text-[#202123BF] text-[12px] leading-[17px] font-semibold">Role</th>
                <th className="py-2 px-4 border-b text-left  text-[#202123BF] text-[12px] leading-[17px] font-semibold">Action</th>

              </tr>
            </thead>
            {/* <tbody className=''>
                                        <tr className="p-5">
                                            <td className="py-5 px-4 border-b  font-medium  text-[#0052cc] hover:underline"><a href="#">LG Service Centre</a></td>
                                            <td className="py-5 px-4 border-b  font-medium text-[#202123BF]">1234567899</td>
                                            <td className="py-5 px-4 border-b  font-medium text-[#202123BF]">xyz123@gmail.com</td>
                                            <td className="py-5 px-4 border-b  font-medium text-[#202123BF]">CIT Road, Kolkata-700010, W.B</td>
                                        </tr>
                                        <tr className="p-5">
                                            <td className="py-5 px-4 border-b  font-medium  text-[#0052cc] hover:underline"><a href="#">LG Service Centre</a></td>
                                            <td className="py-5 px-4 border-b  font-medium text-[#202123BF]">1234567899</td>
                                            <td className="py-5 px-4 border-b  font-medium text-[#202123BF]">xyz123@gmail.com</td>
                                            <td className="py-5 px-4 border-b  font-medium text-[#202123BF]">CIT Road, Kolkata-700010, W.B</td>
                                        </tr>
                                        <tr className="p-5">
                                            <td className="py-5 px-4 border-b  font-medium  text-[#0052cc] hover:underline"><a href="#">LG Service Centre</a></td>
                                            <td className="py-5 px-4 border-b  font-medium text-[#202123BF]">1234567899</td>
                                            <td className="py-5 px-4 border-b  font-medium text-[#202123BF]">xyz123@gmail.com</td>
                                            <td className="py-5 px-4 border-b  font-medium text-[#202123BF]">CIT Road, Kolkata-700010, W.B</td>
                                        </tr>

                                    </tbody> */}
          </table>
        </div>
      </div>


    </div>
  )
}

export default RolesAndPermission
