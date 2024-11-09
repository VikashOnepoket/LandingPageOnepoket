import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const FormTechnicalExecutiveDetails = ({
    formData,
    validationSchema,
    addTechnicalExecutiveDetails
}) => {

    const handleSubmit = (values) => {
        addTechnicalExecutiveDetails(values);
    };

    return (
        <Formik
            initialValues={{ executives: formData }}
            validationSchema={Yup.object().shape({ executives: validationSchema })}
            onSubmit={(values) => handleSubmit(values.executives)}
            enableReinitialize
        >
            {({ values, setFieldValue }) => (
                <Form>
                    {values.executives.map((data, index) => (
                        <div className='mt-5' key={index}>
                            {/* Centre Name */}
                            <div className='flex flex-col gap-2'>
                                <label className='text-[14px] leading-[18px] text-[#58595A] font-semibold'> Name</label>
                                <Field
                                    type='text'
                                    name={`executives[${index}].name`}
                                    placeholder='Enter Name'
                                    className='input md:w-[80%] lg:w-[70%] border border-gray-300 rounded-md w-full py-2 px-3'
                                />
                                <ErrorMessage name={`executives[${index}].name`} component="div" className="text-red-500 text-sm" />
                            </div>

                            {/* Phone Number */}
                            <div className='flex flex-col gap-2 mt-5'>
                                <label className='text-[14px] leading-[18px] text-[#58595A] font-semibold'>Phone Number</label>
                                <Field
                                    type=''
                                    name={`executives[${index}].phone_number`}
                                    placeholder='Enter Phone Number'
                                    className='input md:w-[80%] lg:w-[70%] border border-gray-300 rounded-md w-full py-2 px-3'
                                />
                                <ErrorMessage name={`executives[${index}].phone_number`} component="div" className="text-red-500 text-sm" />
                            </div>

                            {/* Email */}
                            <div className='flex flex-col gap-2 mt-5'>
                                <label className='text-[14px] leading-[18px] text-[#58595A] font-semibold'>Email</label>
                                <Field
                                    type='text'
                                    name={`executives[${index}].email`}
                                    placeholder='Enter Email'
                                    className='input md:w-[80%] lg:w-[70%] border border-gray-300 rounded-md w-full py-2 px-3'
                                />
                                <ErrorMessage name={`executives[${index}].email`} component="div" className="text-red-500 text-sm" />
                            </div>

                            <div className='lg:w-[70%] md:w-[80%] mt-10'>
                                <hr />
                            </div>
                        </div>
                    ))}
                    {/* Add User Button */}
                    <div className='flex justify-end lg:w-[70%] md:w-[80%] mt-5'>
                        <button
                            type='button'
                            className='text-[#0052cc] text-[14px] leading-[18px] font-bold rounded-md flex items-center px-3 py-2'
                            onClick={() => setFieldValue('executives', [...values.executives, { name: "", phone_number: "", email: "" }])}
                        >
                            <span className="material-symbols-outlined mr-2">add</span>
                            Add Centre
                        </button>
                    </div>
                    {/* Submit Button */}
                    <div className='flex justify-end mt-5 lg:w-[70%] md:w-[80%] gap-5'>
                        <button
                            type="button"
                            className="text-[#58595A] border border-[#8F9091] text-[14px] leading-[18px] font-bold rounded-md flex items-center px-3 py-2"
                        >
                            Discard
                        </button>
                        <button type='submit' className='bg-[#0052CC] text-white rounded-md px-5 py-2'>
                            Save
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default FormTechnicalExecutiveDetails;
