import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const LogoForm = ({ initialValues, validationSchema, onSubmit }) => {
    return (
        <>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {({ isSubmitting, setFieldValue, values }) => {
                    const removeImage = () => {
                        setFieldValue('image', null);
                    };

                    const handleDiscardClick = () => {
                        setFieldValue('title', '');
                        setFieldValue('image', null);
                    };

                    return (
                        <Form className="flex flex-col gap-4 mt-6">
                            {/* Name Field */}
                            <div className="flex flex-col gap-1">
                                <label className="ml-2 text-[16px] leading-4 inter font-semibold text-[#202123BF]">
                                    <span className="text-[#EE4444] mr-1"> *</span>
                                    Title
                                </label>
                                <Field
                                    type="text"
                                    name="title"
                                    placeholder="Enter your name"
                                    className="input border border-gray-300 rounded-md w-full py-2 px-3"
                                />
                                <ErrorMessage
                                    name="title"
                                    component="div"
                                    className="text-red-500 text-sm"
                                />
                            </div>

                            {/* Image Upload */}
                            <div className="flex flex-col gap-1 mt-2">
                                <label className="ml-2 text-[16px] leading-4 inter font-semibold text-[#202123BF]">
                                    <span className="text-[#EE4444] mr-1"> *</span>
                                    Company Logo
                                </label>

                                <div className="bg-white rounded-md border p-6 mt-2">
                                    <div className="flex justify-center items-center mb-4">
                                        <label
                                            htmlFor="imageUpload"
                                            className="cursor-pointer flex flex-col justify-center items-center w-full h-48"
                                        >
                                            <span className="material-symbols-outlined text-gray-400 text-5xl">
                                                add_a_photo
                                            </span>
                                            <p className="text-gray-500 mt-4 text-sm font-light">
                                                Drop your image here, or browse
                                            </p>
                                            <p className="text-center text-sm text-gray-500 mt-4">
                                                Support: jpeg, png
                                            </p>
                                        </label>
                                        <input
                                            type="file"
                                            id="imageUpload"
                                            name="image"
                                            accept="image/*"
                                            onChange={(e) => {
                                                setFieldValue('image', e.target.files[0]);
                                            }}
                                            className="hidden"
                                        />
                                    </div>

                                    {/* Display the uploaded image */}
                                    {values.image && (
                                        <div className="flex justify-center items-center flex-col">
                                            <img
                                                src={URL.createObjectURL(values.image)}
                                                alt="Uploaded"
                                                className="w-64 h-64"
                                            />
                                            <button
                                                type="button"
                                                className="bg-[#0052CC] text-white hover:bg-[#0052cc] border border-[#0052cc] text-[14px] leading-[18px] font-bold rounded-md flex items-center px-3 py-2 mt-3"
                                                onClick={removeImage}
                                            >
                                                Remove Image
                                            </button>
                                        </div>
                                    )}
                                </div>

                                <ErrorMessage
                                    name="image"
                                    component="div"
                                    className="text-red-500 text-sm"
                                />
                            </div>

                            {/*  Button */}
                            <div className="mt-10 flex justify-end gap-5">
                                <button
                                    type="button"
                                    onClick={handleDiscardClick}
                                    className="text-[#58595A] border border-[#8F9091] text-[14px] leading-[18px] font-bold rounded-md flex items-center px-3 py-2"
                                >
                                    Discard
                                </button>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="bg-[#0052CC] text-white hover:bg-[#0052cc] border border-[#0052cc] text-[14px] leading-[18px] font-bold rounded-md flex items-center px-3 py-2"
                                >
                                    Save
                                </button>
                            </div>
                        </Form>
                    );
                }}
            </Formik>
        </>
    );
};

export default LogoForm;
