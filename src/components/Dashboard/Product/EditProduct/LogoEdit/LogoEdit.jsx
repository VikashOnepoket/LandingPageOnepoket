import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import { fetchLogo } from '../../../slice/logoSlice';

const LogoEdit = ({ formData, onLogoChange }) => {
    console.log(formData.logo_id, "form")
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
                    console.log(data , "data")
                    // Ensure the data is an array
                    if (Array.isArray(data)) {
                        const matchedLogo = data.find((logo) => String(logo.id) === String(formData.logo_id));
                        console.log(matchedLogo, "matched logo");
                        if (matchedLogo) {
                            setSelectedLogo({
                                value: matchedLogo.id,
                                label: matchedLogo.title,
                                logoUrl: matchedLogo.image
                            });
                        }
                    } else {
                        console.log('Data is not an array:', data);
                    }
                    
                    setLoading(false);
                })
                .catch((error) => {
                    console.log(error.response ? error.response.status : 'Unknown error', "error");
                    setLoading(false);
                });
        }
    }, [dispatch, token, formData.logo_id]);

    const options = logos.map((logo) => ({
        value: logo.id,
        label: logo.title,
        logoUrl: logo.image,
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

    return (
        <div className='mt-10'>
            <div className='flex justify-between gap-10'>
                <p className='text-[14px] leading-[18px] text-[#58595A] font-semibold'>Logo</p>
            </div>
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
            </div>
        </div>
    );
};

export default LogoEdit;
