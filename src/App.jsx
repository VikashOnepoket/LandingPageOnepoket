import { useEffect, useState } from 'react'
import './App.css'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Home from './components/Home'
import HeroMain from './components/HeroMain'
import OnboardingForm from './components/Onboarding/OnboardingForm'
import Login from './components/Login/Login'
import Sidebar from './components/Dashboard/Sidebar/Sidebar'

import { SidebarProvider } from './components/Dashboard/Sidebar/context/SidebarContext'
import DashboardLayout from './DashboardLayout'
import Product from './components/Dashboard/Product/Product'
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
import Profile from './components/Dashboard/Profile/Proflile'
import Details from './components/Dashboard/Profile/Details'
import QRUsage from './components/Dashboard/Profile/QRUsage'
import Logo from './components/Dashboard/Profile/Logo'
import AddLogo from './components/Dashboard/Profile/AddLogo/AddLogo'
import Campaign from './components/Dashboard/Campaign/Campaign'
import CreateCampaign from './components/Dashboard/Campaign/CreateCampaign/CreateCampaign'
import Analytics from './components/Dashboard/Analytics/Analytics'
import FactoryManagement from './components/Dashboard/FactoryManagement/FactoryManagement'
import PrivateRoute from './PrivateRoute'
import { useDispatch, useSelector } from 'react-redux'
import { signInSuccess } from './components/Dashboard/slice/authSlice'
import PublicRoute from './PublicRoute'
import EditProduct from './components/Dashboard/Product/EditProduct/EditProduct'


function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);

  // useEffect(() => {
  //   const savedToken = localStorage.getItem('token');

  //   if (savedToken) {
  //     dispatch(signInSuccess(savedToken));

  //   } else if (!token) {
  //     navigate('/');
  //   }
  // }, [dispatch, token, navigate]);
  // useEffect(() => {
  //   const savedToken = localStorage.getItem('token');

  //   if (savedToken) {
  //     dispatch(signInSuccess(savedToken));
  //   } else if (!token && !['/login', '/onboarding', '/hero'].includes(window.location.pathname)) {
  //     navigate('/');
  //   }
  // }, [dispatch, token, navigate]);


  return (
    <>
      <SidebarProvider>
        <Routes>
          {/* <Route path='/factory' element = {<FactoryManagement/>}></Route> */}
          
          {/* <Route path='/' element={<Home />} />
          <Route path='/hero' element={<HeroMain />} />
          <Route path='/login' element={<Login />} />
          <Route path='/onboarding' element={<OnboardingForm />} /> */}
          <Route
            path='/'
            element={
              <PublicRoute>
                <Home />
              </PublicRoute>
            }
          />
          {/* <Route
            path='/hero'
            element={
              <PublicRoute>
                <HeroMain />
              </PublicRoute>
            }
          /> */}
          <Route
            path='/login'
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path='/onboarding'
            element={
              <PublicRoute>
                <OnboardingForm />
              </PublicRoute>
            }
          />
          <Route element={<PrivateRoute />}>
            <Route element={<DashboardLayout />}>
              <Route path='/sidebar' element={<Sidebar />} />
              <Route path='/factory' element = {<FactoryManagement/>}></Route>
              {/* Product */}
              <Route path='/products' element={<Product />} />
              <Route path='/products/add_product' element={<AddProduct />} />
              <Route path='/products/edit_product/:id' element={<EditProduct />} />

              <Route path='/service_request' element={<ServiceRequest />} />
              <Route path='/roles' element={<RolesAndPermission />} />
              <Route path='/roles/add_roles_permission' element={<AddRolesAndPermission />} />
              <Route path='/service_request/completed_installation' element={<CompletedInstallation />} />
              <Route path='/service_request/pending_installation' element={<PendingInstallation />} />
              <Route path='/service_request/service_network' element={<ServiceNetwork />} />
              <Route path='/service_request/service_network/add_service_centre' element={<AddServiceCentre />} />
              <Route path='/service_request/service_network/service_centre_details/:id' element={<ServiceCentreDetails />} />
              <Route path='/service_request/warranty_claims' element={<WarrantyClaim />} />
              <Route path='/service_request/warranty_claims/:id' element={<WarrantyClaimDetails />} />
              <Route path="/profile" element={<Profile />}>
                <Route path="details" element={<Details />} />
                <Route path="QRUsage" element={<QRUsage />} />
                <Route path="logo" element={<Logo />} />
              </Route>
              <Route path="/profile/logo/add_logo" element={<AddLogo />} />
              <Route path='/campaign' element={<Campaign />} />
              <Route path='/campaign/create_campaign' element={<CreateCampaign />} />
              <Route path='/analytics' element={<Analytics />} />
              <Route path='/factory' element={<FactoryManagement />} />
            </Route>
          </Route>
        </Routes>
      </SidebarProvider>
    </>
  )
}

export default App;
