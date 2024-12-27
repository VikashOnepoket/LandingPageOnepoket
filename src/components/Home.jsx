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

const Home = () => {
  const [showButton, setShowButton] = useState(false);
  const deliveryRef = useRef(null); // Reference for the Delivery component

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowButton(true); // Show button when `Delivery` is visible
        } else if (entry.boundingClientRect.top < 0) {
          setShowButton(true); // Keep button visible when scrolling past `Delivery`
        } else {
          setShowButton(false); // Hide button when scrolling above `Delivery`
        }
      },
      {
        root: null, // Use the viewport
        threshold: 0.5, // Trigger when 50% of the component is visible
      }
    );

    if (deliveryRef.current) {
      observer.observe(deliveryRef.current);
    }

    return () => {
      if (deliveryRef.current) {
        observer.unobserve(deliveryRef.current);
      }
    };
  }, []);

  return (
    <>
      <div className="h-screen overflow-y-auto">
        <NavTop />

        <div>
          <Navbar />
          <HeroMain />
          <Elementor />
          <div ref={deliveryRef}>
            <Delivery />
          </div>
          <D2C />
          <div className='bg-[#E9F2FF] p-5 mt-16'>
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
          <div className="fixed bottom-5 left-0 right-5 flex justify-end z-50">
            <button
              className="flex items-center justify-center py-3 px-8 rounded-full bg-[#0052CC] text-white shadow-md text-lg font-bold"
              onClick={() =>
                window.location.href = 'https://calendly.com/ujjwal-onepoket'
              }
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
        )}
      </div>
    </>
  );
};

export default Home;
