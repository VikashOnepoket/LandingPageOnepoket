import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import gif from "../../assets/Property 1=Variant2.png";
import plane from '../../assets/PLANE.png'

import './D2C.css';

const D2C = () => {
    // Animation variants for Framer Motion
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, amount: 0.1 }); // Trigger when 10% of the container is in view

    const slideInFromLeft = {
        initial: { x: "100%", opacity: 0 }, // Image starts from the right
        animate: { x: 0, opacity: 1 },
        transition: { duration: 1.2, ease: "easeOut" },
    };

    const slideInFromRight = {
        initial: { x: "-100%", opacity: 0 }, // Text starts from the left
        animate: { x: 0, opacity: 1 },
        transition: { duration: 1.2, ease: "easeOut", delay: 0.2 },
    };

    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1.5,
                staggerChildren: 0.5,
            },
        },
    };

    return (
        <motion.div
            className="w-[90%] mx-auto flex flex-col md:flex-row justify-between overflow-hidden mt-[8rem] items-center"
            ref={containerRef}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"} // Trigger visibility based on in-view state
            variants={containerVariants}
        >
        
            {/* Text Section */}
            <motion.div
                initial={slideInFromRight.initial}
                animate={isInView ? slideInFromRight.animate : slideInFromRight.initial} // Trigger animation when in view
                transition={slideInFromRight.transition}
                className="w-[45%]"
            >

                 <div className="flex justify-end">
                    <img src={plane} className="h-[4.5rem] w-[11rem]"/>
                 </div>
                <span className="card-text">Built for Growing  </span><br />
                <span className="card-text2">D2C Brands</span>
                <p className="para-text1 mt-[3.12rem]">
                    Onepoket is designed exclusively for direct-to-consumer <br/> brands who want to elevate their post-purchase <br/> experience. If you’re focused on transforming first-time <br/>buyers into loyal brand advocates, our platform is crafted <br/> with your needs in mind.
                </p>
            </motion.div>

            {/* GIF Section */}
            <motion.div
                initial={slideInFromLeft.initial}
                animate={isInView ? slideInFromLeft.animate : slideInFromLeft.initial} // Trigger animation when in view
                transition={slideInFromLeft.transition}
                className="w-[55%] mb-8 md:mb-0 flex items-center justify-center"
            >
                <img
                    src={gif}
                    alt="GIF Animation"
                    className=""
                    style={{ backgroundColor: "transparent" }}
                />
            </motion.div>
        </motion.div>
    );
};

export default D2C;
