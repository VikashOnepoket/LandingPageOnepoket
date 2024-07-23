import React from 'react'
import './Role.css'

const AddRolesAndPermission = () => {
  return (
    <>
      <div className='mt-3 p-8 mb-[80px]'>
        <div className='flex justify-between gap-10 items-center'>
          <div>
            <h3 className="mb-4 lg:mb-0 text-[1.5rem] leading-[2.5rem] text-[#0052CC] font-semibold">Add User Roles & Permissions</h3>
          </div>

        </div>
        <div className='mt-5'>
          {/* username */}
          <div className='flex flex-col gap-2'>
            <label className='text-[14px] leading-[18px] text-[#58595A] font-semibold'>Username</label>
            <input
              type='text'
              className='input md:w-[80%] lg:w-[70%] border 
            border-gray-300 
            dark:border-gray-600 
            dark:bg-transparent 
            rounded-md 
            w-full 
            py-2 px-3 
            focus:border-[#0052cc]
            focus:border
           
            focus-within:ring-1 
            appearance-none 
            transition 
            duration-150 
            dark:text-gray-100
            ease-in-out'
              placeholder='Enter Username'

            />
          </div>

          {/* Email */}
          <div className='flex flex-col gap-2 mt-5'>
            <label className='text-[14px] leading-[18px] text-[#58595A] font-semibold'>Email</label>
            <input
              type='text'
              className='input md:w-[80%] lg:w-[70%] border 
            border-gray-300 
            dark:border-gray-600 
            dark:bg-transparent 
            rounded-md 
            w-full 
            py-2 px-3 
            focus:border-[#0052cc]
            focus:border
           
            focus-within:ring-1 
            appearance-none 
            transition 
            duration-150 
            dark:text-gray-100
            ease-in-out'
              placeholder='Enter Email'

            />
          </div>


          {/* Password */}
          <div className='flex flex-col gap-2 mt-5'>
            <label className='text-[14px] leading-[18px] text-[#58595A] font-semibold'>Password</label>
            <input
              type='text'
              className='input md:w-[80%] lg:w-[70%] border 
            border-gray-300 
            dark:border-gray-600 
            dark:bg-transparent 
            rounded-md 
            w-full 
            py-2 px-3 
            focus:border-[#0052cc]
            focus:border
           
            focus-within:ring-1 
            appearance-none 
            transition 
            duration-150 
            dark:text-gray-100
            ease-in-out'
              placeholder='Enter Password'

            />
          </div>


          {/* Rolename */}
          <div className='flex flex-col gap-2 mt-5'>
            <label className='text-[14px] leading-[18px] text-[#58595A] font-semibold'>Role Name</label>
            <input
              type='text'
              className='input md:w-[80%] lg:w-[70%] border 
            border-gray-300 
            dark:border-gray-600 
            dark:bg-transparent 
            rounded-md 
            w-full 
            py-2 px-3 
            focus:border-[#0052cc]
            focus:border
           
            focus-within:ring-1 
            appearance-none 
            transition 
            duration-150 
            dark:text-gray-100
            ease-in-out'
              placeholder='Enter Role Name'

            />
          </div>


          {/* hr */}

          <div className='lg:w-[70%] md:w-[80%] mt-10'>
            <hr />
          </div>


          {/* add user button */}
          <div className='flex justify-end lg:w-[70%] md:w-[80%] mt-5'>


            <button block className=' text-[#0052cc] text-[14px] leading-[18px] font-bold rounded-md flex  items-center px-3 py-2'>
              <span className="material-symbols-outlined mr-2">add</span>
              Add user
            </button>

          </div>
        </div>
        <div className='flex justify-end lg:w-[70%] md:w-[80%] mt-10 gap-5 w-full'>
          <button className='text-[#58595A]  border border-[#8F9091] text-[14px] leading-[18px] font-bold rounded-md flex  items-center px-3 py-2'>
            Discard
          </button>
          <button block className='bg-[#0052CC] text-white hover:bg-[#0052cc] hover:text-white border border-[#0052cc] mr-5 text-[14px] leading-[18px] font-bold rounded-md flex  items-center px-3 py-2' >
            Save
          </button>
        </div>


      </div>
      {/* <div className='border-t  h-[60px]  flex items-center justify-end gap-3  md:w-[78%] z-50 2xl:w-[82%]'>
        <button className='text-[#58595A]  border border-[#8F9091] text-[14px] leading-[18px] font-bold rounded-md flex  items-center px-3 py-2'>
          Discard
        </button>
        <button block className='bg-[#0052CC] text-white hover:bg-[#0052cc] hover:text-white border border-[#0052cc] mr-5 text-[14px] leading-[18px] font-bold rounded-md flex  items-center px-3 py-2' >
          Save
        </button>

      </div> */}

    </>
  )
}

export default AddRolesAndPermission
