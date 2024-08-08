import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './components/Dashboard/Sidebar/Sidebar';
import Header from './components/Dashboard/Header/Header';

const DashboardLayout = () => {
    return (
        <div className="flex h-screen overflow-hidden">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Header */}
                <Header />

                {/* Main Content Area */}
                <div className="flex-1 overflow-y-auto ">

                    {/* Outlet for rendering child routes */}
                    <Outlet />

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;