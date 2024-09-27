import React, { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import group from '../../assets/Group 43.png';
import direct1 from '../../assets/Direct1.png';
import direct2 from '../../assets/Direct2.png';
import direct3 from '../../assets/Direct3.png';
import direct4 from '../../assets/Direct6.png';
import direct5 from '../../assets/Direct5.png';
import AnimatedButton from './AnimationButton';

const Direct = () => {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, amount: 0.1 });
    const navigate = useNavigate();

    // State to track loading status of the background image
    const [bgImageLoaded, setBgImageLoaded] = useState(false);
    const bgImageSrc = 'https://firebasestorage.googleapis.com/v0/b/onepoketstage.appspot.com/o/blur%20effect%203rd%20fold.webp?alt=media&token=028afe7c-ba99-4911-8c80-e69d27198ef7';

    // Preload the background image
    useEffect(() => {
        const img = new Image();
        img.src = bgImageSrc;
        img.onload = () => {
            setBgImageLoaded(true); // Set loaded state to true
        };

        return () => {
            img.onload = null; // Cleanup
        };
    }, [bgImageSrc]);

    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1.5,
                staggerChildren: 0.5,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    };

    return (
        <motion.div
            ref={containerRef}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={containerVariants}
            className="w-full py-16 relative overflow-hidden"
        // style={{
        //     backgroundImage:  `url(${bgImageSrc})` , // Only show image if loaded
        //     backgroundSize: "cover",
        //     backgroundPosition: "center",
        //     transition: 'background-image 0.5s ease-in-out' // Smooth transition when the image loads
        // }}
        >
            {/* Background loading content */}


            {/* Main content rendering */}
            <motion.div className='w-[90%] mx-auto mt-32 relative z-10'>
                {/* Title */}
                <motion.div variants={itemVariants}>
                    <p className='md:text-[48px] md:leading-[61px] font-bold text-[#0353B3] text-[38px] leading-[51px]'>
                        What Are We Solving?
                    </p>
                </motion.div>

                {/* Content Section */}
                <motion.div className='mt-24 flex lg:flex-row flex-col justify-between gap-10 items-center'>
                    {/* Left Side */}
                    <motion.div className='lg:w-[60%] w-[90%]' variants={itemVariants}>
                        <img src={group} loading="lazy" className='w-[216px] max-w-full' alt="Illustration" />
                        <motion.p className='text-[32px] leading-10 font-semibold mt-8' variants={itemVariants}>
                            Direct insights, better decisions.
                        </motion.p>
                        <ul className="mt-5">
                            <motion.li className='text-[20px] leading-[40px] font-normal text-[#202123BF] flex items-center gap-1' variants={itemVariants}>
                                <span className="material-symbols-outlined text-[#004699]">check</span>
                                Collecting data without any cost.
                            </motion.li>
                            <motion.li className='text-[20px] leading-[40px] font-normal text-[#202123BF] flex items-center gap-1' variants={itemVariants}>
                                <span className="material-symbols-outlined text-[#004699]">check</span>
                                Reducing your cost of acquiring customers.
                            </motion.li>
                            <motion.li className='text-[20px] leading-[40px] font-normal text-[#202123BF] flex items-center gap-1' variants={itemVariants}>
                                <span className="material-symbols-outlined text-[#004699]">check</span>
                                Improving return on your ads spends.
                            </motion.li>
                        </ul>
                        <AnimatedButton onClick={() => navigate('/learn_more_button_1')}>
                            Learn more →
                        </AnimatedButton>
                    </motion.div>

                    {/* Right Side with Overlapping Images */}
                    <motion.div className='lg:w-[50%] w-[90%]' variants={itemVariants}>
                        <img src={direct2} loading="lazy" className='max-w-full' alt="Dashboard Image" />
                    </motion.div>
                </motion.div>

                {/* Onboarding Section */}
                <motion.div className='mt-32 flex justify-between gap-10 items-center lg:flex-row flex-col-reverse'>
                    {/* Right Side with Overlapping Images */}
                    <motion.div className="lg:w-[30%] w-[100%]" variants={itemVariants}>
                        <img src={direct3} loading="lazy" className='max-w-full' alt="Dashboard Image" />
                    </motion.div>

                    {/* Left Side */}
                    <motion.div className='lg:w-[50%] w-[100%]' variants={itemVariants}>
                        <img src={direct5} loading="lazy" className='w-[216px] max-w-full' alt="Illustration" />
                        <motion.p className='text-[32px] leading-10 font-semibold mt-8' variants={itemVariants}>
                            Onboarding simplified with a single scan.
                        </motion.p>
                        <ul className="mt-5">
                            <motion.li className='text-[20px] leading-[40px] font-normal text-[#202123BF] flex items-center gap-1' variants={itemVariants}>
                                <span className="material-symbols-outlined text-[#004699]">check</span>
                                Make your after-sales service a 1 click step.
                            </motion.li>
                            <motion.li className='text-[20px] leading-[40px] font-normal text-[#202123BF] flex items-center gap-1' variants={itemVariants}>
                                <span className="material-symbols-outlined text-[#004699]">check</span>
                                Make your warranty management process seamless.
                            </motion.li>
                            <motion.li className='text-[20px] leading-[40px] font-normal text-[#202123BF] flex items-center gap-1 lg:whitespace-nowrap' variants={itemVariants}>
                                <span className="material-symbols-outlined text-[#004699]">check</span>
                                Manage warranty & product installation from a single dashboard.
                            </motion.li>
                        </ul>
                        <AnimatedButton onClick={() => navigate('/learn_more_button_2')}>
                            Learn more →
                        </AnimatedButton>
                    </motion.div>
                </motion.div>

                {/* Customer Support Section */}
                <motion.div className='mt-24 flex justify-between gap-10 items-center lg:flex-row flex-col'>
                    {/* Left Side */}
                    <motion.div className='lg:w-[60%] w-[100%]' variants={itemVariants}>
                        <img src={direct4} loading="lazy" className='w-[216px] max-w-full' alt="Illustration" />
                        <motion.p className='text-[32px] leading-10 font-semibold mt-8' variants={itemVariants}>
                            Customer support, simplified.
                        </motion.p>
                        <ul className="mt-5">
                            <motion.li className='text-[20px] leading-[40px] font-normal text-[#202123BF] flex items-center gap-1' variants={itemVariants}>
                                <span className="material-symbols-outlined text-[#004699]">check</span>
                                Make your after-sales service a 1 click step.
                            </motion.li>
                            <motion.li className='text-[20px] leading-[40px] font-normal text-[#202123BF] flex items-center gap-1' variants={itemVariants}>
                                <span className="material-symbols-outlined text-[#004699]">check</span>
                                Make your warranty management process seamless.
                            </motion.li>
                            <motion.li className='text-[20px] leading-[40px] font-normal text-[#202123BF] flex items-center gap-1 lg:whitespace-nowrap' variants={itemVariants}>
                                <span className="material-symbols-outlined text-[#004699]">check</span>
                                Manage warranty & product installation from a single dashboard.
                            </motion.li>
                        </ul>
                        <AnimatedButton onClick={() => navigate('/learn_more_button_3')}>
                            Learn more →
                        </AnimatedButton>
                    </motion.div>

                    {/* Right Side with Overlapping Images */}
                    <motion.div className='lg:w-[40%] w-[100%] mt-12' variants={itemVariants}>
                        <img src={direct1} loading="lazy" className='max-w-full' alt="Customer Support Image" />
                    </motion.div>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default Direct;
