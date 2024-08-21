import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ComingSoon from '../../../assets/comingsoon.png';

const FactoryManagement = () => {
    const dotVariants = {
        hidden: { opacity: 0 },
        visible: (i) => ({
            opacity: 1,
            transition: {
                delay: i * 0.6,  // Increase the delay between dots
                duration: 0.9,
                repeat: Infinity,
                repeatType: "reverse",
            },
        }),
    };

    const questionVariants = {
        hidden: { opacity: 0, y: 50 },  // Start from below
        visible: { opacity: 1, y: 0 },  // Slide to original position
    };

    const questions = [
        {
            text: "Which platform do you prefer for managing customer communication?",
            options: ["Platform A", "Platform B", "Platform C"]
        },
        {
            text: "How satisfied are you with our current features?",
            options: ["Very Satisfied", "Satisfied", "Neutral", "Dissatisfied", "Very Dissatisfied"]
        },
        {
            text: "What additional features would you like to see?",
            options: ["Feature A", "Feature B", "Feature C"]
        },
        {
            text: "How frequently do you use our platform?",
            options: ["Daily", "Weekly", "Monthly", "Rarely"]
        },
        {
            text: "Would you recommend our platform to others?",
            options: ["Yes", "No"]
        }
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState({});
    const [isAnimating, setIsAnimating] = useState(false);

    const handleOptionChange = (event) => {
        const { name, value } = event.target;
        setAnswers(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async () => {
        if (currentQuestion < questions.length - 1) {
            setIsAnimating(true);
            // Trigger the animation for the current question
            setTimeout(() => {
                setCurrentQuestion(prev => prev + 1);
                setIsAnimating(false);
            }, 500); // Delay to match animation duration
        } else {
            // Handle the end of the survey here, e.g., submit answers
            console.log(answers);
        }
    };

    return (
        <div className='p-8'>
            <div className='flex lg:justify-between gap-10 lg:flex-row flex-col'>
                <div className='lg:w-1/2 w-full'>
                    <h3 className='text-[#004699] text-[3.3rem] font-semibold'>
                        Coming Soon
                        {[...Array(3)].map((_, i) => (
                            <motion.span
                                key={i}
                                custom={i}
                                initial="hidden"
                                animate="visible"
                                variants={dotVariants}
                            >
                                .
                            </motion.span>
                        ))}
                    </h3>
                    <p className='mt-3 text-[#20212399] text-[1rem] leading-5'>
                        We're excited to bring you new features to enhance your business! To help us tailor these improvements to your needs, please take a moment to complete the survey below.
                    </p>
                    <motion.div
                        initial="hidden"
                        animate={isAnimating ? "hidden" : "visible"}
                        variants={questionVariants}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                        <p className='mt-8 text-[#202123] text-[1.2rem] font-semibold'>
                            {questions[currentQuestion].text}
                        </p>
                        <div className='mt-4'>
                            {questions[currentQuestion].options.map((option, index) => (
                                <label key={index} className='block'>
                                    <input
                                        type='checkbox' // Change to 'radio' if you want single selection
                                        name={currentQuestion} // Use the current question index as the name
                                        value={option}
                                        checked={answers[currentQuestion] === option}
                                        onChange={handleOptionChange}
                                        className='mr-2'
                                    />
                                    {option}
                                </label>
                            ))}
                        </div>
                        <button
                            onClick={handleSubmit}
                            className='bg-[#0052CC] w-52 mt-5 text-white hover:bg-[#0052cc] hover:text-white border border-[#0052cc] mt-4 text-[14px] leading-[18px] font-bold rounded-md px-3 py-2'
                        >
                            Submit
                        </button>
                    </motion.div>
                </div>
                <div className='lg:w-1/2 w-full'>
                    <img src={ComingSoon} alt='coming-soon' className='w-[100%] h-[100%]' />
                </div>
            </div>
        </div>
    );
};

export default FactoryManagement;
