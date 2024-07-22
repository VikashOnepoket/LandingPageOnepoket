import React, { useEffect, useState } from 'react'
import { useSidebar } from '../Sidebar/context/SidebarContext'
import { Drawer } from '@mui/material';
import SidebarContent from '../Sidebar/SidebarContent';
import { useLocation } from 'react-router-dom';

const Header = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    
    const [activeItem, setActiveItem] = useState('');
    const { toggleSidebar, isCollapsed } = useSidebar()
    const location = useLocation();

    useEffect(() => {
        setActiveItem(location.pathname);
    }, [location.pathname]);

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
        else if (itemPath === '/profile') {
            return location.pathname.startsWith('/profile');
        }
        else if (itemPath === '/campaign') {
            return location.pathname.startsWith('/campaign');
        }
        return location.pathname === itemPath;
    };
    return (
        <>
            <div className=' flex justify-between gap-10 items-center h-[54px] p-8 border-b sticky top-0 z-50 '>
                <div className='block lg:hidden'>
                    {isCollapsed ? (<span class="material-symbols-outlined material-symbols-outlined text-[22px] leading-[28px]  text-[#7A7A7A] cursor-pointer" onClick={() => setDrawerOpen(true)}>
                        menu_open
                    </span>) : (<span class="material-symbols-outlined material-symbols-outlined text-[22px] leading-[28px]  text-[#7A7A7A] cursor-pointer" onClick={() => setDrawerOpen(true)}>
                        menu
                    </span>)}
                </div>
                <div className='hidden lg:block'>
                    {isCollapsed ? (<span class="material-symbols-outlined material-symbols-outlined text-[22px] leading-[28px]  text-[#7A7A7A] cursor-pointer" onClick={toggleSidebar}>
                        menu_open
                    </span>) : (<span class="material-symbols-outlined material-symbols-outlined text-[22px] leading-[28px]  text-[#7A7A7A] cursor-pointer" onClick={toggleSidebar}>
                        menu
                    </span>)}
                </div>
                
                <div className='flex justify-between gap-5'>
                    <div>
                        <span class="material-symbols-outlined material-symbols-outlined material-symbols-outlined text-[22px] leading-[28px]  text-[#7A7A7A]">
                            notifications
                        </span>
                    </div>
                    <div>

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
                        onClose={()=>setDrawerOpen(false)}
                    />
                </div>
            </Drawer>
        </>
    )
}

export default Header
