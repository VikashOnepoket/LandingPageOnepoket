import React, { useEffect, useState } from 'react';
import BasicInformation from './BasicInformation/BasicInformation';
import ProductImge from './ProductImage/ProductImge';
import Warranty from './Warranty/Warranty';
import CustsomerDescription from './ProductDescCutomer/CustsomerDescription';
import Category from './Category/Category';
import Logo from './Logo/Logo';
import Purchase from './PurchaseOption/Purchase';
import ProductVideo from './Video/ProductVideo';
import AdditionalInfo from '../Additional/Additional';
import axios from '../../../../api/api';
import SpinnerMain from '../../Spinner/SpinnerMain';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserDetails } from '../../slice/userDetailsSlice';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);


  useEffect(() => {
    if (token) {
      dispatch(fetchUserDetails(token)).then((data) => {
        setFormData({
          company_id: data?.payload?.id
        })
      })

    }
  }, [dispatch, , token]);


  const [formData, setFormData] = useState({
    company_id: "",
    product_name: '',
    model_number: '',
    description: '',

    warranty_years: "",
    warranty_months: "",
    additionalInfo: [],
    PurchaseOptions: [],
    product_desc_for_customer: "",
    // Add other fields as necessary
  });

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAdditionalInfoChange = (additionalInfo) => {
    setFormData({
      ...formData,
      additionalInfo,
    });
  };

  const handlePurchaseOptionsChange = (PurchaseOptions) => {
    setFormData({
      ...formData,
      PurchaseOptions,
    });
  };
  const [loading, setLoading] = useState(false)

  const handleSubmit = async () => {
    try {
      setLoading(true)
      const { data } = await axios.post('/add_product_lp', formData);
      console.log(data, "data");
      if (data) {
        toast.success(data.message)
        navigate(`/products`)
      }
      setLoading(false)
    } catch (error) {
      console.log(error, "error");
      setLoading(false)
    }
  };

  return (
    <>
      {loading ? (<SpinnerMain />) : (<div className='mt-3 p-8 mb-[80px]'>
        <div>
          <h3 className="mb-4 lg:mb-0 text-[1.5rem] leading-[2.5rem] text-[#0052CC] font-semibold">Add New Product</h3>
          <p className='text-[1.2rem] pt-5 leading-[1.5rem] font-semibold text-[#000000]'>Basic Information</p>
        </div>

        <div className='mt-10 flex lg:flex-row flex-col gap-10 '>
          <div className='lg:w-[70%] w-[100%]'>
            <BasicInformation formData={formData} onInputChange={handleInputChange} />
            <AdditionalInfo additionalInfo={formData.additionalInfo} onAdditionalInfoChange={handleAdditionalInfoChange} />
            <Purchase purchaseOptions={formData.PurchaseOptions} onPurchaseOptionsChange={handlePurchaseOptionsChange} />
            <Warranty formData={formData} onInputChange={handleInputChange} />
            <ProductVideo />
            <CustsomerDescription formData={formData} onInputChange={handleInputChange} />
          </div>
          <div className='lg:w-[30%] w-[100%]'>
            <ProductImge />
            <Category />
            <Logo />
          </div>
        </div>

        <div className='flex justify-end mt-10 gap-5 lg:w-[70%] w-[100%]'>
          <button className='text-[#58595A] border border-[#8F9091] text-[14px] leading-[18px] font-bold rounded-md flex items-center px-3 py-2'>
            Discard
          </button>
          <button
            onClick={handleSubmit}
            className='bg-[#0052CC] text-white hover:bg-[#0052cc] hover:text-white border border-[#0052cc] mr-5 text-[14px] leading-[18px] font-bold rounded-md flex items-center px-3 py-2'
          >
            Save
          </button>
        </div>
      </div>)}
    </>
  );
};

export default AddProduct;
