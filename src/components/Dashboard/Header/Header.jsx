import React, { useEffect, useState, useRef } from 'react';
import { useSidebar } from '../Sidebar/context/SidebarContext';
import { Drawer } from '@mui/material';
import SidebarContent from '../Sidebar/SidebarContent';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { signOutSuccess } from '../slice/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserDetails } from '../slice/userDetailsSlice';
import { fetchLogo } from '../slice/logoSlice';

const Header = () => {
    const dispatch = useDispatch()
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    const [drawerOpen, setDrawerOpen] = useState(false);

    const [activeItem, setActiveItem] = useState('');
    const { toggleSidebar, isCollapsed } = useSidebar();
    const location = useLocation();

    useEffect(() => {
        setActiveItem(location.pathname);
    }, [location.pathname]);

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    const menuItems = [
        { name: 'Products', icon: 'category', path: '/products' },
        { name: 'Analytics', icon: 'analytics', path: '/analytics' },
        { name: 'Campaign', icon: 'campaign', path: '/campaign' },
        // { name: 'Inventory', icon: 'inventory_2', path: '/inventory' },
        { name: 'Factory Management', icon: 'factory', path: '/factory' },
        { name: 'Roles & Permissions', icon: 'contacts_product', path: '/roles' },
        { name: 'Service Request', icon: 'settings', path: '/service_request' },
        { name: 'Profile', icon: 'account_circle', path: '/profile' },
    ];

    const isActive = (itemPath) => {
        if (itemPath === '/products') {
            return location.pathname.startsWith('/products');
        } else if (itemPath === '/roles') {
            return location.pathname.startsWith('/roles');
        }
        else if (itemPath === '/service_request') {
            return location.pathname.startsWith('/service');
        }
        else if (itemPath === '/profile') {
            return location.pathname.startsWith('/profile');
        }
        else if (itemPath === '/campaign') {
            return location.pathname.startsWith('/campaign');
        }
        return location.pathname === itemPath;
    };
    const boxShadowStyle = {
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)', // X-offset, Y-offset, blur, spread, color
    };

    const handleLogout = () => {
        dispatch(signOutSuccess())
        localStorage.removeItem('token')


    }
    const [alertVisible, setAlertVisible] = useState(false);  // Controls alert visibility

    const token = useSelector((state) => state.auth.token);
    const [name, setName] = useState("")
    const [data, setData] = useState([])
    // Fetch user details when the token is available
    useEffect(() => {
        if (token) {
            dispatch(fetchUserDetails(token)).unwrap().then((data) => {
                setName(data?.name);
                const {
                    address,
                    email,
                    phone_number,
                    helpline_email,
                    helpline_number,
                    company_name,
                } = data;

                // Check if any required fields are empty or null
                if (!address || !email || !phone_number || !helpline_email || !helpline_number || !company_name) {
                    setAlertVisible(true);    // Show the alert
                    // Start blinking
                } else {
                    setAlertVisible(false);    // Hide the alert
                    // Stop blinking
                }
            })
                .catch((error) => {
                    console.log(error?.response?.status, "error");
                });
        }
    }, [token]);

    const handleAccountHover = () => {
        if (alertVisible) {
            setAlertVisible(true);
        }
    };

    const handleAccountLeave = () => {
        if (alertVisible) {
            setAlertVisible(false);
        }
    };
    
    return (
        <>
            <div className='flex justify-between gap-10 items-center h-[54px] p-8 border-b sticky top-0 z-50 '>
                <div className='block lg:hidden'>
                    {isCollapsed ? (<span className="material-symbols-outlined text-[22px] leading-[28px] text-[#7A7A7A] cursor-pointer" onClick={() => setDrawerOpen(true)}>
                        menu_open
                    </span>) : (<span className="material-symbols-outlined text-[22px] leading-[28px] text-[#7A7A7A] cursor-pointer" onClick={() => setDrawerOpen(true)}>
                        menu
                    </span>)}
                </div>
                <div className='hidden lg:block'>
                    {isCollapsed ? (<span className="material-symbols-outlined text-[22px] leading-[28px] text-[#7A7A7A] cursor-pointer" onClick={toggleSidebar}>
                        menu_open
                    </span>) : (<span className="material-symbols-outlined text-[22px] leading-[28px] text-[#7A7A7A] cursor-pointer" onClick={toggleSidebar}>
                        menu
                    </span>)}
                </div>


                <div className='flex justify-between gap-5'>
                    {/* <AnimatePresence>
                        {alertVisible && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}  // Animation speed
                                className="absolute top-12 right-0 bg-[#FFAB7C] text-[12px] leading-4 font-medium text-[#A93D00] p-2 rounded-[4px] flex items-center gap-2"

                            >
                                <span className="material-symbols-outlined text-[16px] leading-5 font-medium">
                                    error
                                </span>
                                Please complete your profile to have a better experience.
                            </motion.div>
                        )}
                    </AnimatePresence> */}

                    <div>
                        <span className="material-symbols-outlined text-[22px] leading-[28px] text-[#7A7A7A]">
                            notifications
                        </span>
                    </div>
                    <div className='relative' ref={dropdownRef}
                    // onMouseEnter={handleAccountHover}
                    // onMouseLeave={handleAccountLeave}
                    >
                        <span
                            className="material-symbols-outlined text-[22px] leading-[28px] text-[#7A7A7A] cursor-pointer"
                            onClick={toggleDropdown}
                        >
                            account_circle
                        </span>
                        <AnimatePresence>
                            {isOpen && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                    className="absolute right-0 mt-1 w-72 bg-white rounded-md shadow-lg z-50 border"
                                >
                                    <div className="p-4">
                                        <div className="flex items-center gap-3 mb-4">
                                            <img
                                                src="https://via.placeholder.com/40"
                                                alt="Profile"
                                                className="w-8 h-8 rounded-full"
                                            />
                                            <span className='text-[12px] leading-[16px] font-semibold text-[#58595A]'>{name}</span>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <div className="flex items-center gap-3 cursor-pointer hover:bg-gray-100 p-2 rounded-md">
                                                <span className="material-symbols-outlined text-[#58595A]">support_agent</span>
                                                <span className='text-[12px] leading-[16px] font-semibold text-[#58595A]'>Support</span>
                                            </div>
                                            <div onClick={handleLogout} className="flex items-center gap-3 cursor-pointer hover:bg-gray-100 p-2 rounded-md">
                                                <span className="material-symbols-outlined text-[#58595A]">logout</span>
                                                <span className='text-[12px] leading-[16px] font-semibold text-[#58595A]'>Logout</span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>

            {/* Drawer */}
            <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
                className='block lg:hidden'
            >
                <div className="w-64 p-5 bg-[#FFFFFF]">
                    <SidebarContent
                        isCollapsed={isCollapsed}
                        activeItem={activeItem}
                        setActiveItem={setActiveItem}
                        menuItems={menuItems}
                        isActive={isActive}
                        onClose={() => setDrawerOpen(false)}
                    />
                </div>
            </Drawer>
        </>
    );
}

export default Header;
