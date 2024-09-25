import React, { useState } from 'react';
import Logo from '../../assets/LogoOne.png';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const goToLogin = () => {
        navigate('/login');
    };



    const menuVariants = {
        hidden: { opacity: 0, y: '-100%', transition: { duration: 0.5 } },
        visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 15, duration: 0.6 } },
        exit: { opacity: 0, y: '-100%', transition: { duration: 0.4 } },
    };

    const openTypeForm = () => {
        const url = 'https://3r83o6lof67.typeform.com/to/TldFF6Nb';
        window.open(url, '_blank');
    };


    return (
        <>
            {/* Navbar */}
            <div className='flex w-full mx-auto text-white mt-16 sticky-nav z-50'>
                <div className='flex justify-between items-center w-full nav-text-container'>
                    <Link to='/'>
                        <div className='sm:w-[185px] w-[131px]'>
                            <img src={Logo} className='w-full h-full' alt='Logo' />
                        </div>
                    </Link>
                    <div className='lg:flex hidden gap-12'>
                        <Link to="/coming_soon" className='text-[14px] cursor-pointer leading-[18px] font-bold rounded-[10px] text-[#6F7070]'>Features</Link>
                        <a href='mailto:support@onepoket.in' className='text-[14px] cursor-pointer leading-[18px] font-bold rounded-[10px] text-[#6F7070]'>Pricing</a>
                        <a href='mailto:support@onepoket.in' className='text-[14px] cursor-pointer leading-[18px] font-bold rounded-[10px] text-[#6F7070]'>Use Cases</a>
                        <a href='mailto:support@onepoket.in' className='text-[14px] cursor-pointer leading-[18px] font-bold rounded-[10px] text-[#6F7070]'>FAQs</a>
                    </div>
                    <div className='lg:flex hidden justify-end items-center gap-12'>
                        <button onClick={goToLogin} className='text-[14px] cursor-pointer leading-[18px] font-bold rounded-[10px] text-[#6F7070]'>Login</button>
                        <button onClick={openTypeForm} className='bg-[#E4EFFF] text-[#004699] rounded-[10px] text-[14px] leading-[18px] font-bold px-[22px] py-[10px]'>Start free trial</button>
                    </div>
                    <div className='flex lg:hidden'>
                        <div onClick={toggleMenu} className="cursor-pointer text-[34px] text-[#6F7070]">
                            {isMenuOpen ? <span className="material-symbols-outlined">close</span> : <span className="material-symbols-outlined">menu</span>}
                        </div>
                    </div>
                </div>
            </div>

            {/* Blur Background and Menu */}
            {isMenuOpen && <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-lg z-40" onClick={toggleMenu}></div>}

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={menuVariants}
                        className='fixed top-0 left-0 right-0 shadow-lg bg-white border h-auto z-50'
                    >
                        <div className='flex justify-end px-10 pt-5'>
                            <div onClick={toggleMenu} className="cursor-pointer text-[34px] text-[#6F7070]">
                                <span className="material-symbols-outlined">close</span>
                            </div>
                        </div>
                        <div className='flex flex-col gap-5 p-10'>
                            <a href='mailto:support@onepoket.in' className='text-[14px] cursor-pointer leading-[18px] font-bold rounded-[10px] text-[#6F7070]'>Features</a>
                            <a href='mailto:support@onepoket.in' className='text-[14px] cursor-pointer leading-[18px] font-bold rounded-[10px] text-[#6F7070]'>Pricing</a>
                            <a href='mailto:support@onepoket.in' className='text-[14px] cursor-pointer leading-[18px] font-bold rounded-[10px] text-[#6F7070]'>Use Cases</a>
                            <a href='mailto:support@onepoket.in' className='text-[14px] cursor-pointer leading-[18px] font-bold rounded-[10px] text-[#6F7070]'>FAQs</a>
                            <a onClick={goToLogin} className='text-[14px] cursor-pointer leading-[18px] font-bold rounded-[10px] text-[#6F7070]'>Login</a>
                        </div>
                        <div className='mb-5 mx-10' onClick={openTypeForm}>
                            <button onClick={openOnboardingForm} className='bg-[#E4EFFF] text-[#004699] rounded-[10px] text-[14px] leading-[18px] font-bold px-[22px] py-[10px]'>Start free trial</button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
