import React, { useState } from 'react';

const ProductImgeEdit = ({ onImageChange }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    onImageChange(file); // Notify parent component with the selected file
  };

  return (
    <>
      <div className='flex justify-between gap-10'>
        <p className='text-[14px] leading-[18px] text-[#58595A] font-semibold'>Product Image</p>
        <p className='text-[12px] leading-[16px] text-[#FF0000BF] font-normal'>Required</p>
      </div>
      <div className="bg-white rounded-md border p-6 mt-2">
        <div className="flex justify-center items-center mb-4">
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
        </div>
        {selectedFile && (
          <div className="flex justify-center items-center">
            <img
              src={URL.createObjectURL(selectedFile)}
              alt="Uploaded Image"
              className="w-64 h-64 object-cover"
            />
          </div>
        )}
      </div>
    </>
  );
};

export default ProductImgeEdit;
