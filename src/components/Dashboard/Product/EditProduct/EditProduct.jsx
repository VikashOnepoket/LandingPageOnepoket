import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from '../../../../api/api';
import SpinnerMain from '../../Spinner/SpinnerMain';
import BasicInformationEdit from './BasicInformationEdit/BasicInformationEdit';
import AdditionalInfoEdit from './AdditionalInfoEdit/AdditionalInfoEdit';
import PurchaseOptionEdit from './PurchaseOptionEdit/PurchaseOptionEdit';
import ProductCustsomerDescriptionEdit from './DescriptionCustomerEdit/ProductDescriptionCustomerEdit';
import ProductVideoEdit from './VideoEdit/ProductVideoEdit';
import Warranty from '../AddProducts/Warranty/Warranty';

import { fetchUserDetails } from '../../slice/userDetailsSlice';
import ProductImageEdit from './ProductImageEdit/ProductImageEdit';
import CategoryEdit from './CategoryEdit/CategoryEdit';
import LogoEdit from './LogoEdit/LogoEdit';

const EditProduct = () => {
  const { id } = useParams();
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    product_id: id,
    product_name: '',
    model_number: '',
    description: '',
    warranty_years: '',
    warranty_months: '',
    additionalInfo: [],
    PurchaseOptions: [],
    product_desc_for_customer: '',
    product_video_link: '',
    product_image: null, // Add this line to manage the product image
    category_title: "", // Add this line to manage the category title
    logo_id: "",
    show_manufacture_date: "",
    installation_details: "",

  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (token) {
      dispatch(fetchUserDetails(token));
    }
  }, [dispatch, token]);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(`/get_product_by_id`, { params: { id } });
        setLoading(false);
        setFormData({
          ...data,
          installation_details: data.installation_details == 0 ? false : true,
          show_manufacture_date: data.show_manufacture_date == 0 ? false : true,
          additionalInfo: data?.additional_info,
          PurchaseOptions: data?.Purchase_options,
        }); // Set the entire product data including image
      } catch (error) {
        console.log(error, 'error');
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [id]);

  const handleInputChange = (name, value) => {

    let formattedValue = value; // Start with the provided value
    if (name === 'show_manufacture_date' || name === 'installation_details') {
      formattedValue = value ? 1 : 0; // Convert boolean to 1 or 0
    }
    setFormData((prevData) => ({
      ...prevData,
      [name]: formattedValue,
    }));
  };

  const handleLogoChange = (selectedLogo) => {
    setFormData((prevData) => ({
      ...prevData,
      logo_id: selectedLogo?.value || "",
    }));
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

  const handleCategoryChange = (category) => {
    setFormData((prevData) => ({
      ...prevData,
      category_title: category,
    }));
  };

  const handleImageChange = (image) => {
    setFormData({
      ...formData,
      product_image: image,
    });
  };

  console.log(formData, "edit product")

  const handleSubmit = async () => {
    const data = new FormData();
    data.append('product_id', formData.product_id);
    data.append('product_name', formData.product_name);
    data.append('model_number', formData.model_number);
    data.append('description', formData.description);
    data.append('warranty_years', formData.warranty_years);
    data.append('warranty_months', formData.warranty_months);
    data.append('product_desc_for_customer', formData.product_desc_for_customer);
    data.append('product_video_link', formData.product_video_link);
    data.append('additionalInfo', JSON.stringify(formData.additionalInfo));
    data.append('PurchaseOptions', JSON.stringify(formData.PurchaseOptions));
    data.append('category_title', formData.category_title);
    data.append('installation_details', formData?.installation_details == true ? 1 : 0);
    // data.append('show_manufacture_date', formData?.show_manufacture_date)
    data.append('logo_id', formData.logo_id);

    // Check if the product_image is a buffer
    if (formData.product_image && formData.product_image.type === "Buffer") {
      // Convert buffer to Blob
      const buffer = new Uint8Array(formData.product_image.data);
      const blob = new Blob([buffer], { type: 'image/jpeg' });
      data.append('image', blob, 'product_image.jpg');
    } else if (formData.product_image) {
      // If it's already a file object
      data.append('image', formData.product_image);
    }

    try {
      setLoading(true);
      const { data: response } = await axios.put('/edit_product_by_id', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      if (response) {
        toast.success(response.message);
        navigate(`/products`);
      }
      setLoading(false);
    } catch (error) {
      console.log(error, 'error');
      setLoading(false);
    }
  };



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

          <div className='mt-10 flex lg:flex-row flex-col gap-10'>
            <div className='lg:w-[70%] w-[100%]'>
              <BasicInformationEdit formData={formData} onInputChange={handleInputChange} />
              <AdditionalInfoEdit formData={formData} onAdditionalInfoChange={handleAdditionalInfoChange} />
              <PurchaseOptionEdit formData={formData} onPurchaseOptionChange={handlePurchaseOptionsChange} />
              <Warranty formData={formData} onInputChange={handleInputChange} />
              <ProductVideoEdit formData={formData} onInputChange={handleInputChange} />
              <ProductCustsomerDescriptionEdit formData={formData} onInputChange={handleInputChange} />
            </div>
            <div className='lg:w-[30%] w-[100%]'>
              <ProductImageEdit formData={formData} onImageChange={handleImageChange} />
              <CategoryEdit formData={formData} onCategoryChange={handleCategoryChange} />
              <LogoEdit formData={formData} onLogoChange={handleLogoChange} />
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
