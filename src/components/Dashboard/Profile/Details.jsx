import axios from 'axios';
import React, { useState } from 'react'
import { HiOutlineEye, HiOutlineEyeOff, HiOutlinePencil, HiOutlinePlus } from 'react-icons/hi'

const Details = () => {
    const [show, setShow] = useState(false)
    const [userProfileData, setUserProfileData] = useState({
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
    });
    const [pwInputTypeCurrent, setPwInputTypeCurrent] = useState('password');
    const [pwInputTypeNew, setPwInputTypeNew] = useState('password');
    const [pwInputTypeConfirm, setPwInputTypeConfirm] = useState('password');
    const [errors, setErrors] = useState({
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
    });
    const validateFields = () => {
        const newErrors = {
            currentPassword: '',
            newPassword: '',
            confirmPassword: '',
        };

        if (!userProfileData.currentPassword.trim()) {
            newErrors.currentPassword = 'Current Password is required';
        }

        if (!userProfileData.newPassword.trim()) {
            newErrors.newPassword = 'New Password is required';
        }

        if (!userProfileData.confirmPassword.trim()) {
            newErrors.confirmPassword = 'Confirm Password is required';
        }

        setErrors(newErrors);

        return Object.values(newErrors).every((error) => error === '');
    };

    const onPasswordVisibleClickCurrent = () => {
        setPwInputTypeCurrent((prevType) => (prevType === 'password' ? 'text' : 'password'));
    };

    const onPasswordVisibleClickNew = () => {
        setPwInputTypeNew((prevType) => (prevType === 'password' ? 'text' : 'password'));
    };

    const onPasswordVisibleClickConfirm = () => {
        setPwInputTypeConfirm((prevType) => (prevType === 'password' ? 'text' : 'password'));
    };

    const onChangeHandlers = () => {
        const { name, value } = e.target;

        setUserProfileData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: '',
        }));
    };
    const [showPasswordFields, setShowPasswordFields] = useState(false);
    const [showPasswordFieldsEmail, setShowPasswordFieldsEmail] = useState(false);
    const onChangePasswordClick = () => {
        setShowPasswordFields(!showPasswordFields);
    };
    const onChangeEmailClick = () => {
        setShowPasswordFieldsEmail(!showPasswordFieldsEmail);
    };
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle image upload here
    };

    // add logo 

    const addLogo = async()=>{

        const {data} = await axios.post()

    }
    return (
        <>
            <div className='mt-10'>
                <div className='flex justify-between mt-3 items-center  lg:w-[70%] md:w-[80%] w-full'>
                    <div>
                        <h3 className='text-[1.2rem] leading-[1.5rem] font-semibold text-[#202123]'>Profile Details</h3>
                    </div>
                    <div onClick={() => setShow(!show)}>
                        <button block className='border border-[#8F9091] text-[#58595A] text-[14px] leading-[18px] font-bold rounded-md flex  items-center px-3 py-2' onClick={() => navigate(`/products/add_product`)}>
                            <span className="material-symbols-outlined mr-2">edit</span>
                            Edit
                        </button>
                    </div>
                </div>
                <div className='mt-8 lg:w-[70%] md:w-[80%]'>
                    {/* owner name */}
                    <div className="flex flex-col gap-2 mt-5">
                        <label className="text-[14px] leading-[18px] text-[#58595A] font-semibold">Owner Name</label>
                        <input
                            type="text"
                            className="input border border-gray-300 dark:border-gray-600 dark:bg-transparent rounded-md w-full py-2 px-3 focus:border-[#0052cc] focus:border focus-within:ring-1 appearance-none transition duration-150 dark:text-gray-100 ease-in-out"
                            placeholder="Enter Owner name"
                        />
                    </div>
                    {/* mobile number */}
                    <div className="flex flex-col gap-2 mt-5">
                        <label className="text-[14px] leading-[18px] text-[#58595A] font-semibold">Mobile Number</label>
                        <input
                            type="text"
                            className="input border border-gray-300 dark:border-gray-600 dark:bg-transparent rounded-md w-full py-2 px-3 focus:border-[#0052cc] focus:border focus-within:ring-1 appearance-none transition duration-150 dark:text-gray-100 ease-in-out"
                            placeholder="Enter Mobile Number"
                        />
                    </div>

                    {/* address */}
                    <div className="flex flex-col gap-2 mt-5">
                        <label className="text-[14px] leading-[18px] text-[#58595A] font-semibold">Address</label>
                        <input
                            type="text"
                            className="input border border-gray-300 dark:border-gray-600 dark:bg-transparent rounded-md w-full py-2 px-3 focus:border-[#0052cc] focus:border focus-within:ring-1 appearance-none transition duration-150 dark:text-gray-100 ease-in-out"
                            placeholder="Enter Address"
                        />
                    </div>

                    {/* company details */}
                    <div className='mt-12'>
                        <h3 className='text-[1.2rem] leading-[1.5rem] font-semibold text-[#202123]'>Company Details</h3>
                    </div>

                    {/* brand name */}
                    <div className="flex flex-col gap-2 mt-10">
                        <label className="text-[14px] leading-[18px] text-[#58595A] font-semibold">Brand Name</label>
                        <input
                            type="text"
                            className="input border border-gray-300 dark:border-gray-600 dark:bg-transparent rounded-md w-full py-2 px-3 focus:border-[#0052cc] focus:border focus-within:ring-1 appearance-none transition duration-150 dark:text-gray-100 ease-in-out"
                            placeholder="Enter Brand Name"
                        />
                    </div>

                    {/* comapny logo */}

                    <div className='mt-5'>  <label className="text-[14px] leading-[18px] text-[#58595A] font-semibold">Company Logo</label></div>
                    <div className="bg-white rounded-md border  p-6 mt-2">
                        <form onSubmit={handleSubmit}>
                            <div className="flex justify-center items-center mb-4">
                                <label htmlFor="imageUpload" className="cursor-pointer flex flex-col justify-center items-center w-full h-48  ">
                                    <span className="material-symbols-outlined text-gray-400 text-5xl">add_a_photo</span>
                                    <button block className=' text-[#0052cc] text-[14px] leading-[18px] font-bold rounded-md flex  items-center px-3 py-2'>
                                        <span className="material-symbols-outlined mr-2">add</span>
                                        Add Default Company Logo
                                    </button>
                                    <p className="text-center text-sm text-gray-500 mt-4">
                                        Support: jpeg, png
                                    </p>
                                </label>
                                <input
                                    type="file"
                                    id="imageUpload"
                                    accept="image/*"
                                    onChange={handleFileChange}
                                    className="hidden"
                                />
                            </div>
                            {selectedFile && (
                                <div className="flex justify-center items-center">
                                    <img
                                        src={URL.createObjectURL(selectedFile)}
                                        alt="Uploaded Image"
                                        className="w-64 h-64 object-cover"
                                    />
                                </div>
                            )}

                            {/* <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Upload
                    </button> */}
                        </form>
                    </div>


                    {/* helpline email */}
                    <div className="flex flex-col gap-2 mt-5">
                        <label className="text-[14px] leading-[18px] text-[#58595A] font-semibold">Helpline E-mail </label>
                        <input
                            type="text"
                            className="input border border-gray-300 dark:border-gray-600 dark:bg-transparent rounded-md w-full py-2 px-3 focus:border-[#0052cc] focus:border focus-within:ring-1 appearance-none transition duration-150 dark:text-gray-100 ease-in-out"
                            placeholder="Enter Helpline E-mail"
                        />
                    </div>

                    {/* helpline number */}
                    <div className="flex flex-col gap-2 mt-5">
                        <label className="text-[14px] leading-[18px] text-[#58595A] font-semibold">Helpline Number</label>
                        <input
                            type="text"
                            className="input border border-gray-300 dark:border-gray-600 dark:bg-transparent rounded-md w-full py-2 px-3 focus:border-[#0052cc] focus:border focus-within:ring-1 appearance-none transition duration-150 dark:text-gray-100 ease-in-out"
                            placeholder="Enter Helpline number"
                        />
                    </div>
                </div>
                <div className='flex justify-end mt-10 gap-5 lg:w-[70%] md:w-[80%]'>
                    <button className='text-[#58595A]  border border-[#8F9091] text-[14px] leading-[18px] font-bold rounded-md flex  items-center px-3 py-2'>
                        Discard
                    </button>
                    <button block className='bg-[#0052CC] text-white hover:bg-[#0052cc] hover:text-white border border-[#0052cc] mr-5 text-[14px] leading-[18px] font-bold rounded-md flex  items-center px-3 py-2' >
                        Save
                    </button>
                </div>

            </div>
        </>
    )
}

export default Details
