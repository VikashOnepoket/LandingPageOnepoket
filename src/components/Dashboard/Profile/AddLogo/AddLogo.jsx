import React, { useState } from 'react';
import axios from '../../../../api/api';

const AddLogo = () => {
    const [addLogoData, setAddLogoData] = useState({
        title: "",
        logo: null,
        token: localStorage.getItem("token"), // replace with actual token handling if necessary
    });

    const handleChange = (event) => {
        const { name, value, files } = event.target;
        setAddLogoData((prevData) => ({
            ...prevData,
            [name]: files ? files[0] : value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('title', addLogoData.title);
        formData.append('logo', addLogoData.logo);
        formData.append('token', addLogoData.token);

        try {
            const response = await axios.post('/add_logo', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log('Logo uploaded successfully', response.data);
        } catch (error) {
            console.error('Error uploading logo:', error);
        }
    };

    return (
        <div className='p-8 lg:w-[70%] md:w-[80%] w-full'>
            <div>
                <h3 className="mb-4 lg:mb-0 text-[1.5rem] leading-[2.5rem] text-[#0052CC] font-semibold">Add Company Logo</h3>
            </div>
            {/* Title */}
            <div className="flex flex-col gap-2 mt-5">
                <label className="text-[14px] leading-[18px] text-[#58595A] font-semibold">Title</label>
                <input
                    type="text"
                    name="title"
                    value={addLogoData.title}
                    onChange={handleChange}
                    className="input border border-gray-300 dark:border-gray-600 dark:bg-transparent rounded-md w-full py-2 px-3 focus:border-[#0052cc] focus:border focus-within:ring-1 appearance-none transition duration-150 dark:text-gray-100 ease-in-out"
                    placeholder="Enter Title"
                />
            </div>
            {/* Logo */}
            <div className='mt-5'>
                <label className="text-[14px] leading-[18px] text-[#58595A] font-semibold">Company Logo</label>
            </div>
            <div className="bg-white rounded-md border p-6 mt-2">
                <form onSubmit={handleSubmit}>
                    <div className="flex justify-center items-center mb-4">
                        <label htmlFor="imageUpload" className="cursor-pointer flex flex-col justify-center items-center w-full h-48">
                            <span className="material-symbols-outlined text-gray-400 text-5xl">add_a_photo</span>
                            <button type="button" className='text-[#0052cc] text-[14px] leading-[18px] font-bold rounded-md flex items-center px-3 py-2'>
                                <span className="material-symbols-outlined mr-2">add</span>
                                Upload Image
                            </button>
                            <p className="text-center text-sm text-gray-500 mt-4">
                                Support: jpeg, png
                            </p>
                        </label>
                        <input
                            type="file"
                            id="imageUpload"
                            name="logo"
                            accept="image/*"
                            onChange={handleChange}
                            className="hidden"
                        />
                    </div>
                    {addLogoData.logo && (
                        <div className="flex justify-center items-center">
                            <img
                                src={URL.createObjectURL(addLogoData.logo)}
                                alt="Uploaded Image"
                                className="w-64 h-64 object-cover"
                            />
                        </div>
                    )}
                </form>
            </div>
            <div className='mt-10 flex justify-end gap-5'>
                <button type="button" className='text-[#58595A] border border-[#8F9091] text-[14px] leading-[18px] font-bold rounded-md flex items-center px-3 py-2'>
                    Discard
                </button>
                <button type="submit" className='bg-[#0052CC] text-white hover:bg-[#0052cc] hover:text-white border border-[#0052cc] mr-5 text-[14px] leading-[18px] font-bold rounded-md flex items-center px-3 py-2' onClick={handleSubmit}>
                    Save
                </button>
            </div>
        </div>
    );
};

export default AddLogo;
