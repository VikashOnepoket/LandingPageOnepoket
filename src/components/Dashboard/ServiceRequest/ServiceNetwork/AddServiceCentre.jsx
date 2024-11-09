import React, { useState } from 'react';
import axios from '../../../../api/api';
import { useSelector } from 'react-redux';
import SpinnerMain from '../../Spinner/SpinnerMain';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import FormTechnicalExecutiveDetails from './FormTechnicalExecutiveDetails';


const AddServiceCentre = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState([{ name: "", phone_number: "", email: "" }]);
    const token = useSelector((state) => state.auth.token);
    const addTechnicalExecutiveDetails = async (executiveDetails) => {
        try {
            setLoading(true);
            await axios.post(
                '/add_technical_executive_details',
                { executive_details: executiveDetails },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            navigate('/service_request/service_network');
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };

    // Validation Schema
    const validationSchema = Yup.array().of(
        Yup.object().shape({
            name: Yup.string().required('Name is required !'),
            phone_number: Yup.string()
                .required('Phone Number is required !')
                .matches(/^[0-9]+$/, 'Phone Number must be numeric !')
                .length(10, 'Phone Number must be exactly 10 digits !'),
            email: Yup.string()
                .email('Invalid email format !')
                .required('Email is required !'),
        })
    );


    return (
        <>
            {loading ? (
                <SpinnerMain />
            ) : (
                <div className='mt-3 p-8'>
                    <div className='flex justify-between gap-10 items-center'>
                        <h3 className="mb-4 lg:mb-0 text-[1.5rem] leading-[2.5rem] text-[#0052CC] font-semibold">
                            Add Technical Executive Details
                        </h3>
                    </div>

                    {/* Technical Executive Details Form */}
                    <FormTechnicalExecutiveDetails
                        formData={formData}
                        validationSchema={validationSchema}
                        addTechnicalExecutiveDetails={addTechnicalExecutiveDetails}
                    />
                </div>
            )}
        </>
    );
};

export default AddServiceCentre;
