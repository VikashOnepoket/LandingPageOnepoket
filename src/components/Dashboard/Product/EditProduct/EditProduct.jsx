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
  const [isSubmitted, setIsSubmitted] = useState(false);
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
  // const [error, setError] = useState(null);
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
    if (isSubmitted) {
      setError((prevError) => ({
        ...prevError,
        [getErrorKey(name)]: formattedValue ? "" : prevError[getErrorKey(name)],
      }));
    }
  };

  const handleLogoChange = (selectedLogo) => {
    setFormData((prevData) => ({
      ...prevData,
      logo_id: selectedLogo?.value || "",
    }));
    setError((prevError) => ({
      ...prevError,
      errLogo: selectedLogo?.value ? "" : prevError.errLogo,
    }));
  };

  const handleAdditionalInfoChange = (additionalInfo) => {
    setFormData({
      ...formData,
      additionalInfo,
    });
    if (isSubmitted) {
      setError((prevError) => ({
        ...prevError,
        errAddInfo: additionalInfo.map((item) => ({
          title: !item?.title ? "Title is required" : "",
          description: !item?.description ? "Description is required" : "",
        })),
      }));
    }
  };

  const handlePurchaseOptionsChange = (PurchaseOptions) => {
    setFormData({
      ...formData,
      PurchaseOptions,
    });
    // if (isSubmitted) {
    //   setError((prevError) => ({
    //     ...prevError,
    //     errPurchase: PurchaseOptions.map((item) => ({
    //       title: !item?.title ? "Store Name is required" : "",
    //       link: !item?.link ? "Link is required" : "",
    //     })),
    //   }));
    // }
  };

  const handleCategoryChange = (category) => {
    setFormData((prevData) => ({
      ...prevData,
      category_title: category,
    }));
    setError((prevError) => ({
      ...prevError,
      errCategory: category ? "" : prevError.errCategory,
    }));
  };

  const handleImageChange = (image) => {
    setFormData({
      ...formData,
      product_image: image,
    });
    setError((prevError) => ({
      ...prevError,
      errProductImage: image ? "" : prevError.errProductImage,
    }));
  };
  const [error, setError] = useState({
    errLogo: "",
    errProductName: "",
    errModelNumber: "",
    errProductDescription: "",
    errProductImage: "",
    errWarranty: "",
    errCategory: "",
    errAddInfo: [],
    errPurchaseOption: []
  })

  // Helper function to map form field names to error keys
  const getErrorKey = (name) => {
    switch (name) {
      case 'logo_id':
        return 'errLogo';
      case 'product_name':
        return 'errProductName';
      case 'model_number':
        return 'errModelNumber';
      case 'description':
        return 'errProductDescription';
      case 'product_desc_for_customer':
        return 'errCustomerDescription';
      case 'warranty_years':
        return 'errWarranty'
      case 'warranty_months':
        return 'errWarranty'
      default:
        return '';
    }
  };
  console.log(error, "error")
  const handleSubmit = async () => {
    setIsSubmitted(true);
    const newErrors = {
      errLogo: !formData?.logo_id ? "Logo is required" : "",
      errProductName: !formData?.product_name ? "Product Name is required" : "",
      errModelNumber: !formData?.model_number ? "Model Number is required" : "",
      errProductDescription: !formData?.description ? "Product Description is required" : "",
      errProductImage: !formData?.product_image ? "Product Image is required" : "",
      errWarranty:
        (!formData?.warranty_years && !formData?.warranty_months)
          ? "Warranty information is required"
          : "",
      errCategory: !formData?.category_title ? "Category is required" : "",
      errAddInfo: Array.isArray(formData.additionalInfo)
        ? formData.additionalInfo.map((item, index) => ({
          title: !item?.title ? `Title is required` : "",
          description: !item?.description ? `Description is required` : "",
        }))
        : [],
      errPurchase: Array.isArray(formData?.PurchaseOptions)
        ? formData?.PurchaseOptions.map((item, index) => ({
          title: !item?.title ? `Store Name is required` : "",
          link: !item?.link ? `Link is required` : "",
        }))
        : [],
    };
    

    // Check if any errors exist
    const hasErrors = Object.values(newErrors).some((err) => {
      if (Array.isArray(err)) {
        // Check for errors in additionalInfo array
        return err.some((item) => item.title || item.description);
      }
      return err !== "";
    });

    if (hasErrors) {
      setError(newErrors); // Set errors in state
      return; // Exit early if validation fails
    }

    // 
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
              <BasicInformationEdit formData={formData} onInputChange={handleInputChange} error={error} />
              <AdditionalInfoEdit formData={formData} onAdditionalInfoChange={handleAdditionalInfoChange} error={error} />
              <PurchaseOptionEdit formData={formData} onPurchaseOptionChange={handlePurchaseOptionsChange} error={error} />
              <Warranty formData={formData} onInputChange={handleInputChange} error={error} />
              <ProductVideoEdit formData={formData} onInputChange={handleInputChange} error={error} />
              {/* <ProductCustsomerDescriptionEdit formData={formData} onInputChange={handleInputChange} /> */}
            </div>
            <div className='lg:w-[30%] w-[100%]'>
              <ProductImageEdit formData={formData} onImageChange={handleImageChange} error={error} />
              <CategoryEdit formData={formData} onCategoryChange={handleCategoryChange} error={error} />
              <LogoEdit formData={formData} onLogoChange={handleLogoChange} error={error} />
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
