import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import plane from "../../assets/PLANE.png";
import d2cblur from "../../assets/d2cblur.svg";
import man from "../../assets/man.png";
import warrantyclaim from "../../assets/warranty claim.png";
import Group240 from "../../assets/Group 240.png";
import Group242 from "../../assets/Group 242.png";
import review from "../../assets/review.png";
import earbuds from "../../assets/earbuds.png";
import csat from "../../assets/csat.png";
import laptop from "../../assets/laptop.png";
import "./D2C.css";

const D2C = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    { src: man, className: "absolute w-[80%] z-50" },
    { src: Group242, className: "absolute top-[3rem] left-[38%] w-[5rem] h-[5rem]" },
    { src: Group240, className: "absolute top-[5rem] right-[18%] w-[5rem] h-[5rem]" },
    { src: warrantyclaim, className: "absolute left-[10rem] top-[10rem] w-[5rem]" },
    { src: earbuds, className: "absolute left-[8rem] top-[18rem] w-[6rem]" },
    { src: laptop, className: "absolute left-[7rem] top-[25rem] w-[7rem]" },
    { src: review, className: "absolute top-[9rem] right-[12rem] w-[7rem]" },
    { src: csat, className: "absolute top-[18rem] right-[8rem] w-[7rem]" },
  ];

  useEffect(() => {
    if (isInView) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 1000); // Duration between showing each image is now 1 second (1000ms)
      return () => clearInterval(interval);
    }
  }, [isInView, images.length]);

  return (
    <motion.div
      className="w-[90%] mx-auto flex flex-col md:flex-row justify-between overflow-hidden mt-[8rem] items-center"
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
        className="w-[45%]"
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
        className="w-[55%] mb-8 md:mb-0 flex items-center justify-center relative"
      >
        <img
          src={d2cblur}
          alt="Background Blur"
          className=""
          style={{ backgroundColor: "transparent" }}
        />
        {images.map((image, index) => (
          <motion.img
            key={index}
            src={image.src}
            alt={`Image ${index}`}
            className={image.className}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              index <= currentImageIndex
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: 0.8 }
            }
            transition={{
              opacity: {
                duration: 0.3, // Reduced to make animation faster (0.3 seconds)
                ease: "easeInOut",
              },
              scale: {
                duration: 0.3, // Reduced to make animation faster (0.3 seconds)
                ease: "easeInOut",
              },
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default D2C;
