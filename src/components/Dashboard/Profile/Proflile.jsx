import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Details from './Details';
import QRUsage from './QRUsage';
import Logo from './Logo';

const Profile = () => {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState('details');
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    navigate(`/profile/${tabName}`);
  };

  const renderActiveTabContent = () => {
    switch (activeTab) {
      case 'details':
        return <Details />;
      case 'QRUsage':
        return <QRUsage />;
      case 'logo':
        return <Logo />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="mt-3 p-8">
        <div>
          <h3 className="mb-4 lg:mb-0 text-[1.5rem] leading-[2.5rem] text-[#0052CC] font-semibold">Profile</h3>
        </div>
        <div className="mt-10">
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
        </div>
        <div className="mt-5">
          {renderActiveTabContent()}
        </div>
      </div>
    </>
  );
};

export default Profile;
