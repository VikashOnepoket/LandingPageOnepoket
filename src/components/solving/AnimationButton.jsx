// src/components/AnimatedButton.js
import React from 'react';
import { motion } from 'framer-motion';

const AnimatedButton = ({ onClick, children }) => {
    return (
        <motion.button
            className="border border-[#202123BF] px-6 rounded-[15px] mt-4 transition duration-300 text-[#202123BF] text-[16px] leading-10 hover:bg-[#004699] hover:text-white"
            onClick={onClick}
            whileHover={{
                transition: {
                    type: 'spring',
                    stiffness: 100,
                    damping: 15,
                    mass: 1,
                    curve: "easeInOut",
                }
            }}
            whileTap={{
                scale: 0.95,
                transition: {
                    type: 'spring',
                    stiffness: 100,
                    damping: 15,
                    mass: 1,
                },
            }}
        >
            {children}
        </motion.button>
    );
};

export default AnimatedButton;
