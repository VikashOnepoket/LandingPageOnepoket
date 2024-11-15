import React, { useEffect, useState } from 'react'
import axios from '../../../api/api'
import { useSelector } from 'react-redux'
import SpinnerMain from '../Spinner/SpinnerMain'
import AcquireCustomerTable from './AcquireCustomerTable'

const SingleQRAcquiredCustomer = () => {
    const token = useSelector((state) => state.auth.token)
    const [acquiredData, setAcquiredData] = useState([])
    const [loading, setLoading] = useState(false)
    const fetchAcquiredCustomer = async () => {
        try {
            setLoading(true)
            const { data } = await axios.get('/single_qr_complete_scan',
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },


                })
            setAcquiredData(data?.results)
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchAcquiredCustomer()
    }, []);
    return (
        <>
            {loading ? (<SpinnerMain />) : (<div className='mt-3 p-8'>
                <div>
                    <h3 className="mb-4 lg:mb-0 text-[1.5rem] leading-[2.5rem] text-[#0052CC] font-semibold">Acquired Customer</h3>
                </div>
                <div className="  mt-10">
                    <div className="overflow-x-auto ">
                        <table className="min-w-full border-gray-200">
                            <thead className="">
                                <tr>
                                    <th className="py-2 px-4 border-b text-left text-[#202123BF] text-[12px] leading-[17px] font-semibold">Date</th>
                                    <th className="py-2 px-4 border-b text-left text-[#202123BF] text-[12px] leading-[17px] font-semibold">Name</th>
                                    <th className="py-2 px-4 border-b text-left text-[#202123BF] text-[12px] leading-[17px] font-semibold">Email</th>
                                    <th className="py-2 px-4 border-b text-left text-[#202123BF] text-[12px] leading-[17px] font-semibold">Phone Number</th>
                                    <th className="py-2 px-4 border-b text-left text-[#202123BF] text-[12px] leading-[17px] font-semibold">Invoice</th>
                                    <th className="py-2 px-4 border-b text-left text-[#202123BF] text-[12px] leading-[17px] font-semibold">Location</th>
                                </tr>
                            </thead>

                            {acquiredData?.map((acquiredData, index) => {
                                return <AcquireCustomerTable acquiredData={acquiredData} key={index} />
                            })}



                        </table>
                    </div>
                </div>

            </div>)}
        </>
    )
}

export default SingleQRAcquiredCustomer
