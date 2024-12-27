import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./Delivery.css";
import deliver from "../../../src/assets/deliver.png";

const Delivery = () => {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, amount: 0.1 });

    // Fade-in and push-out effect for text and items
    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1.5,
                staggerChildren: 0.5, // Stagger the children with a delay
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 }, // Start with opacity 0 and slightly pushed down
        visible: {
            opacity: 1,
            y: 0, // Push to final position
            transition: {
                duration: 1.2,
                type: "spring",
                stiffness: 50,
                damping: 25,
            },
        },
    };

    return (
        <motion.div
            className="w-full bg-[#004699] h-[11.25rem] mt-[0.62rem] p-10"
            ref={containerRef}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
        >
            <div className="w-[90%] mx-auto flex gap-5">
                {/* Heading Section */}
                <motion.div
                    className="w-[35%]"
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={itemVariants} // Apply fade-in and push-out effect to the heading
                >
                    <h1 className="text-containerS">
                        Millions trust Onepoket because we deliver
                    </h1>
                </motion.div>

                {/* Items Section */}
                <motion.div
                    className="w-[65%] flex gap-[2.38rem] overflow-hidden"
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={containerVariants} // Apply stagger effect to the items container
                >
                    {[
                        "Seamless Customer Service",
                        "Reduce Overall Post Sales Costs",
                        "Secure QR for User Onboarding",
                    ].map((text, index) => (
                        <motion.div
                            key={index}
                            className="flex gap-2 items-center w-full"
                            initial="hidden" // Initial state for push-in effect
                            animate="visible" // Push-out effect
                            variants={itemVariants} // Apply push-out effect to each item
                            transition={{
                                delay: index * 0.5, // Stagger delay for each item
                            }}
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
