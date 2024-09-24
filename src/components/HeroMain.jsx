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
                <div className={`flex flex-col  w-1/2 gap-10 text-container-hero ${animateText ? 'animate-slide-in-left ' : ''}`}>
                    <h1 className='text-[#004699] lg:text-[3.8rem] lg:leading-[4.8rem]  font-bold  text-center sm:text-[3rem] sm:leading-[4rem] text-h1-container  w-full '>
                        1 QR = 1 Loyal Customer
                    </h1>
                    <div className='w-[90%] mx-auto text-center'>
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
                <div className={`flex justify-end 2xl:w-[30%] w-1/2 image-container-hero  ${animateImage ? 'animate-slide-in-right' : ''} ${startFloat ? 'anim-hover' : ''}`} style={{ backgroundImage: `url(${bgimage})`, backgroundSize: 'cover', backgroundPosition: "center" }}>
                    <div className=' image-ellipse-container'>
                        <img
                            src='https://firebasestorage.googleapis.com/v0/b/onepoketstage.appspot.com/o/mouse%20move.webp?alt=media&token=a4c45f2d-8714-4315-8fde-46e709941836'
                            alt="Macbook"
                           loading='lazy'
                            className='w-[100%] h-[100%] z-50'
                        />
                       
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
