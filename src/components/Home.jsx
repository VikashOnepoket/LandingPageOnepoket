import React, { useEffect, useState, useRef } from 'react';
import Navbar from './Navbar/Navbar';
import HeroSection from './Hero/HeroSection';
import Cards from './Cards/Cards';
import Fold2card from './Cards/Fold2card';
import FaqSection from './Faq/FaqSection';
import CustomerScan from './CustomerScan/CustomerScan';
import GifAnimation from './animation/GifAnimation';
import Footer from './Footer/Footer';
import line from '../assets/line.png';
import HeroMain from './HeroMain';
import NavTop from './Navbar/NavTop';
import ScanMe from './scanMe/ScanMe';
import Direct from './solving/Direct';
import AutoPlay from './slider/Slider';
import Elementor from './elementor/Elementor';
import Delivery from './MillionDelivery/Delivery';
import WarrantyRegistration from './WarrantyRegistration/WarrantyRegistration';
import Card1 from './Card1/Card1';
import Card2 from './Card2/Card2';
import Card3 from './Card3/Card3';
import Card4 from './Card4/Card4';
import D2C from './D2C/D2C';
import CustomerSupportAnimation from './Card4/GifImage';
import ChatUI from './Card4/GifImage';
import curve from '../assets/whitecurve.png';

const Home = () => {
  const [showButton, setShowButton] = useState(false);
  const [showCurve, setShowCurve] = useState(true); // Control the visibility of the curve
  const deliveryRef = useRef(null); // Reference for the Delivery component
  const navTopRef = useRef(null); // Reference for NavTop component
  const curveRef = useRef(null); // Reference for the curve image

  // Intersection Observer to hide curve when scrolled down
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowCurve(true); // Show the curve when it's in the viewport
        } else {
          setShowCurve(false); // Hide the curve when it's out of the viewport
        }
      },
      {
        root: null, // Use the viewport as the root
        threshold: 0, // Trigger when any part of the curve goes out of the viewport
      }
    );

    if (curveRef.current) {
      observer.observe(curveRef.current); // Start observing the curve element
    }

    return () => {
      if (curveRef.current) {
        observer.unobserve(curveRef.current); // Cleanup when unmounted
      }
    };
  }, []);

  // Observer for Delivery section visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowButton(true); // Show the button when Delivery is in view
        } else if (entry.boundingClientRect.top < 0) {
          setShowButton(true); // Keep button visible when scrolling past Delivery
        } else {
          setShowButton(false); // Hide button when scrolling above Delivery
        }
      },
      {
        root: null, // Use the viewport
        threshold: 0.5, // Trigger when 50% of the component is visible
      }
    );

    if (deliveryRef.current) {
      observer.observe(deliveryRef.current); // Start observing Delivery section
    }

    return () => {
      if (deliveryRef.current) {
        observer.unobserve(deliveryRef.current); // Cleanup when unmounted
      }
    };
  }, []);

  return (
    <div className="h-screen overflow-y-auto">
      <NavTop ref={navTopRef} /> {/* Apply ref to NavTop */}

      <div className="relative">
        <div className="w-full relative">
          {/* Only show the white curve if showCurve is true */}
          <img
            ref={curveRef}
            src={curve}
            className="w-full absolute -top-[5rem] z-50 left-0 h-[30px] transition-opacity duration-300 ease-in-out"
            style={{ opacity: showCurve ? 1 : 0 }} // Smooth fade-in/fade-out
          />
        </div>
        <Navbar />
        <HeroMain />
        <Elementor />
        <div ref={deliveryRef}>
          <Delivery />
        </div>
        <D2C />
        <div className="bg-[#E9F2FF] p-5 mt-16">
          <Card1 />
          <Card2 />
          <Card3 />
          <Card4 />
        </div>
        {/* <Direct /> */}
        <WarrantyRegistration />
        <CustomerScan />
        <AutoPlay />
        <Footer />
      </div>

      {/* Fixed Button */}
      {showButton && (
        <div className="fixed bottom-5 left-0 right-[8.69rem] flex justify-end z-50">
          <div className="flex justify-center items-center mt-[3.75rem]">
            <button
              className="flex items-center justify-center py-[1rem] px-[2.3125rem] rounded-[1.875rem] bg-[#0052CC] text-white button-shadow text-[1rem] font-bold leading-[2rem]"
              onClick={() => (window.location.href = 'https://calendly.com/ujjwal-onepoket')}
            >
              Request a free demo
              <span className="ml-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="12"
                  viewBox="0 0 14 12"
                  fill="none"
                >
                  <path
                    d="M8.33333 1L13 5.66667M13 5.66667L8.33333 10.3333M13 5.66667H1"
                    stroke="white"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
