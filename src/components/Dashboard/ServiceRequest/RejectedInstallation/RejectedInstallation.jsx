import React, { useEffect, useState } from 'react'
import { FiMessageSquare } from 'react-icons/fi'
import CompletedFilter from '../CompletedInstalltion/CompletedFilter';
import { Drawer } from '@mui/material';
import Select from 'react-select'
import SearchInput from '../../SearchInput/SearchInput';
import { useSelector } from 'react-redux';
import axios from '../../../../api/api'
import SpinnerMain from '../../Spinner/SpinnerMain';

const RejectedInstallation = () => {
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
    const [totalRejected, setTotalRejected] = useState("")
    const [rejectedInstallationData, setRejectedInstallationData] = useState([])
    const token = useSelector((state) => state.auth.token)
    const rejectedInstallation = async () => {
        try {
            setLoading(true)
            const { data } = await axios.get('/lp_rejected_installation', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log(data, "pending installation data")
            setRejectedInstallationData(data?.result)
            setTotalRejected(data?.count)
            setLoading(false)
        }
        catch (err) {
            console.log(err)
            setLoading(false)
        }
    }

    useEffect(() => {
        rejectedInstallation()
    }, [])
    return (
        <>
            {loading ? (<SpinnerMain />) : (<div className='mt-3 p-8'>
                <div className="lg:flex items-center justify-between mb-4">
                    <h3 className="mb-4 lg:mb-0 text-[1.5rem] leading-[2.5rem] font-semibold text-[#0052CC]">Service Requests</h3>
                    {/* <FilterCompletion/> */}

                    <div className='flex gap-3 '>

                        {/* <button block className='text-[#58595A] text-[14px] leading-[18px] font-bold rounded-md flex items-center px-3 py-2' onClick={openDrawer}>
                            <span className="material-symbols-outlined mr-2">filter_alt</span>
                            Filter
                        </button> */}
                    </div>

                </div>
                <div className='mt-12'>
                    <div>
                        <h3 className='text-[2.5rem] leading-[3rem] font-bold text-[#202123]'>{totalRejected}</h3>
                    </div>
                    <div className=' mt-5 '>
                        <div>
                            <h3 className='text-[#0052CC] text-[1.2rem] leading-[2rem] font-semibold'>Rejected Installations</h3>
                        </div>


                    </div>

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
                                    rejectedInstallationData?.map((installation, index) => (
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

                                            <td className="py-5 px-4 border-b  text-[12px] leading-[17px] font-semibold text-[#202123BF]"> <span className="bg-red-400 text-red-900 py-2 px-5 rounded text-xs font-semibold  ">{installation?.installation_status}</span> </td>
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

export default RejectedInstallation
