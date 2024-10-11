import React, { useRef } from 'react';
import NavTop from '../Navbar/NavTop';
import Navbar from '../Navbar/Navbar';

import LoginBG from '../../assets/Login background.png';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa6';
import Logo from '../../assets/FullLogo.png';
import { motion, useInView } from 'framer-motion';
import './ComingSoon.css';

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
                <div className='bg-[#004699] h-auto'
                // style={{
                //     backgroundImage:  `url(${'https://firebasestorage.googleapis.com/v0/b/onepoketstage.appspot.com/o/Login%20background.png?alt=media&token=31d0749f-6105-44f5-9ecc-095c09da99e2'})` , // Only show the image if loaded
                //     backgroundSize: "cover",
                //     backgroundPosition: "center",
                //     transition: 'background-image 0.5s ease-in-out' // Smooth transition when the image loads
                // }}
                >
                    <div className='relative'>
                        <img
                            src='https://firebasestorage.googleapis.com/v0/b/onepoketstage.appspot.com/o/Group%2022%20(1).png?alt=media&token=0f692f9e-05fa-4f23-8e61-5c01e638ff78'
                            className='absolute top-5 w-[100px] md:block hidden' // Show only on small screens
                        />
                        <img
                            src='https://firebasestorage.googleapis.com/v0/b/onepoketstage.appspot.com/o/Group%20127.png?alt=media&token=9d0136bb-38b8-4b5f-8b7f-594908804660'
                            className='absolute top-20 w-[60px] right-0 md:block hidden' // Show only on small screens
                        />
                        <img
                            src='https://firebasestorage.googleapis.com/v0/b/onepoketstage.appspot.com/o/Group%2015%20(1).png?alt=media&token=f7154331-543a-4c3c-bc1b-6721bb5a6ff3'
                            className='absolute top-[34rem] w-[60px] md:block hidden' // Show only on small screens
                        />
                        <img
                            src='https://firebasestorage.googleapis.com/v0/b/onepoketstage.appspot.com/o/Group%20123.png?alt=media&token=595660de-9769-4c6a-8cc1-8dd64f323c9e'
                            className='absolute top-[34rem] w-[160px] right-0 md:block hidden' // Show only on small screens
                        />
                    </div>

                    <div className='relative md:text-center  text-start  bg-contain bg-no-repeat bg-center md:w-full w-[90%] mx-auto z-20'>
                        <h1 className='md:text-[52px] md:leading-[70px] pt-[4.94rem] text-[32px] leading-[45px] text-[#FF707080] font-extrabold tracking-wider text-animation reddit'>Exciting Things Are Coming!</h1>
                        <p className='text-[24px] leading-[32px] font-medium text-[#BCCEE8] text-center mt-[1.87rem] md:w-1/2 mx-auto reddit'>We're working on something special for this section, and it'll be live soon!</p>
                        <p className='text-[32px] leading-10 font-medium mt-[1.87rem] text-white text-center reddot'>why wait?</p>
                        <p className='text-[24px] leading-[32px] font-medium text-[#BCCEE8] text-center mt-[1.88rem] md:w-1/2 mx-auto reddit'>
                            Talk to our team today to learn more about our exciting new features and how they can benefit your business
                        </p>

                        <motion.div className='md:w-[30%] w-1/2 mx-auto'>
                            <motion.img
                                //   onClick={}
                                src="https://firebasestorage.googleapis.com/v0/b/onepoketstage.appspot.com/o/Coming%20Soon%20(1).png?alt=media&token=7b047535-24ac-4fbf-95e3-6d27e3465dfd"
                                alt="Coming Soon"
                                className='w-full cursor-pointer'
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.5, ease: 'easeInOut' }}
                            />
                        </motion.div>
                    </div>

                    <motion.div
                        variants={containerVariants}
                        className='mx-auto w-[90%] footer-bg pb-10'
                    >
                        <div className='lg:flex lg:items-start lg:justify-between lg:gap-5 pt-24 md:grid md:grid-cols-3 sm:grid gap-10 sm:grid-cols-2 grid grid-cols-1'>
                            {/* Logo Section */}
                            <div className='w-[215px] flex flex-col'>
                                <div>
                                    <img src={Logo} alt="Logo" />
                                </div>
                                <div className='pt-5'>
                                    <p className='text-[18px] font-normal leading-[31px] text-[#ABCAF6] pt-5 flex gap-2'>
                                        <span className="material-symbols-outlined pt-2">pin_drop</span>
                                        Mayur Vihar, Delhi 896467
                                    </p>
                                    <p className='text-[18px] font-normal leading-[31px] text-[#ABCAF6] pt-5 flex gap-2'>
                                        <span className="material-symbols-outlined pt-1">call</span>
                                        +917875637893
                                    </p>
                                    <p className='text-[18px] font-normal leading-[31px] text-[#ABCAF6] pt-5 flex gap-2'>
                                        <span className="material-symbols-outlined pt-1">drafts</span>
                                        Vishesh@onepoket.com
                                    </p>
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

                    <motion.div className='mt-[-30px] sm:flex hidden'>
                        <img src='https://firebasestorage.googleapis.com/v0/b/onepoketstage.appspot.com/o/Group%20149.png?alt=media&token=17727ac5-b552-400c-bc2e-c97809032989' />
                    </motion.div>
                </div>
            </div>
        </>
    );
};

export default ComingSoon;
