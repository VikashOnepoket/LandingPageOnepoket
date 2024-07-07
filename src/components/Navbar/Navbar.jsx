import React, { useState, useEffect } from 'react';
import Logo from '../../assets/FullLogo.png';
import { Link } from 'react-router-dom';
import { IoMdClose, IoMdMenu } from 'react-icons/io';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const openTypeForm = () => {
        const url = 'https://3r83o6lof67.typeform.com/to/TldFF6Nb';
        window.open(url, '_blank');
    };

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isMenuOpen]);

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
                    <div className='trial-button-container' onClick={openTypeForm}>
                        <button className='hover:bg-[#1971D8] hover:text-white bg-white rounded-lg text-[14px] leading-[23px] font-bold px-[22px] py-[12px] gap-2 flex items-center text-[#004699]'>
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
                                <li className='flex items-center pt-5 pb-[60px] w-[100%]' onClick={openTypeForm}>
                                    <button className='hover:bg-[#1971D8] bg-[#004699] rounded-lg text-[14px] leading-[23px] font-bold text-white px-[22px] py-[12px] gap-2 flex items-center w-full justify-center '>
                                        Start free trial
                                    </button>
                                </li>
                            </ul>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Navbar;
