import React, { useEffect, useState } from 'react';
import { PopupModal } from 'react-calendly'; // Import Calendly modal
import Navbar from './Navbar/Navbar';
import dash from "../assets/Macbook.png";
import ellipse from '../assets/Ellipse2.png';
import './HeroMain.css';
import { motion } from 'framer-motion';
import arrow from '../assets/arrownew.png';
import mouse from '../assets/mousemove.webp';
import bgimage from '../assets/hero section vector.png';


const HeroMain = () => {
    const [isOpen, setIsOpen] = useState(false); // Calendly modal state
    const [animateText, setAnimateText] = useState(false);
    const [animateImage, setAnimateImage] = useState(false);
    const [startFloat, setStartFloat] = useState(false);

    useEffect(() => {
        // Add the overflow class
        document.body.classList.add('hide-overflow');

        setAnimateText(true);
        setAnimateImage(true);

        const animationDuration = 1000;

        const removeOverflowClass = setTimeout(() => {
            // Remove the overflow class after animation duration
            document.body.classList.remove('hide-overflow');
        }, animationDuration);

        const startFloatAnimation = setTimeout(() => {
            setStartFloat(true);
        }, animationDuration);

        return () => {
            clearTimeout(removeOverflowClass);
            clearTimeout(startFloatAnimation);
            // Ensure overflow is removed when component unmounts
            document.body.classList.remove('hide-overflow');
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

    return (
        <>
            <div className='w-full mx-auto flex items-center justify-between  hero-container mt-[5.19rem] overflow-hidden'> {/* Added overflow-hidden */}
                <div className={`flex flex-col w-1/2 2xl:w-[60%] gap-10 text-container-hero ${animateText ? 'animate-slide-in-left' : ''} overflow-hidden`}> {/* Added overflow-hidden */}
                    <h1 className='text-[#004699] lg:text-[3.8rem] lg:leading-normal font-bold text-center text-[3rem]  text-h1-container w-full '>
                        1 QR = 1 Loyal Customer
                    </h1>
                    <div className='w-[90%] md:w-[70%] 2xl:w-[60%] mx-auto text-center mt-[2.56rem]'>
                        <p className='text-[0.875rem] leading-[1.875rem] font-normal'>
                            Onepoket’s QR technology not only gets you <span className='font-bold'>Customer Name, Number,</span> and <span className='font-bold'>Demographics</span>; it's your <span className='font-bold'>VIP pass</span> to the first-party data of your target market.
                        </p>

                    </div>
                    <p className='text-[14px] leading-[35px] font-normal mt-[4.44rem] para-container-text 2xl:text-[28px] 2xl:leading-[40px] text-center'>
                        Want to see it in action?
                    </p>
                    <div className='flex justify-center'>
                        <div className="button_slide slide_right bg-[#004699] border-2 border-[#004699] text-[#E4EFFF] hover:text-[#004699] p-[10px] " onClick={openCalendly}>
                            <button className='text-[15px] leading-8 font-semibold'>BOOK YOUR DEMO</button>
                        </div>
                    </div>
                </div>
                <div className={`flex justify-end 2xl:w-[30%] w-1/2 md:mt-0 pt-32 image-container-hero ${animateImage ? 'animate-slide-in-right' : ''} ${startFloat ? 'anim-hover' : ''} overflow-hidden`} style={{ backgroundImage: `url(${bgimage})`, backgroundSize: 'cover', backgroundPosition: "center" }}> {/* Added overflow-hidden */}
                    <div className='image-ellipse-container'>
                        <img
                            src={mouse}
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
