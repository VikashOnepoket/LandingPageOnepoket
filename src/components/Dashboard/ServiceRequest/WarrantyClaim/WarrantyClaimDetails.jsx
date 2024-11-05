import React, { useEffect, useState } from 'react'
import earbud from '../../../../assets/image 6.png'
import { useParams } from 'react-router-dom'
import InvoiceDownload from './InvoiceUrl'
import Select from 'react-select'
import axios from '../../../../api/api'
import { useSelector } from 'react-redux'
import SpinnerMain from '../../Spinner/SpinnerMain'

const WarrantyClaimDetails = () => {
    const token = useSelector((state) => state.auth.token)
    const statusOptions = [
        { value: 'pending', label: 'Pending', isDisabled: true },
        { value: 'Approved', label: 'Approved' },
        { value: 'InReview', label: 'InReview' },
        { value: 'Rejected', label: 'Rejected' },
    ];

    const [selectedInstallationId, setSelectedInstallationId] = useState(null);
    const [selectedInstallationOption, setSelectedInstallationOPtion] = useState(null);

    const handleStatusChange = async (selectedOption) => {
        setSelectedInstallationOPtion(selectedOption);
        try {
            // setLoading(true)
            const { data } = await axios.post(
                '/update_warranty_claim_status_by_id',
                { id, status: selectedOption.value },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            console.log(data, "data updated");
            fetchDetails()
            // setLoading(false);
        } catch (error) {
            console.error("Error updating status:", error);
        }
    };

    const [loading, setLoading] = useState(false)
    const [details, setDetails] = useState([])
    const { id } = useParams()
    const formatDate = (dateString) => {
        const date = new Date(dateString); // Parse the date string
        const options = { year: 'numeric', month: 'long', day: 'numeric' }; // Formatting options
        return date.toLocaleDateString('en-US', options); // Format the date
    };
    const fetchDetails = async () => {
        try {
            setLoading(true);
            const { data } = await axios.post('/get_warranty_claim_by_id', { id: id })
            console.log(data, 'details')

            setDetails(data[0])
            setSelectedInstallationOPtion(
                statusOptions.find(option => option.value === data[0]?.warranty_status) || statusOptions[0]
            );

            setLoading(false)
        } catch (error) {
            setLoading(false)
        }

    }
    useEffect(() => {
        fetchDetails()
    }, [id])

    const image = details?.product_image?.data
    const problem_image = details?.problem_image?.data
    const [base64Image, setBase64Image] = useState('');
    const [base64Image1, setBase64Image1] = useState('');
    const bufferToBase64 = (buffer) => {
        let binary = '';
        const bytes = [].slice.call(buffer);
        bytes.forEach((b) => binary += String.fromCharCode(b));
        return window.btoa(binary);
    };
    useEffect(() => {
        if (image) {
            const buffer = new Uint8Array(image);
            const base64String = `data:image/jpeg;base64,${bufferToBase64(buffer)}`;
            setBase64Image(base64String);
        }
    }, [image]);
    useEffect(() => {
        if (problem_image) {
            const buffer = new Uint8Array(problem_image);
            const base64String = `data:image/jpeg;base64,${bufferToBase64(buffer)}`;
            setBase64Image1(base64String);
        }
    }, [problem_image]);

    const invoice = details?.invoice

    return (
        <>
            {loading ? (<SpinnerMain />) : (<div className='mt-3 p-8'>
                <div className="lg:flex items-center justify-between mb-4">
                    <h3 className="mb-4 lg:mb-0 text-[1.5rem] leading-[2.5rem] font-semibold text-[#0052CC]">Service Request</h3>
                    {/* <ProductTableTools /> */}
                </div>
                <div className='mt-12'>
                    <div className='flex justify-between gap-10 p-5'>
                        <div className='w-[60%]'>
                            <div className='flex gap-10'>
                                {/* 1st box */}
                                <div className=''>
                                    <div>
                                        <h3 className='text-xs font-semibold text-[#20212380]'>Warranty ID</h3>
                                        <p className='text-[#202123] text-base mt-1'>{details?.warranty_id}</p>
                                    </div>
                                    <div className='mt-5'>
                                        <h3 className='text-xs font-semibold text-[#20212380]'>Date of Claim</h3>
                                        <p className='text-[#202123] text-base mt-1'>{formatDate(details?.created_on)}</p>
                                    </div>
                                    <div className='mt-5'>
                                        <h3 className='text-xs font-semibold text-[#20212380]'>Owner Name</h3>
                                        <p className='text-[#202123] text-base mt-1'>{details?.owner_name}</p>
                                    </div>
                                    <div className='mt-5'>
                                        <h3 className='text-xs font-semibold text-[#20212380]'>Phone Number</h3>
                                        <p className='text-[#202123] text-base mt-1'>{details?.phone_number}</p>
                                    </div>
                                    <div className='mt-5'>
                                        <h3 className='text-xs font-semibold text-[#20212380]'>Address</h3>
                                        <p className='text-[#202123] text-base mt-1'>{details?.address}</p>
                                    </div>
                                </div>
                                {/* 2nd box */}
                                <div className=''>
                                    <div>
                                        <h3 className='text-xs font-semibold text-[#20212380]'>Status</h3>
                                        <Select
                                            value={selectedInstallationOption}
                                            onChange={handleStatusChange}
                                            options={statusOptions}
                                            styles={{
                                                control: (provided) => ({
                                                    ...provided,
                                                    width: '150px',
                                                    fontSize: '12px',
                                                    cursor: 'pointer'
                                                }),
                                                menu: (provided) => ({
                                                    ...provided,
                                                    fontSize: '12px',
                                                    cursor: 'pointer'
                                                }),
                                                option: (provided, state) => ({
                                                    ...provided,
                                                    cursor: state.isDisabled ? 'not-allowed' : 'pointer', // Disabled cursor for "Pending"
                                                    color: state.isDisabled ? '#ccc' : provided.color,
                                                }),
                                            }}
                                            menuPortalTarget={null} // Dropdown will open within the modal
                                            menuPosition="fixed"
                                        />
                                    </div>
                                    <div className='mt-5'>
                                        <h3 className='text-xs font-semibold text-[#20212380]'>Warranty Start date</h3>
                                        <p className='text-[#202123] text-base mt-1'>{details?.warranty_start}</p>
                                    </div>
                                    <div className='mt-5'>
                                        <h3 className='text-xs font-semibold text-[#20212380]'>Product Name</h3>
                                        <p className='text-[#202123] text-base mt-1'>{details?.product_name}</p>
                                    </div>
                                    <div className='mt-5'>
                                        <h3 className='text-xs font-semibold text-[#20212380]'>Email </h3>
                                        <p className='text-[#202123] text-base mt-1'>{details?.email}</p>
                                    </div>
                                    {/* <div className='mt-5'>
                                        <h3 className='text-xs font-semibold text-[#20212380]'>Address</h3>
                                        <p className='text-[#202123] text-base mt-1'>Gorakhpur , Deoria</p>
                                    </div> */}
                                </div>
                                {/* 3rd box */}
                                <div className=''>
                                    <div className='mt-[60px]'>
                                        {/* <h3 className='text-xs font-semibold text-[#20212380]'>Warranty ID</h3>
                                        <p className='text-[#202123] text-base mt-1'>WBKJ2562146556</p> */}
                                    </div>
                                    <div className='mt-5'>
                                        <h3 className='text-xs font-semibold text-[#20212380]'>Warranty End Date</h3>
                                        <p className='text-[#202123] text-base mt-1'>{details?.warranty_end}</p>
                                    </div>
                                    <div className='mt-5'>
                                        <h3 className='text-xs font-semibold text-[#20212380]'>Category </h3>
                                        <p className='text-[#202123] text-base mt-1'>{details?.category_title}</p>
                                    </div>
                                    {/* <div className='mt-5'>
                                        <h3 className='text-xs font-semibold text-[#20212380]'>Phone Number</h3>
                                        <p className='text-[#202123] text-base mt-1'>123456789</p>
                                    </div>
                                    <div className='mt-5'>
                                        <h3 className='text-xs font-semibold text-[#20212380]'>Address</h3>
                                        <p className='text-[#202123] text-base mt-1'>Gorakhpur , Deoria</p>
                                    </div> */}
                                </div>


                            </div>
                            <div className='mt-12'>
                                <h3 className='text-xs font-semibold text-[#20212380]'>Problem</h3>
                                <p className='text-[#202123] text-base mt-5'>{details?.reason}</p>
                            </div>
                            <div className='mt-12'>
                                <h3 className='text-xs font-semibold text-[#20212380]'>Problem Image</h3>
                                <div className='border rounded-md h-[280px] flex justify-center items-center mt-3'>
                                    <img src={base64Image1} className='w-[200px] h-[200px]' />
                                </div>

                            </div>
                        </div>
                        <div className='w-[40%]'>
                            <div className=''>
                                <h3 className='text-xs font-semibold text-[#20212380]'>Product Image</h3>
                                <div className='border rounded-md h-[280px] flex justify-center items-center mt-3'>
                                    <img src={base64Image} className='w-[200px] h-[200px]' />
                                </div>

                            </div>
                            <InvoiceDownload invoiceUrl={invoice} />
                        </div>
                    </div>
                </div>
            </div>)}
        </>
    )
}

export default WarrantyClaimDetails
