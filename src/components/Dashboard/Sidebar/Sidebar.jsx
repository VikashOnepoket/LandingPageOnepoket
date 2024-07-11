import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import logo from '../../../assets/LogoOne.png';
import logo1 from '../../../assets/onepoket_logo.png';
import { useSidebar } from './context/SidebarContext';

const Sidebar = () => {
    const [activeItem, setActiveItem] = useState('');
    const location = useLocation();
    const { isCollapsed } = useSidebar();

    useEffect(() => {
        setActiveItem(location.pathname);
    }, [location.pathname]);

    const boxShadowStyle = {
        boxShadow: '2px 1px 8px 0px rgba(0, 0, 0, 0.15)', // X-offset, Y-offset, blur, spread, color
    };

    const menuItems = [
        { name: 'Products', icon: 'category', path: '/products' },
        { name: 'Analytics', icon: 'analytics', path: '/analytics' },
        { name: 'Campaign', icon: 'campaign', path: '/campaign' },
        { name: 'Inventory', icon: 'inventory_2', path: '/inventory' },
        { name: 'Factory', icon: 'factory', path: '/factory' },
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
        return location.pathname === itemPath;
    };

    return (
        <div
            className={`h-screen p-5 bg-[#FFFFFF] transition-all duration-300 ${isCollapsed ? 'w-20' : 'w-64'}`}
            style={boxShadowStyle}
        >
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
                {menuItems.map((item) => (
                    <Link to={item.path} key={item.name} className="">
                        <li
                            className={`flex items-center gap-5 p-2 rounded-lg cursor-pointer mb-2 relative ${isActive(item.path) ? 'bg-[#004699] text-white' : 'text-[#7A7A7A]'}`}
                            onClick={() => setActiveItem(item.path)}
                        >
                            <span
                                className={`material-symbols-outlined text-[22px] leading-[28px] ${isActive(item.path) ? 'text-white' : 'text-[#7A7A7A]'}`}
                            >
                                {item.icon}
                            </span>
                            <span
                                className={`absolute left-16 text-[14px] leading-[18px] font-semibold ${isActive(item.path) ? 'text-white' : 'text-[#7A7A7A]'} ${isCollapsed ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
                            >
                                {item.name}
                            </span>
                        </li>
                    </Link>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
