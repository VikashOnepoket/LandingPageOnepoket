import React, { useState } from 'react';
import axios from '../../../../api/api'
import { useSelector } from 'react-redux';
import SpinnerMain from '../../Spinner/SpinnerMain';
import { useNavigate } from 'react-router-dom';

const AddServiceCentre = () => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState([
        { name: "", phone_number: "", email: "" }
    ]);

    const addUser = () => {
        setFormData([
            ...formData,
            { name: "", phone_number: "", email: "" }
        ]);
    };

    const handleInputChange = (index, field, value) => {
        const updatedFormData = formData.map((item, i) =>
            i === index ? { ...item, [field]: value } : item
        );
        setFormData(updatedFormData);
    };
    const token = useSelector((state) => state.auth.token)
    const addTechnicalExecutiveDetails = async () => {

        const executiveDetails = formData.map((item) => {
            return {
                name: item.name,
                phone_number: item.phone_number,
                email: item.email
            }
        })
        try {
            setLoading(true)
            const { data } = await axios.post('/add_technical_executive_details', {
                executive_details: executiveDetails
            },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            )
            navigate('/service_request/service_network')
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }
    return (
        <>
            {loading ? (<SpinnerMain />) : (<div className='mt-3 p-8'>
                <div className='flex justify-between gap-10 items-center'>
                    <h3 className="mb-4 lg:mb-0 text-[1.5rem] leading-[2.5rem] text-[#0052CC] font-semibold">Add Service Centre</h3>
                </div>

                {formData.map((data, index) => (
                    <div className='mt-5' key={index}>
                        {/* Centre Name */}
                        <div className='flex flex-col gap-2'>
                            <label className='text-[14px] leading-[18px] text-[#58595A] font-semibold'>Centre Name</label>
                            <input
                                type='text'
                                value={data.name}
                                name='name'
                                onChange={(e) => handleInputChange(index, 'name', e.target.value)}
                                className='input md:w-[80%] lg:w-[70%] border border-gray-300 dark:border-gray-600 dark:bg-transparent rounded-md w-full py-2 px-3 focus:border-[#0052cc] focus:border focus-within:ring-1 appearance-none transition duration-150 text-black ease-in-out'
                                placeholder='Enter Centre Name'
                            />
                        </div>

                        {/* Phone Number */}
                        <div className='flex flex-col gap-2 mt-5'>
                            <label className='text-[14px] leading-[18px] text-[#58595A] font-semibold'>Phone Number</label>
                            <input
                                type='text'
                                name='phone_number'
                                value={data.phone_number}
                                onChange={(e) => handleInputChange(index, 'phone_number', e.target.value)}
                                className='input md:w-[80%] lg:w-[70%] border border-gray-300 dark:border-gray-600 dark:bg-transparent rounded-md w-full py-2 px-3 focus:border-[#0052cc] focus:border focus-within:ring-1 appearance-none transition duration-150 text-black ease-in-out'
                                placeholder='Enter Phone Number'
                            />
                        </div>

                        {/* Email */}
                        <div className='flex flex-col gap-2 mt-5'>
                            <label className='text-[14px] leading-[18px] text-[#58595A] font-semibold'>Email</label>
                            <input
                                type='text'
                                value={data.email}
                                name='email'
                                onChange={(e) => handleInputChange(index, 'email', e.target.value)}
                                className='input md:w-[80%] lg:w-[70%] border border-gray-300 dark:border-gray-600 dark:bg-transparent rounded-md w-full py-2 px-3 focus:border-[#0052cc] focus:border focus-within:ring-1 appearance-none transition duration-150 text-black ease-in-out'
                                placeholder='Enter Email'
                            />
                        </div>

                        <div className='lg:w-[70%] md:w-[80%] mt-10'>
                            <hr />
                        </div>
                    </div>
                ))}

                {/* Add User Button */}
                <div className='flex justify-end lg:w-[70%] md:w-[80%] mt-5'>
                    <button
                        className='text-[#0052cc] text-[14px] leading-[18px] font-bold rounded-md flex items-center px-3 py-2'
                        onClick={addUser}
                    >
                        <span className="material-symbols-outlined mr-2">add</span>
                        Add Centre
                    </button>
                </div>

                <div className='flex justify-end lg:w-[70%] md:w-[80%] mt-5 mb-[50px] gap-5 w-full'>
                    <button className='text-[#58595A] border border-[#8F9091] text-[14px] leading-[18px] font-bold rounded-md flex items-center px-3 py-2'>
                        Discard
                    </button>
                    <button
                        className='bg-[#0052CC] text-white hover:bg-[#0052cc] hover:text-white border border-[#0052cc] mr-5 text-[14px] leading-[18px] font-bold rounded-md flex items-center px-3 py-2'
                        onClick={addTechnicalExecutiveDetails}
                    >
                        Save
                    </button>
                </div>
            </div>)}
        </>
    );
}

export default AddServiceCentre;
