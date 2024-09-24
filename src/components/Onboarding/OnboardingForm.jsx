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
import Logo from '../../assets/LogoOne.png';
import LoginBG from '../../assets/Login background.png';

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
            name: user.name, email: user.email, password: user.password, phone: user.phoneNumber, credit_limit: "2000"
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
    const boxShadowStyle = {
        boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.15)',
        // X-offset, Y-offset, blur, spread, color
    };
    const [loading, setLoading] = useState(false)
    return (
        <>
            <div className='flex h-screen'>
                <div className='w-[70%] bg-[#004699] flex justify-center items-center ' style={{ backgroundImage: `url(${LoginBG})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <div className=' w-[80%] text-center'>
                        <div>
                            <h1 className='text-[40px] leading-[51px] text-[#E9F2FF]'>Where every scan gets you closer
                                to your customers.</h1>
                        </div>

                        {/*  */}
                        <div className='text-[24px] leading-[30px] text-[#E9F2FF] mt-12 '>
                            <p>We're the Future of Customer Engagement! Onepoket's QR technology lets you collect and leverage first-party data, gain customer understanding and create personalized experiences like never before</p>
                        </div>

                        {/*  */}
                        <div className='flex gap-3 items-center mt-24'>
                            <div className='w-1/2'>
                                <p className='font-medium text-[1.2rem] leading-[2rem] text-white'>Let’s get you started!</p>
                            </div>
                            <div className='w-[30%]'>
                                <img src={arrow} className='w-[100%]' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-1/2 flex flex-col items-center justify-center '>

                    {isPersonalDetailsCompleted ? (<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className='w-[60%] mx-auto '>
                        <div className='sm:w-[215px] w-[131px]  '>
                            <img src={Logo} className='w-[100%] h-[100%]' alt='Logo' />
                        </div>
                        <div className='mt-5'>
                            <p className='font-semibold text-[1.1rem] leading-[1.5rem] text-[#0052CC]'>Tell Us About Your Company</p>
                        </div>
                        <div className='mt-5'>
                            <input
                                type='text'
                                className='input border border-gray-300 dark:border-gray-600 dark:bg-transparent rounded-md w-full py-2 px-3 focus:border-[#0052cc] focus:border focus-within:ring-1 appearance-none transition duration-150 text-black'
                                placeholder='Company Name'
                                onChange={handleInputChange}
                                value={user.companyName}
                                name='companyName'
                            />
                        </div>
                        <div className='mt-5'>
                            <Select
                                value={selectedCompanySize}
                                onChange={handleCompanySizeChange}
                                options={companySizeOptions}
                                placeholder='Company Size'
                                className=''
                                
                            />
                        </div>
                        <div className='mt-5'>
                            <Select
                                value={selectedIndustry}
                                onChange={handleIndustryChange}
                                options={industryOptions}
                                placeholder='Select Industry'
                                className=''
                              
                            />
                        </div>
                        <div className='mt-5'>
                            <input
                                type='text'
                                className='input border border-gray-300 dark:border-gray-600 dark:bg-transparent rounded-md w-full py-2 px-3 focus:border-[#0052cc] focus:border focus-within:ring-1 appearance-none transition duration-150 text-black'
                                placeholder='Website URL'
                                onChange={handleInputChange}
                                name='companyWebsite'
                                value={user.companyWebsite}
                            />
                        </div>
                        <div className='mt-5' onClick={updateUser}>
                            <button className='text-[14px] leading-4 text-white font-bold bg-[#0052CC] border border-[#0052CC] p-3 rounded-md w-[200px]' onClick={handleNextFormContinue} disabled={loading} style={boxShadowStyle}>{loading ? (
                                <div className='flex items-center justify-center'>
                                    <Spinner />
                                    <span className='ml-2'>Loading...</span>
                                </div>
                            ) : (
                                'Continue'
                            )}</button>
                        </div>
                    </motion.div>) : (<motion.div className='w-[60%] mx-auto' initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                        transition={{ duration: 0.5 }}>
                        <div className='sm:w-[215px] w-[131px]  '>
                            <img src={Logo} className='w-[100%] h-[100%]' alt='Logo' />
                        </div>
                        {/* name profile */}
                        <div className='mt-5'>
                            {/*  */}
                            <div>
                                <p className='font-semibold text-[1.2rem] leading-[1.6rem] text-[#004699]'>Tell us about You!</p>
                            </div>
                            {/* name */}
                            <div className="flex flex-col gap-2 mt-5">
                                <label className="text-[14px] leading-[18px] text-[#58595A] font-semibold">Name</label>
                                <input
                                    type="email"
                                    className="input border border-gray-300 dark:border-gray-600 dark:bg-transparent rounded-md w-full py-2 px-3 focus:border-[#0052cc] focus:border focus-within:ring-1 appearance-none transition duration-150 text-black"
                                    placeholder="Enter your name"

                                    value={user.name}
                                    name="name"
                                    onChange={handleInputChange}
                                    required


                                />
                            </div>
                            {/* email  */}
                            <div className="flex flex-col gap-2 mt-5">
                                <label className="text-[14px] leading-[18px] text-[#58595A] font-semibold">Email</label>
                                <input
                                    type="email"
                                    className="input border border-gray-300 dark:border-gray-600 dark:bg-transparent rounded-md w-full py-2 px-3 focus:border-[#0052cc] focus:border focus-within:ring-1 appearance-none transition duration-150 text-black"
                                    placeholder="Enter your email"

                                    value={user.email}
                                    name='email'
                                    onChange={handleInputChange}
                                    required

                                />
                            </div>

                            {/* phone nummber */}
                            <div className="flex flex-col gap-2 mt-5">
                                <label className="text-[14px] leading-[18px] text-[#58595A] font-semibold">Phone Number</label>
                                <input
                                    type="email"
                                    className="input border border-gray-300 dark:border-gray-600 dark:bg-transparent rounded-md w-full py-3 px-2 focus:border-[#0052cc] focus:border focus-within:ring-1 appearance-none transition duration-150 text-black"
                                    placeholder="Enter your phone number"

                                    value={user.phoneNumber}
                                    name='phoneNumber'
                                    onChange={handleInputChange}
                                    required


                                />
                            </div>
                            {/* password */}
                            <div className="flex flex-col gap-2 mt-5">
                                <label className="text-[14px] leading-[18px] text-[#58595A] font-semibold">Password</label>
                                <input
                                    type="password"
                                    className="input border border-gray-300 dark:border-gray-600 dark:bg-transparent rounded-md w-full py-2 px-3 focus:border-[#0052cc] focus:border focus-within:ring-1 appearance-none transition duration-150 text-black"
                                    placeholder="Enter your password"

                                    value={user.password}
                                    name='password'
                                    onChange={handleInputChange}
                                    required


                                />
                            </div>
                        </div>

                        {/* company profile */}

                        <div className='mt-5' onClick={incompleteData}>
                            <button className='text-[14px] leading-4 text-white font-bold bg-[#0052CC] border border-[#0052CC] p-3 rounded-md w-[200px]' disabled={loading} style={boxShadowStyle}>{loading ? (
                                <div className='flex items-center justify-center'>
                                    <Spinner />
                                    <span className='ml-2'>Loading...</span>
                                </div>
                            ) : (
                                'Continue'
                            )}</button>
                        </div>

                        <div className=' mt-3'>
                            <p className='font-semibold text-[12px] leading-4'>
                                Already have an account?
                                <span className='cursor-pointer  text-[#004699]' >
                                    Sign in
                                </span>
                            </p>
                        </div>
                    </motion.div>)}

                </div>
            </div>
        </>
    );
};

export default OnboardingForm;
