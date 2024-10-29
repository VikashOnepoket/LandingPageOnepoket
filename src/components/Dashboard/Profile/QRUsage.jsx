import React, { useEffect, useState } from 'react';
import './QRUsage.css';
import axios from '../../../api/api'
import { useDispatch, useSelector } from 'react-redux';
import QRUsageTable from './QRUsageTable';
import { fetchUserDetails } from '../slice/userDetailsSlice';
import SpinnerMain from '../Spinner/SpinnerMain';
import { Pagination } from '@mui/material';

const QRUsage = () => {
  const dispatch = useDispatch()
  const token = useSelector((state) => state.auth.token)
  const [creditLimit, setCreditLimit] = useState('')
  const [loading, setLoading] = useState(false);
  const boxShadowStyle = {
    boxShadow: '0px 1px 4px 0px rgba(0, 0, 0, 0.15)', // X-offset, Y-offset, blur, spread, color
  };

  useEffect(() => {
    setLoading(true)
    dispatch(fetchUserDetails(token)).then((data) => {
      console.log(data)
      setCreditLimit(data?.payload?.credit_limit)
      setLoading(false)
    }).catch((error) => {
      console.log(error)
      setLoading(false)
    })
  }, [])




  const [qrTransactionList, setQrTransactionList] = useState([])
  const [totalPage, setTotalPage] = useState('')
  const [tableData, setTableData] = useState({
    page_number: 1,
    items_per_page: 10,
    sort_order: -1,
    sort_by: "",
    search_by: ""
  })
  const fetchQrTransactionDetails = async () => {
    // API call to fetch QR transaction details
    try {
      setLoading(true)

      const { data } = await axios.post(
        '/lp_get-credits-transactions-details',
        {
          ...tableData
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(data, "tran")
      setTotalPage(data?.total_page)
      setQrTransactionList(data?.transactions_list)
      setLoading(false)
    } catch (e) {
      console.log(e)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchQrTransactionDetails()

  }, [token])


  const handlePageChange = (event, value) => {
    console.log(value , "value")
    setTableData(prevState => ({
      ...prevState,
      page_number: value, // Set the new page number directly
    }));
  };
  // Adding useEffect to trigger fetchQrTransactionDetails when page_number changes
  useEffect(() => {
    fetchQrTransactionDetails();
  }, [tableData.page_number]);
  return (
    <>
      {loading ? (<SpinnerMain />) : (<div className='mt-10'>
        <div className='flex justify-between mt-3 items-center lg:w-[70%] md:w-[80%] w-full'>
          <div>
            <h3 className='text-[1.2rem] leading-[1.5rem] font-semibold text-[#202123]'> Usage History</h3>
          </div>
        </div>
        <div className='mt-8 rounded-lg credit-box' style={boxShadowStyle}>
          <div className='flex sm:justify-between sm:items-center sm:flex-row flex-col'>
            <div className='mt-3 mb-10'>
              <h3 className='sm:text-[2.5rem] sm:leading-[3.2rem] text-[1.5rem] leading-[1.8rem] font-bold text-[#0052CC] px-5 py-2'>Total Credits Left</h3>
              <div style={{ borderRadius: '0px 23px 23px 0px' }} className='mt-3 border border-[#E4EFFF] bg-[#E4EFFF]'>
                <h3 className='text-[1.5rem] leading-[2rem] font-semibold text-[#0052CC] px-5 py-2'>Track your credits in Real-Time.</h3>
              </div>
            </div>
            <div className="flex items-center mt-3 mb-10 px-5 py-2">
              <p className="sm:text-[3rem] sm:leading-[4rem] text-[2.5rem] leading-[3.2rem] font-semibold text-[#00742A]">{creditLimit}</p>
              {/* <div className="h-[4rem] w-[1px] border border-[#2021231A] mx-4"></div> */}
              {/* <p className="sm:text-[3rem] sm:leading-[4rem] text-[2.5rem] leading-[3.2rem] font-semibold text-[#0052cc]">2000</p> */}
            </div>
          </div>
        </div>
        {/* table */}
        <div className=" mt-10 table-box">
          <div className="overflow-x-auto ">
            <table className="w-full border-gray-200 ">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b text-left text-[#202123BF] text-[12px] leading-[17px] font-semibold ">Created On</th>
                  <th className="py-2 px-4 border-b text-left text-[#202123BF] text-[12px] leading-[17px] font-semibold">Product</th>
                  <th className="py-2 px-4 border-b text-left text-[#202123BF] text-[12px] leading-[17px] font-semibold">Category</th>
                  <th className="py-2 px-4 border-b text-left text-[#202123BF] text-[12px] leading-[17px] font-semibold">No. of QR Generated</th>
                  <th className="py-2 px-4 border-b text-left text-[#202123BF] text-[12px] leading-[17px] font-semibold ">No. of QR Left</th>
                </tr>
              </thead>

              {qrTransactionList?.map((qrTransaction) => {
                return <QRUsageTable qrTransaction={qrTransaction} />
              })}

            </table>
          </div>
        </div>

        <div className='mt-12'>
          <Pagination
            count={totalPage}
            variant="outlined"
            shape="rounded"
            onChange={handlePageChange}
            page={tableData?.page_number} 
            // Set the current page from state
            sx={{
              "& .MuiPaginationItem-root": { 
                "&.Mui-selected": {
                  backgroundColor: "#E4EFFF", // Background color when selected
                  color: "#0052cc",  
                  border : "#E4EFFF"            // Text color when selected
                },
              },
              "& .MuiPaginationItem-previousNext": {
                border: "none",
                color : "gray"  // Remove border for the arrow buttons only
              },
            }}
          />
        </div>



      </div>)}
    </>
  );
};

export default QRUsage;
