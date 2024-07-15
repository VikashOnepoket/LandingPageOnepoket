import React from 'react'
import { useSidebar } from '../Sidebar/context/SidebarContext'

const Header = () => {
    const { toggleSidebar, isCollapsed } = useSidebar()
    return (
        <>
            <div className=' flex justify-between gap-10 items-center h-[54px] p-8 border-b sticky top-0 z-50 '>
                <div >
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
        </>
    )
}

export default Header
