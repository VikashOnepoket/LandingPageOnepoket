import React, { useEffect, useState } from 'react'
import { FiMessageSquare } from 'react-icons/fi'
import { Drawer } from '@mui/material';
import Select from 'react-select'
import SearchInput from '../../SearchInput/SearchInput';
import axios from '../../../../api/api'
import { useDispatch, useSelector } from 'react-redux';
import ModalOTP from './ModalOTP';
import SpinnerMain from '../../Spinner/SpinnerMain';
import { DatePicker } from 'antd';
import { fetchCategory } from '../../slice/categorySlice';
import { motion } from 'framer-motion'
const PendingInstallation = () => {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const [showModal, setShowModal] = useState(false);
    const [selectedInstallationId, setSelectedInstallationId] = useState(null);
    const [selectedInstallationOption, setSelectedInstallationOPtion] = useState(null);
    const statusOptions = [
        { value: 'pending', label: 'Pending', isDisabled: true },
        { value: 'completed', label: 'Completed' },
        { value: 'rejected', label: 'Reject' },
    ];
    const [drawerOpen, setDrawerOpen] = useState(false);
    const openDrawer = () => {
        setDrawerOpen(true);
    };

    const closeDrawer = () => {
        setDrawerOpen(false);
    };

    const closeModal = () => setShowModal(false);

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

    // calling api for  pending installation
    const [totalPending, setTotalPneding] = useState("")
    const [pendingInstallationData, setPendingInstallationData] = useState([])

    const token = useSelector((state) => state.auth.token)
    const pendingInstallation = async () => {
        try {
            setLoading(true);
            const { data } = await axios.post(
                '/lp_pending_installation',
                {}, // Empty object for the request body
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            console.log(data, "pending installation data");
            setPendingInstallationData(data?.result);
            setTotalPneding(data?.count);
            setLoading(false);
        } catch (err) {
            console.error(err);
            setLoading(false);
        }
    };


    useEffect(() => {
        pendingInstallation()
    }, [])

    const handleStatusChange = (selectedOption, installationId) => {
        setSelectedInstallationOPtion(selectedOption?.value);
        setSelectedInstallationId(installationId);

        if (selectedOption.value === "completed") {
            setShowModal(true);
        } else {
            handleModalSubmit(selectedOption.value, installationId);
        }
    };

    const handleModalSubmit = async (status, id) => {
        try {
            const { data } = await axios.post('/update_lp_pending_installation', {
                id: id,
                status: status
            });
            console.log(data, "data updated");
            pendingInstallation();
        } catch (err) {
            console.error('Error updating status:', err);
        }
    };



    // storing the contact number
    const [storedContact, setStoredContact] = useState(null);

    const handleStoreContact = (contactNumber) => {
        setStoredContact(contactNumber);
    };


    // 

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
            const { data } = await axios.post('/lp_pending_installation',
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
            setTotalPneding(data?.count);
            setPendingInstallationData(data?.result)
            setLoading(false)
            closeDrawer()
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

    // techincal executive 
    const [technicalExecutiveDetails, setTechnicalExecutiveDetails] = useState([])
    const fetchTechnicalExecutiveDetails = async () => {

        try {

            setLoading(true)
            const { data } = await axios.get('/technical_executive_details', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            console.log(data, "data")
            setTechnicalExecutiveDetails(data?.result)
            // setCount(data?.count)
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }

    }

    useEffect(() => {
        fetchTechnicalExecutiveDetails()
    }, [token])

    const executiveDetails = technicalExecutiveDetails.map((data) => ({
        label: data.name, // Display name in dropdown
        value: data.id, // Value associated with the option
    }));

    // State for selected option
    const [selectedOptions, setSelectedOptions] = useState({});

    const [openShowModal, setOpenShowModal] = useState(false);
    const [techId, setTechId] = useState('')
    const [prodID, setProdID] = useState('')
    const [custID, setCustID] = useState('')
    const [techExName, setTechExName] = useState('')
    const [pendingId, setPendingID] = useState('')
    // Handle change event
    const handleChange = (option, installationId, productID, customerID) => {
        setOpenShowModal(true)
        setSelectedOptions((prev) => ({
            ...prev,
            [installationId]: option,
        }));
        setTechId(option?.value)
        setProdID(productID)
        setCustID(customerID)
        setTechExName(option?.label)
        setPendingID(installationId)
        console.log(option?.value)
        console.log(productID)
        console.log(customerID)
        console.log(`Selected Option for ID ${installationId}:`, option);
    };

    const onClose = () => {
        setOpenShowModal(false);
    };



    const assignTechnicalExecutive = async () => {
        try {
            setLoading(true)
            const { data } = await axios.post(
                "assign_technical_executive", // Make sure the URL is correct
                {
                    tech_ex_id: techId,
                    tech_ex_name: techExName,
                    uid_id: pendingId,
                    customer_id: custID,
                    product_id: prodID

                }, // Request body (empty object)
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                }
            );
            setLoading(false)
            setOpenShowModal(false)

            await pendingInstallation()
        } catch (error) {
            console.log(error)
        }


    }



    return (
        <>
            {loading ? (<SpinnerMain />) : (<div className='mt-3 p-8'>
                <ModalOTP isOpen={showModal} onClose={closeModal} number={storedContact} loading={loading} selectedOption={selectedInstallationOption} selectedInstallationId={selectedInstallationId} pendingFunction={pendingInstallation} />

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
                        <h3 className='text-[2.5rem] leading-[3rem] font-bold text-[#202123]'>{totalPending}</h3>
                    </div>
                    <div className=' mt-5'>
                        <div>
                            <h3 className='text-[#0052CC] text-[1.2rem] leading-[2rem] font-semibold'>Pending Installations</h3>
                        </div>

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
                                    {/* <th className="py-2 px-4 border-b text-left  text-[#202123BF] text-[12px] leading-[17px] font-semibold">Status</th> */}
                                    <th className="py-2 px-4 border-b text-left  text-[#202123BF] text-[12px] leading-[17px] font-semibold">Assign To</th>
                                    <th className="py-2 px-4 border-b text-left  text-[#202123BF] text-[12px] leading-[17px] font-semibold">Address</th>

                                    <th className="py-2 px-4 border-b text-left  text-[#202123BF] text-[12px] leading-[17px] font-semibold">Remarks</th>

                                </tr>
                            </thead>
                            <tbody className=''>
                                {
                                    pendingInstallationData?.map((installation, index) => (
                                        <tr key={index} onClick={() => handleStoreContact(installation?.contact_number)}>
                                            <td className="py-2 px-4 border-b text-[14px] leading-[18px] font-medium text-[#8F9091]">
                                                {new Date(installation?.request_date_time).toLocaleDateString()},{new Date(installation?.request_date_time).toLocaleTimeString()}
                                            </td>

                                            <td className="py-2 px-4 border-b text-[14px] leading-[18px] font-medium text-[#8F9091]">{installation?.contact_name}</td>
                                            <td className="py-2 px-4 border-b text-[14px] leading-[18px] font-medium text-[#8F9091]">{installation?.product_name}</td>
                                            <td className="py-2 px-4 border-b text-[14px] leading-[18px] font-medium text-[#8F9091]">{installation?.category_title}</td>
                                            <td className="py-2 px-4 border-b text-[14px] leading-[18px] font-medium text-[#8F9091]">
                                                {new Date(installation.installation_date).toLocaleDateString()},{installation.installation_time}
                                            </td>

                                            <td className="py-5 px-4 border-b font-medium text-[#202123BF]">
                                                {/* <Select
                                                    value={statusOptions.find(option => option.value === 'pending')}
                                                    onChange={(selectedOption) => handleStatusChange(selectedOption, installation?.id)}

                                                    options={statusOptions}
                                                    styles={{
                                                        control: (provided) => ({
                                                            ...provided,
                                                            width: '150px',
                                                            fontSize: '12px',
                                                            cursor: 'pointer'
                                                        }),
                                                        menu: (provided) => ({
                                                            ...provided,
                                                            fontSize: '12px',
                                                            cursor: 'pointer'
                                                        }),
                                                        option: (provided, state) => ({
                                                            ...provided,
                                                            cursor: state.isDisabled ? 'not-allowed' : 'pointer', // Disabled cursor for "Pending"
                                                            color: state.isDisabled ? '#ccc' : provided.color,
                                                        }),
                                                    }}
                                                    menuPortalTarget={null} // Dropdown will open within the modal
                                                    menuPosition="fixed"
                                                /> */}
                                                {installation?.tech_ex_name ? installation?.tech_ex_name : <Select
                                                    options={executiveDetails} // Pass mapped options
                                                    value={selectedOptions[installation.id] || null} // Controlled value per row
                                                    onChange={(option) => handleChange(option, installation.id, installation?.product_id, installation?.customer_id)} // Pass installation ID
                                                    placeholder="Select an Executive"
                                                    menuPortalTarget={null}
                                                    menuPosition="fixed"
                                                />}

                                                {/* 
                                                <button className='bg-indigo-300 text-white px-5'>Assign to</button> */}
                                            </td>
                                            {/* <td className="py-2 px-4 border-b text-right">
                                                <button className="bg-[#0052CC] text-white hover:bg-[#0041a8] px-3 py-2 rounded-md flex items-center">
                                                    <FiMessageSquare className="mr-2" />
                                                    Message
                                                </button>
                                            </td> */}
                                            <td className="py-2 px-4 border-b text-[14px] leading-[18px] font-medium text-[#8F9091]">{installation?.contact_address}</td>
                                            <td className="py-2 px-4 border-b text-[14px] leading-[18px] font-medium text-[#8F9091]">{installation?.other_details}</td>
                                        </tr>
                                    ))
                                }


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>)}

            {openShowModal && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 modal-backdrop"
                    onClick={(e) => e.target.classList.contains('modal-backdrop') && onClose()}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white p-8 rounded-lg shadow-lg"
                        style={{ minWidth: 300, maxWidth: 600 }}
                    >
                        <h1>Are you sure want to assign this techincal executive ?</h1>
                        <div className='flex justify-end mt-5  gap-5'>
                            <button
                                type="button"
                                className="text-[#58595A] border border-[#8F9091] text-[14px] leading-[18px] font-bold rounded-md flex items-center px-3 py-2"
                                onClick={onClose}
                            >
                                Discard
                            </button>
                            <button type='button' className='bg-[#0052CC] text-white rounded-md px-5 py-2' onClick={assignTechnicalExecutive}>
                                Save
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </>
    )
}

export default PendingInstallation
