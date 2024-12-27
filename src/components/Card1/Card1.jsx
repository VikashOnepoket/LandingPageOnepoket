import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import gif from "../../assets/3rd fold mage.gif";
import './Card1.css';


const Card1 = () => {
  // Animation variants for Framer Motion
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 }); // Trigger when 10% of the container is in view

  const slideInFromLeft = {
    initial: { x: "-100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 1.2, ease: "easeOut" },
  };

  const slideInFromRight = {
    initial: { x: "100%", opacity: 0 },
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
      className="w-[90%] mx-auto flex flex-col md:flex-row justify-between overflow-hidden mt-[8rem]"
      ref={containerRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"} // Trigger visibility based on in-view state
      variants={containerVariants}
    >
      {/* GIF Section */}
      <motion.div
        initial={slideInFromLeft.initial}
        animate={isInView ? slideInFromLeft.animate : slideInFromLeft.initial} // Trigger animation when in view
        transition={slideInFromLeft.transition}
        className="w-[45%] mb-8 md:mb-0"
      >
        <img
          src={gif}
          alt="GIF Animation"
          className=""
          style={{ backgroundColor: "transparent" }}
        />
      </motion.div>

      {/* Text Section */}
      <motion.div
        initial={slideInFromRight.initial}
        animate={isInView ? slideInFromRight.animate : slideInFromRight.initial} // Trigger animation when in view
        transition={slideInFromRight.transition}
        className="w-[55%]"
      >
        <span className="card-text">Strengthen Loyalty, </span><br />
        <span className="card-text2">Drive Engagement</span>
        <p className="para-text1 mt-[3.12rem]">
          With Onepoket, you can build deeper connections with your customers<br/>
          and create post-purchase experiences that keep them coming back.<br/>
          Here's how we help you strengthen customer relationships and optimize<br/>
          growth:
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Card1;
