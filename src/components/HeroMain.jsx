import React, { useEffect, useState } from 'react';
import { PopupModal } from 'react-calendly'; // Import Calendly modal
import Navbar from './Navbar/Navbar';
import dash from "../assets/Macbook.png";
import ellipse from '../assets/Ellipse2.png';
import './HeroMain.css';
import { motion } from 'framer-motion'
import arrow from '../assets/arrownew.png'
import mouse from '../assets/mouse move.png'
import bgimage from '../assets/hero section vector.png'
const HeroMain = () => {
    const [isOpen, setIsOpen] = useState(false); // Calendly modal state
    const [animateText, setAnimateText] = useState(false);
    const [animateImage, setAnimateImage] = useState(false);
    const [startFloat, setStartFloat] = useState(false);

    useEffect(() => {
        // Hide overflow during animation
        document.body.style.overflowX = 'hidden';
        setAnimateText(true);
        setAnimateImage(true);

        const animationDuration = 1000; // Duration of the animation in ms

        const removeOverflowClass = setTimeout(() => {
            // Restore overflow after animation
            document.body.style.overflowX = 'visible';
        }, animationDuration);

        const startFloatAnimation = setTimeout(() => {
            // Start float animation after the initial animation completes
            setStartFloat(true);
        }, animationDuration);

        return () => {
            clearTimeout(removeOverflowClass);
            clearTimeout(startFloatAnimation);
        };
    }, []);

    // Function to open Calendly modal
    const openCalendly = () => {
        setIsOpen(true);
    };

    const openTypeForm = () => {
        const url = 'https://3r83o6lof67.typeform.com/to/TldFF6Nb';
        window.open(url, '_blank');
    };


    const boxShadowStyle = {
        boxShadow: '0px 1px 4px 0px rgba(0, 0, 0, 0.25)',
        // X-offset, Y-offset, blur, spread, color
    };

    return (
        <>
            <div className='w-full mx-auto flex items-center justify-between hero-container mt-24'>
                <div className={`flex flex-col  w-1/2 gap-10 text-container-hero ${animateText ? 'animate-slide-in-left text-center sm:text-start' : ''}`}>
                    <h1 className='text-[#004699] text-[3.8rem] leading-[4.8rem]  font-bold  text-center'>
                        1 QR = 1 Loyal Customer
                    </h1>
                    <div className='w-[70%] mx-auto text-center'>
                        <p className='text-[.9rem] leading-[1.9rem] font-normal'>
                            Onepoket’s QR technology not only gets you <span className='text-[.9rem] leading-[1.9rem] font-bold'>Customer Name, Number,</span> and <span className='text-[.9rem] leading-[1.9rem] font-bold'>Demographics</span>; it's your <span className='text-[.9rem] leading-[1.9rem] font-bold'>VIP pass</span> to the first-party data of your target market.
                        </p>
                        <p className='text-[14px] leading-[35px] font-normal mt-8 para-container-text '>
                            Want to see it in action?
                        </p>
                    </div>
                    <div className='flex justify-center '>
                        <div class="button_slide slide_right flex gap-3 flex-row w-[230px] bg-[#004699] border-2 border-[#004699] text-[#E4EFFF] hover:text-[#004699] p-[10px]" >
                            <img src={arrow} className='w-[32px] bg-[#D8E8FF] border border-[#D8E8FF] rounded-md p-1' />
                            <button className='text-[15px] leading-8 font-semibold '>BOOK YOUR DEMO</button>
                        </div>
                    </div>

                </div>
                <div className={`flex justify-end w-1/2 image-container-hero   ${animateImage ? 'animate-slide-in-right' : ''} ${startFloat ? 'anim-hover' : ''}`} style={{ backgroundImage: `url(${bgimage})`, backgroundSize: 'cover', backgroundPosition: "center" }}>
                    <div className=' image-ellipse-container'>
                        <img
                            src='https://firebasestorage.googleapis.com/v0/b/onepoketstage.appspot.com/o/mouse%20move.png?alt=media&token=89ab64b4-d72b-4777-a525-662ccced59f9'
                            alt="Macbook"
                            loading='lazy'
                            className='w-[100%] h-[100%] z-50'
                        />
                        {/* <img
                            src="https://firebasestorage.googleapis.com/v0/b/onepoketstage.appspot.com/o/Ellipse%20229%20(2).png?alt=media&token=ff458759-eb3b-44e3-b84e-b8c725c4a44b"
                            alt="Ellipse"
                            loading='lazy'
                            className='lg:pt-8 md:flex hidden pt-0'
                        /> */}
                    </div>
                </div>
            </div>

            {/* Calendly Popup Modal */}
            {isOpen && (
                <PopupModal
                    url="https://calendly.com/ujjwal-onepoket"
                    onModalClose={() => setIsOpen(false)}
                    open={isOpen}
                    rootElement={document.getElementById("root")}
                />
            )}
        </>
    );
};

export default HeroMain;
