import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Select from 'react-select';

const QRBatchModal = ({ isOpen, onClose }) => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [numberOfQRCodes, setNumberOfQRCodes] = useState('');

    const handleBackdropClick = (e) => {
        if (e.target.classList.contains('modal-backdrop')) {
            onClose();
        }
    };

    const products = [
        { value: 'product1', label: 'Product 1' },
        { value: 'product2', label: 'Product 2' },
        { value: 'product3', label: 'Product 3' }
    ];

    const categories = [
        { value: 'category1', label: 'Category 1' },
        { value: 'category2', label: 'Category 2' },
        { value: 'category3', label: 'Category 3' }
    ];

    const customStyles = {
        control: (provided, state) => ({
            ...provided,
            borderColor: state.isFocused ? '#0052cc' : provided.borderColor,
            boxShadow: state.isFocused ? '0 0 0 1px #0052cc' : provided.boxShadow,
            '&:hover': {
                borderColor: state.isFocused ? '#0052cc' : provided.borderColor
            }
        })
    };

    const handleGenerateQR = () => {
        // Add logic for generating QR codes here
        console.log('Generate QR codes for', {
            product: selectedProduct,
            category: selectedCategory,
            numberOfQRCodes
        });
    };

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
                        initial={{ opacity: 0, scale: 0.9 }}  // Starting state
                        animate={{ opacity: 1, scale: 1 }}   // Animation for appearing
                        exit={{ opacity: 0, scale: 0.9 }}    // Animation for disappearing
                        transition={{ duration: 0.3 }}       // Transition duration
                        className="bg-white p-8 rounded-lg shadow-lg"
                        style={{ minWidth: 300, maxWidth: 600 }}
                    >

                        <div className="mb-4">
                            <label className="text-[14px] leading-[18px] font-semibold mb-2 text-[#58595A] ">Select Product</label>
                            <Select
                                value={selectedProduct}
                                onChange={setSelectedProduct}
                                options={products}
                                styles={customStyles}
                                className='mt-1'
                                placeholder="Select a product"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="text-[14px] leading-[18px] font-semibold mb-2 text-[#58595A]">Select Category</label>
                            <Select
                                value={selectedCategory}
                                onChange={setSelectedCategory}
                                options={categories}
                                styles={customStyles}
                                className='mt-1'
                                placeholder="Select a category"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="text-[14px] leading-[18px] font-semibold mb-2 text-[#58595A]">Number Of QR</label>
                            <input
                                type="number"
                                value={numberOfQRCodes}
                                onChange={(e) => setNumberOfQRCodes(e.target.value)}
                                className="input border border-gray-300 rounded-md w-full py-2 px-3 focus:border-[#0052cc] focus:border focus-within:ring-1 appearance-none transition duration-150 ease-in-out mt-1"
                                placeholder="Enter number of QR codes"
                            />
                        </div>
                        <div className='flex justify-center mt-8'>
                            <button
                                className=" py-2 px-5 rounded-md hover:bg-[#0052cc] bg-[#0052CC] text-white border border-[#0052CC] max-w-md w-48"
                                onClick={handleGenerateQR}
                            >
                                Generate
                            </button>
                        </div>

                    </motion.div>
                </motion.div>
            )}
        </>
    );
};

export default QRBatchModal;
