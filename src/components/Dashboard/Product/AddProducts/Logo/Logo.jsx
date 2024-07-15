import React, { useState } from 'react';
import Select from 'react-select';

const Logo = () => {
    const options = [
        { value: 'logo1', label: 'Logo 1', logoUrl: 'https://via.placeholder.com/50' },
        { value: 'logo2', label: 'Logo 2', logoUrl: 'https://via.placeholder.com/50' },
        { value: 'logo3', label: 'Logo 3', logoUrl: 'https://via.placeholder.com/50' },
    ];

    const customOption = (props) => {
        const { innerRef, innerProps, data } = props;
        return (
            <div ref={innerRef} {...innerProps} className="flex items-center p-2 justify-between">
                <img src={data.logoUrl} alt={data.label} className="w-6 h-6 mr-2" />
                <span>{data.label}</span>
            </div>
        );
    };

    return (
        <>
            <div className='mt-10'>
                <div className='flex justify-between gap-10'>
                    <p className='text-[14px] leading-[18px] text-[#58595A] font-semibold'>Logo</p>
                </div>
                <div className="bg-white rounded-md border p-6 mt-2 h-[220px]">
                    <Select
                        options={options}
                        placeholder="Select Logo"
                        components={{ Option: customOption }}
                        styles={{
                            control: (base, state) => ({
                                ...base,
                                borderColor: state.isFocused ? '#0052cc' : base.borderColor,
                                '&:hover': {
                                    borderColor: state.isFocused ? '#0052cc' : base.borderColor,
                                },
                            }),
                        }}
                    />
                </div>
            </div>
        </>
    );
};

export default Logo;
