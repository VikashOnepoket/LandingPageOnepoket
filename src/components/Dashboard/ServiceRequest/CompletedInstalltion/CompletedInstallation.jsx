import React, { useEffect, useState } from 'react'
import { FiMessageSquare } from 'react-icons/fi'
import CompletedFilter from './CompletedFilter';
import { Drawer } from '@mui/material';
import Select from 'react-select'
import SearchInput from '../../SearchInput/SearchInput';
import { useSelector } from 'react-redux';
import axios from '../../../../api/api'
import SpinnerMain from '../../Spinner/SpinnerMain';

const CompletedInstallation = () => {
    const [loading, setLoading] = useState(false);
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
        { value: 'today', label: '*' },
        { value: 'yesterday', label: '**' },
        { value: 'last7days', label: '***' },
        { value: 'last30days', label: '****' },
        { value: 'last90days', label: '*****' },

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
    const [totalCompleted, setTotalCompleted] = useState("")
    const [completedInstallationData, setCompletedInstallationData] = useState([])
    const token = useSelector((state) => state.auth.token)
    const completedInstallation = async () => {
        try {
            setLoading(true)
            const { data } = await axios.get('/lp_completed_installation', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log(data, "pending installation data")
            setCompletedInstallationData(data?.result)
            setTotalCompleted(data?.count)
            setLoading(false)
        }
        catch (err) {
            setLoading(false)
            console.log(err)
        }
    }

    useEffect(() => {
        completedInstallation()
    }, [])
    return (
        <>
            {loading ? (<SpinnerMain />) : (<div className='mt-3 p-8'>
                <div className="lg:flex items-center justify-between mb-4">
                    <h3 className="mb-4 lg:mb-0 text-[1.5rem] leading-[2.5rem] font-semibold text-[#0052CC]">Service Requests</h3>
                    {/* <FilterCompletion/> */}

                    <div className='flex gap-3 '>
                        <SearchInput />
                        <button block className='text-[#58595A] text-[14px] leading-[18px] font-bold rounded-md flex items-center px-3 py-2' onClick={openDrawer}>
                            <span className="material-symbols-outlined mr-2">filter_alt</span>
                            Filter
                        </button>
                    </div>

                </div>
                <div className='mt-12'>
                    <div>
                        <h3 className='text-[2.5rem] leading-[3rem] font-bold text-[#202123]'>{totalCompleted}</h3>
                    </div>
                    <div className=' mt-5 '>
                        <div>
                            <h3 className='text-[#0052CC] text-[1.2rem] leading-[2rem] font-semibold'>Completed Installations</h3>
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
                                {/* by product */}
                                <div className="mb-4">
                                    <label className="text-[16px] leading-[21px] font-semibold mb-2 text-[#000000]">By Product</label>
                                    <Select
                                        value={selectedProduct}
                                        onChange={setSelectedProduct}
                                        options={products}
                                        styles={customStyles}
                                        className='mt-1'
                                        placeholder="Please Select Product..."
                                    />
                                </div>
                                {/* byCategory */}
                                <div className="mb-4 mt-5">
                                    <label className="text-[16px] leading-[21px] font-semibold mb-2 text-[#000000]">By Categories</label>
                                    <Select
                                        value={selectedCategory}
                                        onChange={setSelectedCategory}
                                        options={categories}
                                        styles={customStyles}
                                        className='mt-1'
                                        placeholder="Please Select Categories..."
                                    />
                                </div>
                                {/* by date */}
                                <div className="mb-4 mt-5">
                                    <label className="text-[16px] leading-[21px] font-semibold mb-2 text-[#000000]">By Date</label>
                                    <input
                                        type="date"
                                        className="input border border-gray-300 rounded-md w-full py-2 px-3 focus:border-[#0052cc] focus:border focus-within:ring-1 appearance-none transition duration-150 ease-in-out mt-1"
                                        placeholder="Enter Date"
                                    />
                                </div>
                                {/* Checkbox list */}
                                <div className="mb-4 mt-5">
                                    <label className="text-[16px] leading-[21px] font-semibold mb-2 text-[#000000]">By Rating</label>
                                    <div className="flex flex-col gap-2 mt-2">
                                        {dateOptions.map((option) => (
                                            <label key={option.value} className="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    className="form-checkbox"
                                                    checked={selectedCheckboxes.includes(option.value)}
                                                    onChange={() => handleCheckboxChange(option.value)}
                                                    style={{ borderColor: selectedCheckboxes.includes(option.value) ? '#0052cc' : '#8F9091', backgroundColor: selectedCheckboxes.includes(option.value) ? '#0052cc' : 'transparent' }}
                                                />
                                                <span className="ml-4 text-[14px] leading-[18px] text-[#58595A] font-semibold">{option.label}</span>
                                            </label>
                                        ))}
                                    </div>
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
                </div>
                {/* table */}
                <div className="container mx-auto mt-8">
                    <div className="overflow-x-auto">
                        <table className="min-w-full  border-gray-200">
                            <thead className="">
                                <tr>
                                    <th className="py-2 px-4 border-b text-left  text-[#202123BF] text-[12px] leading-[17px] font-semibold">Request Date-Time</th>
                                    <th className="py-2 px-4 border-b text-left  text-[#202123BF] text-[12px] leading-[17px] font-semibold">Name</th>
                                    <th className="py-2 px-4 border-b text-left  text-[#202123BF] text-[12px] leading-[17px] font-semibold">Product</th>
                                    <th className="py-2 px-4 border-b text-left  text-[#202123BF] text-[12px] leading-[17px] font-semibold">Category</th>
                                    <th className="py-2 px-4 border-b text-left  text-[#202123BF] text-[12px] leading-[17px] font-semibold">Installation Date-Time</th>
                                    <th className="py-2 px-4 border-b text-left  text-[#202123BF] text-[12px] leading-[17px] font-semibold">Status</th>

                                    <th className="py-2 px-4 border-b text-left  text-[#202123BF] text-[12px] leading-[17px] font-semibold">Remarks</th>

                                </tr>
                            </thead>
                            <tbody className=''>
                                {
                                    completedInstallationData?.map((installation, index) => (
                                        <tr key={index}>
                                            <td className="py-2 px-4 border-b text-[14px] leading-[18px] font-medium text-[#8F9091]">
                                                {new Date(installation?.request_date_time).toLocaleDateString()},{new Date(installation?.request_date_time).toLocaleTimeString()}
                                            </td>

                                            <td className="py-2 px-4 border-b text-[14px] leading-[18px] font-medium text-[#8F9091]">{installation?.contact_name}</td>
                                            <td className="py-2 px-4 border-b text-[14px] leading-[18px] font-medium text-[#8F9091]">{installation?.product_name}</td>
                                            <td className="py-2 px-4 border-b text-[14px] leading-[18px] font-medium text-[#8F9091]">{installation?.category_title}</td>
                                            <td className="py-2 px-4 border-b text-[14px] leading-[18px] font-medium text-[#8F9091]">
                                                {new Date(installation.installation_date).toLocaleDateString()},{installation.installation_time}
                                            </td>

                                            <td className="py-5 px-4 border-b  text-[12px] leading-[17px] font-semibold text-[#202123BF]"> <span className="bg-[#BAFFD3] text-[#00742A] py-2 px-5 rounded text-xs font-semibold  ">{installation?.installation_status}</span> </td>
                                            <td className="py-2 px-4 border-b text-[14px] leading-[18px] font-medium text-[#8F9091]">{installation?.other_details}</td>
                                        </tr>
                                    ))
                                }


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>)}
        </>
    )
}

export default CompletedInstallation
