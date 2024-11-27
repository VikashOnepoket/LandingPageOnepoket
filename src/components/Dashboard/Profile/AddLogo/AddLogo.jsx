import React, { useState } from 'react';
import axios from '../../../../api/api';
import { useSelector } from 'react-redux';
import SpinnerMain from '../../Spinner/SpinnerMain';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import * as Yup from 'yup';
import LogoForm from './LogoForm';

const AddLogo = () => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const token = useSelector((state) => state.auth.token);

    // initial values
    const initialValues = {
        title: "",
        image: null,
        token: token,
    };

    // VALIDATION SCHEMA

    const validationSchema = Yup.object().shape({
        title: Yup.string().required('Please enter logo title!'),
        image: Yup.mixed().required('Please upload your logo!'),
    });

    // function to call the api
    const handleSubmit = async (values) => {
        const formData = new FormData();
        formData.append('title', values.title);
        formData.append('image', values.image);
        formData.append('token', initialValues.token);

        try {
            setLoading(true);
            const response = await axios.post('/upload_logo', formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data'
                }
            });
            setLoading(false);
            toast.success('Logo added successfully');
            navigate(`/profile/logo`)
        } catch (error) {
            console.error('Error uploading logo:', error);
            setLoading(false);
        }
    };

    return (
        <>
            {loading ? (<SpinnerMain />) : (<div className='p-8 lg:w-[70%] md:w-[80%] w-full'>
                <div>
                    <h3 className="mb-4 lg:mb-0 text-[1.5rem] leading-[2.5rem] text-[#0052CC] font-semibold">Add Company Logo</h3>
                </div>
                <LogoForm
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit} />
            </div>)}
        </>
    );
};

export default AddLogo;
