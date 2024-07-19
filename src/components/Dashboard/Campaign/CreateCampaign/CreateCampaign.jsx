import React, { useState } from 'react'
import Select from 'react-select'

const CreateCampaign = () => {

    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle image upload here
    };

    const options = [
        { value: 'logo1', label: 'Logo 1', logoUrl: 'https://via.placeholder.com/50' },
        { value: 'logo2', label: 'Logo 2', logoUrl: 'https://via.placeholder.com/50' },
        { value: 'logo3', label: 'Logo 3', logoUrl: 'https://via.placeholder.com/50' },
    ];


    const customOption = (props) => {
        const { innerRef, innerProps, data } = props;
        return (
            <div ref={innerRef} {...innerProps} className="flex items-center p-2 justify-between">
                <img src={data.logoUrl} alt={data.label} className="w-6 h-6 mr-2" />
                <span>{data.label}</span>
            </div>
        );
    };
    return (
        <>
            <div className='p-8 lg:w-[50%] md:w-[80%]'>
                {/* campaing name */}
                <div className="flex flex-col gap-2">
                    <label className="text-[16px] leading-[21px] text-[#000000] font-semibold">Campaign Name</label>
                    <input
                        type="text"
                        className="input border border-gray-300 dark:border-gray-600 dark:bg-transparent rounded-md w-full py-2 px-3 focus:border-[#0052cc] focus:border focus-within:ring-1 appearance-none transition duration-150 dark:text-gray-100 ease-in-out"
                        placeholder="Enter Campaign name"
                    />
                </div>

                {/* headline name */}
                <div className="flex flex-col gap-2 mt-8">
                    <label className="text-[16px] leading-[21px] text-[#000000] font-semibold">Headline Name</label>
                    <input
                        type="text"
                        className="input border border-gray-300 dark:border-gray-600 dark:bg-transparent rounded-md w-full py-2 px-3 focus:border-[#0052cc] focus:border focus-within:ring-1 appearance-none transition duration-150 dark:text-gray-100 ease-in-out"
                        placeholder="Enter Headline "
                    />
                </div>
                {/* message content */}
                <div className="flex flex-col gap-2 mt-8">
                    <label className="text-[16px] leading-[21px] text-[#000000] font-semibold">Message Content</label>
                    <textarea
                        type='text'
                        className='input  border 
                        h-28
            border-gray-300 
            dark:border-gray-600 
            dark:bg-transparent 
            rounded-md 
            w-full 
            py-2 px-3 
            focus:border-[#0052cc]
            focus:border
           
            focus-within:ring-1 
            appearance-none 
            transition 
            duration-150 
            dark:text-gray-100
            ease-in-out'
                        placeholder='Message Content'

                    ></textarea>
                </div>


                {/* logo */}
                <div className="flex flex-col gap-2 mt-8">
                    <label className="text-[16px] leading-[21px] text-[#000000] font-semibold">Logo</label>
                    <div className="bg-white rounded-md border  p-6 mt-2">
                        <form onSubmit={handleSubmit}>
                            <div className="flex justify-center items-center mb-4">
                                <label htmlFor="imageUpload" className="cursor-pointer flex flex-col justify-center items-center w-full h-48  ">
                                    <span className="material-symbols-outlined text-gray-400 text-5xl">add_a_photo</span>
                                    <p className="text-gray-500 mt-4 text-sm font-light">
                                        Drop your image here, or browse
                                    </p>
                                    <p className="text-center text-sm text-gray-500 mt-4">
                                        Support: jpeg, png
                                    </p>
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


                        </form>
                    </div>

                </div>

                {/* image */}
                <div className="flex flex-col gap-2 mt-8">
                    <label className="text-[16px] leading-[21px] text-[#000000] font-semibold">Image</label>
                    <div className="bg-white rounded-md border  p-6 mt-2">
                        <form onSubmit={handleSubmit}>
                            <div className="flex justify-center items-center mb-4">
                                <label htmlFor="imageUpload" className="cursor-pointer flex flex-col justify-center items-center w-full h-48  ">
                                    <span className="material-symbols-outlined text-gray-400 text-5xl">add_a_photo</span>
                                    <p className="text-gray-500 mt-4 text-sm font-light">
                                        Drop your image here, or browse
                                    </p>
                                    <p className="text-center text-sm text-gray-500 mt-4">
                                        Support: jpeg, png
                                    </p>
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


                        </form>
                    </div>

                </div>


                {/* medium */}
                <div className='mt-8'>
                    <div className='flex justify-between gap-10'>
                        <p className='text-[16px] leading-[21px] text-[#000000] font-semibold'>Medium</p>
                    </div>
                    <div className="bg-white rounded-md  mt-2 ">
                        <Select
                            options={options}
                            placeholder="Select Medium"
                            components={{ Option: customOption }}
                            styles={{
                                control: (base, state) => ({
                                    ...base,
                                    borderColor: state.isFocused ? '#0052cc' : base.borderColor,
                                    '&:hover': {
                                        borderColor: state.isFocused ? '#0052cc' : base.borderColor,
                                    },
                                }),
                            }}
                        />
                    </div>
                </div>


                {/* button */}
                <div className='flex justify-end  mt-10 gap-5'>
                    <button className='text-[#58595A]  border border-[#8F9091] text-[14px] leading-[18px] font-bold rounded-md flex  items-center px-3 py-2'>
                        Discard
                    </button>
                    <button block className='bg-[#0052CC] text-white hover:bg-[#0052cc] hover:text-white border border-[#0052cc] mr-5 text-[14px] leading-[18px] font-bold rounded-md flex  items-center px-3 py-2' >
                        Save
                    </button>
                </div>



            </div>
        </>
    )
}

export default CreateCampaign
