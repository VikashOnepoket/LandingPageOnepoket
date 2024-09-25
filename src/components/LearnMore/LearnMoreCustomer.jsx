import React, { useEffect } from 'react'
import NavTop from '../Navbar/NavTop'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import group from '../../assets/Group 93.png'
import group1 from '../../assets/Group 94.png'
import group2 from '../../assets/OBJECTS.png'
import { useNavigate } from 'react-router-dom'

const LearnMoreCustomer = () => {
    const navigate = useNavigate()
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <div className='h-screen overflow-y-auto'>
                <NavTop />
                <Navbar />
                {/*  */}
                <div className='mt-20'>
                    {/* header content */}

                    <div className='md:text-center text-start w-[90%] mx-auto'>
                        <h1 className='text-[#004699] text-[36px] leading-[45px] font-bold '>"Customer support, simplified."</h1>
                        <p className='text-[#202123BF] text-[20px] leading-[26px] mt-4 md:w-1/2 mx-auto font-semibold'>Empower your customers with a smooth and seamless after-sales service experience, making it easier for them to manage everything in one place:</p>
                    </div>

                    {/* card section */}
                    <div className='md:w-[80%] xl-w-[90%] mx-auto mt-20 w-[90%]'>
                        {/* card 1 */}
                        <div className='flex items-center justify-between gap-10 md:flex-row flex-col-reverse'>
                            <div className='rounded-[20px] text-center p-10 border-[#D8D8D8]   border bg-gradient-to-r from-[#396fb0] to-[#0D4F93]  md:h-[200px] h-[230px] md:w-1/2 w-full'>
                                <h1 className='text-[18px] leading-[23px] font-semibold text-white'>1-Click After-Sales Service</h1>
                                <p className='text-[14px] text-white font-normal leading-[18px] mt-2'>Simplify the process of after-sales support by offering a one-click solution for customers. Whether they need assistance with product issues or have questions, your service team will be easily accessible, fostering positive customer relationships and enhancing satisfaction.
                                </p>
                            </div>
                            <div className='md:w-1/2 w-full flex justify-center'>
                                <img src={group} className='h-[180px]' />
                            </div>
                        </div>
                        {/* card2 */}
                        <div className='flex items-center justify-between gap-10 mt-20 md:flex-row flex-col'>

                            <div className='md:w-1/2 w-full flex justify-center'>
                                <img src={group1} className='h-[180px]' />
                            </div>
                            <div className='rounded-[20px] text-center p-10 border-[#D8D8D8] border   bg-gradient-to-r from-[#396fb0] to-[#0D4F93] md:h-[200px] h-[230px] md:w-1/2 w-full'>
                                <h1 className='text-[18px] leading-[23px] font-semibold text-white'>Seamless Warranty Management:</h1>
                                <p className='text-[14px] text-white font-normal leading-[18px] mt-2'>Make warranty claims a breeze with an integrated, automated system. Customers can register and manage their warranties effortlessly, reducing the frustration of traditional, complicated processes.
                                </p>
                            </div>
                        </div>
                        {/* card 3 */}
                        <div className='flex items-center justify-between gap-10 mt-20 md:flex-row flex-col-reverse '>
                            <div className='rounded-[20px] text-center p-10 border-[#D8D8D8] border   bg-gradient-to-r from-[#396fb0] to-[#0D4F93] md:h-[200px] h-[230px] md:w-1/2 w-full'>
                                <h1 className='text-[18px] leading-[23px] font-semibold text-white'>Unified Dashboard for Warranty & Installation Management:</h1>
                                <p className='text-[14px] text-white font-normal leading-[18px] mt-2'>Centralize your after-sales operations with a single, user-friendly dashboard. From warranty tracking to product installation scheduling, both customers and support teams can manage everything in one place, improving transparency, efficiency, and overall user satisfaction.</p>
                            </div>
                            <div className='md:w-1/2 w-full flex justify-center'>
                                <img src={group2} className='h-[180px]' />
                            </div>
                        </div>
                    </div>

                    <div className=' w-[80%] mx-auto mt-20'>
                        <button className='text-[14px] leading-[18px] text-[#004699] flex items-center gap-2' onClick={() => navigate('/')}>
                            <span class="material-symbols-outlined ">
                                arrow_back
                            </span>
                            Back
                        </button>
                    </div>

                </div>
                <Footer />
            </div>
        </>
    )
}

export default LearnMoreCustomer
