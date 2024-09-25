import React, { useEffect, useState } from 'react';
import { PopupModal } from 'react-calendly'; // Import Calendly modal
import './HeroMain.css'; // Ensure this file includes the necessary CSS styles
import bgimage from '../assets/hero section vector.png';

const HeroMain = () => {
    const [isOpen, setIsOpen] = useState(false); // Calendly modal state
    const [animateText, setAnimateText] = useState(false);
    const [animateImage, setAnimateImage] = useState(false);
    const [startFloat, setStartFloat] = useState(false);
    const [hideOverflow, setHideOverflow] = useState(true); // State to manage overflow

    useEffect(() => {
        // Set overflow to hidden right away
        document.body.style.overflowX = 'hidden'; 
        
        setAnimateText(true);
        setAnimateImage(true);

        const animationDuration = 1000; // Adjust this as per your animation timing

        const startFloatAnimation = setTimeout(() => {
            setStartFloat(true);
        }, animationDuration);

        const allowOverflow = setTimeout(() => {
            setHideOverflow(false); // Allow overflow after the animation
            document.body.style.overflowX = 'visible'; // Restore overflow
        }, animationDuration + 100); // Adding a buffer to ensure the animations complete

        return () => {
            clearTimeout(startFloatAnimation);
            clearTimeout(allowOverflow);
            document.body.style.overflowX = 'visible'; // Ensure overflow is restored on cleanup
        };
    }, []);

    // Function to open Calendly modal
    const openCalendly = () => {
        setIsOpen(true);
    };

    return (
        <div className={`hero-container mt-24 ${hideOverflow ? 'hide-overflow' : ''}`}>
            <div className='w-full mx-auto flex items-center justify-between'>
                <div className={`flex flex-col w-1/2 gap-10 text-container-hero ${animateText ? 'animate-slide-in-left' : ''}`}>
                    <h1 className='text-[#004699] lg:text-[3.8rem] lg:leading-[4.8rem] font-bold text-center text-[3rem] leading-[4rem] text-h1-container w-full'>
                        1 QR = 1 Loyal Customer
                    </h1>
                    <div className='w-[90%] mx-auto text-center'>
                        <p className='text-[.9rem] leading-[1.9rem] font-normal'>
                            Onepoket’s QR technology not only gets you <span className='font-bold'>Customer Name, Number,</span> and <span className='font-bold'>Demographics</span>; it's your <span className='font-bold'>VIP pass</span> to the first-party data of your target market.
                        </p>
                        <p className='text-[14px] leading-[35px] font-normal mt-8 para-container-text'>
                            Want to see it in action?
                        </p>
                    </div>
                    <div className='flex justify-center'>
                        <div className="button_slide slide_right bg-[#004699] border-2 border-[#004699] text-[#E4EFFF] hover:text-[#004699] p-[10px]" onClick={openCalendly}>
                            <button className='text-[15px] leading-8 font-semibold'>BOOK YOUR DEMO</button>
                        </div>
                    </div>
                </div>
                <div className={`flex justify-end 2xl:w-[30%] w-1/2 md:mt-0 pt-32 image-container-hero ${animateImage ? 'animate-slide-in-right' : ''} ${startFloat ? 'anim-hover' : ''}`} style={{ backgroundImage: `url(${bgimage})`, backgroundSize: 'cover', backgroundPosition: "center" }}>
                    <div className='image-ellipse-container'>
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
        </div>
    );
};

export default HeroMain;
