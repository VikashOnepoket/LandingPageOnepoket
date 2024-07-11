import React, { useState } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Header from '../Header/Header'
import { useNavigate } from 'react-router-dom'
import QRBatchModal from './AddProducts/QRBatchModal'

const Product = () => {
    const navigate = useNavigate()
    const [showModal, setShowModal] = useState(false); // State to manage modal visibility

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };
    return (
        <>

            <div className=''>
                {/* <Header /> */}
                <div className='mt-3 p-5'>
                    <div className='flex justify-between gap-10 items-center'>
                        <div>
                            <h3 className="mb-4 lg:mb-0 text-[1.5rem] leading-[2.5rem] text-[#0052CC] font-semibold">Products</h3>
                        </div>
                        <div className='flex gap-3'>
                            <button block className='bg-[#0052CC] text-white hover:bg-[#0052cc] hover:text-white border border-[#0052cc] text-[14px] leading-[18px] font-bold rounded-md flex  items-center px-3 py-2' onClick={() => navigate(`/products/add_product`)}>
                                <span className="material-symbols-outlined mr-2">add</span>
                                Add Product
                            </button>
                            <button block className=' text-[#58595A]  border border-[#8F9091] text-[14px] leading-[18px] font-bold rounded-md flex  items-center px-3 py-2'>
                                <span className="material-symbols-outlined mr-2">add</span>
                                Multiple Product
                            </button>
                            <button className='text-[#58595A]  border border-[#8F9091] text-[14px] leading-[18px] font-bold rounded-md flex  items-center px-3 py-2' onClick={openModal}>
                                <span className="material-symbols-outlined mr-2">add</span>
                                QR Batch
                            </button>
                            <button block className='text-[#58595A]   text-[14px] leading-[18px] font-bold rounded-md flex  items-center px-3 py-2'>
                                <span className="material-symbols-outlined mr-2">filter_alt</span>
                                Filter
                            </button>

                        </div>
                    </div>

                    {/* table */}
                    <div className="container mx-auto mt-10">
                        <div className="overflow-x-auto">
                            <table className="min-w-full  border-gray-200">
                                <thead className="">
                                    <tr>

                                        <th className="py-2 px-4 border-b text-left  text-[#202123BF] text-[12px] leading-[17px] font-semibold">Created On</th>
                                        <th className="py-2 px-4 border-b text-left  text-[#202123BF] text-[12px] leading-[17px] font-semibold">Name</th>
                                        <th className="py-2 px-4 border-b text-left  text-[#202123BF] text-[12px] leading-[17px] font-semibold">Category</th>
                                        <th className="py-2 px-4 border-b text-left  text-[#202123BF] text-[12px] leading-[17px] font-semibold">Warranty</th>

                                    </tr>
                                </thead>
                                {/* <tbody className=''>
                                        <tr className="p-5">
                                            <td className="py-5 px-4 border-b  font-medium  text-[#0052cc] hover:underline"><a href="#">LG Service Centre</a></td>
                                            <td className="py-5 px-4 border-b  font-medium text-[#202123BF]">1234567899</td>
                                            <td className="py-5 px-4 border-b  font-medium text-[#202123BF]">xyz123@gmail.com</td>
                                            <td className="py-5 px-4 border-b  font-medium text-[#202123BF]">CIT Road, Kolkata-700010, W.B</td>
                                        </tr>
                                        <tr className="p-5">
                                            <td className="py-5 px-4 border-b  font-medium  text-[#0052cc] hover:underline"><a href="#">LG Service Centre</a></td>
                                            <td className="py-5 px-4 border-b  font-medium text-[#202123BF]">1234567899</td>
                                            <td className="py-5 px-4 border-b  font-medium text-[#202123BF]">xyz123@gmail.com</td>
                                            <td className="py-5 px-4 border-b  font-medium text-[#202123BF]">CIT Road, Kolkata-700010, W.B</td>
                                        </tr>
                                        <tr className="p-5">
                                            <td className="py-5 px-4 border-b  font-medium  text-[#0052cc] hover:underline"><a href="#">LG Service Centre</a></td>
                                            <td className="py-5 px-4 border-b  font-medium text-[#202123BF]">1234567899</td>
                                            <td className="py-5 px-4 border-b  font-medium text-[#202123BF]">xyz123@gmail.com</td>
                                            <td className="py-5 px-4 border-b  font-medium text-[#202123BF]">CIT Road, Kolkata-700010, W.B</td>
                                        </tr>

                                    </tbody> */}
                            </table>
                        </div>
                    </div>
                    <QRBatchModal isOpen={showModal} onClose={closeModal} />
                </div>
            </div>


        </>
    )
}

export default Product
