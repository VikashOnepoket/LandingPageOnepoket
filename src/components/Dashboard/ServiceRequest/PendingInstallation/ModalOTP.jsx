// Modal.js
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import axios from '../../../../api/api'

const ModalOTP = ({ isOpen, onClose, number, loading, selectedOption, selectedInstallationId, pendingFunction }) => {
    if (!isOpen) return null;

    const [otpValue, setOtpValue] = useState('')

    const handleSubmit = () => {
        handleModalSubmit()
        pendingFunction()
        onClose();
    };

    const sendOtpToPhone = async () => {
        // Replace this with actual API request
        try {
            const { data } = await axios.post('/send_complete_installation_otp', { phone_number: number })
            return true;

        } catch (error) {
            console.log(error)
        }
    };

    const otpSent = useRef(false);
    console.log(otpSent.current, "useref")

    useEffect(() => {
        if (isOpen && number && !otpSent.current) {
            sendOtpToPhone();
            otpSent.current = true;
        }
    }, [isOpen, number]);




    const handleInputChange = (e) => {
        setOtpValue(e.target.value)
    }

    const handleModalSubmit = async () => {
        try {
            const { data } = await axios.put('/update_lp_pending_installation', {
                id: selectedInstallationId,
                status: selectedOption,
                otp: otpValue,
                phone_number: number
                // Assuming status is set to 'completed' on submit
            });
            pendingFunction(); // Refresh data
        } catch (err) {
            console.error('Error updating status:', err);
            
        }
    };


    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
            onClick={onClose}
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-white p-6 rounded-lg shadow-lg"
                style={{ minWidth: 300, maxWidth: 600 }}
                onClick={(e) => e.stopPropagation()} // Prevent closing on inner click
            >
                <div>
                    <h1 className="text-center leading-8 font-medium"> OTP has been sent to the number - {number}</h1>

                </div>
                <div className="mb-4 mt-3">
                    <label className='ml-2 text-[14px] leading-4 inter font-semibold text-[#202123BF]'>
                        <span className='text-[#EE4444] mr-1'>*</span>
                        Enter OTP
                    </label>
                    <input
                        type="number"
                        name="otpValue"
                        className="input border border-gray-300 rounded-md w-full py-2 px-3 focus:border-[#0052cc] focus:border focus-within:ring-1 appearance-none transition duration-150 ease-in-out mt-1"
                        placeholder="Enter OTP"
                        onChange={handleInputChange}
                    />
                </div>
                <button
                    onClick={handleSubmit}
                    className="py-2 px-5 rounded-md hover:bg-[#0052cc] bg-[#0052CC] text-white border border-[#0052CC] max-w-md w-full"
                    disabled={loading}
                >
                    {loading ? 'Loading...' : 'Submit'}
                </button>
            </motion.div>
        </motion.div>
    );
};

export default ModalOTP;
