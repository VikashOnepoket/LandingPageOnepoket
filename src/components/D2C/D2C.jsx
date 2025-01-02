import React, { useEffect, useRef, useState } from "react";
import { delay, motion, useInView } from "framer-motion";
import plane from "../../assets/PLANE.png";
import d2cblur from "../../assets/d2cblur.svg";
import man from "../../assets/manPng.png";
import "./D2C.css";

const D2C = () => {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, amount: 0.1 });

    return (
        <motion.div
            className="w-[80%] mx-auto flex flex-col md:flex-row justify-between overflow-hidden mt-[8rem] items-center"
            ref={containerRef}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 1.5, staggerChildren: 0.5 },
                },
            }}
        >
            {/* Text Section */}
            <motion.div
                initial={{ x: "-100%", opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : { x: "-100%", opacity: 0 }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                className="w-[55%]"
            >
                <div className="flex justify-end">
                    <img src={plane} className="h-[110px] w-[258px]" alt="Plane" />
                </div>
                <span className="card-text">Built for Growing </span>
                <br />
                <span className="card-text2">D2C Brands</span>
                <p className="para-text1 mt-[3.12rem]">
                    Onepoket is designed exclusively for direct-to-consumer <br /> brands
                    who want to elevate their post-purchase <br /> experience. If you’re
                    focused on transforming first-time <br />
                    buyers into loyal brand advocates, our platform is crafted <br /> with
                    your needs in mind.
                </p>
            </motion.div>

            {/* Image Animation Section */}
            <motion.div
                initial={{ x: "100%", opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : { x: "100%", opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="w-[45%] mb-8 md:mb-0 flex items-center justify-center relative"
            >
                <img
                    src={d2cblur}
                    alt="Background Blur"
                    className=""
                    style={{ backgroundColor: "transparent" }}
                />
                <motion.img
                    src={man}
                    alt="Man Image"
                    className="absolute w-[80%] z-50"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                        opacity: isInView ? 1 : 0,
                        scale: isInView ? 1.2 : 0.8,  // Scale up when in view, reset when out of view
                    }}
                    transition={{
                        opacity: { duration: 1 },
                        scale: { duration: 2, ease: "easeInOut" },
                    }}
                />
            </motion.div>
        </motion.div>
    );
};

export default D2C;
