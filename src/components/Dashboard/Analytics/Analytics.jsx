import React, { useEffect, useState } from 'react';
import Card from './Card';
import { Drawer } from '@mui/material';
import Select from 'react-select'
import TopCitiesBySales from './TopCitiesBySales';
import ConversionChart from './BarChart';
import axios from '../../../api/api'
import { useSelector } from 'react-redux';

const Analytics = () => {
    const token = useSelector((state) => state.auth.token)

    // const tokens = localStorage.getItem('token')
    console.log(token, "token")
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
        { value: 'today', label: 'All' },
        { value: 'yesterday', label: 'Total Scans' },
        { value: 'last7days', label: 'Authorized Scans' },
        { value: 'last30days', label: 'Unauthorized Scans' },
        { value: 'last90days', label: 'Incomplete Scans' },

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

    const [scanData  ,setScanData] = useState([])

    const fetchData = async () => {
        try {
            const { data } = await axios.get('/lp_analytics_count', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            console.log(data, "analytics")
            setScanData(data)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div className='p-8'>
            <div className='flex justify-between gap-10 '>
                <div>
                    <h1 className='text-[24px] leading-[31px] font-semibold text-[#202123]'>Welcome Ujjwal!</h1>
                    <p className='text-[10px] leading-[12px] text-[#8F9091] font-medium mt-2'>View your Products Analytics</p>
                </div>
                <div>
                    <button block className='text-[#58595A] text-[14px] leading-[18px] font-bold rounded-md flex items-center px-3 py-2' onClick={openDrawer}>
                        <span className="material-symbols-outlined mr-2">filter_alt</span>
                        Filter
                    </button>
                </div>
                {/* filter */}
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
                           
                            {/* Checkbox list */}
                            {/* <div className="mb-4 mt-5">
                                <label className="text-[16px] leading-[21px] font-semibold mb-2 text-[#000000]">By Scan</label>
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
                            </div> */}
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

            {/* cards */}
            <div className='flex gap-10 lg:flex-row flex-col'>
                <div className='lg:w-[70%] w-[90%]'>
                    <div className='2xl:grid-cols-4 grid xl:grid-cols-3 md:grid-cols-2 gap-8 mt-6 '>
                        <Card title="Total Scans" count={scanData?.total_scan} change="+40.35%" changeType="positive" />
                        <Card title="Authorized Scans" count={scanData?.complete_scan} change="+23.6%" changeType="positive" />
                        <Card title="Unauthorized Scans" count={scanData?.red_scan} change="-15.34%" changeType="negative" />
                        <Card title="Incomplete Scans" count={scanData?.incomplete_scan} change="+9.54%" changeType="positive" />
                    </div>
                    <div className='mt-10  w-full'>
                        <ConversionChart compltedScan = {scanData?.complete_scan_data}/>
                    </div>
                </div>
                {/* <div>
                    <ConversionChart />
                </div> */}

                <div className='lg:w-[30%] w-[90%] mt-6'>
                    <TopCitiesBySales />
                </div>
            </div>
        </div>
    );
};

export default Analytics;
