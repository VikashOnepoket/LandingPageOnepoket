import React from 'react';
import { FaFilePdf, FaDownload } from 'react-icons/fa';

const InvoiceDownload = ({ invoiceUrl }) => {
    // Extract the file name from the URL
    const fileName = invoiceUrl ? invoiceUrl.split('/').pop() : 'Invoice.pdf';

    return (
        <div className='mt-8'>
            <h3 className='text-xs font-semibold text-[#20212380]'>Invoice</h3>
            <div className='border rounded-md h-[60px] mt-3 flex items-center px-4'>
                <FaFilePdf className="text-red-500 text-2xl mr-3" />
                <span className='flex-1 text-gray-800'>{fileName}</span>
                <a href={invoiceUrl} download={fileName} className='text-gray-500 hover:text-gray-700'>
                    <FaDownload className="text-xl" />
                </a>
            </div>
        </div>
    );
};

export default InvoiceDownload