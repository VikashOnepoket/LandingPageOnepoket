import React from 'react';
import { motion } from 'framer-motion';
import './Elementor.css';
import element from '../../assets/element.png'

const Elementor = () => {
    // Image URLs array
    const images = [
        // 'https://servify.com/wp-content/uploads/2024/06/Ind-1-home.webp',
        // 'https://servify.com/wp-content/uploads/2024/06/Ind-2-home.webp',
        // 'https://servify.com/wp-content/uploads/2024/06/Ind-1-home.webp',
        // 'https://servify.com/wp-content/uploads/2024/06/Ind-2-home.webp',
        element
    ];

    // Duplicate the images for seamless infinite scrolling
    const imagesToShow = [...images, ...images];

    return (
        <div className="mt-12 overflow-hidden relative">
            {/* Motion container to apply animation */}
            <motion.div
                className="slider-container flex gap-2"
                animate={{ x: ['0%', '-50%'] }} // Slide only halfway (cover duplicated images)
                transition={{
                    duration: 15, // Duration of the slide
                    repeat: Infinity, // Infinite loop
                    repeatType: 'loop', // Continuous loop
                    ease: 'linear', // Linear transition for smooth movement
                }}
                style={{ display: 'flex', whiteSpace: 'nowrap' }} // Ensure no line breaks between images
            >
                {/* Map over the images to generate the slider items */}
                {imagesToShow.map((image, index) => (
                    <div className="slider-item" key={index} style={{ flexShrink: 0 }}>
                        <img src={image} alt={`Image ${index}`} style={{ width: '100%', height: 'auto' }} />
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default Elementor;
