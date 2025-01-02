import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./Delivery.css";
import deliver from "../../../src/assets/deliver.png";

const Delivery = () => {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, amount: 0.1 });

    // Parent container animation variants with stagger effect
    const containerVariants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.5, // Delay between child animations
                duration: 0.5,
            },
        },
    };

    const animationVariants = {
        hidden: {
            opacity: 0,
            x: -50, // Start off-screen to the left
            y: -20, // Start slightly above
            rotate: 5, // Slight rotation
        },
        visible: {
            opacity: 1,
            x: 0, // Center position
            y: 0, // Center position
            rotate: 0, // No rotation
            transition: {
                duration: 0.5, // Common duration for all animations
                ease: "easeInOut", // Smooth easing
            },
        },
    };

    // Unified animation variants for child items
    const childVariants = {
        hidden: {
            opacity: 0,
            x: 80, // Start off-screen to the right
            y: -10, // Slightly below the center
            rotate: -5, // Slight rotation
        },
        visible: {
            opacity: 1,
            x: 0, // Move to the center
            y: 0, // Move to the center
            rotate: 0, // No rotation
            transition: {
                duration: 1, // Animation duration
                ease: "easeInOut",
            },
        },
    };

    return (
        <motion.div
            className="w-full bg-[#004699] h-[11.25rem] mt-[0.62rem] pt-10"
            ref={containerRef}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
        >
            <div className="w-[80%] mx-auto flex gap-5">
                {/* Heading Section */}
                <motion.div className="w-[35%]">
                    <motion.h1
                        className="text-containerS"
                        variants={animationVariants}
                    >
                        Millions trust Onepoket because we deliver
                    </motion.h1>
                </motion.div>

                {/* Items Section */}
                <motion.div
                    className="w-[65%] flex gap-[2.38rem] overflow-hidden"
                    variants={containerVariants}
                >
                    {[
                        "Seamless Customer Service",
                        "Reduce Overall Post Sales Costs",
                        "Secure QR for User Onboarding",
                    ].map((text, index) => (
                        <motion.div
                            key={index}
                            className="flex gap-2 items-center w-full"
                            variants={childVariants}
                        >
                            <motion.img
                                src={deliver}
                                className="w-[1.375rem] h-[1.375rem]"
                                alt={`Icon ${index}`}
                            />
                            <motion.p className="text-service">
                                {text}
                            </motion.p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Delivery;
