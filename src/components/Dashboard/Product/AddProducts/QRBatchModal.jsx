import React from 'react';
import { motion } from 'framer-motion';

const QRBatchModal = ({ isOpen, onClose }) => {
    const handleBackdropClick = (e) => {
        if (e.target.classList.contains('modal-backdrop')) {
            onClose();
        }
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
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 260, damping: 20 }}
                        className="bg-white p-8 rounded-lg shadow-lg"
                        style={{ minWidth: 300, maxWidth: 600 }}
                    >
                        <h2 className="text-lg font-semibold mb-4">QR Batch Modal</h2>
                        <p>Add your modal content here...</p>
                        <button className="bg-gray-200 text-gray-700 py-2 px-4 mt-4 rounded-md hover:bg-gray-300" onClick={onClose}>
                            Close
                        </button>
                    </motion.div>
                </motion.div>
            )}
        </>
    );
};

export default QRBatchModal;
