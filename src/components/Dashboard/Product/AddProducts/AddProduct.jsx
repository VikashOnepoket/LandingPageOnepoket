import React, { useEffect, useState } from 'react';
import BasicInformation from './BasicInformation/BasicInformation';
import ProductImge from './ProductImage/ProductImge';
import Warranty from './Warranty/Warranty';
import CustsomerDescription from './ProductDescCutomer/CustsomerDescription';
import Category from './Category/Category';
import Logo from './Logo/Logo';
import Purchase from './PurchaseOption/Purchase';
import ProductVideo from './Video/ProductVideo';
import AdditionalInfo from './Additional/Additional';
import axios from '../../../../api/api';
import SpinnerMain from '../../Spinner/SpinnerMain';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserDetails } from '../../slice/userDetailsSlice';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);

  const [formData, setFormData] = useState({
    company_id: "",
    product_name: '',
    model_number: '',
    description: '',
    category_title: '',
    warranty_years: "",
    warranty_months: "",
    additionalInfo: [],
    PurchaseOptions: [],
    product_desc_for_customer: "",
    product_video_link: "",
    logo_id: "",
    show_manufacture_date: "",
    installation_details: "",
    image: null,
    dynamic_qr: "", //
  });

  useEffect(() => {
    if (token) {
      dispatch(fetchUserDetails(token)).then((data) => {
        setFormData((prevData) => ({
          ...prevData,
          company_id: data?.payload?.id,
        }));
      });
    }
  }, [dispatch, token]);

  const handleInputChange = (name, value) => {
    // Convert `show_manufacture_date` and `installation_details` to 0 or 1
    const formattedValue = (name === 'show_manufacture_date' || name === 'installation_details' || name === 'dynamic_qr')
      ? (value ? 1 : 0)
      : value; // For other fields, keep the original value

    setFormData((prevData) => ({
      ...prevData,
      [name]: formattedValue,
    }));

    // get erro
    setError((prevError) => ({
      ...prevError,
      [getErrorKey(name)]: formattedValue ? "" : prevError[getErrorKey(name)],
    }));
  };
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

  const handleAdditionalInfoChange = (additionalInfo) => {
    setFormData((prevData) => ({
      ...prevData,
      additionalInfo,
    }));
    setError((prevError) => ({
      ...prevError,
      errAdditionalInfo: additionalInfo ? "" : prevError.errAdditionalInfo,
    }));
  };

  const handlePurchaseOptionsChange = (PurchaseOptions) => {
    setFormData((prevData) => ({
      ...prevData,
      PurchaseOptions,
    }));
    setError((prevError) => ({
      ...prevError,
      errPurchaseOption: PurchaseOptions ? "" : prevError.errPurchaseOption,
    }));
  };

  const handleLogoChange = (selectedLogo) => {
    const logoValue = selectedLogo?.value || "";

    setFormData((prevData) => ({
      ...prevData,
      logo_id: logoValue,
    }));

    // Clear error if a valid logo is selected
    setError((prevError) => ({
      ...prevError,
      errLogo: logoValue ? "" : prevError.errLogo,
    }));
  };


  const handleImageChange = (file) => {
    setFormData((prevData) => ({
      ...prevData,
      image: file,
    }));
    setError((prevError) => ({
      ...prevError,
      errProductImage: file ? "" : prevError.errProductImage,
    }));
  };

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({
    errLogo: "",
    errProductName: "",
    errModelNumber: "",
    errProductDescription: "",
    errCustomerDescription: "",
    errVideoLink: "",
    errProductImage: "",
    errWarranty: "",
    errCategory: "",
    errAdditionalInfo: "",
    errPurchaseOption: ""
  })
  console.log(error , "error")

  const handleSubmit = async () => {

    const newErrors = {
      errLogo: !formData?.logo_id ? "Logo is required" : "",
      errProductName: !formData?.product_name ? "Product Name is required" : "",
      errModelNumber: !formData?.model_number ? "Model Number is required" : "",
      errProductDescription: !formData?.description ? "Product Description is required" : "",
      errCustomerDescription: !formData?.product_desc_for_customer
        ? "Customer Description is required"
        : "",
      errVideoLink: !formData?.product_video_link
        ? "Video Link is required"
        : "",
      errProductImage: !formData?.image ? "Product Image is required" : "",
      errWarranty:
        (!formData?.warranty_years && !formData?.warranty_months)
          ? "Warranty information is required"
          : "",
      errCategory: !formData?.category_title ? "Category is required" : "",
      errAdditionalInfo:
        !formData?.additionalInfo || formData.additionalInfo.length === 0
          ? "Additional Info is required"
          : "",
      errPurchaseOption:
        !formData?.PurchaseOptions || formData.PurchaseOptions.length === 0
          ? "Purchase Option is required"
          : "",
    };

    // Check if any errors exist
    if (Object.values(newErrors).some((err) => err !== "")) {
      setError(newErrors); // Set errors in state
      return; // Exit early if there are validation errors
    }
    const data = new FormData();
    data.append('company_id', formData.company_id);
    data.append('product_name', formData.product_name);
    data.append('model_number', formData.model_number);
    data.append('description', formData.description);
    data.append('category_title', formData.category_title);
    data.append('warranty_years', formData.warranty_years || 0);
    data.append('warranty_months', formData.warranty_months || 0);
    data.append('product_desc_for_customer', formData.product_desc_for_customer);
    data.append('product_video_link', formData.product_video_link);
    data.append('logo_id', formData.logo_id);
    data.append('installation_details', formData?.installation_details)
    data.append('show_manufacture_date', formData?.show_manufacture_date)
    data.append('additionalInfo', JSON.stringify(formData.additionalInfo)); // Convert array to string
    data.append('PurchaseOptions', JSON.stringify(formData.PurchaseOptions)); // Convert array to string
    data.append('dynamic_qr', formData?.dynamic_qr); // Append the dynamic QR code
    if (formData.image) {
      data.append('image', formData.image); // Append the selected image
    }

    try {
      setLoading(true);
      const response = await axios.post('/add_product_lp', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      if (response.data) {
        toast.success(response.data.message);
        navigate(`/products`);
      }
    } catch (error) {
      console.error(error);
    } finally {
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
            <h3 className="mb-4 lg:mb-0 text-[1.5rem] leading-[2.5rem] text-[#0052CC] font-semibold">Add New Product</h3>
            <p className='text-[1.2rem] pt-5 leading-[1.5rem] font-semibold text-[#000000]'>Basic Information</p>
          </div>

          <div className='mt-10 flex lg:flex-row flex-col gap-10 '>
            <div className='lg:w-[70%] w-[100%]'>
              <BasicInformation formData={formData} onInputChange={handleInputChange} error={error} />
              <AdditionalInfo additionalInfo={formData?.additionalInfo} onAdditionalInfoChange={handleAdditionalInfoChange} error={error} />
              <Purchase purchaseOptions={formData?.PurchaseOptions} onPurchaseOptionsChange={handlePurchaseOptionsChange} error={error} />
              <Warranty formData={formData} onInputChange={handleInputChange} error={error} />
              <ProductVideo formData={formData} onInputChange={handleInputChange} error={error} />
              <CustsomerDescription formData={formData} onInputChange={handleInputChange} error={error} />
            </div>
            <div className='lg:w-[30%] w-[100%]'>
              <ProductImge onImageChange={handleImageChange} error={error} />
              <Category onCategoryChange={handleCategoryChange} error={error} />
              <Logo onLogoChange={handleLogoChange} error={error} />
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

export default AddProduct;
