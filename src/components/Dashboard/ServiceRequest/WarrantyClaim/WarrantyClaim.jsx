import React, { useEffect, useState } from 'react'
import { TbMessage } from 'react-icons/tb'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { Drawer } from '@mui/material';
import Select from 'react-select'
import axios from '../../../../api/api';
import SearchInput from '../../SearchInput/SearchInput';
import { useDispatch, useSelector } from 'react-redux';
import WarrantyClaimTable from './WarrantyClaimTable';
import SpinnerMain from '../../Spinner/SpinnerMain';
import { fetchCategory } from '../../slice/categorySlice';
import { DatePicker } from 'antd';

const WarrantyClaim = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const token = useSelector((state) => state.auth.token)
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


    const dateOptions = [
        { value: 'today', label: 'Today' },
        { value: 'yesterday', label: 'Yesterday' },
        { value: 'this_week', label: 'Last 7 days' },
        { value: 'this_month', label: 'This Month' },
    ];

    const handleCheckboxChange = (value) => {
        console.log(value, "valuesss")
        setSelectedCheckboxes((prevSelected) =>
            prevSelected.includes(value) ? [] : [value]
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

    console.log(token, "tokne")
    const [warrantyCount, setWarrantyCount] = useState('')
    const [warrantyClaimData, setWarrantyClaimData] = useState([])
    const fetchSubmitRequest = async () => {
        try {
            setLoading(true)
            const { data } = await axios.post('/company_submit_warranty_claim_form',
                {},
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                })
            console.log(data, "data received")
            setWarrantyCount(data?.count)
            setWarrantyClaimData(data?.result)
            setLoading(false)
        } catch (error) {
            console.log(error);
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchSubmitRequest()
    }, [])



    // filter data


    const [selectedCategories, setSelectedCategories] = useState([]);
    const [filterCategory, setFilterCategory] = useState([])
    const handleCategoryChange = (value) => {
        const categoryValue = value?.map((category) => {
            return category?.value
        })
        setFilterCategory(categoryValue)
        setSelectedCategories(value)
    }

    useEffect(() => {
        if (token) {
            setLoading(true);
            dispatch(fetchCategory(token))
                .unwrap()
                .then((data) => {
                    setSelectedCategory(data)
                })
                .catch((error) => {
                    console.error(error.response?.status, "error");
                })
                .finally(() => {
                    setLoading(false);
                });
        }
    }, []);


    const optionsCategory = selectedCategory?.map((category) => {
        return {
            value: category?.title,
            label: category?.title,
        };
    });
    const applyFilter = async () => {

        try {
            setLoading(true);
            const { data } = await axios.post('/company_submit_warranty_claim_form',
                {
                    filter_by_category: filterCategory,
                    filter_by_date: selectedCheckboxes[0] || customeDate,
                    start_date: startDate,
                    end_date: endDate,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

            console.log(data, "daat")
            setWarrantyClaimData(data?.result)
            setWarrantyCount(data?.count)
            setLoading(false)
            closeDrawer()
        } catch (error) {
            setLoading(false)

        }

    };



    // date
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [customeDate, setCustomeDate] = useState("");
    const handleStartDateChange = (date) => {
        setCustomeDate("custom_date")
        setStartDate(date);
        setEndDate(null);
    };

    const handleEndDateChange = (date) => {
        setEndDate(date);
    };

    console.log(startDate, "start date", endDate, "end date")

    const disabledEndDate = (current) => {
        return current && startDate && current.isBefore(startDate, 'day');
    };


    const resetAllValues = () => {
        setStartDate(null)
        setEndDate(null)
        setSelectedCategories([])
        setSelectedCheckboxes('')

    }
    return (
        <>
            {loading ? (<SpinnerMain />) : (<div className='mt-3 p-8'>
                <div className="lg:flex items-center justify-between mb-4">
                    <h3 className="mb-4 lg:mb-0 text-[1.5rem] leading-[2.5rem] font-semibold text-[#0052CC]">Service Request</h3>
                    {/* <FilterWarranty /> */}
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
                            {/* byCategory */}
                            <div className=" mb-4">
                                <label className="text-[16px] leading-[21px] font-semibold mb-2 text-[#000000]">By Categories</label>
                                <Select
                                    // value={selectedCategory}
                                    value={selectedCategories}
                                    onChange={handleCategoryChange}
                                    options={optionsCategory}
                                    styles={customStyles}
                                    className='mt-1'
                                    placeholder="Please Select Categories..."
                                    isMulti
                                />
                            </div>
                            {/* by date */}
                            <div className="mb-4 mt-5">
                                <label className="text-[16px] leading-[21px] font-semibold mb-2 text-[#000000]">By Date</label>
                                <div className='mt-1'>
                                    {/* Start Date Picker */}
                                    <DatePicker
                                        value={startDate}
                                        onChange={handleStartDateChange}
                                        format="YYYY-MM-DD"
                                        placeholder="Select Start Date"
                                        getPopupContainer={(trigger) => trigger.parentNode}
                                        popupPlacement="bottomLeft"
                                        disabled={selectedCheckboxes.length > 0}
                                    />

                                    {/* End Date Picker, enabled only when start date is selected */}
                                    <DatePicker
                                        value={endDate}
                                        onChange={handleEndDateChange}
                                        format="YYYY-MM-DD"
                                        placeholder="Select End Date"
                                        disabled={!startDate}
                                        getPopupContainer={(trigger) => trigger.parentNode}
                                        disabledDate={disabledEndDate}
                                        popupPlacement="bottomLeft"
                                    />
                                </div>
                            </div>
                            {/* Checkbox list */}
                            <div className="mb-4 mt-5">

                                <div className="flex flex-col gap-2 mt-2">
                                    {dateOptions.map((option) => (
                                        <label key={option.value} className="flex items-center">
                                            <input
                                                type="checkbox"
                                                className="form-checkbox"
                                                checked={selectedCheckboxes.includes(option.value)}
                                                onChange={() => handleCheckboxChange(option.value)}
                                                style={{ borderColor: selectedCheckboxes.includes(option.value) ? '#0052cc' : '#8F9091', backgroundColor: selectedCheckboxes.includes(option.value) ? '#0052cc' : 'transparent' }}
                                                disabled={startDate}

                                            />
                                            <span className="ml-4 text-[14px] leading-[18px] text-[#58595A] font-semibold">{option.label}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>
                        {/* footee button */}
                        <div className='flex justify-end  mt-5 mb-5 gap-5'>
                            <button className='text-[#58595A]  border border-[#8F9091] text-[14px] leading-[18px] font-bold rounded-md flex  items-center px-3 py-2' onClick={resetAllValues}>
                                Discard
                            </button>
                            <button block className='bg-[#0052CC] text-white hover:bg-[#0052cc] hover:text-white border border-[#0052cc] mr-5 text-[14px] leading-[18px] font-bold rounded-md flex  items-center px-3 py-2' onClick={applyFilter}>
                                Apply
                            </button>
                        </div>
                    </div>
                </Drawer>
                <div className='mt-12'>
                    <div>
                        <h3 className='text-[2.5rem] leading-[3rem] font-bold text-[#202123]'>{warrantyCount}</h3>
                    </div>
                    <div className=' mt-5 flex justify-between items-center'>
                        <div>
                            <h3 className='text-[#0052CC] text-[1.2rem] leading-[2rem] font-semibold'>Warranty Claims</h3>
                        </div>
                    </div>
                    <div className='mt-5'>

                        <div className='flex justify-between gap-10 items-center'>
                            <div>
                                <h3 className='text-[#58595A] text-[1.2rem] leading-[2rem] font-semibold'>Show All</h3>
                            </div>
                            <div>
                                <button block className='bg-[#0052CC] text-white hover:bg-[#0052cc] hover:text-white border border-[#0052cc] text-[14px] leading-[18px] font-bold rounded-md flex  items-center px-3 py-2' >
                                    <span className="material-symbols-outlined mr-2">add</span>
                                    Send Broadcast
                                </button>
                            </div>
                        </div>
                        <div className="p-4">
                            {warrantyClaimData?.map((warrantyData) => {
                                return <WarrantyClaimTable warrantyData={warrantyData} key={warrantyData?.id} />
                            })}
                        </div>

                    </div>

                </div>
            </div>)}
        </>
    )
}

export default WarrantyClaim
