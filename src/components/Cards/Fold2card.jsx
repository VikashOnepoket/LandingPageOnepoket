import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import group from '../../assets/Dashed.png'
import group1 from '../../assets/DashedMobile.png'
import './Fold2Card.css'; // Make sure to import the CSS file
import one from '../../assets/1.png'
import two from '../../assets/2.png'
import three from '../../assets/3.png'
import four from '../../assets/4.png'
import footerBg from '../../assets/Dot.png'



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

        // lg:h-[827px] sm:h-[900px]
        <motion.div ref={containerRef}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={containerVariants}
            className="bg-container  w-[100%]  h-auto sm:pb-0 pb-24 mx-auto rounded-tl-[40px] rounded-tr-[40px]"
        >
            <motion.div
                variants={containerVariants}
                className=" mx-auto 2xl:pt-24 xl:pt-28 lg:pt-20 md:pt-16 pt-8 w-[95%] fold2-container"
            >
                <motion.div className=" text-center text-container mt-24" variants={containerVariants}>
                    <p className="sm:text-[50px] sm:leading-[65px] font-semibold text-white text-[36px] leading-[42px] text-onepoket ">With Single QR You Can Have</p>
                </motion.div>
                <motion.div className="lg:mt-40 xl:mt-24 md:mt-16 sm:mt-20 pt-8 relative" variants={containerVariants}>
                    {/* <div className='flex justify-between 2xl:w-[1170px] mx-auto lg:w-[95%] md:w-[55%] w-[90%]  gap-10 lg:flex-row flex-col lg:h-[200px] relative lg:text-start text-center fold2-text-container'>
                        <motion.div variants={itemVariants} className="flex flex-col ">
                            <div className=''>
                                <p className='text-[26px]  font-medium leading-[40px] text-white sm:ml-4 ml-0'>Seamless</p>
                                <p className='text-[26px]  font-medium leading-[40px] text-white sm:ml-4 ml-0'>Customer Service</p>
                            </div>
                            <motion.div variants={lineVariants} className=" mt-8 sm:ml-4 ml-0  flex ">
                                <img src={four} className='w-[90px] h-auto' />
                            </motion.div>


                        </motion.div>

                        <motion.div variants={itemVariants} className="flex flex-col">
                            <div className='' id='stream'>
                                <p className='text-[26px]  font-medium leading-[40px] text-white sm:ml-4 ml-0'>Streamline</p>
                                <p className='text-[26px]  font-medium leading-[40px] text-white sm:ml-4 ml-0'>Feedback Collection</p>
                            </div>
                            <motion.div variants={lineVariants} className=" mt-8 sm:ml-4 ml-0  flex">
                                <img src={three} className='w-[80px] h-auto' />
                            </motion.div>
                        </motion.div>

                        <motion.div variants={itemVariants} className="flex flex-col ">
                            <div className=''>
                                <p className='text-[26px]  font-medium leading-[40px] text-white sm:ml-4 ml-0'>Reduce Overall</p>
                                <p className='text-[26px]  font-medium leading-[40px] text-white sm:ml-4 ml-0'>Post-Sales Costs</p>
                            </div>
                            <motion.div variants={lineVariants} className=" mt-8 sm:ml-4 ml-0  flex ">
                                <img src={two} className='w-[90px] h-auto' />
                            </motion.div>
                        </motion.div>

                        <motion.div variants={itemVariants} className="flex flex-col ">
                            <div className=''>
                                <p className='text-[26px]  font-medium leading-[40px] text-white sm:ml-4 ml-0'>Secure QR for</p>
                                <p className='text-[26px]  font-medium leading-[40px] text-white sm:ml-4 ml-0'>User Onboarding</p>
                            </div>
                            <motion.div variants={lineVariants} className=" mt-8 sm:ml-4 ml-0  flex ">
                                <img src={one} className='w-[90px] h-auto' />
                            </motion.div>
                        </motion.div>
                    </div> */}
                    <div className='flex justify-between items-center 2xl:w-[1170px] mx-auto lg:w-[95%] md:w-[55%] w-[90%] gap-10 lg:flex-row flex-col lg:h-[200px] relative lg:text-start text-center fold2-text-container'>
                        <motion.div variants={itemVariants} className="flex flex-col items-center lg:items-start">
                            <div className=''>
                                <p className='text-[26px] font-medium leading-[40px] text-white text-center'>Seamless</p>
                                <p className='text-[26px] font-medium leading-[40px] text-white'>Customer Service</p>
                            </div>
                            <motion.div variants={lineVariants} className="mt-8 flex justify-center">
                                <img src={four} className='w-[90px] h-auto' />
                            </motion.div>
                        </motion.div>

                        <motion.div variants={itemVariants} className="flex flex-col items-center lg:items-start">
                            <div className=''>
                                <p className='text-[26px] font-medium leading-[40px] text-white text-center'>Streamline</p>
                                <p className='text-[26px] font-medium leading-[40px] text-white'>Feedback Collection</p>
                            </div>
                            <motion.div variants={lineVariants} className="mt-8 flex justify-center">
                                <img src={three} className='w-[90px] h-auto' />
                            </motion.div>
                        </motion.div>

                        <motion.div variants={itemVariants} className="flex flex-col items-center lg:items-start">
                            <div className=''>
                                <p className='text-[26px] font-medium leading-[40px] text-white text-center'>Reduce Overall</p>
                                <p className='text-[26px] font-medium leading-[40px] text-white'>Post-Sales Costs</p>
                            </div>
                            <motion.div variants={lineVariants} className="mt-8 flex justify-center">
                                <img src={two} className='w-[90px] h-auto' />
                            </motion.div>
                        </motion.div>

                        <motion.div variants={itemVariants} className="flex flex-col items-center lg:items-start">
                            <div className=''>
                                <p className='text-[26px] font-medium leading-[40px] text-white text-center'>Secure QR for</p>
                                <p className='text-[26px] font-medium leading-[40px] text-white'>User Onboarding</p>
                            </div>
                            <motion.div variants={lineVariants} className="mt-8 flex justify-center">
                                <img src={one} className='w-[90px] h-auto' />
                            </motion.div>
                        </motion.div>
                    </div>

                </motion.div>

            </motion.div>

            <motion.div variants={containerVariants} className='mt-[-10px] sm:flex hidden'>
                {/* <img src={footerBg} className='h-[260px]' />
                <img src={footerBg} className='h-[260px]' /> */}

                <img src='https://firebasestorage.googleapis.com/v0/b/onepoketstage.appspot.com/o/Group%20149.png?alt=media&token=17727ac5-b552-400c-bc2e-c97809032989'  />



            </motion.div>

        </motion.div>
    );
};

export default Fold2Card;
