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
import arrowSignUP from '../../assets/arrow-signup.png';
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
        // if (!validateCompanyDetails()) return;
        updateUser()

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
            name: user.name, email: user.email, password: user.password, phone: user.phoneNumber, credit_limit: "5"
        });
        console.log(data, "data");
        if (data.message == "User already registered") {
            toast.success("User already registered")
        }
        // toast.success(data.message)
        // updateUser()

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

    const goToLogin = () => {
        navigate(`/login`);
    };

    const [loading, setLoading] = useState(false)
    return (
        <>
            <div className='flex h-screen'>
                {/* Left side for large screens */}
                <div className='w-[60%] bg-[#004699] md:flex hidden justify-center items-center' style={{ backgroundImage: `url(${LoginBG})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <div className='w-[80%] text-center'>
                        <h1 className='text-[40px] leading-[51px] text-[#E9F2FF]'>Where every scan gets you closer to your customers.</h1>
                        <p className='text-[24px] leading-[30px] text-[#E9F2FF] mt-12'>We're the Future of Customer Engagement! Onepoket's QR technology lets you collect and leverage first-party data, gain customer understanding, and create personalized experiences like never before</p>
                        <div className='flex gap-5 items-center mt-24 w-[50%] mx-auto'>
                            <p className='font-medium text-[1.2rem] leading-[2rem] text-white'>Let’s get you started!</p>
                            <img src={arrowSignUP} className='w-[15%]' alt='Arrow' />
                        </div>
                    </div>
                </div>

                {/* Right side form, centered on small screens */}
                <div className='flex md:w-[40%] w-[90%] mx-auto flex-col justify-center items-center'>
                    {isPersonalDetailsCompleted ? (
                        <div className='md:w-[60%] w-[90%]'>
                            <img src={Logo} className='sm:w-[215px] w-[131px]' alt='Logo' />
                            <p className='mt-5 font-semibold text-[1.1rem] leading-[1.5rem] text-[#0052CC]'>Tell Us About Your Company</p>
                            <input type='text' className='mt-5 input border border-gray-300 rounded-md w-full py-2 px-3' placeholder='Company Name' onChange={handleInputChange} value={user.companyName} name='companyName' />
                            <Select className='mt-5' value={selectedCompanySize} onChange={handleCompanySizeChange} options={companySizeOptions} placeholder='Company Size' />
                            <Select className='mt-5' value={selectedIndustry} onChange={handleIndustryChange} options={industryOptions} placeholder='Select Industry' />
                            <input type='text' className='mt-5 input border border-gray-300 rounded-md w-full py-2 px-3' placeholder='Website URL' onChange={handleInputChange} name='companyWebsite' value={user.companyWebsite} />
                            <button className='mt-5 text-[14px] font-bold bg-[#0052CC] text-white p-3 rounded-md w-[200px]' onClick={handleNextFormContinue} >Continue</button>
                        </div>
                    ) : (
                        <motion.div className='md:w-[60%] w-[90%] mx-auto' initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 50 }} transition={{ duration: 0.5 }}>
                            <img src={Logo} className='sm:w-[215px] w-[131px]' alt='Logo' />
                            <p className='mt-5 font-semibold text-[1.2rem] text-[#004699]'>Tell us about You!</p>
                            <input type='text' className='mt-5 input border border-gray-300 rounded-md w-full py-2 px-3' placeholder='Enter your name' onChange={handleInputChange} value={user.name} name='name' />
                            <input type='email' className='mt-5 input border border-gray-300 rounded-md w-full py-2 px-3' placeholder='Enter your email' onChange={handleInputChange} value={user.email} name='email' />
                            <input type='text' className='mt-5 input border border-gray-300 rounded-md w-full py-2 px-3' placeholder='Enter your phone number' onChange={handleInputChange} value={user.phoneNumber} name='phoneNumber' />
                            <input type='password' className='mt-5 input border border-gray-300 rounded-md w-full py-2 px-3' placeholder='Enter your password' onChange={handleInputChange} value={user.password} name='password' />
                            <button className='mt-5 text-[14px] font-bold bg-[#0052CC] text-white p-3 rounded-md w-[200px]' onClick={incompleteData} disabled={loading}>{loading ? <Spinner /> : 'Continue'}</button>
                            <p className='mt-3 text-[12px] font-semibold'>Already have an account? <span className='text-[#004699] cursor-pointer' onClick={goToLogin}>Sign in</span></p>
                        </motion.div>
                    )}
                </div>
            </div>

        </>
    );
};

export default OnboardingForm;
