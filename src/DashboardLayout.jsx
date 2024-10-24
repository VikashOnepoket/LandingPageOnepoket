import React, { Suspense, lazy } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './components/Dashboard/Sidebar/Sidebar';
import Header from './components/Dashboard/Header/Header';
import SpinnerMain from './components/Dashboard/Spinner/SpinnerMain';


// Lazy load the Sidebar and Header components


const DashboardLayout = () => {
   
    return (
        <div className="flex h-screen overflow-hidden w-full">
            {/* Sidebar */}

            <div className='W-[20%]'>
                <Sidebar />
            </div>


            {/* Main Content */}
            <div className="flex-1 flex flex-col w-[80%]">
                {/* Header */}

              
                    <Header />
                

                {/* Main Content Area */}
                <div className="flex-1 overflow-y-auto w-full">
                    {/* Outlet for rendering child routes */}

                    <Outlet /> {/* Render child routes here */}

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
