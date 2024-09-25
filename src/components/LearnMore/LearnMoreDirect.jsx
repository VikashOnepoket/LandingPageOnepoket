import React, { useEffect } from 'react'
import NavTop from '../Navbar/NavTop'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import group from '../../assets/Group 92.png'
import group1 from '../../assets/Group 88.png'
import group2 from '../../assets/Group 89.png'
import { useNavigate } from 'react-router-dom'
import learn from '../../assets/learnmore.png'

const LearnMoreDirect = () => {
    const navigate = useNavigate()
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <NavTop />
            <Navbar />
            {/*  */}
            <div className='mt-20' >
                {/* header content */}

                <div className='md:text-center text-start w-[90%] mx-auto'>
                    <h1 className='text-[#004699] text-[36px] leading-[45px] font-bold '>“Direct insights,better decisions.”</h1>
                    <p className='text-[#202123BF] text-[20px] leading-[26px] mt-4 md:w-1/2  mx-auto font-semibold'>Harness the power of first-party data to gain invaluable insights into your audience, without relying on third-party intermediaries. By collecting data directly from your users, you can:</p>
                </div>

                {/* card section */}
                <div className='md:w-[80%] xl-w-[90%] mx-auto mt-20 w-[90%]'>
                    {/* card 1 */}
                    <div className='flex items-center justify-between gap-10 md:flex-row flex-col-reverse'>
                        <div className='rounded-[20px] text-center p-10 border-[#D8D8D8]   border bg-gradient-to-r from-[#396fb0] to-[#0D4F93] md:h-[200px] h-[230px] md:w-1/2 w-full'>
                            <h1 className='text-[18px] leading-[23px] font-semibold text-white'>Cost-Efficient Data Acquisition:</h1>
                            <p className='text-[14px] text-white font-normal leading-[18px] mt-2'>Skip the expenses associated with purchasing data from third parties. First-party data collection is not only cost-effective but also allows you to gather insights that are more tailored to your business needs.</p>
                        </div>
                        <div className='md:w-1/2 w-full flex justify-center'>
                            <img src={group} className='h-[180px]' />
                        </div>
                    </div>
                    {/* card2 */}
                    <div className='flex items-center justify-between gap-10 mt-20 md:flex-row flex-col'>

                        <div className='md:w-1/2 w-full flex justify-center'>
                            <img src={group1} className='h-[180px]' />
                        </div>
                        <div className='rounded-[20px] text-center p-10 border-[#D8D8D8] border   bg-gradient-to-r from-[#396fb0] to-[#0D4F93] md:h-[200px] h-[230px] md:w-1/2 w-full'>
                            <h1 className='text-[18px] leading-[23px] font-semibold text-white'>Reduce Customer Acquisition Costs (CAC):</h1>
                            <p className='text-[14px] text-white font-normal leading-[18px] mt-2'>Utilize your first-party data to better understand user behavior, refine your marketing strategies, and create personalized campaigns that resonate with potential customers. This leads to a reduction in your overall customer acquisition cost.</p>
                        </div>
                    </div>
                    {/* card 3 */}
                    <div className='flex items-center justify-between gap-10 mt-20 md:flex-row flex-col-reverse'>
                        <div className='rounded-[20px] text-center p-10 border-[#D8D8D8] border   bg-gradient-to-r from-[#396fb0] to-[#0D4F93] md:h-[200px] h-[230px] md:w-1/2 w-full'>
                            <h1 className='text-[18px] leading-[23px] font-semibold text-white'>Optimize Return on Ad Spend (ROAS):</h1>
                            <p className='text-[14px] text-white font-normal leading-[18px] mt-2'> Deliver a concise yet comprehensive explanation of your product or service on a single landing page, making it easy for users to understand its value. This one-page format ensures that your message is clear, accessible, and delivered in a way that leaves a lasting impression.</p>
                        </div>
                        <div className='md:w-1/2 w-full flex justify-center'>
                            <img src={group2} className='h-[180px]' />
                        </div>
                    </div>
                </div>

                <div className=' w-[80%] mx-auto mt-20'>
                    <button className='text-[14px] leading-[18px] text-[#004699] flex items-center gap-2' onClick={() => navigate('/')}>
                        <span class="material-symbols-outlined ">
                            arrow_back
                        </span>
                        Back
                    </button>
                </div>

            </div>
            <Footer />
        </>
    )
}

export default LearnMoreDirect
