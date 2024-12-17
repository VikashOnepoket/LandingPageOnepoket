import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import { fetchLogo } from '../../../slice/logoSlice';
import { motion } from 'framer-motion'
import AddLogo from '../../../Profile/AddLogo/AddLogo';
import toast from 'react-hot-toast';
import axios from '../../../../../api/api'

const Logo = ({ onLogoChange, error }) => {
    const [loading, setLoading] = useState(false);
    const token = useSelector((state) => state.auth.token);
    const dispatch = useDispatch();
    const logos = useSelector((state) => state.logoDetails.logo);
    const [selectedLogo, setSelectedLogo] = useState(null);

    useEffect(() => {
        if (token) {
            setLoading(true);
            dispatch(fetchLogo(token))
                .unwrap()
                .then((data) => {
                    console.log(data, "data");
                    setLoading(false);
                })
                .catch((error) => {
                    console.log(error.response.status, "error");
                    setLoading(false);
                });
        }
    }, [dispatch, token]);

    const options = logos.map((logo) => ({
        value: logo.id,
        label: logo.title,
        logoUrl: logo.image, // Ensure this field matches your data structure
    }));

    const customOption = (props) => {
        const { innerRef, innerProps, data } = props;
        return (
            <div ref={innerRef} {...innerProps} className="flex items-center p-2">
                <img src={data.logoUrl} alt={data.label} className="w-6 h-6 mr-2" />
                <span>{data.label}</span>
            </div>
        );
    };

    const handleChange = (selectedOption) => {
        setSelectedLogo(selectedOption);
        onLogoChange(selectedOption); // Notify parent component with the selected logo
    };

    const handleAddLogo = () => {
        setOpenLogoModal(true)
    }

    const onClose = () => {
        setOpenLogoModal(false)
    }

    const [state, setState] = useState({
        title: "",
        image: null,
    })

    const [openLogoModal, setOpenLogoModal] = useState(false)
    const addNewLogo = async () => {
        if(!state.title || !state.image){
            return toast.error("All fields are required !")
        }
        const formData = new FormData();
        formData.append('title', state.title);
        formData.append('image', state.image);
        formData.append('token', token);

        try {
            setLoading(true);
            const response = await axios.post('/upload_logo', formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data'
                }
            });
            setLoading(false);
            toast.success('Logo added successfully');
            dispatch(fetchLogo(token))
            onClose()

        } catch (error) {
            console.error('Error uploading logo:', error);
            setLoading(false);
        }
    };
    const handleInputChange = (e) => {
        const { name, value, files } = e.target;

        if (name === 'image') {
            if (files && files[0]) {
                setState((prevState) => ({
                    ...prevState,
                    image: files[0], // Correctly store the file object
                }));
            }
        } else {
            // For text input
            setState((prevState) => ({
                ...prevState,
                [name]: value,
            }));
        }
    };
    console.log(state.image , "image")

    return (
        <div className='mt-10'>
            <div className='flex justify-between gap-10'>
                <p className='ml-2 text-[14px] leading-[18px] text-[#58595A] font-semibold'>
                    <span className="text-[#EE4444] mr-1"> *</span>
                    Logo</p>
            </div>
            {error?.errLogo && <span className="text-red-500 text-xs">{error.errLogo}</span>}
            <div className="bg-white rounded-md border p-6 mt-2 h-[220px]">
                <Select
                    options={options}
                    value={selectedLogo}
                    onChange={handleChange}
                    placeholder="Select Logo"
                    components={{ Option: customOption }}
                    styles={{
                        control: (base, state) => ({
                            ...base,
                            backgroundColor: "#F7F7F7",
                            borderColor: state.isFocused ? '#0052cc' : base.borderColor,
                            '&:hover': {
                                borderColor: state.isFocused ? '#0052cc' : base.borderColor,
                            },
                        }),
                    }}
                />
                {selectedLogo && (
                    <div className="mt-4 flex items-center">
                        <img src={selectedLogo.logoUrl} alt={selectedLogo.label} className="w-12 h-12" />
                        <span className="ml-3 text-[14px] leading-[18px] text-[#58595A]">{selectedLogo.label}</span>
                    </div>
                )}
                <div className='flex justify-end'>
                    <button onClick={handleAddLogo} className="text-[#0052cc] text-[12px] leading-[16px] font-semibold mt-2 flex items-center">
                        <span className="material-symbols-outlined mr-2">add</span>
                        Add New Logo
                    </button>
                </div>
            </div>
            {openLogoModal && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 modal-backdrop"
                    onClick={(e) => e.target.classList.contains('modal-backdrop') && onClose()}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white p-8 rounded-lg shadow-lg"
                        style={{ minWidth: 300, maxWidth: 600 }}
                    > <div>
                            <h3 className="mb-4 lg:mb-0 text-[1.5rem] leading-[2.5rem] text-[#0052CC] font-semibold">Add Company Logo</h3>
                        </div>
                        <div className="flex flex-col gap-2 mt-5">
                            <label className="ml-2 text-[14px] leading-[18px] text-[#58595A] font-semibold">
                                <span className="text-[#EE4444] mr-1"> *</span>
                                Title
                            </label>
                            <input
                                type="text"
                                name='title'
                                value={state.title}
                                className="input border  rounded-md w-full py-2 px-3 focus:border-[#0052cc] focus:border focus-within:ring-1   transition duration-150 text-black bg-[#F7F7F7]"
                                placeholder="Enter Logo Title"
                                onChange={handleInputChange}


                            />
                        </div>
                        <div className="flex flex-col gap-2 mt-5">
                            <label className="ml-2 text-[14px] leading-[18px] text-[#58595A] font-semibold">
                                <span className="text-[#EE4444] mr-1"> *</span>
                                Logo
                            </label>
                            <input
                                type="file"
                                name='image'
                                
                                className="input border  rounded-md w-full py-2 px-3 focus:border-[#0052cc] focus:border focus-within:ring-1   transition duration-150 text-black bg-[#F7F7F7]"
                                placeholder="Upload Logo "
                                onChange={handleInputChange}


                            />
                        </div>

                        <div className="mt-10 flex justify-end gap-5">

                            <button
                                type="button"
                                onClick={addNewLogo}
                                className="bg-[#0052CC] text-white hover:bg-[#0052cc] border border-[#0052cc] text-[14px] leading-[18px] font-bold rounded-md flex items-center px-3 py-2"
                            >
                              {loading ? "Loading..." : "Save"}
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </div>
    );
};

export default Logo;
