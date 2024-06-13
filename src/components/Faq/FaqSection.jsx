import { useInView, motion, AnimatePresence } from 'framer-motion';
import React, { useRef, useState } from 'react';
import { FaPlus } from 'react-icons/fa6';
import { GoPlus } from 'react-icons/go';
import { IoMdClose } from 'react-icons/io';
import { IoClose } from "react-icons/io5";

const FaqSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });
  const [openMenus, setOpenMenus] = useState([false, false, false]);

  const toggleMenu = (index) => {
    const updatedOpenMenus = openMenus.map((isOpen, i) =>
      i === index ? !isOpen : false
    );
    setOpenMenus(updatedOpenMenus);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.5, staggerChildren: 0.3 } },
  };

  const questions = [
    { question: "What is Onepoket?", answer: "Onepoket is a platform that..." },
    { question: "How does Onepoket work?", answer: "Onepoket works by..." },
    { question: "Why choose Onepoket?", answer: "Choosing Onepoket means..." }
  ];

  return (
    <motion.div ref={containerRef}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={containerVariants}
      className="2xl:w-[95%] w-[100%] 2xl:mx-auto ">
      <motion.div
        variants={containerVariants}
        className="xl:w-[80%] mx-auto pt-24 w-[90%] flex justify-between lg:flex-row flex-col "
      >
        <motion.div variants={containerVariants} className='lg:w-[55%] w-[90%] flex items-center justify-center lg:h-[700px] lg:mt-0 mt-5 mx-auto'>
          <div className='w-[100%]'>
            <p className='text-[#0052CC] sm:text-[64px] text-[30px] leading-[45px]  font-semibold sm:leading-[80px]'>Frequently Asked Questions</p>
          </div>
        </motion.div>

        <motion.div variants={containerVariants} className='lg:w-[40%] w-[90%] lg:h-[700px] lg:mt-0 mt-12 flex flex-col items-center justify-center gap-12 mx-auto'>
          {questions.map((item, index) => (
            <div
              key={index}
              className={`w-[100%] relative rounded ${openMenus[index] ? '' : ''}`}
            >
              <div className='flex justify-between items-center w-[100%]' onClick={() => toggleMenu(index)}>
                <div>
                  <h1 className='text-[17px] leading-[35px] font-semibold'>{item.question}</h1>
                </div>
                <div className="cursor-pointer text-[#9C9C9C] hover:text-[#0052CC]">
                  {openMenus[index] ? <IoClose size={24} /> : <FaPlus  size={20} />}
                </div>
              </div>
              <AnimatePresence>
                {openMenus[index] && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.2, ease: 'easeInOut' }}
                    className='w-[100%] mt-2 relative bg-[#EBF3FF] rounded text-[17px] font-normal'
                  >
                    <p className="p-4">{item.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
              <hr className="border-t-2 border-gray-300 my-4 w-full" />
            </div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default FaqSection;
