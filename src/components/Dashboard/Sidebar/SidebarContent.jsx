import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion'; // Import Framer Motion
import logo from '../../../assets/LogoOne.png';
import logo1 from '../../../assets/onepoket_logo.png';
import { useSelector } from 'react-redux';

const SidebarContent = ({ isCollapsed, activeItem, setActiveItem, menuItems, isActive, onClose }) => {
    const [openSubmenu, setOpenSubmenu] = useState(null); // Track which submenu is open
    const navigate = useNavigate(); // Hook to programmatically navigate

    const user = useSelector((state) => state.userDetails.user); // Get user from Redux store
    const [dynamicValue, setDynamicValue] = useState(''); // Track dynamic value for conditional rendering

    useEffect(() => {
        if (user?.is_upgraded === '1') {
            setDynamicValue(user?.is_upgraded); // Set dynamic value if user is upgraded
        }
    }, [user]);

    const handleMenuClick = (item) => {
        if (item.subMenu) {
            setOpenSubmenu(openSubmenu === item.name ? null : item.name); // Toggle submenu
        } else {
            setActiveItem(item.path); // Set active item
            navigate(item.path); // Navigate to the item's path
            setOpenSubmenu(null); // Close any open submenu when a non-submenu item is clicked
            if (onClose) onClose(); // Close drawer if onClose prop is provided
        }
    };

    const submenuVariants = {
        hidden: { opacity: 0, height: 0, transition: { duration: 0.3 } },
        visible: { opacity: 1, height: 'auto', transition: { duration: 0.3 } },
    };

    // Filter the menu items to include/exclude "Dynamic QR" based on dynamicValue
    const filteredMenuItems = menuItems.map((item) => {
        if (item.name === 'Analytics' && dynamicValue !== '1') {
            // Remove "Dynamic QR" submenu if dynamicValue is not '1'
            return {
                ...item,
                subMenu: item.subMenu?.filter((subItem) => subItem.name !== 'Dynamic QR'),
            };
        }
        return item;
    });

    return (
        <>
            {isCollapsed ? (
                <div className="mb-5 w-[40px] flex items-center justify-center mt-5">
                    <img src={logo1} alt="Logo" className="w-[100%] h-[100%]" />
                </div>
            ) : (
                <div className="mb-8 w-[168px] flex items-center justify-center mt-5">
                    <img src={logo} alt="Logo" className="w-[100%] h-[100%]" />
                </div>
            )}
            <ul className="space-y-2">
                {filteredMenuItems.map((item) => (
                    <div key={item.name}>
                        <li
                            className={`flex items-center gap-5 p-2 rounded-lg cursor-pointer mb-2 ${isActive(item.path) || openSubmenu === item.name
                                ? 'bg-[#004699] text-white'
                                : 'text-[#7A7A7A]'
                                }`}
                            onClick={() => handleMenuClick(item)}
                        >
                            <span
                                className={`material-symbols-outlined text-[22px] leading-[28px] ${isActive(item.path) || openSubmenu === item.name
                                    ? 'text-white'
                                    : 'text-[#7A7A7A]'
                                    }`}
                            >
                                {item.icon}
                            </span>
                            <span
                                className={`absolute left-16 text-[14px] leading-[18px] font-semibold ${isActive(item.path) || openSubmenu === item.name
                                    ? 'text-white'
                                    : 'text-[#7A7A7A]'
                                    } ${isCollapsed ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
                            >
                                {item.name}
                            </span>
                        </li>
                        {/* Render Submenu Items with Framer Motion */}
                        {item.subMenu && (
                            <motion.ul
                                initial="hidden"
                                animate={openSubmenu === item.name ? 'visible' : 'hidden'}
                                variants={submenuVariants}
                                className="space-y-2 overflow-hidden"
                            >
                                {item.subMenu.map((subItem) => (
                                    <Link to={subItem.path} key={subItem.name} className="">
                                        <li
                                            className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer ${isActive(subItem.path) ? 'bg-[#e0e0e0]' : 'text-[#7A7A7A] relative'
                                                }`}
                                            onClick={() => setActiveItem(subItem.path)}
                                        >
                                            <span
                                                className={`material-symbols-outlined text-[22px] leading-[28px] ${isActive(subItem.path) || openSubmenu === subItem.name
                                                    ? 'text-[#7A7A7A]'
                                                    : 'text-[#7A7A7A]'
                                                    }`}
                                            >
                                                {subItem.icon}
                                            </span>
                                            <span className="text-[14px] leading-[18px] font-semibold">
                                                {subItem.name}
                                            </span>
                                            
                                        </li>
                                    </Link>
                                ))}
                            </motion.ul>
                        )}
                    </div>
                ))}
            </ul>
        </>
    );
};

export default SidebarContent;
