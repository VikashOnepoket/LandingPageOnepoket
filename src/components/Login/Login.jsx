import React, { useState } from 'react';
import './Login.css';
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import axios from '../../api/api';
import toast from 'react-hot-toast';
import Spinner from '../Dashboard/Spinner/Spinner'; // Adjust the path based on your project structure
import { useDispatch } from 'react-redux';
import { signInSuccess } from '../Dashboard/slice/authSlice';
import loginNew from '../../assets/login tiles.png'
import Logo from '../../assets/LogoOne.png';

import LoginBG from '../../assets/Login background.png';


const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const loginToDashboard = async () => {
    const { email, password } = user;
    if (!email || !password) {
      toast.error('All fields are required.');
      return;
    }
    setLoading(true);
    try {
      const { data } = await axios.post("/user_login", {
        email: user.email,
        password: user.password
      });
      console.log(data, "data");
      localStorage.setItem('token', data?.token);

      if (data?.token) {
        dispatch(signInSuccess(data.token)); // Dispatch the signInSuccess action
        navigate(`/products`);
      }

      else if (data?.message === "Invalid Credentials") {
        toast.error("Invalid Credentials");
      }
    } catch (error) {
      console.log(error, "error");
      toast.error(error?.response?.data?.message || 'An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const goToOnboarding = () => {
    navigate(`/onboarding`);
  };


  const boxShadowStyle = {
    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.15)',
    // X-offset, Y-offset, blur, spread, color
  };


  return (
    <>
      <div className='flex h-screen'>
        <div className='bg-white md:w-1/2 w-full flex flex-col items-center justify-center '>
          <div className='sm:w-[60%] w-[90%] mx-auto'>
            <div className='sm:w-[215px] w-[131px]  '>
              <img src={Logo} className='w-[100%] h-[100%]' alt='Logo' />
            </div>
          </div>

          {/* login details */}
          <div className='mt-16 sm:w-[60%] w-[90%] mx-auto'>
            {/* welcome text */}
            <div>
              <p className='text-[20px] leading-7 font-semibold text-[#004699]'>Welcome!<br />
                Sign in to your account</p>
            </div>
            {/* email  */}
            <div className="flex flex-col gap-2 mt-5">
              <label className="text-[14px] leading-[18px] text-[#58595A] font-semibold">Email</label>
              <input
                type="email"
                className="input border border-gray-300 dark:border-gray-600 dark:bg-transparent rounded-md w-full py-3 px-3 focus:border-[#0052cc] focus:border focus-within:ring-1 appearance-none transition duration-150 text-black"
                placeholder="Enter your email"
                value={user.email}
                name='email'
                onChange={handleInputChange}

              />
            </div>
            {/* password */}
            <div className="flex flex-col gap-2 mt-5">
              <label className="text-[14px] leading-[18px] text-[#58595A] font-semibold">Password</label>
              <input
                type="password"
                className="input border border-gray-300 dark:border-gray-600 dark:bg-transparent rounded-md w-full py-3 px-3 focus:border-[#0052cc] focus:border focus-within:ring-1 appearance-none transition duration-150 text-black"
                placeholder="Enter your password"
                value={user.password}
                name='password'
                onChange={handleInputChange}

              />
            </div>
            {/* forgot button  */}
            <div className='text-right mt-5'>
              <a className='text-[#0550AA] text-[12px] leading-4 font-normal'>Forgot Password?</a>
            </div>
            {/* sign up button */}
            <div className='mt-5' onClick={loginToDashboard}>
              <button className='text-[14px] leading-4 text-white font-bold bg-[#0052CC] border border-[#0052CC] p-3 rounded-md w-[200px]' disabled={loading} style={boxShadowStyle}>{loading ? (
                <div className='flex items-center justify-center'>
                  <Spinner />
                  <span className='ml-2'>Loading...</span>
                </div>
              ) : (
                'Sign In'
              )}</button>
            </div>

            {/* dont have signup text */}
            <div className=' mt-3'>
              <p className='font-semibold text-[12px] leading-4'>
                Don't have an account?
                <span className='cursor-pointer  text-[#004699]' onClick={goToOnboarding}>
                  Sign up
                </span>
              </p>
            </div>
          </div>

          <div>

          </div>
        </div>
        <div className='w-1/2 bg-[#004699] md:flex hidden justify-center items-center ' style={{ backgroundImage: `url(${LoginBG})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className='w-[60%]'>
            <img src={loginNew} className='' />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
