import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Tabs = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.pathname.split('/')[2] || 'details');

  useEffect(() => {
    setActiveTab(location.pathname.split('/')[2] || 'details');
  }, [location]);



  return (
    <div className="flex gap-10">
      <div
        className={`cursor-pointer ${activeTab === 'details' ? 'text-[#0052cc] text-[18px] leading-[23px] font-semibold' : 'text-[#58595A] text-[18px] leading-[23px] font-semibold'}`}
        onClick={() => handleTabClick('details')}
      >
        Details
        {activeTab === 'details' && <div className="mt-1 h-1 bg-[#0052cc] rounded-lg"></div>}
      </div>
      <div
        className={`cursor-pointer ${activeTab === 'QRUsage' ? 'text-[#0052cc] text-[18px] leading-[23px] font-semibold' : 'text-[#58595A] text-[18px] leading-[23px] font-semibold'}`}
        onClick={() => handleTabClick('QRUsage')}
      >
        QR Usage
        {activeTab === 'QRUsage' && <div className="mt-1 h-1 bg-[#0052cc] rounded-lg"></div>}
      </div>
      <div
        className={`cursor-pointer ${activeTab === 'logo' ? 'text-[#0052cc] text-[18px] leading-[23px] font-semibold' : 'text-[#58595A] text-[18px] leading-[23px] font-semibold'}`}
        onClick={() => handleTabClick('logo')}
      >
        Logo
        {activeTab === 'logo' && <div className="mt-1 h-1 bg-[#0052cc] rounded-lg"></div>}
      </div>
    </div>
  );
};

export default Tabs;
