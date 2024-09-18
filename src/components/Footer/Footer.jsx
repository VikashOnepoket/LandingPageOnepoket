import React, { useRef } from 'react';
import logo from '../../assets/logoS.png';
import { FaLinkedin } from 'react-icons/fa6';
import { useInView, motion } from 'framer-motion';
import footerBg from '../../assets/Dot.png'

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
            className='bg-[#EBF3FF] h-[634px] mt-32'
        >
            <motion.div
                variants={containerVariants}
                className='lg:w-[864px] mx-auto pt-24 container w-[90%]'
            >
                <motion.div
                    variants={itemVariants}
                    className='flex justify-between items-center'
                >
                    <motion.div variants={itemVariants} className='w-[215px]'>
                        <img src={logo} alt="Logo" />
                    </motion.div>
                    <motion.div
                        variants={itemVariants}
                        className='w-[50px] h-[50px] rounded-full bg-[#B8D4FF] border-[#B8D4FF] flex items-center justify-center cursor-pointer'
                        onClick={redirectToLinkedin}
                    >
                        <FaLinkedin size={30} className='' />
                    </motion.div>
                </motion.div>
                <motion.div
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
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default Footer;
