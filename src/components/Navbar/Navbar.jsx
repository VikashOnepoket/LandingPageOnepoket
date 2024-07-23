import React, { useState, useEffect } from 'react';
import Logo from '../../assets/FullLogo.png';
import { Link, useNavigate } from 'react-router-dom';
import { IoMdClose, IoMdMenu } from 'react-icons/io';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const openOnboardingForm = () => {
        navigate(`/onboarding`);
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isMenuOpen]);

    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isModalOpen]);

    const goToLogin = () => {
        navigate(`/login`)
    }

    return (
        <div className='h-[65px] flex bg-[#004699] border-[#004699] w-[100%] text-white relative'>
            <div className='flex justify-between items-center w-full nav-text-container'>
                <Link to='/'>
                    <div className='sm:w-[185px] w-[131px]'>
                        <img src={Logo} className='w-[100%] h-[100%]' alt='Logo' />
                    </div>
                </Link>
                <div className='flex justify-end items-center gap-12'>
                    <div className='support-button-container'>
                        <a href='mailto:support@onepoket.in' className='text-[14px] cursor-pointer leading-[23px] font-bold hover:bg-[#1971D8] hover:text-white px-[22px] py-[12px] rounded-lg'>
                            Support
                        </a>
                    </div>
                    <div className='support-button-container' onClick={goToLogin}>
                        <button className='text-[14px] cursor-pointer leading-[23px] font-bold hover:bg-[#1971D8] hover:text-white px-[22px] py-[12px] rounded-lg'>
                            Login
                        </button>
                    </div>
                    {/* <div className='trial-button-container'>
                        <button onClick={openModal} className='hover:bg-[#1971D8] hover:text-white border border-white rounded-lg text-[14px] leading-[23px] font-bold px-[22px] py-[12px] gap-2 flex items-center text-white hover:border-[#1971D8]'>
                            Login
                        </button>
                    </div> */}
                    <div className='trial-button-container' onClick={openOnboardingForm}>
                        <button className='hover:bg-[#1971D8] hover:text-white bg-white rounded-lg text-[14px] leading-[23px] font-bold px-[22px] py-[12px] gap-2 flex items-center text-[#0052CC]'>
                            Start free trial
                        </button>
                    </div>
                    <div className='flex lg:hidden menu-container'>
                        <motion.div whileTap={{ scale: 0.95 }} onClick={toggleMenu}>
                            <div className="menu-large-icon">
                                {isMenuOpen ? "" : (<IoMdMenu size={36} />)}
                            </div>
                            <div className="menu-small-icon">
                                {isMenuOpen ? "" : (<IoMdMenu size={24} />)}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.5 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className='fixed inset-0 bg-black/75 z-50'
                            onClick={closeMenu}
                        />
                        <motion.div
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -50 }}
                            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                            className='absolute top-5 bg-white border menu-container z-50 shadow-lg rounded-lg  menu-text-box'
                        >
                            <ul className='flex flex-col gap-5 w-5/6 mx-auto divide-y-2 mt-[60px]'>
                                <li className='flex items-center'>
                                    <a href='mailto:support@onepoket.in' className='text-[14px] cursor-pointer leading-[23px] text-[#20212380] font-bold'>
                                        Support
                                    </a>
                                </li>
                                <li className='flex items-center pt-5' onClick={goToLogin}>
                                    <a  className='text-[14px] cursor-pointer leading-[23px] text-[#20212380] font-bold'>
                                        Login
                                    </a>
                                </li>
                                <li className='flex items-center pt-5 pb-[60px] w-[100%]' onClick={openOnboardingForm}>
                                    <button className='hover:bg-[#1971D8] bg-[#004699] rounded-lg text-[14px] leading-[23px] font-bold text-white px-[22px] py-[12px] gap-2 flex items-center w-full justify-center '>
                                        Start free trial
                                    </button>
                                </li>
                            </ul>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {isModalOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.5 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className='fixed inset-0 bg-black/75 z-50'
                            onClick={closeModal}
                        />
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className='fixed inset-0 bg-black/30 z-50'
                            onClick={closeModal}
                        />
                        <motion.div
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -50 }}
                            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                            className='fixed inset-0 flex items-center justify-center z-50 p-4'
                        >
                            <div className='bg-white rounded-lg shadow-lg p-8 w-full max-w-sm relative'>
                                <button onClick={closeModal} className='absolute top-2 right-2 text-gray-600 hover:text-gray-800'>
                                    <IoMdClose size={24} />
                                </button>
                                <h2 className='text-xl font-bold mb-4'>Login</h2>
                                <form>
                                    <input type='email' placeholder='Email' className='w-full p-2 mb-4 border border-gray-300 rounded' />
                                    <input type='password' placeholder='Password' className='w-full p-2 mb-4 border border-gray-300 rounded' />
                                    <button type='submit' className='w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600'>Login</button>
                                </form>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Navbar;
