import React, { useEffect, useRef, useState } from 'react';
import Logo from '../../assets/LogoOne.png';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenuAndNavigate = (path) => {
        setIsMenuOpen(false); // Close the menu
        navigate(path); // Navigate to the specified path
    };

    const goToLogin = () => {
        closeMenuAndNavigate('/login');
    };

    const menuVariants = {
        hidden: { opacity: 0, y: '-100%', transition: { duration: 0.5 } },
        visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 15, duration: 0.6 } },
        exit: { opacity: 0, y: '-100%', transition: { duration: 0.4 } },
    };

    const openTypeForm = () => {
        navigate('/onboarding')
    };



    const navRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Toggle isScrolled based on whether the navbar intersects the top
                setIsScrolled(!entry.isIntersecting);
            },
            {
                root: null, // Observe scrolling in the viewport
                threshold: 1.0, // Trigger only when the element is fully visible
            }
        );

        if (navRef.current) {
            observer.observe(navRef.current);
        }

        return () => {
            if (navRef.current) {
                observer.unobserve(navRef.current);
            }
        };
    }, []);
    return (
        <>
            {/* Spacer for Intersection Observation */}
            <div ref={navRef} className="spacer"></div>
            {/* Navbar */}
            <div className='flex w-[42.4375rem] rounded-[2.5rem] mx-auto text-white mt-[4rem] h-[4.25rem] nav-box '>

                <div className='flex  items-center justify-between w-full p-5 '>
                    <Link to='/'>
                        <div className='sm:w-[12rem] w-[131px]'>
                            <img src={Logo} className='w-full h-full' alt='Logo' />
                        </div>
                    </Link>
                    <div className='lg:flex hidden gap-[1.19rem]'>
                        <Link to="/features" className='text-[1rem] cursor-pointer leading-[18px] font-medium  text-[#6F7070] '>Features</Link>
                        <Link to="/pricing" className='text-[1rem] cursor-pointer leading-[18px] font-medium  text-[#6F7070]'>Pricing</Link>
                        <Link to="/features" className='text-[1rem] cursor-pointer leading-[18px] font-medium  text-[#6F7070]'>FAQs</Link>
                        <Link to="/login" className='text-[1rem] cursor-pointer leading-[18px] font-medium  text-[#6F7070]'>Login</Link>

                    </div>
                    <div className=''>
                        <button className={`experience-btn ${isScrolled ? 'scrolled-btn' : ''}`}>
                            Experience Now
                        </button>

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
                            <Link to='/features' onClick={() => closeMenuAndNavigate('/features')} className='text-[14px] cursor-pointer leading-[18px] font-bold rounded-[10px] text-[#6F7070]'>Features</Link>
                            <Link to='/pricing' onClick={() => closeMenuAndNavigate('/pricing')} className='text-[14px] cursor-pointer leading-[18px] font-bold rounded-[10px] text-[#6F7070]'>Pricing</Link>
                            <Link to="/use_cases" onClick={() => closeMenuAndNavigate('/use_cases')} className='text-[14px] cursor-pointer leading-[18px] font-bold rounded-[10px] text-[#6F7070]'>Use Cases</Link>
                            <Link to="/features" onClick={() => closeMenuAndNavigate('/features')} className='text-[14px] cursor-pointer leading-[18px] font-bold rounded-[10px] text-[#6F7070]'>FAQs</Link>
                            <a onClick={goToLogin} className='text-[14px] cursor-pointer leading-[18px] font-bold rounded-[10px] text-[#6F7070]'>Login</a>
                        </div>
                        <div className='mb-5 mx-10' onClick={openTypeForm}>
                            <button className='bg-[#E4EFFF] text-[#004699] rounded-[10px] text-[14px] leading-[18px] font-bold px-[22px] py-[10px]'>Start free trial</button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
