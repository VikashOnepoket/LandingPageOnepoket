import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import HeroSection from './components/Hero/HeroSection'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import HeroMain from './components/HeroMain'
import OnboardingForm from './components/Onboarding/OnboardingForm'
import Login from './components/Login/Login'
import Sidebar from './components/Dashboard/Sidebar/Sidebar'
import Product from './components/Dashboard/Product/Product'
import { SidebarProvider } from './components/Dashboard/Sidebar/context/SidebarContext'
import DashboardLayout from './DashboardLayout'
import AddProduct from './components/Dashboard/Product/AddProducts/AddProduct'
import RolesAndPermission from './components/Dashboard/Roles/RolesAndPermission'
import AddRolesAndPermission from './components/Dashboard/Roles/AddRolesAndPermission'
import ServiceRequest from './components/Dashboard/ServiceRequest/ServiceRequest'
import CompletedInstallation from './components/Dashboard/ServiceRequest/CompletedInstalltion/CompletedInstallation'
import PendingInstallation from './components/Dashboard/ServiceRequest/PendingInstallation/PendingInstallation'
import ServiceNetwork from './components/Dashboard/ServiceRequest/ServiceNetwork/ServiceNetwork'
import WarrantyClaim from './components/Dashboard/ServiceRequest/WarrantyClaim/WarrantyClaim'
import AddServiceCentre from './components/Dashboard/ServiceRequest/ServiceNetwork/AddServiceCentre'
import ServiceCentreDetails from './components/Dashboard/ServiceRequest/ServiceNetwork/ServiceCentreDetails'
import WarrantyClaimDetails from './components/Dashboard/ServiceRequest/WarrantyClaim/WarrantyClaimDetails'



function App() {

  return (
    <>
      <SidebarProvider>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/hero' element={<HeroMain />} ></Route>
          <Route path='/login' element={<Login />} ></Route>

          <Route path='/onboarding' element={<OnboardingForm />}></Route>

          <Route element={<DashboardLayout />}>
            <Route path='/sidebar' element={<Sidebar />} />
            <Route path='/products' element={<Product />} />
            <Route path='/products/add_product' element={<AddProduct />} />
            <Route path='/service_request' element={<ServiceRequest />} />
            <Route path='/roles' element={<RolesAndPermission />} />
            <Route path='/roles/add_roles_permission' element={<AddRolesAndPermission />} />

            <Route path='/service_request' element={<ServiceRequest />} />
            <Route path='/service_request/completed_installation' element={<CompletedInstallation />} />
            <Route path='/service_request/pending_installation' element={<PendingInstallation />} />
            <Route path='/service_request/service_network' element={<ServiceNetwork />} />
            <Route path='/service_request/service_network/add_service_centre' element={<AddServiceCentre />} />
            <Route path='/service_request/service_network/service_centre_details/:id' element={<ServiceCentreDetails />} />
            <Route path='/service_request/warranty_claims' element={<WarrantyClaim />} />
            <Route path='/service_request/warranty_claims/:id' element={<WarrantyClaimDetails />} />



            {/* Add more routes that should use the DashboardLayout */}
          </Route>
        </Routes>
      </SidebarProvider>
    </>
  )
}

export default App
