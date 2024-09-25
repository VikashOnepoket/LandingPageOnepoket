import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';
import axios from '../../../../api/api'; // Make sure axios is imported
import toast from 'react-hot-toast';

const QRBatchModal = ({ isOpen, onClose }) => {
    const dispatch = useDispatch();
    const [template, setTemplate] = useState([]);
    const token = useSelector((state) => state.auth.token);
    const products = useSelector((state) => state.productDetails.products); // Fetch product data from Redux

    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        selectedProduct: null,
        serialNo: '',
        quantity: '',
        qrCopies: '',
        selectedTemplate: null, // Corrected this key name
    });

    // Fetch products only if needed
    // useEffect(() => {
    //     if (token && products.length === 0) {
    //         setLoading(true);
    //         dispatch(fetchProducts(token)) // Assuming fetchProducts is already set up in your slice
    //             .unwrap()
    //             .finally(() => {
    //                 setLoading(false);
    //             });
    //     }
    // }, [dispatch, token, products.length]);

    const handleBackdropClick = (e) => {
        if (e.target.classList.contains('modal-backdrop')) {
            onClose();
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSelectChange = (selectedOption, name) => {
        setFormData(prevState => ({
            ...prevState,
            [name]: selectedOption
        }));
    };

    // const customStyles = {
    //     control: (provided, state) => ({
    //         ...provided,
    //         borderColor: state.isFocused ? '#0052cc' : provided.borderColor,
    //         boxShadow: state.isFocused ? '0 0 0 1px #0052cc' : provided.boxShadow,
    //         '&:hover': {
    //             borderColor: state.isFocused ? '#0052cc' : provided.borderColor
    //         }
    //     })
    // };
    const customStyles = {
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isFocused ? '#f5f5f5' : 'white', // Change background on focus or hover
            color: '#333', // Change the text color
            cursor: 'pointer', // Show pointer on hover
            '&:hover': {
                backgroundColor: '#adc8ef', // Change hover background color
            },
        }),
        control: (provided, state) => ({
            ...provided,
            borderColor: state.isFocused ? '#0052cc' : '#ccc', // Custom border color
            boxShadow: state.isFocused ? '0 0 0 1px #0052cc' : 'none', // Custom shadow on focus
            '&:hover': {
                borderColor: '#0052cc',
            },
        }),
    };
    
   
    

    // const customStylesTemplate = {
    //     control: (provided, state) => ({
    //         ...provided,
    //         borderColor: state.isFocused ? '#0052cc' : provided.borderColor,
    //         boxShadow: state.isFocused ? '0 0 0 1px #0052cc' : provided.boxShadow,
    //         '&:hover': {
    //             borderColor: state.isFocused ? '#0052cc' : provided.borderColor
    //         }
    //     })
    // };

    const handleGenerateQR = async () => {
        const { selectedProduct, serialNo, quantity, qrCopies, selectedTemplate } = formData;
         console.log("form data" , formData);
        if (!selectedProduct || !serialNo || !quantity || !selectedTemplate) {
            toast.error("Please fill in all fields");
            return;
        }
        console.log(selectedProduct , "selectedProduct", selectedProduct)
        const payload = {
            product_id: selectedProduct.value,
            quantity,
            QR_size: "",
            serial_no: serialNo,
            QR_copies: '1',
            template_id: selectedTemplate.value // Use the selected template value
        };

        try {
            setLoading(true);
            const response = await axios.post('/lp_print_QR', payload, {
                headers: {
                    Authorization: `Bearer ${token}`, // Fixed string interpolation
                    'Content-Type': 'application/json'
                }
            });

            if (response.data) {
                toast.success("QR Codes generated successfully");
                window.open(response.data, "_blank"); // Open the response URL in a new tab
            }
        } catch (error) {
            console.error("Error generating QR codes:", error);
            toast.error("Failed to generate QR codes");
        } finally {
            setLoading(false);
        }
    };

    const customOption = (props) => {
        const { innerRef, innerProps, data } = props;
        return (
            <div ref={innerRef} {...innerProps} className="flex justify-between p-2 hover:bg-[#adc8ef] hover:cursor-pointer">
                <span className='text-[14px] leading-7'>{data.label}</span>
                {/* <span>View PDF</span> */}

                <span className='hover:text-[#0052cc] hover:cursor-pointer text-[14px] leading-7'><a href={data.pdf} target="_blank" rel="noopener noreferrer" className='hover:underline ' >View PDF</a></span>
            </div>
        );
    };

    const fetchLabels = async () => {
        try {
            const config = { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } };
            const { data } = await axios.post('/getAllGlobalTemplates', { token }, config); // Fixed URL
            console.log(data , "template")
            setTemplate(data);
        } catch (error) {
            console.error("Error fetching templates:", error);
        }
    };

    useEffect(() => {
        fetchLabels();
    }, []); // Ensure the token is available when fetching templates
     console.log(products , " products")
    return (
        <>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 modal-backdrop"
                    onClick={handleBackdropClick}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white p-8 rounded-lg shadow-lg"
                        style={{ minWidth: 300, maxWidth: 600 }}
                    >
                        <div className="mb-4">
                            <label className="text-[14px] leading-[18px] font-semibold mb-2 text-[#58595A]">Select Product</label>
                            <Select
                                value={formData.selectedProduct}
                                onChange={(option) => handleSelectChange(option, 'selectedProduct')}
                                options={products.map(product => ({
                                    value: product?.product_id,
                                    label: product?.product_name,
                                }))}
                                styles={customStyles}
                                className='mt-1'
                                placeholder="Select a product"
                                isLoading={loading}
                            />
                        </div>

                        <div className="mb-4">
                            <label className="text-[14px] leading-[18px] font-semibold mb-2 text-[#58595A]">Serial Number</label>
                            <input
                                type="text"
                                name="serialNo"
                                value={formData.serialNo}
                                onChange={handleInputChange}
                                className="input border border-gray-300 rounded-md w-full py-2 px-3 focus:border-[#0052cc] focus:border focus-within:ring-1 appearance-none transition duration-150 ease-in-out mt-1"
                                placeholder="Enter serial number"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="text-[14px] leading-[18px] font-semibold mb-2 text-[#58595A]">Number Of QR</label>
                            <input
                                type="number"
                                name="quantity"
                                value={formData.quantity}
                                onChange={handleInputChange}
                                className="input border border-gray-300 rounded-md w-full py-2 px-3 focus:border-[#0052cc] focus:border focus-within:ring-1 appearance-none transition duration-150 ease-in-out mt-1"
                                placeholder="Enter number of QR codes"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="text-[14px] leading-[18px] font-semibold mb-2 text-[#58595A]">Select Template</label>
                            <Select
                                value={formData.selectedTemplate}
                                onChange={(option) => handleSelectChange(option, 'selectedTemplate')}
                                options={template?.map(template => ({
                                    value: template?.template_id,
                                    label: template?.template_name,
                                    pdf:template?.pdf_url
                                }))}
                                components={{ Option: customOption }}
                                styles={customStyles}
                                className='mt-1'
                                placeholder="Select a Template"
                                isLoading={loading}
                            />
                        </div>

                        <div className='flex justify-center mt-8'>
                            <button
                                className="py-2 px-5 rounded-md hover:bg-[#0052cc] bg-[#0052CC] text-white border border-[#0052CC] max-w-md w-48"
                                onClick={handleGenerateQR}
                                disabled={loading}
                            >
                                {loading ? 'Generating...' : 'Generate'}
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </>
    );
};

export default QRBatchModal;
