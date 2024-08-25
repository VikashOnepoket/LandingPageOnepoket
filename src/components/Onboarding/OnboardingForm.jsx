import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Select from 'react-select';
import { IoIosArrowBack } from 'react-icons/io';
import toast from 'react-hot-toast';
import axios from '../../api/api';
import './onboarding.css';
import logo from '../../assets/onepoket.png';
import logo1 from '../../assets/Frame 108.png';
import arrow from '../../assets/arrow.png';
import white from '../../assets/white.png';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useNavigate } from 'react-router-dom';

const industryOptions = [
    { value: 'software', label: 'Software' },
    { value: 'ecommerce', label: 'E-commerce' },
    { value: 'finance', label: 'Finance' },
    { value: 'healthcare', label: 'Healthcare' },
    { value: 'education', label: 'Education' },
];

const companySizeOptions = [
    { value: 'small', label: 'Small' },
    { value: 'medium', label: 'Medium' },
    { value: 'large', label: 'Large' },
];

const OnboardingForm = () => {
    const [isPersonalDetailsCompleted, setIsPersonalDetailsCompleted] = useState(false);
    const [isNextFormCompleted, setIsNextFormCompleted] = useState(false);
    const [selectedIndustry, setSelectedIndustry] = useState(null);
    const [selectedCompanySize, setSelectedCompanySize] = useState(null);
    const [hideLogoText, setHideLogoText] = useState(false);
    const navigate = useNavigate()
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        phoneNumber: '',
        companySize: '',
        companyName: '',
        companyWebsite: '',
        industry: '',
      
    });

    const handleContinue = () => {
        if (!validatePersonalDetails()) return;
        setIsPersonalDetailsCompleted(true);
        setHideLogoText(true);
    };

    const handleNextFormContinue = () => {
        if (!validateCompanyDetails()) return;
        setIsNextFormCompleted(true);
    };

    const handleBack = () => {
        setIsPersonalDetailsCompleted(false);
        setHideLogoText(false);
    };

    const handleIndustryChange = (selectedOption) => {
        setSelectedIndustry(selectedOption);
        setUser(prevState => ({
            ...prevState,
            industry: selectedOption ? selectedOption.value : ''
        }));
    };

    const handleCompanySizeChange = (selectedOption) => {
        setSelectedCompanySize(selectedOption);
        setUser(prevState => ({
            ...prevState,
            companySize: selectedOption ? selectedOption.value : ''
        }));
    };

    const customStyles = {
        control: (provided, state) => ({
            ...provided,
            border: '1px solid #D1E4FF',
            borderRadius: '4px',
            padding: "5px 15px",
            boxShadow: state.isFocused ? '0052CC' : null,
        }),
        placeholder: (provided, state) => ({
            ...provided,
            color: '#0052CC',
        }),
        singleValue: (provided, state) => ({
            ...provided,
            color: '#0052CC',
        }),
        indicatorsContainer: (provided, state) => ({
            ...provided,
            color: '#0052CC',
        }),
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const validatePersonalDetails = () => {
        const { name, email, password, phoneNumber } = user;
        if (!name || !email || !password || !phoneNumber) {
            toast.error('All fields are required.');
            return false;
        }
        return true;
    };

    // const validateCompanyDetails = () => {
    //     const { companyName, companyWebsite, industry, companySize } = user;
    //     if (!companyName || !companyWebsite || !industry || !companySize) {
    //         toast.error('All fields are required.');
    //         return false;
    //     }
    //     return true;
    // };
    const [message, setShowMessage] = useState('')
    const incompleteData = async () => {
        if (!validatePersonalDetails()) return;
        // setIsPersonalDetailsCompleted(true);
        // setHideLogoText(true);
        const { data } = await axios.post("/user_register", {
            name: user.name, email: user.email, password: user.password, phone: user.phoneNumber , credit_limit : "2000"
        });
        console.log(data, "data");
        if (data.message == "User already registered") {
            toast.success("User already registered")
        }
        // toast.success(data.message)

        setShowMessage(data.message)
        if (data.message === "User already registered") {
            setIsPersonalDetailsCompleted(false);
            setHideLogoText(false);
        } else {
            setIsPersonalDetailsCompleted(true);
            setHideLogoText(true);
        }

    };

    const goBack = () => {
        setIsPersonalDetailsCompleted(false);
        setHideLogoText(false);
    };

    const updateUser = async () => {
        // if (!validateCompanyDetails()) return;
        const { companyName, companyWebsite, industry, companySize } = user;
        if (!companyName || !industry || !companySize) {
            toast.error('All fields are required.');
            return true;
        }

        const { data } = await axios.put("/user_update", {
            name: user.name, phone: user.phoneNumber, company_name: user.companyName, industry: user.industry, company_size: user.companySize, website_url: user.companyWebsite
        });

        console.log(data, "data")
        if (data.message) {
            toast.success(data.message)

            navigate(`/login`)



        }
    };

    return (
        <div className={`main-containerS xl:h-screen ${hideLogoText ? "" : "h-auto"}`}>
            {/* <Toaster /> */}
            <div className={`2xl:w-5/6 w-[90%] mx-auto flex justify-between lg:flex-row flex-col box-container ${hideLogoText ? '' : ''}`}>
                {!hideLogoText && (
                    <motion.div className='xl:w-1/2 mx-auto sm:flex hidden sm:flex-col ' initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                        transition={{ duration: 0.5 }}>
                        <div className='w-[168px]'>
                            {/* <img src={white} className='w-[100%] h-[100%]' /> */}
                            <img
                                src={white}
                                alt="white"
                                loading='lazy'

                                className='w-[100%] h-[100%]'
                            />
                        </div>
                        <div className='mt-8'>
                            <h1 className='font-medium 2xl:text-[4rem] 2xl:leading-[4.5rem] text-[3rem] leading-[3.5rem] text-white abhaya'>“Where every scan gets you closer to your customers.”</h1>
                        </div>
                        <div className='mt-8'>
                            <p className='font-norma text[1.2rem] leading-[2rem] text-white'>We're the Future of Customer Engagement! Onepoket's QR technology lets you collect and leverage first-party data, gain customer understanding and create personalized experiences like never before.</p>
                        </div>
                        <div className='flex justify-between items-center mt-24'>
                            <div className='w-1/2'>
                                <p className='font-medium text-[1.2rem] leading-[2rem] text-white'>Let’s get you started!</p>
                            </div>
                            <div className='w-1/2'>
                                <img src={arrow} className='w-[100%]' />
                            </div>
                        </div>
                    </motion.div>
                )}
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    transition={{ duration: 0.5 }}
                    className={`shadow-custom xl:w-[360px] w-[360px] xl:mx-auto sm-box-container ${hideLogoText ? 'w-5/6 mx-auto hide-container' : ''}`}
                >
                    {isPersonalDetailsCompleted ? (
                        <div className='flex items-center w-5/6 mx-auto mt-6 space-x-3 text-[#454545] text-[12px] cursor-pointer' onClick={goBack}>
                            <div>
                                <IoIosArrowBack color='#454545' />
                            </div>
                            <div className='text-[#454545]'>
                                <p>Back</p>
                            </div>
                        </div>
                    ) : null}
                    <div className='w-5/6 mx-auto mt-6'>
                        <div className='h-1 bg-gray-200 rounded-full'>
                            <div
                                className={`h-full bg-[#004699] rounded-full`}
                                style={{ transition: 'width 0.5s ease', width: isNextFormCompleted ? '100%' : isPersonalDetailsCompleted ? '50%' : '0%' }}
                            />
                        </div>
                    </div>

                    {isPersonalDetailsCompleted ? (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className='w-5/6 mx-auto mt-8 flex flex-col gap-3'>
                            <div>
                                <p className='font-semibold text-[1.1rem] leading-[1.5rem] text-[#0052CC]'>“Tell Us About Your Company”</p>
                            </div>
                            <div>
                                <input
                                    type='text'
                                    className='custom-input'
                                    placeholder='Company Name'
                                    onChange={handleInputChange}
                                    value={user.companyName}
                                    name='companyName'
                                />
                            </div>
                            <div>
                                <Select
                                    value={selectedCompanySize}
                                    onChange={handleCompanySizeChange}
                                    options={companySizeOptions}
                                    placeholder='Company Size'
                                    className=''
                                    styles={customStyles}
                                />
                            </div>
                            <div>
                                <Select
                                    value={selectedIndustry}
                                    onChange={handleIndustryChange}
                                    options={industryOptions}
                                    placeholder='Select Industry'
                                    className=''
                                    styles={customStyles}
                                />
                            </div>
                            <div>
                                <input
                                    type='text'
                                    className='custom-input'
                                    placeholder='Website URL'
                                    onChange={handleInputChange}
                                    name='companyWebsite'
                                    value={user.companyWebsite}
                                />
                            </div>
                            <div className='mt-12 mb-12' onClick={updateUser}>
                                <button onClick={handleNextFormContinue} className='w-[100%] bg-[#0052CC] border-[#0052CC] text-white px-[25px] py-[12px] rounded btn-container'>
                                    Continue
                                </button>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className='w-5/6 mx-auto mt-8 flex flex-col gap-3'>
                            <div>
                                <p className='font-semibold text-[1.1rem] leading-[1.5rem] text-[#0052CC]'>“Tell Us About You!”</p>
                            </div>
                            <div>
                                <input
                                    type='text'
                                    className='custom-input'
                                    placeholder='Name'
                                    value={user.name}
                                    name="name"
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    type='text'
                                    className='custom-input'
                                    placeholder='Email'
                                    value={user.email}
                                    name='email'
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    type='text'
                                    className='custom-input'
                                    placeholder='Phone Number'
                                    value={user.phoneNumber}
                                    name='phoneNumber'
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    type='text'
                                    className='custom-input'
                                    placeholder='Password'
                                    value={user.password}
                                    name='password'
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className='mt-12 mb-12' onClick={incompleteData}>
                                <button className='w-[100%] bg-[#0052CC] border-[#0052CC] text-white px-[25px] py-[12px] rounded btn-container'>
                                    Continue
                                </button>
                            </div>
                        </motion.div>
                    )}
                </motion.div>
            </div>
        </div>
    );
};

export default OnboardingForm;
