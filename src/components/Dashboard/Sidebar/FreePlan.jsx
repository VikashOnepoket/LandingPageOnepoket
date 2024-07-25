// FreePlan.js
import React from 'react';

const FreePlan = () => {
    return (
        <div className="p-2">
            <div className="flex items-center  mb-2">
                <span className="material-symbols-outlined text-[#004699] text-[30px]">credit_card</span>
                <span className="ml-2 font-bold text-[20px] leading-[26px] text-[#004699]">Free Plan</span>
            </div>
            <div className="text-sm">Total credit: 1436/2000</div>
            <button className="mt-2 px-4 py-2 bg-[#0052CC] text-white rounded-md">
                Upgrade Plan
            </button>
        </div>
    );
};

export default FreePlan;
