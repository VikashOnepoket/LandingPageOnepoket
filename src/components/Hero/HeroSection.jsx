import React, { useState, useEffect } from 'react';
import Dash from '../../assets/dash (1).png';
import qr from '../../assets/qr.png';
import vector from '../../assets/Vector.png';
import '../Hero/hero.css';
import { PopupModal } from "react-calendly";
import dash from "../../assets/Macbook.png";
import ellipse from '../../assets/Ellipse2.png';
import ellipse1 from '../../assets/Ellipse1.png';

const HeroSection = () => {
    const [isOpen, setIsOpen] = useState(false);
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

    const openCalendly = () => {
        setIsOpen(true);
    };

    const openTypeForm = () => {
        const url = 'https://3r83o6lof67.typeform.com/to/TldFF6Nb'
        window.open(url, '_blank')
    }

    return (
        <>
            <div className='bodyBorder 2xl:h-[800px] lg:h-[575px] h-[900px] main-container w-[100%]'>
                <div className='flex lg:flex-row sm:flex-col-reverse flex-col justify-between hero-section-container'>
                    <div className={` 2xl:h-[720px] xl:h-[520px] xl:w-[590px] lg:w-[450px] lg:h-[520px] flex gap-10 flex-col text-container text-loyal-container ${animateText ? 'animate-slide-in-left text-center sm:text-start' : ''}`}>
                        <h1 className='text-[#0052CC] 2xl:text-[3rem] 2xl:leading-[4rem] xl:text-[2rem] xl:leading-[2rem] font-bold inter text-[2.5rem] leading-[55px]'>1 QR = 1 Loyal Customer</h1>
                        <div>
                            <p className='text-[18px] leading-[30px] font-normal'>
                                Onepoket’s QR technology not only gets you <span className='text-[18px] leading-[30px] font-bold'>Customer Name, Number,</span> and <span className='text-[18px] leading-[30px] font-bold'>Demographics</span>; it's your <span className='text-[18px] leading-[30px] font-bold'>VIP pass</span> to the first-party data of your target market.
                            </p>
                            <p className='text-[18px] leading-[35px] font-normal mt-4'>Want to see it in action?</p>
                        </div>
                        <div className='text-center sm:text-start w-full' onClick={openTypeForm}>
                            <button className='hover:bg-[#1971D8] hover:text-white bg-[#004699] rounded-lg text-[18px] leading-[23px] font-bold text-white px-[16px] py-[14px] gap-3 sm:w-[221px] w-full mt-5 cursor-pointer button-id '>Claim Your Free Demo</button>
                        </div>
                    </div>
                    <div className={`img-container sm:pt-0 pt-12 ${animateImage ? 'animate-slide-in-right' : ''} ${startFloat ? 'anim-hover' : ''}`}>
                        <div className='2xl:w-[830px] 2xl:h-[708px] xl:w-[500px] lg:w-[450px] flex justify-center items-center flex-col relative image-ellipse-container'>
                            <img src={dash} className='z-50' />
                            <img src={ellipse} className='lg:pt-12 md:flex hidden pt-0' />
                            {/* <img src={ellipse1} className='pt-12 lg:hidden md:flex lg:pt-0 absolute top-0 right-0 hidden' /> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeroSection;
