import React, { useState } from 'react';
import { motion } from 'framer-motion';

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
            text: "1. How satisfied are your customers with the Oepoket QR solution?",
            rateText: "(Rate from 1 to 5)",
            type: "rating",
            options: [1, 2, 3, 4, 5],
        },
        {
            text: "2. Which platform do you prefer for managing customer communication?",
            type: "checkbox",
            options: ["WhatsApp", "Instagram", "Email", "Your own website"]
        },
        {
            text: "3. Do you use any chatbots to handle customer inquiries?",
            type: "checkbox",
            options: ["Yes", "No"]
        },
        {
            text: "4. Are you selling your products on any e-commerce platforms?",
            type: "checkbox",
            options: ["Amazon", "Flipkart", "Shopify", "Others"]
        },
        {
            text: "5. Would you like to increase your product review ratings on e-commerce platforms?",
            type: "checkbox",
            options: ["Yes", "No"]
        },
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState({});
    const [isAnimating, setIsAnimating] = useState(false);

    const handleOptionChange = (event) => {
        const { name, value } = event.target;
        setAnswers(prev => ({
            ...prev,
            [name]: value // Update the answers using the question's key
        }));
    };

    const handleSubmit = async () => {
        if (currentQuestion < questions.length - 1) {
            // Start the animation before updating the question
            setIsAnimating(true);
            setTimeout(() => {
                setCurrentQuestion(prev => prev + 1);
                setIsAnimating(false); // Reset animation state after changing the question
            }, 500); // Delay to match the animation duration
        } else {
            console.log(answers); // Log the answers when the last question is reached
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
                    <p className='mt-3 text-[#20212399] text-[15px] leading-5'>
                        We're excited to bring you new features to enhance your business! To help us tailor these improvements to your needs, please take a moment to complete the survey below.
                    </p>
                    <motion.div
                        initial="hidden"
                        animate={isAnimating ? "hidden" : "visible"}  // Trigger animation on submit
                        variants={questionVariants}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                        <p className='mt-16 text-[#202123] text-[20px] leading-7 font-medium'>
                            {questions[currentQuestion].text}
                        </p>
                        <p className='text-[#202123BF] text-[16px] leading-5'>
                            {questions[currentQuestion].rateText || ""}
                        </p>
                        <div className='mt-8'>
                            {questions[currentQuestion].type === "rating" && (
                                <div className='flex items-center justify-between w-[100%] p-4 border rounded-lg gap-4'>
                                    <span className='text-[20px] leading-7 text-[#202123BF]'>Poor</span>
                                    {questions[currentQuestion].options.map((option, index) => (
                                        <label
                                            key={index}
                                            className={`w-12 h-12 border rounded-lg flex items-center justify-center cursor-pointer ${
                                                answers[`question-${currentQuestion}`] == option ? 'bg-blue-600 text-white' : 'bg-white'
                                            }`}
                                        >
                                            <input
                                                type='radio'
                                                name={`question-${currentQuestion}`}
                                                value={option}
                                                checked={answers[`question-${currentQuestion}`] == option}
                                                onChange={handleOptionChange}
                                                className='hidden'
                                            />
                                            {option}
                                        </label>
                                    ))}
                                    <span className='text-[20px] leading-7 text-[#202123BF]'>Excellent</span>
                                </div>
                            )}
                            {questions[currentQuestion].type === "checkbox" && (
                                questions[currentQuestion].options.map((option, index) => (
                                    <label key={index} className='block text-[20px] leading-7 font-normal text-[#000000]'>
                                        <input
                                            type='checkbox'
                                            name={`question-${currentQuestion}`}
                                            value={option}
                                            checked={answers[`question-${currentQuestion}`] === option}
                                            onChange={handleOptionChange}
                                            className='mr-5'
                                        />
                                        {option}
                                    </label>
                                ))
                            )}
                        </div>
                        <button
                            onClick={handleSubmit}
                            className='bg-[#0052CC] w-52 mt-8 text-white hover:bg-[#0052cc] hover:text-white border border-[#0052cc] text-[14px] leading-[18px] font-bold rounded-md px-3 py-2'
                        >
                            Submit
                        </button>
                    </motion.div>
                </div>
                <div className='lg:w-1/2 w-full items-center justify-center'>
                    <img src='https://firebasestorage.googleapis.com/v0/b/onepoketstage.appspot.com/o/Group%2040.png?alt=media&token=6528ab36-99eb-40e5-99dd-aa3022ea00d1' alt='coming-soon' className='w-[100%] h-[100%]' />
                </div>
            </div>
        </div>
    );
};

export default FactoryManagement;
