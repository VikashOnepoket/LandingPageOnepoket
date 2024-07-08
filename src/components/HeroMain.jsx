import React, { useEffect, useState } from 'react';
import Navbar from './Navbar/Navbar';
import dash from "../assets/Macbook.png";
import ellipse from '../assets/Ellipse2.png'
import './HeroMain.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';

const HeroMain = () => {
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
            {/* <Navbar /> */}
            <div className='w-5/6 mx-auto flex  items-center justify-between hero-container mt-12'>
                <div className={`flex flex-col w-1/2 gap-10 text-container-hero ${animateText ? 'animate-slide-in-left text-center sm:text-start' : ''}`}>
                    <h1 className='text-[#0052CC] 2xl:text-[3rem] 2xl:leading-[4rem] xl:text-[2rem] xl:leading-[2rem] font-bold inter text-[2.5rem] leading-[3.5rem]'>1 QR = 1 Loyal Customer</h1>
                    <div className=''>
                        <p className='text-[18px] leading-[30px] font-normal'>
                            Onepoket’s QR technology not only gets you <span className='text-[18px] leading-[30px] font-bold'>Customer Name, Number,</span> and <span className='text-[18px] leading-[30px] font-bold'>Demographics</span>; it's your <span className='text-[18px] leading-[30px] font-bold'>VIP pass</span> to the first-party data of your target market.
                        </p>
                        <p className='text-[18px] leading-[35px] font-normal mt-4 para-container-text'>Want to see it in action?</p>
                    </div>
                    <div className='text-center sm:text-start w-full' >
                        <button className='hover:bg-[#1971D8] hover:text-white bg-[#0052CC] rounded-lg text-[18px] leading-[23px] font-bold text-white px-[16px] py-[14px] gap-3 sm:w-[221px] w-full mt-5 cursor-pointer button-id border border-[#0052CC] hover:border hover:border-[#1971D8]'>Claim Your Free Demo</button>
                    </div>
                </div>
                <div className={`flex-auto w-1/2 image-container-hero  ${animateImage ? 'animate-slide-in-right' : ''} ${startFloat ? 'anim-hover' : ''}`}>
                    <div className=' image-ellipse-container pt-20'>
                        <img
                            src='https://firebasestorage.googleapis.com/v0/b/onepoketstage.appspot.com/o/Dashboard.png?alt=media&token=8c025085-2f81-46be-a40d-17568de79727'
                            alt="Macbook"
                            loading='lazy'
                            className='w-[100%] h-[100%] z-50'
                        />
                        <img
                            src="https://firebasestorage.googleapis.com/v0/b/onepoketstage.appspot.com/o/Ellipse%20229%20(2).png?alt=media&token=ff458759-eb3b-44e3-b84e-b8c725c4a44b"
                            alt="Ellipse"
                            loading='lazy'

                            className='lg:pt-8 md:flex hidden pt-0'
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroMain;
