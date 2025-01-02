import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import gif from "../../assets/Property 1=Variant2 (1).png";
import './Card4.css';

const Card4 = () => {
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
            className="w-[80%] mx-auto flex flex-col md:flex-row justify-between overflow-hidden mt-[8rem] items-center mb-16 gap-[4rem]"
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
                className="w-[55%]"
            >
                <span className="text-span">Streamline Warranty <br /> Processes for Effortless <br /> Customer Satisfaction</span>
                <p className="para-text1 mt-[3.12rem]">
                Say goodbye to complex warranty registrations. <br/>Onepoket’s quick, QR-enabled process makes <br/> warranty claims and product support<br/> hassle-free, boosting customer satisfaction.
                </p>
            </motion.div>

            {/* GIF Section */}
            <motion.div
                initial={slideInFromLeft.initial}
                animate={isInView ? slideInFromLeft.animate : slideInFromLeft.initial} // Trigger animation when in view
                transition={slideInFromLeft.transition}
                className="w-[45%] mb-8 md:mb-0 flex items-center justify-center"
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

export default Card4;
