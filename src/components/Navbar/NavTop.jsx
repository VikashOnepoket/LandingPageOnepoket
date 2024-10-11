import React from 'react'
import qr from '../../assets/top-qr.png'
import qr1 from '../../assets/qr1.png'
import qr2 from '../../assets/qr2.png'
import left from '../../assets/left.png'
import left1 from '../../assets/left1.png'
import left2 from '../../assets/left2.png'
import left4 from '../../assets/left4.png'


const NavTop = () => {
    return (
        <>
            <nav className=' bg-[#004699] lg:flex justify-between items-center hidden h-[4.125rem]'>
                <div className='h-[60px] flex gap-2'>
                    <img src={left} className='w-[100%] h-[100%]' />
                    <img src={left1} className='w-[100%] h-[100%]' />
                    <img src={left2} className='w-[100%] h-[100%]' />
                </div>
                <div className=''>
                    <p className='text-[13px] leading-4 text-[#E4EFFF] font-medium tracking-wider nav-top-font'>Enjoy seamless onboarding and warranty management with our QR technology.</p>
                </div>
                <div className='h-[60px] flex gap-2'>
                    <img src={qr} className='w-[100%] h-[100%]' />
                    <img src={qr1} className='w-[100%] h-[100%]' />
                    <img src={qr2} className='w-[100%] h-[100%]' />
                </div>

            </nav>
        </>
    )
}

export default NavTop
