import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import logo from '../../../assets/LogoOne.png';
import logo1 from '../../../assets/onepoket_logo.png';
import { useSidebar } from './context/SidebarContext';
import { Drawer } from '@mui/material';
import SidebarContent from './SidebarContent';
import FreePlan from './FreePlan';



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
        // { name: 'Analytics', icon: 'analytics', path: '/analytics' },
        {
            name: 'Analytics',
            icon: 'analytics',
            path: '/analytics',
            subMenu: [
                { name: 'Single QR', path: '/analytics/single_qr' },
                { name: 'Dynamic QR', path: '/analytics/dynamic_qr' },
            ]
        },
        { name: 'Campaign', icon: 'campaign', path: '/campaign' },
        // { name: 'Inventory', icon: 'inventory_2', path: '/inventory' },
        { name: 'Inventory Management', icon: 'factory', path: '/factory' },
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
        else if (itemPath === '/analytics') {
            return location.pathname.startsWith('/analytics');
        }
        return location.pathname === itemPath;
    };

    return (
        <div
            className={`hidden lg:block h-screen  p-5 bg-[#FFFFFF] transition-all duration-300 ${isCollapsed ? 'w-20' : 'w-64'}`}
            style={boxShadowStyle}
        >
            <SidebarContent
                isCollapsed={isCollapsed}
                activeItem={activeItem}
                setActiveItem={setActiveItem}
                menuItems={menuItems}
                isActive={isActive}
            />
            {/* <FreePlan/> */}
        </div>
    );
};

export default Sidebar;
