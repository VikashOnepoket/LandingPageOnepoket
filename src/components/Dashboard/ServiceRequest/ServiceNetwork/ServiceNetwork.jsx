import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Drawer } from '@mui/material';
import Select from 'react-select'
import SearchInput from '../../SearchInput/SearchInput';
const ServiceNetwork = () => {
    const navigate = useNavigate();
    const [drawerOpen, setDrawerOpen] = useState(false);
    const openDrawer = () => {
        setDrawerOpen(true);
    };

    const closeDrawer = () => {
        setDrawerOpen(false);
    };

    // filter
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);

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

    const dateOptions = [
        { value: 'today', label: 'Waiting Longest' },
        { value: 'yesterday', label: 'Recent Request' },


    ];

    const handleCheckboxChange = (value) => {
        setSelectedCheckboxes((prevSelected) =>
            prevSelected.includes(value)
                ? prevSelected.filter((v) => v !== value)
                : [...prevSelected, value]
        );
    };

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
    return (
        <>
            <div className='mt-3 p-8'>
                <div className="lg:flex items-center justify-between mb-4">
                    <h3 className="mb-4 lg:mb-0 text-[1.5rem] leading-[2.5rem] font-semibold text-[#0052CC]">Service Request</h3>
                    {/* <FilterServiceNetwork /> */}
                    <div className='flex gap-3 '>
                        <SearchInput />
                        <button block className='text-[#58595A] text-[14px] leading-[18px] font-bold rounded-md flex items-center px-3 py-2' onClick={openDrawer}>
                            <span className="material-symbols-outlined mr-2">filter_alt</span>
                            Filter
                        </button>
                    </div>
                </div>
                <Drawer anchor="right" open={drawerOpen} onClose={closeDrawer}>
                    <div style={{ width: '350px' }}>
                        {/* Content of your filter drawer */}
                        <div style={{ padding: '20px' }}>
                            <div className='flex justify-between gap-5 items-center'>
                                <h2 className='text-[22px] leading-[28px] font-semibold text-[#0052cc]'>Filter</h2>
                                <span className="material-symbols-outlined text-[#8F9091] text-[20px] cursor-pointer" onClick={closeDrawer}>
                                    close
                                </span>
                            </div>
                        </div>
                        <div className='border-t'></div>
                        <div style={{ padding: "20px" }}>

                            {/* by country */}
                            <div className="mb-4">
                                <label className="text-[16px] leading-[21px] font-semibold mb-2 text-[#000000]">By Country</label>
                                <Select
                                    value={selectedProduct}
                                    onChange={setSelectedProduct}
                                    options={products}
                                    styles={customStyles}
                                    className='mt-1'
                                    placeholder="Please Select Country..."
                                />
                            </div>
                            {/* byCategory */}
                            <div className="mb-4 mt-5">
                                <label className="text-[16px] leading-[21px] font-semibold mb-2 text-[#000000]">By State</label>
                                <Select
                                    value={selectedCategory}
                                    onChange={setSelectedCategory}
                                    options={categories}
                                    styles={customStyles}
                                    className='mt-1'
                                    placeholder="Please Select State..."
                                />
                            </div>
                            {/* by date */}
                            <div className="mb-4 mt-5">
                                <label className="text-[16px] leading-[21px] font-semibold mb-2 text-[#000000]">By District</label>
                                <input
                                    type="date"
                                    className="input border border-gray-300 rounded-md w-full py-2 px-3 focus:border-[#0052cc] focus:border focus-within:ring-1 appearance-none transition duration-150 ease-in-out mt-1"
                                    placeholder="Enter District"
                                />
                            </div>

                        </div>
                        {/* footee button */}
                        <div className='flex justify-end  mt-5 mb-5 gap-5'>
                            <button className='text-[#58595A]  border border-[#8F9091] text-[14px] leading-[18px] font-bold rounded-md flex  items-center px-3 py-2'>
                                Discard
                            </button>
                            <button block className='bg-[#0052CC] text-white hover:bg-[#0052cc] hover:text-white border border-[#0052cc] mr-5 text-[14px] leading-[18px] font-bold rounded-md flex  items-center px-3 py-2' >
                                Apply
                            </button>
                        </div>


                    </div>
                </Drawer>
                <div className='mt-12'>
                    <div>
                        <h3 className='text-[2.5rem] leading-[3rem] font-bold text-[#202123]'>24</h3>
                    </div>
                    <div className=' mt-5 flex lg:justify-between lg:items-center lg:flex-row flex-col gap-10'>
                        <div>
                            <h3 className='text-[#0052CC] text-[1.2rem] leading-[2rem] font-semibold'>Technical Executive Details</h3>
                        </div>
                        <div className='flex gap-5'>
                            <button block className='bg-[#0052CC] text-white hover:bg-[#0052cc] hover:text-white border border-[#0052cc] text-[14px] leading-[18px] font-bold rounded-md flex  items-center px-3 py-2' onClick={() => navigate(`/service_request/service_network/add_service_centre`)}>
                                <span className="material-symbols-outlined mr-2">add</span>
                                Add Technical Executive Details
                            </button>

                        </div>

                    </div>
                </div>
                <div className="container mx-auto mt-8">
                    <div className="overflow-x-auto">
                        <table className="min-w-full  border-gray-200">
                            <thead className="">
                                <tr>

                                    <th className="py-2 px-4 border-b text-left  text-[#202123BF] text-[12px] leading-[17px] font-semibold">Name</th>
                                    <th className="py-2 px-4 border-b text-left  text-[#202123BF] text-[12px] leading-[17px] font-semibold">Phone Number</th>
                                    <th className="py-2 px-4 border-b text-left  text-[#202123BF] text-[12px] leading-[17px] font-semibold">Email</th>
                                    <th className="py-2 px-4 border-b text-left  text-[#202123BF] text-[12px] leading-[17px] font-semibold">Rating</th>

                                </tr>
                            </thead>
                            <tbody className=''>
                                <tr className="p-5">
                                    <td className="py-5 px-4 border-b  text-[12px] leading-[17px] font-semibold  text-[#0052cc] hover:underline"><a href="#">LG Service Centre</a></td>
                                    <td className="py-5 px-4 border-b  text-[12px] leading-[17px] font-semibold text-[#202123BF]">1234567899</td>
                                    <td className="py-5 px-4 border-b  text-[12px] leading-[17px] font-semibold text-[#202123BF]">xyz123@gmail.com</td>
                                    <td className="py-5 px-4 border-b  text-[12px] leading-[17px] font-semibold text-[#202123BF]">CIT Road, Kolkata-700010, W.B</td>
                                </tr>
                                <tr className="p-5">
                                    <td className="py-5 px-4 border-b  text-[12px] leading-[17px] font-semibold  text-[#0052cc] hover:underline"><a href="#">LG Service Centre</a></td>
                                    <td className="py-5 px-4 border-b  text-[12px] leading-[17px] font-semibold text-[#202123BF]">1234567899</td>
                                    <td className="py-5 px-4 border-b  text-[12px] leading-[17px] font-semibold text-[#202123BF]">xyz123@gmail.com</td>
                                    <td className="py-5 px-4 border-b  text-[12px] leading-[17px] font-semibold text-[#202123BF]">CIT Road, Kolkata-700010, W.B</td>
                                </tr>
                                <tr className="p-5">
                                    <td className="py-5 px-4 border-b  text-[12px] leading-[17px] font-semibold  text-[#0052cc] hover:underline"><a href="#">LG Service Centre</a></td>
                                    <td className="py-5 px-4 border-b  text-[12px] leading-[17px] font-semibold text-[#202123BF]">1234567899</td>
                                    <td className="py-5 px-4 border-b  text-[12px] leading-[17px] font-semibold text-[#202123BF]">xyz123@gmail.com</td>
                                    <td className="py-5 px-4 border-b  text-[12px] leading-[17px] font-semibold text-[#202123BF]">CIT Road, Kolkata-700010, W.B</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServiceNetwork
