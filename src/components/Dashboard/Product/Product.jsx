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


const Product = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false); // State to manage modal visibility

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
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
        { value: 'today', label: 'Today' },
        { value: 'yesterday', label: 'Yesterday' },
        { value: 'last7days', label: 'Last 7 days' },
        { value: 'last30days', label: 'Last 30 Days' },
        { value: 'last90days', label: 'Last 90 days' },
        { value: 'thisMonth', label: 'This Month' },
        { value: 'lastMonth', label: 'Last Month' }
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

    const [loading, setLoading] = useState(false)
    console.log("hello")

    const token = useSelector((state) => state.auth.token);
    const[product , setProduct] = useState([])
 
   useEffect(() => {
     if (token) {
        setLoading(true)
       dispatch(fetchProducts(token)).then((data) => {
           console.log(data ,"data")
           setProduct(data?.payload)
           setLoading(false)
       })
 
     }
   }, [dispatch, token]);

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
                                <SearchInput />
                                <button block className='bg-[#0052CC] text-white hover:bg-[#0052cc] hover:text-white border border-[#0052cc] text-[14px] leading-[18px] font-bold rounded-md flex items-center px-3 py-2' onClick={() => navigate(`/products/add_product`)}>
                                    <span className="material-symbols-outlined mr-2">add</span>
                                    Add Product
                                </button>
                                <button block className='text-[#58595A] border border-[#8F9091] text-[14px] leading-[18px] font-bold rounded-md flex items-center px-3 py-2'>
                                    <span className="material-symbols-outlined mr-2">add</span>
                                    Multiple Product
                                </button>
                                <button className='text-[#58595A] border border-[#8F9091] text-[14px] leading-[18px] font-bold rounded-md flex items-center px-3 py-2' onClick={openModal}>
                                    <span className="material-symbols-outlined mr-2">add</span>
                                    QR Batch
                                </button>
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
                        {/* table */}
                        <div className="container mx-auto mt-10">
                            <div className="overflow-x-auto ">
                                <table className="min-w-full border-gray-200">
                                    <thead className="">
                                        <tr>
                                            <th className="py-2 px-4 border-b text-left text-[#202123BF] text-[12px] leading-[17px] font-semibold">Created On</th>
                                            <th className="py-2 px-4 border-b text-left text-[#202123BF] text-[12px] leading-[17px] font-semibold">Name</th>
                                            <th className="py-2 px-4 border-b text-left text-[#202123BF] text-[12px] leading-[17px] font-semibold">Category</th>
                                            <th className="py-2 px-4 border-b text-left text-[#202123BF] text-[12px] leading-[17px] font-semibold">Warranty</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {product.map((prod, index) => (
                                            <tr key={index}>
                                                <td className="py-2 px-4 border-b text-[12px] leading-4 font-medium text-[#58595A]">{prod.created_at}</td>
                                                <td className="py-2 px-4 border-b text-[12px] leading-4 font-medium text-[#58595A]">{prod.product_name}</td>
                                                <td className="py-2 px-4 border-b text-[12px] leading-4 font-medium text-[#58595A]">AC</td>
                                                <td className="py-2 px-4 border-b text-[12px] leading-4 font-medium text-[#58595A]">{prod.warranty_years}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                    {/* Add tbody with your data */}
                                </table>
                            </div>
                        </div>
                        <QRBatchModal isOpen={showModal} onClose={closeModal} />
                    </div>
                </div>)}


        </>
    );
};

export default Product;
