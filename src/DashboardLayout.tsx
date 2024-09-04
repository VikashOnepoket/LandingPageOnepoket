import React, { Suspense, lazy } from 'react';
import { Outlet } from 'react-router-dom';

// Lazy load the Sidebar and Header components
const Sidebar = lazy(() => import('./components/Dashboard/Sidebar/Sidebar'));
const Header = lazy(() => import('./components/Dashboard/Header/Header'));

const DashboardLayout = () => {
    return (
        <div className="flex h-screen overflow-hidden">
            {/* Sidebar */}
            <Suspense fallback={<div>Loading Sidebar...</div>}>
                <Sidebar />
            </Suspense>

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Header */}
                <Suspense fallback={<div>Loading Header...</div>}>
                    <Header />
                </Suspense>

                {/* Main Content Area */}
                <div className="flex-1 overflow-y-auto">
                    {/* Outlet for rendering child routes */}
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
