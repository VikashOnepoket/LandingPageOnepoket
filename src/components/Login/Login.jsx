import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import axios from '../../api/api';
import toast from 'react-hot-toast';
import Spinner from '../Dashboard/Spinner/Spinner'; // Adjust the path based on your project structure
import { useDispatch } from 'react-redux';
import { signInSuccess } from '../Dashboard/slice/authSlice';
import loginNew from '../../assets/login tiles.png';
import Logo from '../../assets/LogoOne.png';
import LoginBG from '../../assets/Login background.png';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  // Validation schema using Yup
  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format !').required('Email is required !'),
    password: Yup.string()
    .required('Password is required !'),

  });

  // Function to handle form submission
  const loginToDashboard = async (values) => {
    setLoading(true);
    try {
      const { data } = await axios.post('/user_login', {
        email: values.email,
        password: values.password,
      });
      localStorage.setItem('token', data?.token);
      if (data?.token) {
        dispatch(signInSuccess(data.token));
        navigate(`/products`);
      } else if (data?.message === 'Invalid Credentials') {
        toast.error('Invalid Credentials');
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || 'An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const goToOnboarding = () => {
    navigate(`/onboarding`);
  };

  return (
    <div className='flex h-screen'>
      {/* Login Form Section */}
      <div className='w-full md:w-1/2 flex flex-col items-center justify-center bg-white '>
        {/* Logo */}
        <div className='sm:w-[60%] w-[90%] mx-auto'>
          <img src={Logo} className='sm:w-[215px] w-[131px]' alt='Logo' />
        </div>

        {/* Login Form using Formik */}
        <div className='mt-16 sm:w-[60%] w-[90%] mx-auto'>
          <p className='text-[20px] leading-7 font-semibold text-[#004699]'>
            Welcome!<br />
            Sign in to your account
          </p>

          <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit={loginToDashboard}
          >
            {({ isSubmitting }) => (
              <Form>
                {/* Email Input */}
                <div className='flex flex-col gap-2 mt-5'>
                  <label className='text-[14px] leading-[18px] text-[#58595A] font-semibold'>Email</label>
                  <Field
                    type='email'
                    name='email'
                    className='border border-gray-300 rounded-md w-full py-2 px-3 focus:border-[#0052cc] focus:ring-1 transition duration-150 text-black input'
                    placeholder='Enter your email'
                  />
                  <ErrorMessage name='email' component='div' className='text-red-500 text-sm' />
                </div>

                {/* Password Input */}
                <div className='flex flex-col gap-2 mt-5'>
                  <label className='text-[14px] leading-[18px] text-[#58595A] font-semibold'>Password</label>
                  <Field
                    type='password'
                    name='password'
                    className='border border-gray-300 rounded-md w-full py-2 px-3 focus:border-[#0052cc] focus:ring-1 transition duration-150 text-black input'
                    placeholder='Enter your password'
                  />
                  <ErrorMessage name='password' component='div' className='text-red-500 text-sm' />
                </div>

                {/* Forgot Password Link */}
                <div className='text-right mt-5'>
                  <a className='text-[#0550AA] text-[12px] leading-4 font-normal'>Forgot Password?</a>
                </div>

                {/* Sign In Button */}
                <div className='mt-5'>
                  <button
                    type='submit'
                    className='text-[14px] leading-4 text-white font-bold bg-[#0052CC] border border-[#0052CC] p-3 rounded-md w-[200px]'
                    disabled={loading || isSubmitting}
                  >
                    {loading ? (
                      <div className='flex items-center justify-center'>
                        <Spinner />
                        <span className='ml-2'>Loading...</span>
                      </div>
                    ) : (
                      'Sign In'
                    )}
                  </button>
                </div>
              </Form>
            )}
          </Formik>

          {/* Sign Up Text */}
          <div className='mt-3'>
            <p className='font-semibold text-[12px] leading-4'>
              Don't have an account?
              <span className='cursor-pointer text-[#004699]' onClick={goToOnboarding}>
                Sign up
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div
        className='hidden md:flex w-1/2 justify-center items-center bg-[#004699] bg-cover bg-center'
        style={{ backgroundImage: `url(${LoginBG})` }}
      >
        <div className='w-[60%]'>
          <img src={loginNew} alt='Login Illustration' />
          <div className='mt-10'>
            <p className='text-center text-[16px] leading-6 font-extrabold text-[#EAF0FD]'>
              Be the Captain of your Customer
              <br />
              Relationships in just 10 Seconds.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
