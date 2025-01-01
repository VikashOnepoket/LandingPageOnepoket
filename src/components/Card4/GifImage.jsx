import React from "react";
import { motion } from "framer-motion";

const AnimatedText = () => {
    const textItems = [
        <>
            Millions trust  Onepocket <br /> because we deliver
        </>,
        // "Seamless Customer Service",
        // "Reduce Overall Post Sales Costs",
        // "Secure QR for User Onboarding",
    ];

    return (
        <div className="bg-blue-700 text-white p-6 h-screen flex justify-center items-center relative">
            {/* Add a container for animations */}
            <div className="relative overflow-hidden w-full h-full flex items-center justify-center">
                {textItems.map((text, index) => {
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
                            key={index}
                            className={`absolute text-2xl md:text-4xl font-bold text-white`}
                            initial="hidden"
                            animate="visible"
                            transition={{
                                duration: .7,
                                delay: index * 1.5,
                                ease: "easeInOut",
                            }}
                            variants={childVariants}
                            style={{
                                whiteSpace: "nowrap",
                                textAlign: "center", // Center-align the text
                            }}
                        >
                            {text}
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};

export default AnimatedText;
