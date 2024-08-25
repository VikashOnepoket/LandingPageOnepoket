import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import toast from 'react-hot-toast';
import axios from '../../../../api/api';
import { useNavigate } from 'react-router-dom';
import SpinnerMain from '../../Spinner/SpinnerMain';
import BasicInformation from '../AddProducts/BasicInformation/BasicInformation';
import AdditionalInfo from '../AddProducts/Additional/Additional';
import Purchase from '../AddProducts/PurchaseOption/Purchase';
import Warranty from '../AddProducts/Warranty/Warranty';
import ProductVideo from '../AddProducts/Video/ProductVideo';
import CustsomerDescription from '../AddProducts/ProductDescCutomer/CustsomerDescription';
import ProductImge from '../AddProducts/ProductImage/ProductImge';
import Category from '../AddProducts/Category/Category';
import Logo from '../AddProducts/Logo/Logo';
import BasicInformationEdit from './BasicInformationEdit/BasicInformationEdit';
import AdditionalInfoEdit from './AdditionalInfoEdit/AdditionalInfoEdit';
import PurchaseOptionEdit from './PurchaseOptionEdit/PurchaseOptionEdit';
import ProductCustsomerDescriptionEdit from './DescriptionCustomerEdit/ProductDescriptionCustomerEdit';
import ProductVideoEdit from './VideoEdit/ProductVideoEdit';
import { fetchUserDetails } from '../../slice/userDetailsSlice';

const EditProduct = () => {
  const { id } = useParams();
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  useEffect(() => {
    if (token) {
      dispatch(fetchUserDetails(token)).then((data) => {
        // setFormData({
        //   company_id: data?.payload?.id
        // })
      })

    }
  }, [dispatch, token]);
  const [formData, setFormData] = useState({
    product_id: id,
    product_name: '',
    model_number: '',
    description: '',
    warranty_years: "",
    warranty_months: "",
    additionalInfo: [],
    PurchaseOptions: [],
    product_desc_for_customer: "",
    product_video_link: ""
    // Add other fields as necessary
  });
  const [error, setError] = useState(null);
  const [product, setProduct] = useState(null);
  const products = useSelector((state) => state.productDetails.products);


  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleSubmit = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(`/get_product_by_id`, { params: { id: id } });
        console.log(data, "in edit product");
        setLoading(false);
        setFormData(data);
      } catch (error) {
        console.log(error, "error");
        setLoading(false);
      }
    };

    handleSubmit();

  }, [id]);





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
  const handleSubmit = async () => {
    const data = new FormData();
    data.append('company_id', formData.company_id);
    data.append('product_name', formData.product_name);
    data.append('model_number', formData.model_number);
    data.append('description', formData.description);
    // data.append('category_title', formData.category_title);
    data.append('warranty_years', formData.warranty_years);
    data.append('warranty_months', formData.warranty_months);
    data.append('product_desc_for_customer', formData.product_desc_for_customer);
    data.append('product_video_link', formData.product_video_link);
    // data.append('logo_id', formData.logo_id);
    data.append('additionalInfo', JSON.stringify(formData.additionalInfo)); // Convert array to string
    data.append('PurchaseOptions', JSON.stringify(formData.PurchaseOptions)); // Convert array to string
    try {
      setLoading(true)
      const { data } = await axios.put('/edit_product_by_id', formData,{
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
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
  console.log(formData, "formdata")
  return (
    <>
      {loading ? (
        <SpinnerMain />
      ) : (
        <div className='mt-3 p-8 mb-[80px]'>
          <div>
            <h3 className="mb-4 lg:mb-0 text-[1.5rem] leading-[2.5rem] text-[#0052CC] font-semibold">Edit Product</h3>
            <p className='text-[1.2rem] pt-5 leading-[1.5rem] font-semibold text-[#000000]'>Basic Information</p>
          </div>

          <div className='mt-10 flex lg:flex-row flex-col gap-10 '>
            <div className='lg:w-[70%] w-[100%]'>
              <BasicInformationEdit formData={formData} onInputChange={handleInputChange} />
              <AdditionalInfoEdit formData={formData} onAdditionalInfoChange={handleAdditionalInfoChange} />
              <PurchaseOptionEdit formData={formData} onPurchaseOptionChange={handlePurchaseOptionsChange} />
              <Warranty formData={formData} onInputChange={handleInputChange} />
              <ProductVideoEdit formData={formData} onInputChange={handleInputChange} />
              <ProductCustsomerDescriptionEdit formData={formData} onInputChange={handleInputChange} />
            
              {/*              
                <BasicInformation formData={product} />
                <AdditionalInfo  />
                <Purchase  />
                <Warranty  />
                <ProductVideo />
                <CustsomerDescription  /> */}
            </div>
            <div className='lg:w-[30%] w-[100%]'>
              {/* <ProductImge  />
                <Category  />
                <Logo  /> */}
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
        </div>
      )}
    </>
  );
};

export default EditProduct;
