import React, { useRef } from "react";
import Slider from "react-slick";
import sliderBG from '../../assets/slider-bg.png';
import sec from '../../assets/20.png'
import './Slider.css'
import { useInView } from "framer-motion";
import { motion } from "framer-motion"
const AutoPlay = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 4000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, amount: 0.1 });

    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1.5, staggerChildren: 0.3 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <motion.div className="slider-container w-[90%] mx-auto md:flex justify-between mt-32 md:flex-row flex-col"
            ref={containerRef}

            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={containerVariants}>

            <motion.div
                variants={itemVariants}
                className="md:w-1/2 w-[90%] mx-auto " >
                <p className="text-[26px] leading-[33px] text-[#0052CC] font-medium">Be the Captain of your
                    Customer Relationships in just
                </p>
                <h1 className="inter md:text-[120px] md:leading-[160px] text-[80px] leading-[100px] font-bold text-[#0052CC] h1-twenty">20<span className="text-[51px] leading-[66px] font-bold text-[#0052CC] span-seconds">Seconds!</span></h1>
            </motion.div>
            <Slider {...settings} className="custom-slider md:w-1/2 w-[90%]  md:mt-0 mt-12">
                <div className="md:h-[230px] h-auto bg-[#D8E8FF] rounded-[20px]"> {/* Removed mx-2 */}
                    <div className=" flex justify-center items-center gap-10 ">
                        <div className="p-10 w-full">
                            <p className="text-[18px] leading-6 text-[#202123]">Let your customers enjoy
                                the convenience of
                            </p>
                            <p className="text-[32px] leading-10 font-bold text-[#0052CC]">one-click warranty registration.</p>
                        </div>
                        <div className="w-[30%]">
                            <img src={sliderBG} alt="slider-bg" className="w-[100%] items-center" />
                        </div>
                    </div>

                </div>
                <div className="md:h-[230px] h-auto bg-[#D8E8FF] rounded-[20px]"> {/* Removed mx-2 */}
                    <div className=" flex justify-center items-center gap-10 ">
                        <div className="p-10">
                            <p className="text-[18px] leading-6 text-[#202123]">Let your customers enjoy
                                the convenience of
                            </p>
                            <p className="text-[32px] leading-10 font-bold text-[#0052CC]">one-click warranty registration.</p>
                        </div>
                        <div className="w-[30%]">
                            <img src={sliderBG} alt="slider-bg" className="w-[100%] items-center" />
                        </div>
                    </div>

                </div>
                <div className="md:h-[230px] h-auto bg-[#D8E8FF] rounded-[20px]"> {/* Removed mx-2 */}
                    <div className=" flex justify-center items-center gap-10 ">
                        <div className="p-10">
                            <p className="text-[18px] leading-6 text-[#202123]">Let your customers enjoy
                                the convenience of
                            </p>
                            <p className="text-[32px] leading-10 font-bold text-[#0052CC]">one-click warranty registration.</p>
                        </div>
                        <div className="w-[30%]">
                            <img src={sliderBG} alt="slider-bg" className="w-[100%] items-center" />
                        </div>
                    </div>

                </div>

            </Slider>
        </motion.div>
    );
};

export default AutoPlay;
