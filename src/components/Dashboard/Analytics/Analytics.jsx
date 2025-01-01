import React, { useEffect, useState } from 'react';
import Card from './Card';
import { Drawer } from '@mui/material';
import Select from 'react-select'
import TopCitiesBySales from './TopCitiesBySales';
import ConversionChart from './BarChart';
import axios from '../../../api/api'
import { useDispatch, useSelector } from 'react-redux';
import { DatePicker } from 'antd';
import { fetchCategory } from '../slice/categorySlice';
import { fetchProducts } from '../slice/productSlice';
import SpinnerMain from '../Spinner/SpinnerMain';


const Analytics = () => {
    const token = useSelector((state) => state.auth.token)
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
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
    const [selectedCheckboxes, setSelectedCheckboxes] = useState(["this_week"])
    const [selectedScans, setSelectedScans] = useState([])

    const dateOptions = [
        { value: 'today', label: 'Today' },
        { value: 'yesterday', label: 'Yesterday' },
        { value: 'this_week', label: 'Last 7 days' },
        { value: 'this_month', label: 'This Month' },
    ];

    const handleCheckboxChange = (value) => {
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

    const [scanData, setScanData] = useState([])
    const [redScan, setRedScan] = useState([])
    const [pendingWarranty, setPendingWarranty] = useState([])
    const [totalPercent, setTotalPercent] = useState("")
    const [authPercent, setAuthPercent] = useState("")
    const [incompletePercent, setIncompletePercent] = useState("")
    const [redScanPercent, setRedScanPercent] = useState("")
    const [pendingPercent, setPendingPercent] = useState("")


    const fetchData = async () => {
        try {
            const { data } = await axios.post('/lp_analytics_count',
                {
                    filter_by_category: filterCategory,
                    filter_by_product: filterProducts,
                    filter_by_date: selectedCheckboxes[0] || customeDate,
                    start_date: startDate,
                    end_date: endDate,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                })

            console.log(data, "data in analytics")
            setAuthPercent(data?.completeScanPercentage)
            setRedScanPercent(data?.redScanPercentage)
            setIncompletePercent(data?.incompleteScanPercentage)
            setPendingPercent(data?.pendingScanPercentage)
            setScanData(data)
            setRedScan(data?.red_scan_data)
            setPendingWarranty(data?.pending_scan_data)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])



    const [name, setName] = useState("")
    const user = useSelector((state) => state?.userDetails?.user)

    useEffect(() => {
        if (user) {

            setName(user?.name)
        }
    }, [user])

    // 

    const [selectedCategories, setSelectedCategories] = useState([]);
    const [filterCategory, setFilterCategory] = useState([])
    const [selectedProducts, setSelectedProducts] = useState([]);
    const [filterProducts, setFilterProducts] = useState([])


    const handleCategoryChange = (value) => {
        const categoryValue = value?.map((category) => {
            return category?.value
        })
        setFilterCategory(categoryValue)
        setSelectedCategories(value)
    }

    const handleProductChange = (value) => {
        const productValue = value?.map((product) => {
            return product?.value
        })
        setFilterProducts(productValue)
        setSelectedProducts(value)
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

    useEffect(() => {
        if (token) {
            setLoading(true);
            dispatch(fetchProducts({ token }))
                .unwrap()
                .then((data) => {
                    console.log(data, "data")
                    setSelectedProduct(data);
                })
                .catch((error) => {
                    console.log(error.response.status, "error"); // This should now catch the error

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
    const optionsProduct = selectedProduct?.map((product) => {
        return {
            value: product?.product_name,
            label: product?.product_name,
        };
    });

    const applyFilter = async () => {

        try {
            setLoading(true);
            const { data } = await axios.post('/lp_analytics_count',
                {
                    filter_by_category: filterCategory,
                    filter_by_product: filterProducts,
                    filter_by_date: selectedCheckboxes[0] || customeDate,
                    start_date: startDate,
                    end_date: endDate,

                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

            setAuthPercent(data?.completeScanPercentage)
            setRedScanPercent(data?.redScanPercentage)
            setIncompletePercent(data?.incompleteScanPercentage)
            setScanData(data)
            setRedScan(data?.red_scan_data)
            setPendingWarranty(data?.pending_scan_data)
            setPendingPercent(data?.pendingScanPercentage)
            closeDrawer()
            setLoading(false)
        } catch (error) {
            setLoading(false)

        }

    };


    // date picker
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

    const disabledEndDate = (current) => {
        return current && startDate && current.isBefore(startDate, 'day');
    };


    const resetAllValues = () => {
        setStartDate(null)
        setEndDate(null)
        setSelectedCategories([])
        setSelectedCheckboxes('')
        setSelectedProducts([])

    }

    const updateWarranty = async (custId, id) => {
        try {
            setLoading(true)
            const { data } = await axios.post('/update_pending_warranty', { customer_id: custId, w_id: id, status: "approved" }
                , {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            )
            console.log(data, "data in pnding approves")
            setLoading(false)
            fetchData()

        } catch (error) {

        }
    }

    return (
        <>
            {loading ? (<SpinnerMain />) : (<div className='p-8'>
                <div className='flex justify-between gap-10 '>
                    <div>
                        <h1 className='text-[24px] leading-[31px] font-semibold text-[#202123]'>Welcome {name}!</h1>
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
                                {/* by product */}
                                <div className=" mb-4">
                                    <label className="text-[16px] leading-[21px] font-semibold mb-2 text-[#000000]">By Product</label>
                                    <Select
                                        // value={selectedCategory}
                                        value={selectedProducts}
                                        onChange={handleProductChange}
                                        options={optionsProduct}
                                        styles={customStyles}
                                        className='mt-1'
                                        placeholder="Please Select Product..."
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
                                            format="DD-MM-YYYY"
                                            placeholder="Select Start Date"
                                            getPopupContainer={(trigger) => trigger.parentNode}
                                            popupPlacement="bottomLeft"
                                            disabled={selectedCheckboxes.length > 0}
                                        />

                                        {/* End Date Picker, enabled only when start date is selected */}
                                        <DatePicker
                                            value={endDate}
                                            onChange={handleEndDateChange}
                                            format="DD-MM-YYYY"
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
                                {/* by scan */}
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
                </div>

                {/* cards */}
                <div className='flex gap-10 lg:flex-row flex-col'>
                    <div className='lg:w-[100%] w-[90%]'>
                        <div className='2xl:grid-cols-4 grid xl:grid-cols-3 md:grid-cols-2 gap-8 mt-6 '>
                            <Card title="Total Scans" count={scanData?.total_scan} change={"100%"} />
                            <Card title="Authorized Scans" count={scanData?.complete_scan} change={`${authPercent}%`} />
                            <Card title="Unauthorized Scans" count={scanData?.red_scan} change={`${redScanPercent}%`} />
                            <Card title="Incomplete Scans" count={scanData?.incomplete_scan} change={`${incompletePercent}%`} />
                            <Card title="Pending Warranty" count={scanData?.pending_scan} change={`${pendingPercent}%`} />
                        </div>
                        <div className='mt-10  w-full'>
                            <ConversionChart compltedScan={scanData?.complete_scan_data || []}
                                redScan={redScan}
                                authorizedScanCount={scanData?.complete_scan}
                                inCompleteScanCount={scanData?.incomplete_scan}
                                unauthorizedScanCount={scanData?.red_scan}
                                pendingWarranty={pendingWarranty}
                                updateWarranty={updateWarranty}
                            />
                        </div>
                    </div>
                    {/* <div>
                    <ConversionChart />
                </div> */}

                    {/* <div className='lg:w-[30%] w-[90%] mt-6'>
                    <TopCitiesBySales />
                </div> */}
                </div>
            </div>)}
        </>
    );
};

export default Analytics;
