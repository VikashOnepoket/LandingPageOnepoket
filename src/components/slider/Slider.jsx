import React from "react";
import Slider from "react-slick";
import sliderBG from '../../assets/slider-bg.png';
import sec from '../../assets/20.png'

const AutoPlay = () => {
    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
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

    return (
        <div className="slider-container w-[90%] mx-auto md:flex justify-between mt-32 md:flex-row flex-col">
            <div  
            className="md:w-1/2 w-[90%] mx-auto " >
                <p className="text-[26px] leading-[33px] text-[#0052CC] font-medium">Be the Captain of your
                    Customer Relationships in just
                </p>
                <h1 className="inter text-[120px] leading-[160px] font-bold text-[#0052CC]">20<span className="text-[51px] leading-[66px] font-bold text-[#0052CC]">Seconds!</span></h1>
            </div>
            <Slider {...settings} className="custom-slider md:w-1/2 w-[90%]  md:mt-0 mt-12">
                <div className="h-[230px] bg-[#D8E8FF] rounded-[20px]"> {/* Removed mx-2 */}
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
                <div className="h-[230px] bg-[#D8E8FF] rounded-[20px]"> {/* Removed mx-2 */}
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
                <div className="h-[230px] bg-[#D8E8FF] rounded-[20px]"> {/* Removed mx-2 */}
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
        </div>
    );
};

export default AutoPlay;
