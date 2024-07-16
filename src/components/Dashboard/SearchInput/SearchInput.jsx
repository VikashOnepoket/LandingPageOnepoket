import React, { useRef, useState } from 'react';
import { motion } from "framer-motion";

const SearchInput = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [searchText, setSearchText] = useState('');
    const searchInput = useRef(null);

    const handleFocus = () => {
        setIsExpanded(true);
        searchInput.current.focus();
    };

    const handleBlur = () => {
        if (!searchText) {
            setIsExpanded(false);
        }
    };

    const handleChange = (e) => {
        setSearchText(e.target.value);
    };

    return (
        <div className={`relative flex items-center  transition-all duration-300 ease-in-out ${isExpanded ? 'w-52 border-[#0052cc] border rounded-md ' : 'w-10'}`}>
            <span className="material-symbols-outlined text-gray-400 cursor-pointer ml-2 " onClick={handleFocus}>search</span>
            <motion.input
                ref={searchInput}
                type="text"
                className={`focus:outline-none ml-2 px-1 transition-width duration-300 ease-in-out ${isExpanded ? 'w-full' : 'w-0'}`}
                placeholder="Search product"
                onChange={handleChange}
                onBlur={handleBlur}
                value={searchText}
            />
        </div>
    );
};

export default SearchInput;
