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
import direct1 from '../../assets/Direct1.png';
import direct2 from '../../assets/Direct2.png';
import direct3 from '../../assets/Direct3.png';
import direct4 from '../../assets/Direct6.png';
import direct5 from '../../assets/Direct5.png';
import AnimatedButton from './AnimationButton';

const Direct = () => {
    const navigate = useNavigate();
   
    return (
        <div
            className="w-[100%] py-16 relative" style={{ backgroundImage: `url(${''})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className='w-[90%] mx-auto mt-32 relative z-10'>
                {/* Title */}
                <div>
                    <p className='md:text-[48px] md:leading-[61px] font-bold text-[#0353B3] text-[38px] leading-[51px]'>What Are We Solving?</p>
                </div>

                {/* Content Section */}
                <div className='mt-24 flex lg:flex-row flex-col justify-between gap-10 items-center ' >
                    {/* Left Side */}
                    <div className='lg:w-[60%] w-[90%]'>
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
                        <AnimatedButton onClick={() => navigate('/learn_more_button_1')}>
                            Learn more →
                        </AnimatedButton>

                    </div>

                    {/* Right Side with Overlapping Images */}
                    <div className='lg:w-[50%] w-[90%]'>
                        <img src={direct2} loading="lazy" alt="Dashboard Image" />
                        {/* <img src={image1} loading="lazy" alt="Popup Image" className='absolute w-[140px] top-[-60px] right-[-80px]' /> */}
                    </div>
                </div>

                {/* onboarding */}
                <div className='mt-32 flex justify-between gap-10 items-center lg:flex-row flex-col-reverse' >
                    {/* Right Side with Overlapping Images */}
                    <div className=" lg:w-[40%] w-[100%]" >
                        {/* <img src={customer1} loading="lazy" alt="Email Form" className="h-[235px]" />
                        <img src={customer2} loading="lazy" alt="QR Code" className="absolute top-[-130px] left-[40px] w-[137px]" />
                        <img src={customer4} loading="lazy" alt="QR Code" className="absolute top-[-180px] left-[180px] w-[200px]" />
                        <img src={customer3} loading="lazy" alt="Confirmation Icon" className="absolute top-[25px] left-[250px] w-[150px]" /> */}
                        <img src={direct3} loading="lazy" alt="Dashboard Image" />
                    </div>

                    {/* Left Side */}
                    <div className='lg:w-[60%] w-[100%]'>
                        <img src={direct5} loading="lazy" className='w-[216px]' alt="Illustration" />
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
                            <li className='text-[20px] leading-[40px] font-normal text-[#202123BF] flex items-center gap-1 lg:whitespace-nowrap '>
                                <span className="material-symbols-outlined text-[#004699]">check</span>
                                Manage warranty & product installation from single dashboard.
                            </li>
                        </ul>
                        <AnimatedButton onClick={() => navigate('/learn_more_button_2')}>
                            Learn more →
                        </AnimatedButton>
                    </div>
                </div>

                {/* .customer */}
                <div className='mt-24 flex justify-between gap-10 items-center lg:flex-row flex-col' >
                    {/* Left Side */}
                    <div className='lg:w-[60%] w-[100%]'>
                        <img src={direct4} loading="lazy" className='w-[216px]' alt="Illustration" />
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
                            <li className='text-[20px] leading-[40px] font-normal text-[#202123BF] flex items-center gap-1 lg:whitespace-nowrap '>
                                <span className="material-symbols-outlined text-[#004699]">check</span>
                                Manage warranty & product installation from single dashboard.
                            </li>
                        </ul>
                        <AnimatedButton onClick={() => navigate('/learn_more_button_3')}>
                            Learn more →
                        </AnimatedButton>
                    </div>

                    {/* Right Side with Overlapping Images */}
                    <div className='lg:w-[40%] w-[100%] mt-12'>
                        <img src={direct1} loading="lazy" alt="Dashboard Image" />
                        {/* <img src={image3} loading="lazy" alt="Popup Image" className='absolute top-[160px] right-[-80px] w-[300px]' /> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Direct;
