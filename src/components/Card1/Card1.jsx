import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import './Card1.css';
import text1 from '../../assets/text 1.png';
import text2 from '../../assets/text 2.png';
import text3 from '../../assets/text 3.png';
import text4 from '../../assets/text 4.png';
import cust from "../../assets/cust.png";
import chimney from '../../assets/chimney-person.png';
import arrow from '../../assets/arrow-person.png';
import twentyfour from '../../assets/24-person.png';

const Card1 = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

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

  const ref = useRef(null);
  const isInViews = useInView(ref, { once: false, margin: "0px 0px -100px 0px" });
  const [key, setKey] = useState(0);

  useEffect(() => {
    if (isInView) {
      const interval = setInterval(() => {
        setKey(prevKey => prevKey + 1); 
      }, 9000);  

      return () => clearInterval(interval);
    }
  }, [isInView]);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 1, duration: 1 }
    }),
  };

  return (
    <motion.div
      className="w-[90%] mx-auto flex flex-col md:flex-row justify-between overflow-hidden mt-[8rem] gap-[4.1rem] items-center"
      ref={containerRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"} 
      variants={containerVariants}
    >
      <motion.div
        initial={slideInFromLeft.initial}
        animate={isInView ? slideInFromLeft.animate : slideInFromLeft.initial}
        transition={slideInFromLeft.transition}
        className="w-[45%] mb-8 md:mb-0 relative"
      >
        <div className="flex justify-center items-center relative z-50">
          <div ref={ref} className="relative z-50">
            {isInViews && (
              <>
                <motion.img
                  key={key}  
                  src={cust}
                  alt="Customer Support"
                  className="w-full"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                />

                <div className="absolute top-0 left-0 flex flex-col gap-4 z-50">
                  <motion.img
                    key={`${key}-1`}  
                    src={text1}
                    className="w-[11.9375rem] max-w-full"  
                    custom={0}
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                  />
                  <motion.img
                    key={`${key}-2`}
                    src={text2}
                    className="w-[11.9375rem] absolute top-[4rem] -right-12"
                    custom={1}
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                  />
                  <motion.img
                    key={`${key}-3`}
                    src={text3}
                    className="w-[11.9375rem] absolute top-[8rem]"
                    custom={2}
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                  />
                  <motion.img
                    key={`${key}-4`}
                    src={chimney}
                    className="w-[10.625rem] absolute top-[12rem]"
                    custom={3}
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                  />
                  <motion.img
                    key={`${key}-5`}
                    src={arrow}
                    className="w-[5rem] absolute top-[23rem] left-[4rem]"
                    custom={4}
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                  />
                  <motion.img
                    key={`${key}-6`}
                    src={text4}
                    className="w-[7rem] absolute top-[23.5rem] -right-[5rem]"
                    custom={5}
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                  />
                </div>

                <motion.div
                  className="absolute top-5 right-12"
                >
                  <motion.img
                    key={`${key}-7`}
                    src={twentyfour}
                    className="w-[4.75rem]"
                    custom={6}
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                  />
                </motion.div>
              </>
            )}
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={slideInFromRight.initial}
        animate={isInView ? slideInFromRight.animate : slideInFromRight.initial}
        transition={slideInFromRight.transition}
        className="w-[55%]"
      >
        <span className="card-text">Strengthen Loyalty, </span><br />
        <span className="card-text2">Drive Engagement</span>
        <p className="para-text1 mt-[3.12rem]">
          With Onepoket, you can build deeper connections with your customers<br />
          and create post-purchase experiences that keep them coming back.<br />
          Here's how we help you strengthen customer relationships and optimize<br />
          growth:
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Card1;
