import React, { useRef } from 'react';
import './CustomerScan.css';
import { useInView, motion } from 'framer-motion';
import { FaArrowRightLong } from 'react-icons/fa6';

const CustomerScan = () => {
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
    const openTypeForm = () => {
        navigate('/onboarding')
      };
  

    return (
        <motion.div
            ref={containerRef}
            initial="hidden"
            // animate={isInView ? 'visible' : 'hidden'}
            // variants={containerVariants}
            className=' custom-shadow w-[40rem] h-[6.5rem] mx-auto mt-[8.55rem]'
        >
            <motion.div
                // variants={itemVariants}
                className='flex justify-between sm:w-5/6 mx-auto items-center md:h-[132px] md:flex-row flex-col h-auto md:pt-0 pt-12 w-[90%] gap-10'
            >
                <motion.div  className=' md:w-[80%] w-full'>
                    <h1 className='text-white text-[1.125rem] font-bold leading-[1.625rem]'>
                        Get to know your customers in just 1 Scan!
                    </h1>
                </motion.div>
                <motion.div
                    // variants={itemVariants}
                    onClick={openTypeForm}
                    className='2xl:w-[201px] md:w-[201px] md:mt-0 mt-8 w-full md:mb-0 mb-12 button-container'
                >
                    <button className='hover:bg-[#1971D8] hover:text-white bg-white rounded-lg text-[1.125rem] leading-[1.625rem] font-bold px-[16px] py-[12px] gap-2 flex items-center text-[#0052CC] w-full text-center justify-center '>
                        Start free trial
                    </button>
                </motion.div>
            </motion.div>
        </motion.div>
    );
}

export default CustomerScan;
