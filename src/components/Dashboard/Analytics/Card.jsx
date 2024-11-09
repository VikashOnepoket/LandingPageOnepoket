import React from 'react';

const Card = ({ title, count, change, changeType }) => {
    const boxShadowStyle = {
        boxShadow: '0px 1px 4px 0px rgba(0, 0, 0, 0.15)', // X-offset, Y-offset, blur, spread, color
    };
    const titleClass = {
        'Total Scans': { text: 'text-[#0052cc]', bg: 'bg-[#E4EFFF]', color: '#0052cc' },
        'Authorized Scans': { text: 'text-[#00742A]', bg: 'bg-[#BAFFD3]', color: '#00742A' },
        'Unauthorized Scans': { text: 'text-[#870000]', bg: 'bg-[#FF7070]', color: '#870000' },
        'Incomplete Scans': { text: 'text-[#A93D00]', bg: 'bg-[#FFAB7C]', color: '#A93D00' },
    };

    const currentTitleClass = titleClass[title];

    return (
        <div className='p-4 bg-white  rounded-xl flex flex-col w-full' style={boxShadowStyle} >
            <div className='text-[30px] font-bold'>{count}</div>
            <div className={`text-[14px] font-semibold px-2 py-1 mt-1 rounded leading-6 ${currentTitleClass.text} ${currentTitleClass.bg}`}>
                {title}
            </div>
            <div className='flex justify-between items-center mt-3'>
                <div className='text-[10px] text-[#58595A] font-semibold mt-1 leading-3'>This Month</div>
                <div className={`text-[10px] leading-3 font-semibold mt-2`} style={{ color: currentTitleClass.color }}>
                    {change}
                </div>
            </div>
        </div>
    );
};

export default Card;
