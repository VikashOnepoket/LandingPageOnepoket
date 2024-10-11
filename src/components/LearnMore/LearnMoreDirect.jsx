import React, { useEffect } from 'react'
import NavTop from '../Navbar/NavTop'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import group from '../../assets/Group 92.png'
import group1 from '../../assets/Group 88.png'
import group2 from '../../assets/Group 89.png'
import { useNavigate } from 'react-router-dom'
import learn from '../../assets/learnmore.png'
import one from '../../assets/onedirect.png'
import direct from '../../assets/directLearn.png'
import direct1 from '../../assets/directLearn2.png'
import two from '../../assets/twodirect.png'
import large from '../../assets/large.png'

const LearnMoreDirect = () => {
    const navigate = useNavigate()
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>

            <div className='h-screen overflow-y-auto'>
                <NavTop />
                <Navbar />
                {/*  */}
                <div className='' >
                    {/* header content */}
                    <div className='relative'>
                        <img
                            src={two}
                            className='absolute top-[5rem]   h-[10rem] md:block hidden' // Show only on small screens
                        />
                        <img
                            src={one}
                            className='absolute top-[30rem]  h-[5rem] right-0 md:block hidden' // Show only on small screens
                        />
                        <img
                            src={direct}
                            className='absolute top-[18rem] h-[50rem] left-0  md:block hidden' // Show only on small screens
                        />
                        <img
                            src={large}
                            className='absolute top-[38rem] h-[50rem] right-0 md:block hidden' // Show only on small screens
                        />
                        <img
                            src={direct1}
                            className='absolute top-[65rem] h-[8rem] right-0 md:block hidden' // Show only on small screens
                        />

                    </div>

                    <div className='md:text-center text-start md:w-[100%] mx-auto w-[90%]'>
                        <h1 className='text-[#004699] text-[36px] leading-[45px] font-bold mt-[3.75rem]'>“Direct insights,better decisions.”</h1>
                        <div className="relative mt-[3.75rem] md:w-1/2 mx-auto">
                            {/* Arrow */}
                            <div className="absolute -top-6 left-[30%]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="55" height="25" viewBox="0 0 55 25" fill="none">
                                    <path d="M1.91602 1.96143C15.2528 1.96143 28.4551 2.73954 39.7914 10.507C43.7537 13.2219 47.8396 17.6265 49.9544 21.8561" stroke="#FF7070" strokeWidth="3" strokeLinecap="round" />
                                    <path d="M44.4619 22.2238C46.2149 22.4429 47.9351 22.9742 49.6561 23.22C50.0461 23.2758 50.3486 23.4852 50.7691 23.4605C50.9292 23.4511 51.0021 22.7602 51.0714 22.6017C51.2114 22.2818 51.0529 21.9174 51.2088 21.6055C51.3786 21.2658 51.5024 20.8595 51.6073 20.4924C51.8364 19.6905 52.3212 19.0239 52.6242 18.2664" stroke="#FF7070" strokeWidth="3" strokeLinecap="round" />
                                </svg>
                            </div>
                            {/* Text */}
                            <p className="text-[#202123BF] text-[1.25rem] leading-8 font-semibold">
                                Harness the power of <span className="font-bold">first-party data</span> to gain invaluable insights into your audience, without relying on
                                <span className="text-[#FF7070] font-bold"> third-party intermediaries.</span> By collecting data directly from your users, you can:
                            </p>
                        </div>

                    </div>

                    {/* card section */}
                    <div className='md:w-[80%] xl-w-[90%] mx-auto mt-[5rem] w-[90%]'>
                        {/* card 1 */}
                        <div className='flex items-center justify-between gap-[9.5rem] md:flex-row flex-col-reverse'>
                            <div className='rounded-[20px] text-center p-10 border-[#D8D8D8]   border bg-gradient-to-r from-[#396fb0] to-[#0D4F93] md:h-[200px] h-[230px] md:w-1/2 w-full'>
                                <h1 className='text-[18px] leading-[23px] font-semibold text-white'>Cost-Efficient Data Acquisition:</h1>
                                <p className='text-[14px] text-white font-normal leading-[18px] mt-2'>Skip the expenses associated with purchasing data from third parties. First-party data collection is not only cost-effective but also allows you to gather insights that are more tailored to your business needs.</p>
                            </div>
                            <div className='md:w-1/2 w-full flex justify-center'>
                                <img src={group} className='h-[180px]' />
                            </div>
                        </div>
                        {/* card2 */}
                        <div className='flex items-center justify-between gap-[9.5rem] mt-[7.9rem] md:flex-row flex-col'>

                            <div className='md:w-1/2 w-full flex justify-center'>
                                <img src={group1} className='h-[180px]' />
                            </div>
                            <div className='rounded-[20px] text-center p-10 border-[#D8D8D8] border   bg-gradient-to-r from-[#396fb0] to-[#0D4F93] md:h-[200px] h-[230px] md:w-1/2 w-full'>
                                <h1 className='text-[18px] leading-[23px] font-semibold text-white'>Reduce Customer Acquisition Costs (CAC):</h1>
                                <p className='text-[14px] text-white font-normal leading-[18px] mt-2'>Utilize your first-party data to better understand user behavior, refine your marketing strategies, and create personalized campaigns that resonate with potential customers. This leads to a reduction in your overall customer acquisition cost.</p>
                            </div>
                        </div>
                        {/* card 3 */}
                        <div className='flex items-center justify-between gap-[9.5rem] mt-[7.9rem] md:flex-row flex-col-reverse'>
                            <div className='rounded-[20px] text-center p-10 border-[#D8D8D8] border   bg-gradient-to-r from-[#396fb0] to-[#0D4F93] md:h-[200px] h-[230px] md:w-1/2 w-full'>
                                <h1 className='text-[18px] leading-[23px] font-semibold text-white'>Optimize Return on Ad Spend (ROAS):</h1>
                                <p className='text-[14px] text-white font-normal leading-[18px] mt-2'> Deliver a concise yet comprehensive explanation of your product or service on a single landing page, making it easy for users to understand its value. This one-page format ensures that your message is clear, accessible, and delivered in a way that leaves a lasting impression.</p>
                            </div>
                            <div className='md:w-1/2 w-full flex justify-center'>
                                <img src={group2} className='h-[180px]' />
                            </div>
                        </div>
                    </div>



                </div>
                <div className=' w-[90%] mx-auto mt-[3.44rem]'>
                    <button className='text-[14px] leading-[18px] text-[#004699] flex items-center gap-2' onClick={() => navigate('/')}>
                        <span class="material-symbols-outlined ">
                            arrow_back
                        </span>
                        Back
                    </button>
                </div>
                <Footer />
            </div>

        </>
    )
}

export default LearnMoreDirect
