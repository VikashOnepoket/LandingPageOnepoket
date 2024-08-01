import React from 'react'
import ComingSoon from '../../../assets/comingsoon.png'

const FactoryManagement = () => {
    return (
        <>
            <div className='p-8'>
                <div className='flex lg:justify-between gap-10 lg:flex-row flex-col'>
                    <div className='lg:w-1/2 w-full'>
                        <h3 className='text-[#0052cc] text-[3.3rem] font-semibold'>Coming Soon ...</h3>
                        <p className='mt-3 text-[#A9AAAA] text-[1.5rem]'>Stay connected! Stay Updated</p>
                    </div>
                    <div className='lg:w-1/2 w-full'>
                      <img src={ComingSoon} alt='coming-soon' className='w-[100%] h-[100%]'/>
                    </div>

                </div>

            </div>
        </>
    )
}

export default FactoryManagement
