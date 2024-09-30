import React, { useRef, useState } from 'react';

const SearchInput = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [searchText, setSearchText] = useState('');
    const searchInputRef = useRef(null);

    const handleIconClick = () => {
        setIsExpanded(true);
        searchInputRef.current.focus();
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
        <div className="flex items-center  px-2 transition-all duration-300 ease-in-out 
            focus-within:ring-2 focus-within:ring-[#0052cc] rounded-md">
            {/* Search Icon */}
            <span
                className="material-symbols-outlined text-gray-400 cursor-pointer"
                onClick={handleIconClick}
            >
                search
            </span>

            {/* Search Input */}
            <input
                ref={searchInputRef}
                type="text"
                className={`ml-2  outline-none bg-transparent transition-all duration-300 ease-in-out 
                    ${isExpanded ? 'w-52 rounded-md' : 'w-0'} px-1 focus:w-40`}
                placeholder="Search..."
                onBlur={handleBlur}
                onChange={handleChange}
                value={searchText}
            />
        </div>
    );
};

export default SearchInput;
