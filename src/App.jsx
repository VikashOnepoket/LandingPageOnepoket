import { Suspense, lazy } from 'react';
import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signInSuccess } from './components/Dashboard/slice/authSlice';
import Sidebar from './components/Dashboard/Sidebar/Sidebar';
import { SidebarProvider } from './components/Dashboard/Sidebar/context/SidebarContext';

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import SpinnerMain from './components/Dashboard/Spinner/SpinnerMain';
import LearnMoreDirect from './components/LearnMore/LearnMoreDirect';
import LearnMoreOnboarding from './components/LearnMore/LearnMoreOnboarding';
import LearnMoreCustomer from './components/LearnMore/LearnMoreCustomer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ComingSoon from './components/comingSoon/ComingSoon';
import RejectedInstallation from './components/Dashboard/ServiceRequest/RejectedInstallation/RejectedInstallation';
import DashboardLayout from './DashboardLayout';

// Lazy load components
const Home = lazy(() => import('./components/Home'));
const HeroMain = lazy(() => import('./components/HeroMain'));
const OnboardingForm = lazy(() => import('./components/Onboarding/OnboardingForm'));
const Login = lazy(() => import('./components/Login/Login'));
const Product = lazy(() => import('./components/Dashboard/Product/Product'));
const AddProduct = lazy(() => import('./components/Dashboard/Product/AddProducts/AddProduct'));
const EditProduct = lazy(() => import('./components/Dashboard/Product/EditProduct/EditProduct'));
const RolesAndPermission = lazy(() => import('./components/Dashboard/Roles/RolesAndPermission'));
const AddRolesAndPermission = lazy(() => import('./components/Dashboard/Roles/AddRolesAndPermission'));
const ServiceRequest = lazy(() => import('./components/Dashboard/ServiceRequest/ServiceRequest'));
const CompletedInstallation = lazy(() => import('./components/Dashboard/ServiceRequest/CompletedInstalltion/CompletedInstallation'));
const PendingInstallation = lazy(() => import('./components/Dashboard/ServiceRequest/PendingInstallation/PendingInstallation'));
const ServiceNetwork = lazy(() => import('./components/Dashboard/ServiceRequest/ServiceNetwork/ServiceNetwork'));
const WarrantyClaim = lazy(() => import('./components/Dashboard/ServiceRequest/WarrantyClaim/WarrantyClaim'));
const AddServiceCentre = lazy(() => import('./components/Dashboard/ServiceRequest/ServiceNetwork/AddServiceCentre'));
const ServiceCentreDetails = lazy(() => import('./components/Dashboard/ServiceRequest/ServiceNetwork/ServiceCentreDetails'));
const WarrantyClaimDetails = lazy(() => import('./components/Dashboard/ServiceRequest/WarrantyClaim/WarrantyClaimDetails'));
const Profile = lazy(() => import('./components/Dashboard/Profile/Proflile'));
const Details = lazy(() => import('./components/Dashboard/Profile/Details'));
const QRUsage = lazy(() => import('./components/Dashboard/Profile/QRUsage'));
const Logo = lazy(() => import('./components/Dashboard/Profile/Logo'));
const AddLogo = lazy(() => import('./components/Dashboard/Profile/AddLogo/AddLogo'));
const Campaign = lazy(() => import('./components/Dashboard/Campaign/Campaign'));
const CreateCampaign = lazy(() => import('./components/Dashboard/Campaign/CreateCampaign/CreateCampaign'));
const Analytics = lazy(() => import('./components/Dashboard/Analytics/Analytics'));
const FactoryManagement = lazy(() => import('./components/Dashboard/FactoryManagement/FactoryManagement'));
const SingleQRAcquiredCustomer = lazy(() => import('./components/Dashboard/SinglQRAcquired/SingleQRAcquiredCustomer'));

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);

  // Uncomment if you want to handle token restoration on page load
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
        <Suspense fallback={<div className='flex items-center justify-center h-[100vh]'>
          <SpinnerMain />
        </div>}> {/* Suspense with Spinner fallback */}
          <Routes>
            <Route
              path='/'
              element={
                <PublicRoute>
                  <Home />
                </PublicRoute>
              }
            />

            <Route
              path='/pricing'
              element={
                <PublicRoute>
                  <ComingSoon />
                </PublicRoute>
              }
            />
            <Route
              path='/features'
              element={
                <PublicRoute>
                  <ComingSoon />
                </PublicRoute>
              }
            />
            <Route
              path='/use_Cases'
              element={
                <PublicRoute>
                  <ComingSoon />
                </PublicRoute>
              }
            />
            <Route
              path='/learn_more_button_1'
              element={
                <PublicRoute>
                  <LearnMoreDirect />
                </PublicRoute>
              }
            />
            <Route
              path='/learn_more_button_2'
              element={
                <PublicRoute>
                  <LearnMoreOnboarding />
                </PublicRoute>
              }
            />
            <Route
              path='/learn_more_button_3'
              element={
                <PublicRoute>
                  <LearnMoreCustomer />
                </PublicRoute>
              }
            />
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
                <Route path='/factory' element={<FactoryManagement />} />
                <Route path='/analytics/single_qr' element={<SingleQRAcquiredCustomer />} />
                <Route path='/products' element={<Product />} />
                <Route path='/products/add_product' element={<AddProduct />} />
                <Route path='/products/edit_product/:id' element={<EditProduct />} />
                <Route path='/service_request' element={<ServiceRequest />} />
                <Route path='/roles' element={<RolesAndPermission />} />
                <Route path='/roles/add_roles_permission' element={<AddRolesAndPermission />} />
                <Route path='/service_request/completed_installation' element={<CompletedInstallation />} />
                <Route path='/service_request/pending_installation' element={<PendingInstallation />} />
                <Route path='/service_request/reject_installation' element={<RejectedInstallation />} />
                <Route path='/service_request/service_network' element={<ServiceNetwork />} />
                <Route path='/service_request/service_network/add_service_centre' element={<AddServiceCentre />} />
                <Route path='/service_request/service_network/service_centre_details/:id' element={<ServiceCentreDetails />} />
                <Route path='/service_request/warranty_claims' element={<WarrantyClaim />} />
                <Route path='/service_request/warranty_claims/:id' element={<WarrantyClaimDetails />} />
                <Route path='/profile' element={<Profile />}>
                  <Route path='details' element={<Details />} />
                  <Route path='QRUsage' element={<QRUsage />} />
                  <Route path='logo' element={<Logo />} />
                </Route>
                <Route path='/profile/logo/add_logo' element={<AddLogo />} />
                <Route path='/campaign' element={<Campaign />} />
                <Route path='/campaign/create_campaign' element={<CreateCampaign />} />
                <Route path='/analytics/dynamic_qr' element={<Analytics />} />
                <Route path='/factory' element={<FactoryManagement />} />
              </Route>
            </Route>
          </Routes>
        </Suspense>
      </SidebarProvider>
    </>
  );
}

export default App;
