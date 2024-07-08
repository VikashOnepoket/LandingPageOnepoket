import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import group from '../../assets/Dashed.png'
import group1 from '../../assets/DashedMobile.png'
import './Fold2Card.css'; // Make sure to import the CSS file



const Fold2Card = () => {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, amount: 0.1 });

    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1.5,
                staggerChildren: 0.5
            }
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    };

    const lineVariants = {
        hidden: { width: 0 },
        visible: {
            width: '100%',
            transition: {
                duration: 1.5,
                delay: 0.3
            }
        },
    };

    return (
        <motion.div ref={containerRef}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={containerVariants}
            className="bg-container  w-[100%] lg:h-[827px] sm:h-[900px] h-[1000px] mx-auto "
        >
            <motion.div
                variants={containerVariants}
                className=" mx-auto 2xl:pt-24 xl:pt-28 lg:pt-20 md:pt-16 pt-8 w-[95%] fold2-container"
            >
                <motion.div className="lg:w-[441px] mx-auto md:w-1/2 w-[90%] text-center text-container" variants={containerVariants}>
                    <p className="sm:text-[51px] sm:leading-[65px] font-semibold text-white text-[36px] leading-[42px] text-onepoket ">Why Onepoket?</p>
                </motion.div>
                <motion.div className="lg:mt-40 xl:mt-24 md:mt-16 sm:mt-20 pt-8 relative" variants={containerVariants}>
                    <div className='flex justify-between 2xl:w-[1170px] mx-auto lg:w-[95%] md:w-[55%] w-[90%]  gap-10 lg:flex-row flex-col lg:h-[200px] relative lg:text-start text-center fold2-text-container'>
                        <motion.div variants={itemVariants} className="flex flex-col ">
                            <div className=''>
                                <p className='text-[26px]  font-medium leading-[40px] text-white sm:ml-4 ml-0'>Seamless</p>
                                <p className='text-[26px]  font-medium leading-[40px] text-white sm:ml-4 ml-0'>Customer Service</p>
                            </div>
                            <motion.div variants={lineVariants} className=" mt-8 sm:ml-4 ml-0 sm:hidden flex">
                                <img src={group1} className='w-[100%] h-[100%]' />
                            </motion.div>

                        </motion.div>

                        <motion.div variants={itemVariants} className="flex flex-col">
                            <div className='' id='stream'>
                                <p className='text-[26px]  font-medium leading-[40px] text-white sm:ml-4 ml-0'>Streamline</p>
                                <p className='text-[26px]  font-medium leading-[40px] text-white sm:ml-4 ml-0'>Feedback Collection</p>
                            </div>
                            <motion.div variants={lineVariants} className=" mt-8 sm:ml-4 ml-0 sm:hidden flex">
                                <img src={group1} className='w-[100%] h-[100%]' />
                            </motion.div>
                        </motion.div>

                        <motion.div variants={itemVariants} className="flex flex-col ">
                            <div className=''>
                                <p className='text-[26px]  font-medium leading-[40px] text-white sm:ml-4 ml-0'>Reduce Overall</p>
                                <p className='text-[26px]  font-medium leading-[40px] text-white sm:ml-4 ml-0'>Post-Sales Costs</p>
                            </div>
                            <motion.div variants={lineVariants} className=" mt-8 sm:ml-4 ml-0 sm:hidden flex">
                                <img src={group1} className='w-[100%] h-[100%]' />
                            </motion.div>
                        </motion.div>

                        <motion.div variants={itemVariants} className="flex flex-col ">
                            <div className=''>
                                <p className='text-[26px]  font-medium leading-[40px] text-white sm:ml-4 ml-0'>Secure QR for</p>
                                <p className='text-[26px]  font-medium leading-[40px] text-white sm:ml-4 ml-0'>User Onboarding</p>
                            </div>
                            <motion.div variants={lineVariants} className=" mt-8 sm:ml-4 ml-0 sm:hidden flex">
                                <img src={group1} className='w-[100%] h-[100%]' />
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>
                <motion.div variants={containerVariants} className='2xl:w-[1170px] w-[95%] mx-auto lg:mt-0 mt-24 hidden sm:flex'>
                    <img src={group} className='w-[100%] h-[100%]' />
                </motion.div>
            </motion.div>



        </motion.div>
    );
};

export default Fold2Card;
