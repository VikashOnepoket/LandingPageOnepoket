import React, { useState, useEffect } from 'react';

const ProductImageEdit = ({ onImageChange, formData, error }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    if (formData?.product_image?.data) {
      // Convert buffer array to Base64
      const buffer = new Uint8Array(formData.product_image.data);
      const base64String = `data:image/jpeg;base64,${bufferToBase64(buffer)}`;
      setImageSrc(base64String);
    }
  }, [formData]);

  const bufferToBase64 = (buffer) => {
    let binary = '';
    const bytes = [].slice.call(buffer);
    bytes.forEach((b) => binary += String.fromCharCode(b));
    return window.btoa(binary);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    onImageChange(file); // Notify parent component with the selected file

    // Create a preview of the selected image
    const reader = new FileReader();
    reader.onloadend = () => {
      setImageSrc(reader.result);
    };
    reader.readAsDataURL(file);
  };


  const removeImage = () => {
    setSelectedFile(null);
    setImageSrc(null);  // Clear the preview image
    onImageChange(null); // Notify parent component with no image selected
  }

  return (
    <>
      <div className='flex justify-between gap-10'>
        <p className='text-[14px] leading-[18px] text-[#58595A] font-semibold'>Product Image</p>
        {/* <p className='text-[12px] leading-[16px] text-[#FF0000BF] font-normal'>Required</p> */}
      </div>
      {error?.errProductImage && <span className="text-red-500 text-xs">{error.errProductImage}</span>}
      <div className="bg-[#F7F7F7] rounded-md border p-6 mt-2">
        {!imageSrc && (<div className="flex justify-center items-center mb-4">
          <label htmlFor="imageUpload" className="cursor-pointer flex flex-col justify-center items-center w-full h-48">
            <span className="material-symbols-outlined text-gray-400 text-5xl">add_a_photo</span>
            <p className="text-gray-500 mt-4 text-sm font-light">Drop your image here, or browse</p>
            <p className="text-center text-sm text-gray-500 mt-4">Support: jpeg, png</p>
          </label>
          <input
            type="file"
            id="imageUpload"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />
        </div>)}
        {imageSrc && (
          <div className="flex justify-center items-center flex-col">
            <img
              src={imageSrc}
              alt="Uploaded Image"
              className="w-52 h-52"
            />
            <button className='bg-[#0052CC] text-white hover:bg-[#0052cc] hover:text-white border border-[#0052cc] text-[14px] leading-[18px] font-bold rounded-md flex items-center px-3 py-2 mt-3' onClick={removeImage}>Remove Image</button>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductImageEdit;
