import React, { useState } from 'react'
import './Login.css'
import { motion } from "framer-motion"
import { useNavigate } from 'react-router-dom'
import axios from '../../api/api'
import toast from 'react-hot-toast'

const Login = () => {

    const navigate = useNavigate()
    const [user, setUser] = useState({

        email: '',
        password: '',

    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const loginToDashboard = async () => {
        const { email, password } = user
        if (!email || !password) {
            toast.error('All fields are required.');
            return true;
        }
        try {
            const { data } = await axios.post("/user_login", {
                email: user.email, password: user.password
            });
            console.log(data);

            if (data.token) {
                navigate(`/products`)
            }
        }
        catch (error) {
            toast.error(error?.response?.data?.message)

        }


    };


    const goToOnboarding = () => {
        navigate(`/onboarding`)
    }
    return (
        <div className='login-container'>
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5 }}
                className="login-shadow-custom xl:w-[360px] w-[360px] xl:mx-auto "
            >


                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className='w-5/6 mx-auto mt-8 flex flex-col gap-3'>
                    <div className='text-center'>
                        <p className='font-normal text-[1.1rem] leading-[1.5rem] text-[#0052CC]'>Welcome Back!</p>
                        <p className='font-normal text-[1.1rem] leading-[1.5rem] text-[#0052CC] pt-2'>Sign in to your account</p>
                    </div>

                    <div className='mt-5'>
                        <input
                            type='text'
                            className='custom-input'
                            placeholder='Email'
                            value={user.email}
                            name='email'
                            onChange={handleInputChange}
                        />
                    </div>

                    <div>
                        <input
                            type='text'
                            className='custom-input'
                            placeholder='Password'
                            value={user.password}
                            name='password'
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className='mt-8 ' onClick={loginToDashboard}>
                        <button className='w-[100%] bg-[#0052cc] border-[#0052cc] text-white px-[25px] py-[12px] rounded btn-container'>
                            Login
                        </button>
                    </div>
                    <div className='text-center mb-12 mt-3'>
                        <p className='font-normal text-[1rem] leading-[1.5rem] text-[#0052CC] pt-2'>
                            Don't have an account?
                            <span className='relative hover:underline-offset-1 cursor-pointer underline-animation ml-2' onClick={goToOnboarding}>
                                Sign up
                            </span>
                        </p>
                    </div>

                </motion.div>

            </motion.div>
        </div>
    )
}

export default Login
