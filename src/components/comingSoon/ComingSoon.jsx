import React, { useRef } from 'react'
import NavTop from '../Navbar/NavTop'
import Navbar from '../Navbar/Navbar'

import LoginBG from '../../assets/Login background.png';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa6';
import Logo from '../../assets/FullLogo.png';
import { motion, useInView } from 'framer-motion'
import './ComingSoon.css'
// import LoginBG from '../../assets/Login background.png';


const ComingSoon = () => {

    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, amount: 0.1 });

    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1.5, staggerChildren: 0.3 } },
    };

    return (
        <>
            <div className="h-screen overflow-y-auto">

                <NavTop />
                <Navbar />
                <div className='bg-[#004699] h-auto ' >
                    <div className='md:text-center text-start pt-24 bg-contain bg-no-repeat bg-center md:w-full w-[90%] mx-auto'>
                        <h1 className='text-[52px] leading-[70px] text-[#FF707080] font-extrabold tracking-wider text-animation'>Exciting Things Are Coming!</h1>
                        <p className='text-[24px] leading-[32px] font-medium text-[#BCCEE8] text-center mt-8 md:w-1/2 mx-auto'>We're working on something special for this section, and it'll be live soon!</p>
                        <p className='text-[32px] leading-10 font-medium mt-8 text-white text-center'>why wait?</p>
                        <p className='text-[24px] leading-[32px] font-medium text-[#BCCEE8] text-center mt-8 md:w-1/2 mx-auto'> <p className='text-[24px] leading-[32px] font-medium text-[#BCCEE8]  mt-8 text-center'> Talk to our team today to learn more about our exciting new features and how they can benefit your business</p></p>

                        <motion.div className='w-1/2 mx-auto '
                           >
                            <motion.img
                                src="https://firebasestorage.googleapis.com/v0/b/onepoketstage.appspot.com/o/Coming%20Soon%20(1).png?alt=media&token=7b047535-24ac-4fbf-95e3-6d27e3465dfd"
                                alt="Coming Soon"
                                className='w-full cursor-pointer' // Add Tailwind styles if needed
                                whileHover={{ scale: 1.1,  }} // Scale up and slightly rotate on hover
                                transition={{ duration: 0.5, ease: 'easeInOut' }} // Smooth transition
                            />

                            {/* Animate the text on hover using Framer Motion */}

                        </motion.div>

                    </div>

                    {/* footer */}

                    <motion.div
                        variants={containerVariants}
                        className=' mx-auto   w-[90%] footer-bg pb-10'
                    >
                        <div className='lg:flex lg:items-start lg:justify-between lg:gap-5 pt-24 md:grid md:grid-cols-3 sm:grid gap-10 sm:grid-cols-2 grid grid-cols-1'>
                            {/* Logo Section */}
                            <div className='w-[215px] flex flex-col'>
                                <div>
                                    <img src={Logo} alt="Logo" />
                                </div>
                                <div className='pt-5'>
                                    <p className='text-[18px] font-normal leading-[31px] text-[#ABCAF6] pt-5 flex  gap-2'>
                                        <span class="material-symbols-outlined pt-2">
                                            pin_drop
                                        </span>
                                        Mayur Vihar, Delhi 896467</p>
                                    <p className='text-[18px] font-normal leading-[31px] text-[#ABCAF6] pt-5 flex gap-2'>
                                        <span class="material-symbols-outlined pt-1">
                                            call
                                        </span>
                                        +917875637893</p>
                                    <p className='text-[18px] font-normal leading-[31px] text-[#ABCAF6] pt-5 flex gap-2'>
                                        <span class="material-symbols-outlined pt-1">
                                            drafts
                                        </span>
                                        Vishesh@onepoket.com</p>
                                </div>
                            </div>

                            {/* Resources Section */}
                            <div className='flex flex-col'>
                                <div>
                                    <p className='text-[24px] font-bold leading-[31px] text-white'>Resources</p>
                                </div>
                                <div className='pt-5'>
                                    <p className='text-[24px] font-medium leading-[31px] text-white pt-5'>FAQs</p>
                                    <p className='text-[24px] font-medium leading-[31px] text-white pt-5'>Blogs</p>
                                </div>
                            </div>

                            {/* Company Section */}
                            <div className='flex flex-col'>
                                <div>
                                    <p className='text-[24px] font-bold leading-[31px] text-white'>Company</p>
                                </div>
                                <div className='pt-5'>
                                    <p className='text-[24px] font-medium leading-[31px] text-white pt-5'>About Us</p>
                                    <p className='text-[24px] font-medium leading-[31px] text-white pt-5'>Careers</p>
                                    <p className='text-[24px] font-medium leading-[31px] text-white pt-5'>Our Team</p>
                                </div>
                            </div>

                            {/* Support Section */}
                            <div className='flex flex-col'>
                                <div>
                                    <p className='text-[24px] font-bold leading-[31px] text-white'>Support</p>
                                </div>
                                <div className='pt-5'>
                                    <p className='text-[24px] font-medium leading-[31px] text-white pt-5'>Contact Us</p>
                                    <p className='text-[24px] font-medium leading-[31px] text-white pt-5'>Help Center</p>
                                </div>
                            </div>

                            {/* Social Section */}
                            <div className='flex flex-col'>
                                <div>
                                    <p className='text-[24px] font-bold leading-[31px] text-white'>Social</p>
                                </div>

                                <div className='pt-5'>
                                    <div className='pt-5 flex gap-5 items-center text-white'>
                                        <FaLinkedin size={30} />
                                        <FaInstagram size={30} />
                                    </div>
                                </div>
                            </div>
                        </div>


                    </motion.div>
                </div>
            </div>
        </>
    )
}

export default ComingSoon
