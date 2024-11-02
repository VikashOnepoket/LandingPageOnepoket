import React, { useRef, useState, useEffect } from 'react';

const SearchInput = ({ placeholder = "Search...", onSearchChange, initialValue = "", className = "" }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [searchText, setSearchText] = useState(initialValue);
    const searchInputRef = useRef(null);

    // Handle search text change
    useEffect(() => {
        setSearchText(initialValue);
    }, [initialValue]);

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
        const value = e.target.value;
        setSearchText(value);
        if (onSearchChange) {
            onSearchChange(value);
        }
    };

    return (
        <div className={`flex items-center px-2 transition-all duration-300 ease-in-out focus-within:ring-2 focus-within:ring-[#0052cc] rounded-md ${className}`}>
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
                className={`ml-2 outline-none bg-transparent transition-all duration-300 ease-in-out ${isExpanded || searchText ? 'w-40 rounded-md' : 'w-0'} px-1 focus:w-40`} // Adjust width based on text presence
                // className={`ml-2 outline-none bg-transparent transition-all duration-300 ease-in-out ${isExpanded ? 'w-52 rounded-md' : 'w-0'} px-1 focus:w-40`}
                placeholder={placeholder}
                onBlur={handleBlur}
                onChange={handleChange}
                value={searchText}
                // Keep the input visible even when it's blurred if there's text
                onFocus={() => setIsExpanded(true)} // Expand when focused
            />
        </div>
    );
};

export default SearchInput;
