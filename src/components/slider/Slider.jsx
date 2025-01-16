import React, { useRef, useEffect } from "react";
import Slider from "react-slick";
import slider1 from "../../assets/slider1.png";
import slider2 from "../../assets/slider2.png";
import slider3 from "../../assets/slider3.png";
import "./Slider.css";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";

const AutoPlay = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 2000,
        cssEase: "linear",
        centerMode: true,
        centerPadding: "10%",
        pauseOnHover: true, // Pauses autoplay on hover
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    centerPadding: "20%",
                },
            },
            {
                breakpoint: 768,
                settings: {
                    centerPadding: "10%",
                },
            },
        ],
    };

    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, amount: 0.1 });

    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1.5, staggerChildren: 0.3 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    // Ensure slider is initialized on mount
    // useEffect(() => {
    //     // Trigger a re-render to make sure the slider is initialized properly
    //     if (containerRef.current) {
    //         containerRef.current.scrollIntoView();
    //     }
    // }, []);

    return (
        <motion.div
            className="slider-container w-[80%] mx-auto md:flex gap-[4rem] mt-32 md:flex-row flex-col justify-between items-center"
            ref={containerRef}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
        >
            <motion.div
                variants={itemVariants}
                className="md:w-[35%] w-[90%] mx-auto gap-"
            >
                <p className="text-[1.47681rem] leading-[1.90606rem] text-[#0052CC] font-medium">
                    Be the Captain of your<br />
                    Customer Relationships in just
                </p>
                <h1 className="inter md:text-[120px] md:leading-[160px] text-[80px] leading-[100px] font-bold text-[#0052CC] h1-twenty">
                    10
                    <span className="text-[51px] leading-[66px] font-bold text-[#0052CC] span-seconds">
                        Seconds!
                    </span>
                </h1>
            </motion.div>
            <Slider
                {...settings}
                className="custom-slider md:w-[65%] w-[90%] md:mt-0 mt-12 gap-[5rem]"
            >
                <div className="md:h-[15.7905rem] ">
                    <img src={slider1} className="h-full" alt="Slide 1" />
                </div>
                <div className="md:h-[15.7905rem] ">
                    <img src={slider2} className="h-full" alt="Slide 2" />
                </div>
                <div className="md:h-[15.7905rem]  ">
                    <img src={slider3} className="h-full" alt="Slide 3" />
                </div>
            </Slider>
        </motion.div>
    );
};

export default AutoPlay;
