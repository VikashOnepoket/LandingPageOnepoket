import React from 'react';
import image from '../../assets/image 20.png';
import image1 from '../../assets/image 21.png';
import image2 from '../../assets/image 25.png';
import image3 from '../../assets/image 26.png';
import group from '../../assets/Group 43.png';
import customer1 from '../../assets/customer1.png';
import customer2 from '../../assets/customer2.png';
import customer3 from '../../assets/customer3.png';
import customer4 from '../../assets/customer4.png';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Direct = () => {
    const navigate = useNavigate();
   
    return (
        <div
            className="w-[100%] py-16 relative" style={{ backgroundImage: `url(${'https://firebasestorage.googleapis.com/v0/b/onepoketstage.appspot.com/o/blur%20effect%203rd%20fold.webp?alt=media&token=028afe7c-ba99-4911-8c80-e69d27198ef7'})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className='w-[80%] mx-auto mt-32 relative z-10'>
                {/* Title */}
                <div>
                    <p className='text-[48px] leading-[61px] font-bold text-[#0353B3]'>What Are We Solving?</p>
                </div>

                {/* Content Section */}
                <div className='mt-24 flex justify-between gap-10 ' >
                    {/* Left Side */}
                    <div className='w-[60%]'>
                        <img src={group} loading="lazy" className='w-[216px]' alt="Illustration" />
                        <p className='text-[32px] leading-10 font-semibold mt-8'>Direct insights, better decisions.</p>
                        <ul className="mt-5">
                            <li className='text-[20px] leading-[40px] font-normal text-[#202123BF] flex items-center gap-1'>
                                <span className="material-symbols-outlined text-[#004699]">check</span>
                                Collecting data without any cost.
                            </li>
                            <li className='text-[20px] leading-[40px] font-normal text-[#202123BF] flex items-center gap-1'>
                                <span className="material-symbols-outlined text-[#004699]">check</span>
                                Reducing your cost of acquiring customers.
                            </li>
                            <li className='text-[20px] leading-[40px] font-normal text-[#202123BF] flex items-center gap-1 '>
                                <span className="material-symbols-outlined text-[#004699]">check</span>
                                Improving return on your ads spends
                            </li>
                        </ul>
                        <button className="border border-[#202123BF] px-6 rounded-[15px] mt-4 transition duration-300 text-[#202123BF] text-[16px] leading-10" onClick={() => navigate('/learn_more_button_1')}>
                            Learn more →
                        </button>
                    </div>

                    {/* Right Side with Overlapping Images */}
                    <div className='w-[50%] relative'>
                        <img src={image} loading="lazy" alt="Dashboard Image" />
                        <img src={image1} loading="lazy" alt="Popup Image" className='absolute w-[140px] top-[-60px] right-[-80px]' />
                    </div>
                </div>

                {/* onboarding */}
                <div className='mt-96 flex justify-between gap-10 ' >
                    {/* Right Side with Overlapping Images */}
                    <div className="relative w-[50%] flex" >
                        <img src={customer1} loading="lazy" alt="Email Form" className="h-[235px]" />
                        <img src={customer2} loading="lazy" alt="QR Code" className="absolute top-[-130px] left-[40px] w-[137px]" />
                        <img src={customer4} loading="lazy" alt="QR Code" className="absolute top-[-180px] left-[180px] w-[200px]" />
                        <img src={customer3} loading="lazy" alt="Confirmation Icon" className="absolute top-[25px] left-[250px] w-[150px]" />
                    </div>

                    {/* Left Side */}
                    <div className='w-1/2 relative top-[-200px]'>
                        <img src={group} loading="lazy" className='w-[216px]' alt="Illustration" />
                        <p className='text-[32px] leading-10 font-semibold mt-8'>
                            Onboarding simplified with a single scan.</p>
                        <ul className="mt-5 ">
                            <li className='text-[20px] leading-[40px] font-normal text-[#202123BF] flex items-center gap-1'>
                                <span className="material-symbols-outlined text-[#004699]">check</span>
                                Make your after-sales service a 1 click step.
                            </li>
                            <li className='text-[20px] leading-[40px] font-normal text-[#202123BF] flex items-center gap-1'>
                                <span className="material-symbols-outlined text-[#004699]">check</span>
                                Make your warranty management process seamless.
                            </li>
                            <li className='text-[20px] leading-[40px] font-normal text-[#202123BF] flex items-center gap-1 whitespace-nowrap'>
                                <span className="material-symbols-outlined text-[#004699]">check</span>
                                Manage warranty & product installation from single dashboard.
                            </li>
                        </ul>
                        <button className="border border-[#202123BF] px-6 rounded-[15px] mt-4 transition duration-300 text-[#202123BF] text-[16px] leading-10" onClick={() => navigate('/learn_more_button_2')}>
                            Learn more →
                        </button>
                    </div>
                </div>

                {/* .customer */}
                <div className='mt-24 flex justify-between gap-10' >
                    {/* Left Side */}
                    <div className='w-[60%]'>
                        <img src={group} loading="lazy" className='w-[216px]' alt="Illustration" />
                        <p className='text-[32px] leading-10 font-semibold mt-8'>
                            Customer support, simplified.</p>
                        <ul className="mt-5 ">
                            <li className='text-[20px] leading-[40px] font-normal text-[#202123BF] flex items-center gap-1'>
                                <span className="material-symbols-outlined text-[#004699]">check</span>
                                Make your after-sales service a 1 click step.
                            </li>
                            <li className='text-[20px] leading-[40px] font-normal text-[#202123BF] flex items-center gap-1'>
                                <span className="material-symbols-outlined text-[#004699]">check</span>
                                Make your warranty management process seamless.
                            </li>
                            <li className='text-[20px] leading-[40px] font-normal text-[#202123BF] flex items-center gap-1 whitespace-nowrap'>
                                <span className="material-symbols-outlined text-[#004699]">check</span>
                                Manage warranty & product installation from single dashboard.
                            </li>
                        </ul>
                        <motion.button
                            className="border border-[#202123BF] px-6 rounded-[15px] mt-4 transition duration-300 text-[#202123BF] text-[16px] leading-10 hover:bg-[#004699] hover:text-white"
                            onClick={() => navigate('/learn_more_button_3')}
                            whileHover={{
                                transition: {
                                    type: 'spring',
                                    stiffness: 100,
                                    damping: 15,
                                    mass: 1,
                                    curve: "easeInOut",
                                }
                            }}
                            whileTap={{
                                scale: 0.95,
                                transition: {
                                    type: 'spring',
                                    stiffness: 100,
                                    damping: 15,
                                    mass: 1,
                                },
                            }}
                        >
                            Learn more →
                        </motion.button>
                    </div>

                    {/* Right Side with Overlapping Images */}
                    <div className='w-[40%] relative mt-12'>
                        <img src={image2} loading="lazy" alt="Dashboard Image" />
                        <img src={image3} loading="lazy" alt="Popup Image" className='absolute top-[160px] right-[-80px] w-[300px]' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Direct;
