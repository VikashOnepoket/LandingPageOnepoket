import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';
import axios from '../../../../api/api';
import toast from 'react-hot-toast';
import { saveAs } from 'file-saver';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
const SingleQR = ({ isOpenSingle, onCloseSingle }) => {
    const dispatch = useDispatch();
    const [template, setTemplate] = useState([]);
    const token = useSelector((state) => state.auth.token);
    const products = useSelector((state) => state.productDetails.products);
    const [loading, setLoading] = useState(false);

    // Fetch Templates
    const fetchLabels = async () => {
        try {
            const config = { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } };
            const { data } = await axios.post('/getAllGlobalTemplates', { token }, config);
            setTemplate(data);
        } catch (error) {
            console.error('Error fetching templates:', error);
        }
    };

    useEffect(() => {
        fetchLabels();
    }, []);

    // Yup Validation Schema
    const validationSchema = Yup.object().shape({
        selectedProduct: Yup.object()
            .required('Please select a product'),
        // serialNo: Yup.string()
        //     .required('Serial Number is required'),
        // quantity: Yup.number()
        //     .required('Quantity is required')
        //     .positive('Quantity must be positive')
        //     .integer('Quantity must be an integer')
        //     .min(1, 'Quantity must be at least 1'),
        selectedTemplate: Yup.object()
            .required('Please select a template'),
    });

    const handleGenerateQR = async (values) => {
        const { selectedProduct, serialNo, quantity, selectedTemplate } = values;

        const payload = {
            product_id: selectedProduct.value,
            quantity,
            QR_size: '',
            serial_no: serialNo,
            QR_copies: '1',
            template_id: selectedTemplate.value,
            dynamic_qr : '0'
        };

        try {
            setLoading(true);
            const response = await axios.post('/lp_print_QR', payload, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });

            if (response.data) {
                toast.success('QR Codes generated successfully');
                window.open(response.data, '_blank');

                const qrUrl = response.data;
                saveAs(qrUrl, 'qrPdf');
            }
        } catch (error) {
            console.error('Error generating QR codes:', error);
            toast.error('Failed to generate QR Codes');
        } finally {
            setLoading(false);
        }
    };

    // Custom styles for Select component
    const customStyles = {
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isFocused ? '#f5f5f5' : 'white',
            color: '#333',
            cursor: 'pointer',
            '&:hover': {
                backgroundColor: '#adc8ef',
            },
        }),
        control: (provided, state) => ({
            ...provided,
            borderColor: state.isFocused ? '#0052cc' : '#ccc',
            boxShadow: state.isFocused ? '0 0 0 1px #0052cc' : 'none',
            '&:hover': {
                borderColor: '#0052cc',
            },
        }),
        menuPortal: (provided) => ({
            ...provided,
            zIndex: 9999,
        }),
        menu: (provided) => ({
            ...provided,
            zIndex: 9999,
        }),
    };

    // cutomer options
    const customOption = (props) => {
        const { innerRef, innerProps, data } = props;
        return (
            <div
                ref={innerRef}
                {...innerProps}
                className="flex justify-between p-2 hover:bg-[#adc8ef] hover:cursor-pointer"
            >
                <span className="text-[14px] leading-7">{data.label}</span>
                <span className="hover:text-[#0052cc] hover:cursor-pointer text-[14px] leading-7">
                    <a href={data.pdf} target="_blank" rel="noopener noreferrer" className="hover:underline">
                        View PDF
                    </a>
                </span>
            </div>
        );
    };


    return (
        <>
            {isOpenSingle && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 modal-backdrop"
                    onClick={(e) => e.target.classList.contains('modal-backdrop') && onCloseSingle()}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white p-8 rounded-lg shadow-lg"
                        style={{ minWidth: 300, maxWidth: 600 }}
                    >
                        <Formik
                            initialValues={{
                                selectedProduct: null,
                                serialNo: 'ABC_123',
                                quantity: '1',
                                selectedTemplate: null,
                            }}
                            validationSchema={validationSchema}
                            onSubmit={handleGenerateQR}
                        >
                            {({ setFieldValue, values }) => (
                                <Form>
                                    <div className="mb-4">
                                        <label className="text-[14px] font-semibold mb-2 text-[#58595A]">
                                            Select Product 
                                        </label>
                                        <Select
                                            value={values.selectedProduct}
                                            onChange={(option) => setFieldValue('selectedProduct', option)}
                                            options={products
                                                .filter((product) => {
                                                    return product?.dynamic_qr === "" || product?.dynamic_qr === "0";
                                                })
                                                .map((product) => ({
                                                    value: product.product_id,
                                                    label: product.product_name,
                                                }))
                                            }
                                            styles={customStyles}
                                            placeholder="Select a product"
                                            isLoading={loading}
                                            menuPortalTarget={null}
                                            menuPosition="fixed"
                                        />

                                        <ErrorMessage name="selectedProduct" component="div" className="text-red-500 text-sm" />
                                    </div>

                                    <div className="mb-4">
                                        <label className="text-[14px] font-semibold mb-2 text-[#58595A]">
                                            Serial Number 
                                        </label>
                                        <Field
                                            type="text"
                                            name="serialNo"
                                            disabled
                                            className="input border border-gray-300 rounded-md w-full py-2 px-3 focus:border-[#0052cc] mt-1"
                                            placeholder="Enter serial number"
                                        />
                                        <ErrorMessage name="serialNo" component="div" className="text-red-500 text-sm" />
                                    </div>

                                    <div className="mb-4">
                                        <label className="text-[14px] font-semibold mb-2 text-[#58595A]">
                                            Number Of QR
                                        </label>
                                        <Field
                                            type="number"
                                            name="quantity"
                                            disabled
                                            
                                            className="input border border-gray-300 rounded-md w-full py-2 px-3 focus:border-[#0052cc] mt-1"
                                            placeholder="Enter number of QR codes"
                                        />
                                        <ErrorMessage name="quantity" component="div" className="text-red-500 text-sm" />
                                    </div>

                                    <div className="mb-4">
                                        <label className="text-[14px] font-semibold mb-2 text-[#58595A]">
                                            Select Template
                                        </label>
                                        <Select
                                            value={values.selectedTemplate}
                                            onChange={(option) => setFieldValue('selectedTemplate', option)}
                                            options={template.map((template) => ({
                                                value: template.template_id,
                                                label: template.template_name,
                                            }))}
                                            components={{ Option: customOption }}
                                            styles={customStyles}
                                            placeholder="Select a Template"
                                            isLoading={loading} menuPortalTarget={null} menuPosition="fixed"
                                        />
                                        <ErrorMessage name="selectedTemplate" component="div" className="text-red-500 text-sm" />
                                    </div>

                                    <div className="flex justify-center mt-8">
                                        <button
                                            type="submit"
                                            className="py-2 px-5 rounded-md bg-[#0052CC] text-white w-48"
                                            disabled={loading}
                                        >
                                            {loading ? 'Generating...' : 'Generate'}
                                        </button>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </motion.div>
                </motion.div>
            )}
        </>
    );
};

export default SingleQR;
