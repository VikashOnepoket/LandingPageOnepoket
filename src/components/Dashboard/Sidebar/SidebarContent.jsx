import { Link } from 'react-router-dom';
import logo from '../../../assets/LogoOne.png';
import logo1 from '../../../assets/onepoket_logo.png';

const SidebarContent = ({ isCollapsed, activeItem, setActiveItem, menuItems, isActive, onClose }) => (
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
            {menuItems.map((item) => (
                <Link to={item.path} key={item.name} className="">
                    <li
                        className={`flex items-center gap-5 p-2 rounded-lg cursor-pointer mb-2 ${isActive(item.path) ? 'bg-[#004699] text-white' : 'text-[#7A7A7A]'}`}
                        onClick={() => {
                            setActiveItem(item.path);
                            if (onClose) onClose(); // Close drawer if onClose prop is provided
                        }}
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
    </>
);

export default SidebarContent;
