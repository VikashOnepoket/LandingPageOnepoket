import { useInView, motion, AnimatePresence } from 'framer-motion';
import React, { useRef, useState } from 'react';
import { FaPlus } from 'react-icons/fa6';
import { IoClose } from 'react-icons/io5';

const FaqSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, threshold: 0.1 });

  const [openMenuIndex, setOpenMenuIndex] = useState(null);

  const toggleMenu = (index) => {
    setOpenMenuIndex(prevIndex => (prevIndex === index ? null : index));
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.5, staggerChildren: 0.3 } },
  };

  const questions = [
    { question: "What is Onepoket?", answer: "Onepoket is a cutting-edge SaaS solution designed to streamline warranty management and customer onboarding through the power of QR technology. It offers businesses a seamless way to enhance after-sales service, ensuring customer satisfaction and loyalty." },
    {
      question: "How does Onepoket work?",
      answer: (
        <ul className='list-disc pl-5'>
          <p>Onepoket utilizes unique QR codes to provide a range of services:</p>
          <li className='mt-3'><strong>Warranty Management:</strong> Customers can easily register and access warranty details by scanning a QR code.</li>
          <li className='mt-2'><strong>Customer Onboarding:</strong> Simplifies the onboarding process, making it quick and efficient.</li>
          <li className='mt-2'><strong>Anti-Counterfeit Protection:</strong> Ensures product authenticity, protecting brands from counterfeiting.</li>
          <li className='mt-2'><strong>Targeted Marketing:</strong> Enables personalized marketing campaigns based on customer data obtained through QR interactions.</li>
        </ul>
      )
    },
    { question: "Why choose Onepoket?", answer: (
      <ul className='list-disc pl-5'>
        <p>Choosing Onepoket empowers businesses with:</p>
        <li className='mt-3'><strong>Efficiency:</strong> Streamlined processes for warranty management and onboarding.</li>
        <li className='mt-2'><strong>Innovation:</strong> Advanced QR technology that enhances customer interactions.</li>
        <li className='mt-2'><strong>Security:</strong> Anti-counterfeit features that safeguard your brand and build trust.</li>
        <li className='mt-2'><strong>Customer Loyalty:</strong>Improved customer experience leads to higher satisfaction and loyalty.</li>
      </ul>
    ) }
  ];

  return (
    <motion.div
      ref={containerRef}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={containerVariants}
      className="2xl:w-[95%] w-[100%] 2xl:mx-auto xl:h-[750px] h-auto"
    >
      <motion.div
        variants={containerVariants}
        className="xl:w-[80%] mx-auto pt-24 w-[90%] flex lg:flex-row flex-col justify-between items-start"
      >
        <motion.div
          variants={containerVariants}
          className='lg:w-[55%] w-[90%] flex items-center justify-center lg:mt-0 mt-5 mx-auto h-[303px]'
        >
          <div className='w-[100%]'>
            <p className='text-[#0052CC] sm:text-[64px] text-[30px] leading-[45px] font-semibold sm:leading-[80px]'>
              Frequently Asked Questions
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className='lg:w-[40%] w-[90%] lg:mt-0 mt-12 flex flex-col items-center justify-start gap-12 mx-auto h-[100%]'
        >
          {questions.map((item, index) => (
            <div key={index} className='w-[100%] relative rounded cursor-pointer'>
              <div className='relative'>
                <div className='flex justify-between items-center w-[100%]' onClick={() => toggleMenu(index)}>
                  <div>
                    <h1 className='text-[17px] leading-[35px] font-semibold'>{item.question}</h1>
                  </div>
                  <div className="cursor-pointer text-[#9C9C9C] hover:text-[#0052CC]">
                    {openMenuIndex === index ? <IoClose size={24} /> : <FaPlus size={20} />}
                  </div>
                </div>
                <AnimatePresence>
                  {openMenuIndex === index && (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto', transition: { duration: 0.3 } }}
                      exit={{ opacity: 0, height: 0, transition: { duration: 0.2 } }}
                      className='overflow-hidden mt-2 bg-[#EBF3FF] rounded text-[17px] font-normal w-[100%]'
                      style={{ position: 'relative' }}
                    >
                      <div className="p-4">{item.answer}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <hr className="border-t-2 border-gray-300 my-4 w-full" />
            </div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default FaqSection;
