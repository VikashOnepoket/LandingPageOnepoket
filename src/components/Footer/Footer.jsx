import React, { useRef } from 'react';
import logo from '../../assets/logoS.png';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa6';
import { useInView, motion } from 'framer-motion';
import footerBg from '../../assets/Dot.png'
import Logo from '../../assets/FullLogo.png';

const Footer = () => {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, amount: 0.1 });

    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1.5, staggerChildren: 0.3 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    const redirectToLinkedin = () => {
        const url = 'https://www.linkedin.com/company/onepoket/';
        window.open(url, '_blank');
    };

    return (
        <motion.div
            ref={containerRef}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={containerVariants}
            className='bg-[#004699]  h-auto mt-32 '
        >
            <motion.div
                variants={containerVariants}
                className=' mx-auto   w-[80%] footer-bg py-8'
            >
                {/* <motion.div
                    variants={itemVariants}
                    className=''
                >
                    <motion.div variants={itemVariants} className='flex justify-between items-center pt-24'>
                        <div className='w-[215px]'>
                            <img src={Logo} alt="Logo" />
                          
                        </div>

                        <div>
                            <a href='mailto:support@onepoket.in' className='text-[24px] font-bold leading-[31px] text-white'>Support</a>
                        </div>


                        <div className=''>
                            <p className='text-[24px] font-bold leading-[31px] text-white'>Company</p>
                        </div>

                        <div className=''>
                          
                            <p className='text-[24px] font-bold leading-[31px] text-white'>Resources</p>
                            <p className='text-[24px] font-bold leading-[31px] text-white pt-5'>Resources</p>
                            <p className='text-[24px] font-bold leading-[31px] text-white pt-5'>Resources</p>
                            
                        </div>

                        <div className=''>
                            <p className='text-[24px] font-bold leading-[31px] text-white'>Social</p>
                        </div>
                    </motion.div>
                    <motion.div
                        variants={itemVariants}
                        className='w-[50px] h-[50px] rounded-full bg-[#B8D4FF] border-[#B8D4FF] flex items-center justify-center cursor-pointer'
                        onClick={redirectToLinkedin}
                    >
                        <FaLinkedin size={30} className='' />
                    </motion.div>
                </motion.div> */}
                {/* <motion.div
                    variants={itemVariants}
                    className='flex justify-between mt-12 md:flex-row md:gap-10 lg:flex-row lg:gap-0 flex-col gap-10'
                >
                    <div>
                        <a href='mailto:support@onepoket.in' className='text-[18px] font-bold leading-[28px] text-[#0052CC]'>Support</a>
                    </div>
                    <div className='text-[18px] font-bold leading-[28px] text-[#0052CC]'>
                        <a href='#'>Careers</a>
                    </div>
                    <div className='text-[18px] font-bold leading-[28px] text-[#0052CC]'>
                        <a href='#'>Our Team</a>
                    </div>
                </motion.div> */}
                <div className='lg:flex lg:items-start lg:justify-between lg:gap-5 pt-24 md:grid md:grid-cols-3 sm:grid gap-10 sm:grid-cols-2 grid grid-cols-1'>
                    {/* Logo Section */}
                    <div className=' flex flex-col w-[25%]'>
                        <div>
                            <img src={Logo} alt="Logo" className='w-[14.84375rem]' />
                        </div>
                        <div className='pt-5'>
                            <p className='text-[1.125rem] font-normal leading-[31px] text-[#ABCAF6] pt-5 flex  gap-2 '>
                                <span class="material-symbols-outlined pt-2">
                                    pin_drop
                                </span>
                                D 57/3-1, Satshri complex, Sigra, Varanasi - 221010</p>
                            <p className='text-[1.125rem] font-normal leading-[31px] text-[#ABCAF6] pt-5 flex gap-2'>
                                <span class="material-symbols-outlined pt-1">
                                    call
                                </span>
                                +917875637893</p>
                            <p className='text-[1.125rem] font-normal leading-[31px] text-[#ABCAF6] pt-5 flex gap-2'>
                                <span class="material-symbols-outlined pt-1">
                                    drafts
                                </span>
                                Vishesh@onepoket.com</p>
                        </div>
                    </div>

                    {/* Resources Section */}
                    <div className='flex flex-col'>
                        <div>
                            <p className='text-[1.5rem] font-bold leading-[31px] text-white'>Resources</p>
                        </div>
                        <div className='pt-5'>
                            <p className='text-[1.125rem] font-medium leading-[31px] text-[#ABCAF6] pt-5'>FAQs</p>
                            <p className='text-[1.125rem] font-medium leading-[31px] text-[#ABCAF6] pt-5'>Blogs</p>
                        </div>
                    </div>

                    {/* Company Section */}
                    <div className='flex flex-col'>
                        <div>
                            <p className='text-[1.5rem] font-bold leading-[31px] text-white'>Company</p>
                        </div>
                        <div className='pt-5'>
                            <p className='text-[1.125rem] font-medium leading-[31px] text-[#ABCAF6] pt-5'>About Us</p>
                            <p className='text-[1.125rem] font-medium leading-[31px] text-[#ABCAF6] pt-5'>Careers</p>
                            <p className='text-[1.125rem] font-medium leading-[31px] text-[#ABCAF6] pt-5'>Our Team</p>
                        </div>
                    </div>

                    {/* Support Section */}
                    <div className='flex flex-col'>
                        <div>
                            <p className='text-[1.5rem] font-bold leading-[31px] text-white'>Support</p>
                        </div>
                        <div className='pt-5'>
                            <p className='text-[1.125rem] font-medium leading-[31px] text-[#ABCAF6] pt-5'>Contact Us</p>
                            <p className='text-[1.125rem] font-medium leading-[31px] text-[#ABCAF6] pt-5'>Help Center</p>
                        </div>
                    </div>

                    {/* Social Section */}
                    <div className='flex flex-col'>
                        <div>
                            <p className='text-[1.5rem] font-bold leading-[31px] text-white'>Social</p>
                        </div>

                        <div className='pt-5'>
                            <div className='pt-5 flex gap-5 items-center text-[#ABCAF6]'>
                                <FaLinkedin size={30} />
                                <FaInstagram size={30} />
                            </div>
                        </div>
                    </div>
                </div>


            </motion.div>
            <motion.div  className='mt-[-30px] sm:flex hidden'>
                {/* <img src={footerBg} className='h-[230px] w-[100%]' />
                <img src={footerBg} className='h-[230px]' />
                <img src={footerBg} className='h-[180px]' /> */}

                <img src='https://firebasestorage.googleapis.com/v0/b/onepoketstage.appspot.com/o/Group%20149.png?alt=media&token=17727ac5-b552-400c-bc2e-c97809032989'  />


            </motion.div>


        </motion.div >
    );
};

export default Footer;
