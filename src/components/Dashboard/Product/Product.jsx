import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';
import { useNavigate } from 'react-router-dom';
import QRBatchModal from './AddProducts/QRBatchModal';
import { Drawer } from '@mui/material';
import Select from 'react-select';
import SearchInput from '../SearchInput/SearchInput';
import SpinnerMain from '../Spinner/SpinnerMain';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../slice/productSlice';
import { signOutSuccess } from '../slice/authSlice';
import axios from '../../../api/api';
import toast from 'react-hot-toast';
import { fetchCategory, setCategory } from '../slice/categorySlice';
import { DatePicker } from 'antd';
import SingleQR from './AddProducts/SingleQRBatchModal';


const { RangePicker } = DatePicker;


const Product = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false); // State to manage modal visibility
    const [showSingleModal, setShowSingleModal] = useState(false); // State to manage single modal visibility

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };
    const openSingleModal = () => {
        setShowSingleModal(true);
    };

    const closeSingleModal = () => {
        setShowSingleModal(false);
    };

    const [drawerOpen, setDrawerOpen] = useState(false);
    const openDrawer = () => {
        setDrawerOpen(true);
    };

    const closeDrawer = () => {
        setDrawerOpen(false);
    };

    const [selectedProduct, setSelectedProduct] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedCheckboxes, setSelectedCheckboxes] = useState('');

    const products = [
        { value: 'product1', label: 'Product 1' },
        { value: 'product2', label: 'Product 2' },
        { value: 'product3', label: 'Product 3' }
    ];
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

    const [loading, setLoading] = useState(false)
    const token = useSelector((state) => state.auth.token);
    const [product, setProduct] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        if (token) {
            setLoading(true);
            dispatch(fetchProducts({ token }))
                .unwrap()
                .then((data) => {
                    setProduct(data);
                    setFilteredProducts(data);
                })
                .catch((error) => {
                    console.log(error.response.status, "error"); // This should now catch the error

                })
                .finally(() => {
                    setLoading(false);
                });
        }
    }, []);

    const handleEditNavigate = (id) => {
        navigate(`/products/edit_product/${id}`)
    }

    const handleDeleteProduct = async (id) => {

        try {
            setLoading(true)
            const data = await axios.delete('delete_product_by_id', {
                headers: {
                    Authorization: `Bearer ${token}`,
                }, params: { id }
            }
            )
            console.log(data, "data")
            toast.success(data?.data?.message)
            dispatch(fetchProducts({ token }))
                .unwrap()
                .then((data) => {
                    console.log(data, "products delete data")
                    setProduct(data);
                    setFilteredProducts(data);
                })
                .catch((error) => {
                    console.log(error.response.status, "error"); // This should now catch the error
                })
                .finally(() => {
                    setLoading(false);
                });
            setLoading(false)

        }
        catch (error) {
            setLoading(false)
        }

    }

    const handleSearchChange = async (value) => {
        const lowerCaseValue = value.toLowerCase();
        const filtered = product?.filter((item) => {
            const lowerCaseProductName = item?.product_name?.toLowerCase() || '';
            const lowerCaseCategoryTitle = item?.category_title?.toLowerCase() || '';
            return lowerCaseProductName.includes(lowerCaseValue) || lowerCaseCategoryTitle.includes(lowerCaseValue);
        });
        setFilteredProducts(filtered);
    };
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
    const applyFilter = () => {
        setLoading(true);
        const category_filter = selectedCategories.map((item) => {
            return {
                value: item.value,
            }

        })
        dispatch(fetchProducts({
            token,
            filter_by_category: filterCategory,
            filter_by_date: selectedCheckboxes[0] || customeDate,
            start_date: startDate,
            end_date: endDate,
        })).then((data) => {
            setProduct(data?.payload)
            setFilteredProducts(data?.payload)
            setLoading(false);
            closeDrawer()
        }).catch((err) => {
            console.error(err);
            setLoading(false);
        })
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

    }
    const options = [
        { value: "singleQR", label: "Single QR" },
        { value: "dynamicQR", label: "Dynamic QR" },
    ];

    const handleSelectChange = (selectedOption) => {
        if (selectedOption.value === "dynamicQR") {
            if (dynamicValue === "1") {
                openModal();
            } else {
                toast.error("You need to upgrade to use the Dynamic QR option"); // Show warning if 
            }
        } else {
            openSingleModal();
        }
    };

    const customStyles1 = {
        control: (provided) => ({
            ...provided,
            display: "flex",
            alignItems: "center",
            border: "1px solid #8F9091",
            borderRadius: "0.375rem",
            padding: "0.375rem 0.75rem",
            backgroundColor: "white",
            color: "#58595A",
            fontSize: "14px",
            fontWeight: "bold",
            minHeight: "40px",
            cursor: "pointer",
        }),
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isSelected ? "#f0f0f0" : "white",
            color: "#58595A",
            padding: "10px 15px",
            fontSize: "14px",
            fontWeight: "bold",
            cursor: "pointer",
            "&:hover": {
                backgroundColor: "#0052cc",
                color: "white",
            },
        }),
        placeholder: (provided) => ({
            ...provided,
            color: "#58595A",  // Customize placeholder text color
            fontSize: "14px",
            fontWeight: "bold",
        }),
    };
    const user = useSelector((state) => state.userDetails.user)
    const [dynamicValue, setDynamicValue] = useState('')

    useEffect(() => {
        if (user?.is_upgraded === "1") {
            setDynamicValue(user?.is_upgraded)

        }

    }, [user])
    return (
        <>
            {loading ? (<SpinnerMain />) : (
                <div className=''>

                    <div className='mt-3 p-8 '>
                        <div className='flex lg:flex-row justify-between gap-10 lg:items-center flex-col'>
                            <div>
                                <h3 className="mb-4 lg:mb-0 text-[1.5rem] leading-[2.5rem] text-[#0052CC] font-semibold">Products</h3>
                            </div>
                            <div className='flex gap-3 sm:flex-row flex-col'>
                                <SearchInput
                                    placeholder="Search for product..."
                                    onSearchChange={handleSearchChange}
                                    initialValue=""
                                    className="my-custom-class"
                                />
                                <button block className='bg-[#0052CC] text-white hover:bg-[#0052cc] hover:text-white border border-[#0052cc] text-[14px] leading-[18px] font-bold rounded-md flex items-center px-3 py-2' onClick={() => navigate(`/products/add_product`)}>
                                    <span className="material-symbols-outlined mr-2">add</span>
                                    Add Product
                                </button>
                                <button block className='text-[#58595A] border border-[#8F9091] text-[14px] leading-[18px] font-bold rounded-md flex items-center px-3 py-2'>
                                    <span className="material-symbols-outlined mr-2">add</span>
                                    Multiple Product
                                </button>
                                {/* <button className='text-[#58595A] border border-[#8F9091] text-[14px] leading-[18px] font-bold rounded-md flex items-center px-3 py-2' onClick={openModal}>
                                    <span className="material-symbols-outlined mr-2">add</span>
                                    Print QR
                                </button> */}
                                <div className="text-[#58595A] font-bold flex items-center">
                                    {/* <span className="material-symbols-outlined mr-2">add</span> */}
                                    <Select
                                        options={options}
                                        onChange={handleSelectChange}
                                        placeholder="Print QR"
                                        styles={customStyles1}
                                    />
                                </div>
                                <button block className='text-[#58595A] text-[14px] leading-[18px] font-bold rounded-md flex items-center px-3 py-2' onClick={openDrawer}>
                                    <span className="material-symbols-outlined mr-2">filter_alt</span>
                                    Filter
                                </button>
                            </div>
                        </div>
                        {/* Drawer for Filter */}
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
                        {/* table */}
                        <div className="  mt-10">
                            <div className="overflow-x-auto ">
                                <table className="min-w-full border-gray-200">
                                    <thead className="">
                                        <tr>
                                            <th className="py-2 px-4 border-b text-left text-[#202123BF] text-[12px] leading-[17px] font-semibold">Created On</th>
                                            <th className="py-2 px-4 border-b text-left text-[#202123BF] text-[12px] leading-[17px] font-semibold">Name</th>
                                            <th className="py-2 px-4 border-b text-left text-[#202123BF] text-[12px] leading-[17px] font-semibold">Category</th>
                                            <th className="py-2 px-4 border-b text-left text-[#202123BF] text-[12px] leading-[17px] font-semibold">Warranty</th>
                                            <th className="py-2 px-4 border-b text-left text-[#202123BF] text-[12px] leading-[17px] font-semibold">QR Type</th>
                                            <th className="py-2 px-4 border-b text-left text-[#202123BF] text-[12px] leading-[17px] font-semibold">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredProducts.length > 0 ? (
                                            filteredProducts.slice().reverse().map((prod) => (
                                                <tr key={prod?.product_id}>
                                                    <td className="py-3 px-4 border-b text-[12px] leading-4 font-medium text-[#58595A]">
                                                        {prod?.created_at.split('T')[0]}
                                                    </td>
                                                    <td className="py-3 px-4 border-b text-[12px] leading-4 font-medium text-[#58595A] flex items-center gap-5">
                                                        <img
                                                            src={prod?.product_image}
                                                            alt="Product"
                                                            className="rounded-md w-[50px] h-[50px]"
                                                        />
                                                        {prod?.product_name}
                                                    </td>
                                                    <td className="py-3 px-4 border-b text-[12px] leading-4 font-medium text-[#58595A]">
                                                        {prod?.category_title}
                                                    </td>
                                                    <td className="py-3 px-4 border-b text-[12px] leading-4 font-medium text-[#58595A]">
                                                        {prod?.warranty_years && prod?.warranty_months
                                                            ? `${prod?.warranty_years > 1 ? prod?.warranty_years + ' years ' : prod?.warranty_years + ' year '}${prod?.warranty_months > 1 ? prod?.warranty_months + ' months ' : prod?.warranty_months + ' month '}`
                                                            : prod?.warranty_years
                                                                ? `${prod?.warranty_years > 1 ? prod?.warranty_years + ' years' : prod?.warranty_years + ' year'}`
                                                                : prod?.warranty_months
                                                                    ? `${prod?.warranty_months > 1 ? prod?.warranty_months + ' months' : prod?.warranty_months + ' month'}`
                                                                    : 'N/A'
                                                        }
                                                    </td>
                                                    <td className="py-3 px-4 border-b text-[12px] leading-4 font-medium text-[#58595A]">
                                                        {prod?.dynamic_qr === "" || prod?.dynamic_qr === "0" ? "Single QR" : "Dynamic QR"}
                                                    </td>

                                                    <td className="py-3 px-4 border-b font-medium text-[#58595A] space-x-3">
                                                        <span className="material-symbols-outlined text-[16px] leading-5 font-medium text-[#58595A] cursor-pointer hover:text-[#1B6CE3]" onClick={() => handleEditNavigate(prod?.product_id)}>
                                                            edit
                                                        </span>
                                                        <span className="material-symbols-outlined text-[16px] leading-5 font-medium text-[#58595A] cursor-pointer hover:text-[#FF4040]" onClick={() => handleDeleteProduct(prod?.product_id)}>
                                                            delete
                                                        </span>
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan="6" className="py-3 px-4 border-b text-center text-[12px] leading-4 font-medium text-[#58595A]">
                                                    No products found.
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>




                                    {/* Add tbody with your data */}
                                </table>
                            </div>
                        </div>
                        <QRBatchModal isOpen={showModal} onClose={closeModal} />
                        <SingleQR isOpenSingle={showSingleModal} onCloseSingle={closeSingleModal} />
                    </div>
                </div>)}


        </>
    );
};

export default Product;
