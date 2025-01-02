import React, { useState } from "react";
import { motion } from "framer-motion";
import './WarrantyRegistration.css';
import card1 from '../../assets/card-1.png';
import card2 from '../../assets/card-2.png';
import card3 from '../../assets/card-3.png';
import def from '../../assets/def.png'
import cardFirst from '../../assets/first party data.png'
import cardSecond from '../../assets/user analytcs (1).png'
import cardThird from '../../assets/qr registration.png'

const WarrantyRegistration = () => {
    const [selectedOption, setSelectedOption] = useState("QR-Based Warranty Registration");

    const options = [
        {
            title: "QR-Based Warranty Registration",
            description: "With OnePocket's QR codes, customers can register warranties in seconds, giving them easy access to post-purchase benefits and support.",
            image: cardThird,
        },
        {
            title: "User-Friendly Analytics",
            description: "Access real-time data to understand customer behavior. Our intuitive analytics help you make informed decisions to proactively engage customers.",
            image: cardSecond,
        },
        {
            title: "First-Party Data Collection",
            description: "Collect valuable data with every interaction, empowering you to personalize future touchpoints and increase retention.",
            image: cardFirst,
        },
    ];

    const selectedContent = options.find(option => option?.title === selectedOption);

    return (
        <div className="w-[80%] mx-auto flex justify-between gap-6 relative mt-[8.44rem]">
            {/* Left Section */}
            <div className="mt-[3.5rem] relative z-10">
                <span className="span-1">How do you</span> <br /> <span className="span-2"> help them?</span>
                <div className="flex flex-col gap-3 items-start pt-[6.38rem]">
                    {options.map(option => (
                        <button
                            key={option.title}
                            className={`btn ${selectedOption === option.title ? "active" : ""}`}
                            onClick={() => setSelectedOption(option.title)}
                        >
                            {option.title}
                        </button>
                    ))}
                </div>
            </div>

            {/* Right Section */}
            <motion.div
                className="w-full md:w-1/2 "
                key={selectedOption}
                initial={{ scale: 0.9, opacity: 0 }} // Initial scale for push-in effect
                animate={{ scale: 1, opacity: 1 }} // Push-out effect to normal size
                exit={{ scale: 0.9, opacity: 0 }} // Scale down for exit
                transition={{ duration: 0.5 }}
            >
                {/* Animate the h2 tag */}
                {/* <motion.h2
                    className="heading-text"
                    initial={{ scale: 0.9, opacity: 0 }} // Initial push-in effect
                    animate={{ scale: 1, opacity: 1 }} // Push-out effect
                    transition={{ duration: 0.4 }}
                >
                    {selectedContent.title}
                </motion.h2> */}

                {/* Animate the p tag */}
                {/* <motion.p
                    className="para-text pt-[2.89rem]"
                    initial={{ scale: 0.9, opacity: 0 }} // Initial push-in effect
                    animate={{ scale: 1, opacity: 1 }} // Push-out effect
                    transition={{ duration: 0.4, delay: 0.2 }} // Delay for staggered animation
                >
                    {selectedContent.description}
                </motion.p> */}

                {/* Animate the image */}
                <motion.div
                    className="mt-[4rem] mb-[4.39rem]"
                    initial={{ scale: 0.9, opacity: 0 }} // Initial push-in effect
                    animate={{ scale: 1, opacity: 1 }} // Push-out effect
                    transition={{ duration: 0.4, delay: 0.4 }} // Delay for staggered animation
                >
                    <img
                        src={selectedContent.image}
                        alt={selectedContent.title}
                        className=""
                    />
                </motion.div>
            </motion.div>
        </div>
    );
};

export default WarrantyRegistration;
