import React, { useRef } from 'react';
import gif from '../../assets/animation.gif';
import './hover.css'; // Import the custom CSS file
import { useInView, motion } from 'framer-motion';
import group from '../../assets/Group.png'

import line from '../../assets/line.png'

const GifAnimation = () => {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, amount: 0.1 });

    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1.5, staggerChildren: 0.3 }
        },
    };

    return (
        <motion.div
            className='2xl:w-[1260px] flex justify-between w-[90%] mx-auto mt-24 lg:flex md:flex-row flex-col md:items-center lg:items-start'
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={containerVariants}
            ref={containerRef}
        >
            <motion.div
                className='xl:w-[639px] xl:h-[748px] lg:w-[506px] lg:h-[557px] md:w-[390px] w-auto'
                variants={containerVariants}
            >
                <h1 className='lg:text-[28px] text-[24px] font-medium text-[#0052CC] lg:leading-[60px] leading-[40px] md:text-start text-center sm:ml-[1.1rem] ml-0 lg:w-[80%] w-[100%]'>
                    Be the Captain of your Customer Relationships in just
                </h1>
                <span className='md:text-[130px] text-[96px] font-bold text-[#0052CC] leading-[150px] inter sm:ml-[1.1rem] ml-0' id='span20'>
                    20
                </span>
                <span className='md:text-[51px] text-[46px] text-[#0052CC] font-extrabold leading-[150px] inter' id='spanSec'>
                    Seconds!
                </span>

                <div className='sm:flex hidden'>
                    <div className='hover-line-container mt-[37px] '>
                        <span className=' text-[18px] leading-[35px] font-normal'>
                            Let your customers enjoy the convenience of
                        </span>
                        <br />
                        <span className='text-[#0052CC] text-[18px] font-bold'>
                            one-click warranty registration.
                        </span>
                    </div>
                </div>
                <div className='sm:flex hidden'>
                    <div className='hover-line-container mt-[37px]'>
                        <span className='text-[18px] leading-[35px] text-[#0052CC] font-bold'>
                            No extra app downloads,
                        </span>
                        <span className='text-[18px] leading-[35px] font-normal'>
                            just straight forward
                        </span>
                        {/* <span className="md:flex "><br/></span> */}
                        <br />
                        <span className='text-[18px] '>
                            convenience.
                        </span>
                    </div>
                </div>
                <div className='sm:flex hidden'>
                    <div className='hover-line-container mt-[37px]'>
                        <span className='text-[18px] leading-[50px] font-normal'>
                            Handle your customer service requests effortlessly, all
                        </span>
                        <br />
                        <span className='text-[#0052CC] text-[18px] font-bold'>
                            without picking up calls.
                        </span>
                    </div>
                </div>
                <div className='sm:hidden flex w-[100%] mx-auto items-center justify-center'>
                    <div className='sm:hover-line-container mt-[37px] text-center'>
                        <p className='text-[18px] leading-[35px] font-normal'>Let your customers enjoy the</p>
                        <p className='text-[18px] leading-[35px] font-normal'> convenience of <span className='text-[#0052CC] text-[17px] font-bold'>one-click warranty</span></p>
                        <p className='text-[#0052CC] text-[18px] font-bold'>registration.</p>
                    </div>
                </div>
                <div className='sm:hidden flex w-[100%] mx-auto items-center justify-center'>
                    <div className='sm:hover-line-container mt-[37px] text-center'>
                        <p className='text-[#0052CC] text-[18px] font-bold leading-[35px]'> No extra app downloads<span className='text-[18px] leading-[35px] font-normal text-black '>,just</span></p>
                        <p className='text-[18px] leading-[35px] font-normal'>straight forward convenience.</p>
                    </div>
                </div>
                <div className='sm:hidden flex w-[100%] items-center justify-center mx-auto'>
                    <div className='sm:hover-line-container mt-[37px] text-center'>
                        <p className='text-[18px] leading-[35px] font-normal'>Handle your customer service </p>
                        <p className='text-[18px] leading-[35px] font-normal'>requests effortlessly, all<span className='text-[#0052CC] text-[17px] font-bold ml-1'>without</span></p>
                        <p className='text-[#0052CC] text-[18px] font-bold'>picking up calls.</p>
                    </div>
                </div>
            </motion.div>
            <motion.div
                variants={containerVariants}
                className='2xl:w-[351px] 2xl:h-[650px] xl:w-[350px] xl:h-[630px] lg:w-[330px] lg:h-[650px] w-auto md:w-[198px] md:h-[362px] h-auto md:mt-0 mt-16'
            >
                <img src={gif} className='w-[100%] h-[100%]' />
            </motion.div>

        </motion.div>
    );
}

export default GifAnimation;
