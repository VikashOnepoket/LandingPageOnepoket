import axios from '../../../api/api';
import React, { useEffect, useState } from 'react'
import { HiOutlineEye, HiOutlineEyeOff, HiOutlinePencil, HiOutlinePlus } from 'react-icons/hi'
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserDetails } from '../slice/userDetailsSlice';
import SpinnerMain from '../Spinner/SpinnerMain';
import toast from 'react-hot-toast';

const Details = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false)
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

    const addLogo = async () => {

        const { data } = await axios.post()

    }

    const handleInputChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const token = useSelector((state) => state.auth.token);
    const user = useSelector((state) => state.userDetails.user)

    const [data, setData] = useState({
        name: "",
        phone_number: "",
        company_name: "",
        industry: "",
        company_size: "",
        address: "",
        email: "",
        helpline_number: "",
        helpline_email: "",
        website_url: ""
    });

    useEffect(() => {
        if (user) {
            setData({
                ...data,
                name: user?.name,
                phone_number: user?.phone_number,
                company_name: user?.company_name,
                industry: user?.industry,
                company_size: user?.company_size,
                address: user?.address,
                email: user?.email,
                helpline_number: user?.helpline_number,
                helpline_email: user?.helpline_email,
                website_url: user?.website_url
            })
        }
    }, [user])



    console.log(user, "user details")

    //    update user

    const handleUpdateProfile = async () => {
        console.log("clicked")

        try {
            setLoading(true)
            const result = await axios.put("/user_update", {
                name: data?.name, phone: data?.phone_number, company_name: data?.company_name, industry: data?.industry, company_size: data?.company_size, address: data?.address, helpline_email: data?.helpline_email, helpline_number: data?.helpline_number
            });

            console.log(result)
            setLoading(false);
            setShow(!show)
            toast.success("Profile updated successfully")
            dispatch(fetchUserDetails(token));

        } catch (error) {
            console.log(error)
        }

    }



    return (
        <>

            {loading ? (<SpinnerMain />) : (<div className='mt-10'>
                <div className='flex justify-between mt-3 items-center  lg:w-[70%] md:w-[80%] w-full'>
                    <div>
                        <h3 className='text-[1.2rem] leading-[1.5rem] font-semibold text-[#202123]'>Profile Details</h3>
                    </div>
                    <div onClick={() => setShow(!show)}>
                        <button block className='border border-[#8F9091] text-[#58595A] text-[14px] leading-[18px] font-bold rounded-md flex  items-center px-3 py-2'>
                            <span className="material-symbols-outlined mr-2">edit</span>
                            Edit
                        </button>
                    </div>
                </div>
                {show ? (<div className='mt-8 lg:w-[70%] md:w-[80%]'>
                    {/* owner name */}
                    <div className="flex flex-col gap-2 mt-5">
                        <label className="text-[14px] leading-[18px] text-[#58595A] font-semibold">Owner Name</label>
                        <input
                            type="text"
                            className="input border border-gray-300 dark:border-gray-600 dark:bg-transparent rounded-md w-full py-2 px-3 focus:border-[#0052cc] focus:border focus-within:ring-1 appearance-none transition duration-150 text-black   ease-in-out"
                            placeholder="Enter Owner name"
                            name='name'
                            onChange={handleInputChange}
                            value={data?.name}
                        />
                    </div>
                    {/* mobile number */}
                    <div className="flex flex-col gap-2 mt-5">
                        <label className="text-[14px] leading-[18px] text-[#58595A] font-semibold">Mobile Number</label>
                        <input
                            type="text"
                            className="input border border-gray-300 dark:border-gray-600 dark:bg-transparent rounded-md w-full py-2 px-3 focus:border-[#0052cc] focus:border focus-within:ring-1 appearance-none transition duration-150 text-black   ease-in-out"
                            placeholder="Enter Mobile Number"
                            onChange={handleInputChange}
                            value={data?.phone_number}
                        />
                    </div>

                    {/* address */}
                    <div className="flex flex-col gap-2 mt-5">
                        <label className="text-[14px] leading-[18px] text-[#58595A] font-semibold">Address</label>
                        <input
                            type="text"
                            className="input border border-gray-300 dark:border-gray-600 dark:bg-transparent rounded-md w-full py-2 px-3 focus:border-[#0052cc] focus:border focus-within:ring-1 appearance-none transition duration-150 text-black   ease-in-out"
                            placeholder="Enter Address"
                            name="address"
                            value={data?.address}
                            onChange={handleInputChange}

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
                            className="input border border-gray-300 dark:border-gray-600 dark:bg-transparent rounded-md w-full py-2 px-3 focus:border-[#0052cc] focus:border focus-within:ring-1 appearance-none transition duration-150 text-black   ease-in-out"
                            placeholder="Enter Brand Name"
                            name='company_name'
                            value={data?.company_name}
                            onChange={handleInputChange}
                        />
                    </div>

                    {/* comapny logo */}

                    {/* <div className='mt-5'>  <label className="text-[14px] leading-[18px] text-[#58595A] font-semibold">Company Logo</label></div>
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

                           
                        </form>
                    </div> */}


                    {/* helpline email */}
                    <div className="flex flex-col gap-2 mt-5">
                        <label className="text-[14px] leading-[18px] text-[#58595A] font-semibold">Helpline E-mail </label>
                        <input
                            type="text"
                            className="input border border-gray-300 dark:border-gray-600 dark:bg-transparent rounded-md w-full py-2 px-3 focus:border-[#0052cc] focus:border focus-within:ring-1 appearance-none transition duration-150 text-black   ease-in-out"
                            placeholder="Enter Helpline E-mail"
                            name='helpline_email'
                            value={data?.helpline_email}
                            onChange={handleInputChange}

                        />
                    </div>

                    {/* helpline number */}
                    <div className="flex flex-col gap-2 mt-5">
                        <label className="text-[14px] leading-[18px] text-[#58595A] font-semibold">Helpline Number</label>
                        <input
                            type="text"
                            className="input border border-gray-300 dark:border-gray-600 dark:bg-transparent rounded-md w-full py-2 px-3 focus:border-[#0052cc] focus:border focus-within:ring-1 appearance-none transition duration-150 text-black   ease-in-out"
                            placeholder="Enter Helpline number"
                            name='helpline_number'
                            value={data?.helpline_number}
                            onChange={handleInputChange}

                        />
                    </div>
                </div>) : (<div className='mt-8 lg:w-[70%] md:w-[80%]'>
                    {/* owner name */}
                    <div className="flex flex-col gap-2 mt-5">
                        <label className="text-[14px] leading-[18px] text-[#58595A] font-semibold">Owner Name</label>
                        <input
                            type="text"
                            className="input border border-gray-300 dark:border-gray-600 dark:bg-transparent rounded-md w-full py-2 px-3 focus:border-[#0052cc] focus:border focus-within:ring-1 appearance-none transition duration-150 text-black   ease-in-out"
                            placeholder="Enter Owner name"
                            readOnly
                            value={data?.name}
                        />
                    </div>
                    {/* mobile number */}
                    <div className="flex flex-col gap-2 mt-5">
                        <label className="text-[14px] leading-[18px] text-[#58595A] font-semibold">Mobile Number</label>
                        <input
                            type="text"
                            className="input border border-gray-300 dark:border-gray-600 dark:bg-transparent rounded-md w-full py-2 px-3 focus:border-[#0052cc] focus:border focus-within:ring-1 appearance-none transition duration-150 text-black   ease-in-out"
                            placeholder="Enter Mobile Number"
                            readOnly
                            value={data?.phone_number}
                        />
                    </div>

                    {/* address */}
                    <div className="flex flex-col gap-2 mt-5">
                        <label className="text-[14px] leading-[18px] text-[#58595A] font-semibold">Address</label>
                        <input
                            type="text"
                            className="input border border-gray-300 dark:border-gray-600 dark:bg-transparent rounded-md w-full py-2 px-3 focus:border-[#0052cc] focus:border focus-within:ring-1 appearance-none transition duration-150 text-black   ease-in-out"
                            placeholder="Enter Address"
                            readOnly
                            value={data?.address}
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
                            className="input border border-gray-300 dark:border-gray-600 dark:bg-transparent rounded-md w-full py-2 px-3 focus:border-[#0052cc] focus:border focus-within:ring-1 appearance-none transition duration-150 text-black   ease-in-out"
                            placeholder="Enter Brand Name"
                            readOnly
                            value={data?.company_name}
                        />
                    </div>

                    {/* comapny logo */}

                    {/* <div className='mt-5'>  <label className="text-[14px] leading-[18px] text-[#58595A] font-semibold">Company Logo</label></div>
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

                           
                        </form>
                    </div> */}


                    {/* helpline email */}
                    <div className="flex flex-col gap-2 mt-5">
                        <label className="text-[14px] leading-[18px] text-[#58595A] font-semibold">Helpline E-mail </label>
                        <input
                            type="text"
                            className="input border border-gray-300 dark:border-gray-600 dark:bg-transparent rounded-md w-full py-2 px-3 focus:border-[#0052cc] focus:border focus-within:ring-1 appearance-none transition duration-150 text-black   ease-in-out"
                            placeholder="Enter Helpline E-mail"
                            readOnly
                            value={data?.helpline_email}
                        />
                    </div>

                    {/* helpline number */}
                    <div className="flex flex-col gap-2 mt-5">
                        <label className="text-[14px] leading-[18px] text-[#58595A] font-semibold">Helpline Number</label>
                        <input
                            type="text"
                            className="input border border-gray-300 dark:border-gray-600 dark:bg-transparent rounded-md w-full py-2 px-3 focus:border-[#0052cc] focus:border focus-within:ring-1 appearance-none transition duration-150 text-black   ease-in-out"
                            placeholder="Enter Helpline number"
                            readOnly
                            value={data?.helpline_number}
                        />
                    </div>
                </div>)}
                {show && (<div className='flex justify-end mt-10 gap-5 lg:w-[70%] md:w-[80%]'>
                    <button className='text-[#58595A]  border border-[#8F9091] text-[14px] leading-[18px] font-bold rounded-md flex  items-center px-3 py-2'>
                        Discard
                    </button>
                    <button type="button" className='bg-[#0052CC] text-white hover:bg-[#0052cc] hover:text-white border border-[#0052cc] mr-5 text-[14px] leading-[18px] font-bold rounded-md flex  items-center px-3 py-2' onClick={handleUpdateProfile}>
                        Save
                    </button>
                </div>)}

            </div>)}

        </>
    )
}

export default Details
