import React, { useEffect, useState } from 'react';
import './QRUsage.css';
import axios from '../../../api/api'
import { useDispatch, useSelector } from 'react-redux';
import QRUsageTable from './QRUsageTable';
import { fetchUserDetails } from '../slice/userDetailsSlice';
import SpinnerMain from '../Spinner/SpinnerMain';
import { Drawer, Pagination } from '@mui/material';
import Select from 'react-select'
import { fetchCategory } from '../slice/categorySlice';
import { DatePicker } from 'antd';

const QRUsage = () => {
  const dispatch = useDispatch()
  const token = useSelector((state) => state.auth.token)
  const [creditLimit, setCreditLimit] = useState('')
  const [loading, setLoading] = useState(false);
  const boxShadowStyle = {
    boxShadow: '0px 1px 4px 0px rgba(0, 0, 0, 0.15)', // X-offset, Y-offset, blur, spread, color
  };
  const user = useSelector((state) => state.userDetails.user)
  useEffect(() => {
    if (user) {
      setCreditLimit(user?.credit_limit)
    }
  }, [user])


  const [qrTransactionList, setQrTransactionList] = useState([])
  const [totalPage, setTotalPage] = useState('')
  const [tableData, setTableData] = useState({
    page_number: 1,
    items_per_page: 20,
  })
  const fetchQrTransactionDetails = async () => {
    // API call to fetch QR transaction details
    try {
      setLoading(true)

      const { data } = await axios.post(
        'lp_get_credits_transactions_details',
      
        {
          ...tableData,
          filter_by_category: filterCategory,
          filter_by_date: selectedCheckboxes[0] || customeDate,
          start_date: startDate,
          end_date: endDate,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(data, "transaction completed")
      setTotalPage(data?.total_page)
      setQrTransactionList(data?.results)
      setLoading(false)
    } catch (e) {
      console.log(e)
      setLoading(false)
    }
  }

  const handlePageChange = (event, value) => {
    console.log(value, "value")
    setTableData(prevState => ({
      ...prevState,
      page_number: value,
    }));
  };

  useEffect(() => {

    fetchQrTransactionDetails();
  }, [tableData.page_number]);


  // filter
  const [drawerOpen, setDrawerOpen] = useState(false);
  const openDrawer = () => {
    setDrawerOpen(true);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
  const dateOptions = [
    { value: 'today', label: 'Today' },
    { value: 'yesterday', label: 'Yesterday' },
    { value: 'this_week', label: 'Last 7 days' },
    { value: 'this_month', label: 'This Month' },
  ];

  const handleCheckboxChange = (value) => {
    console.log(value, "valuesss")
    setSelectedCheckboxes((prevSelected) =>
      prevSelected.includes(value) ? [] : [value]
    );
  };


  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      borderColor: state.isFocused ? '#0052cc' : provided.borderColor,
      boxShadow: state.isFocused ? '0 0 0 1px #0052cc' : provided.boxShadow,
      '&:hover': {
        borderColor: state.isFocused ? '#0052cc' : provided.borderColor
      }
    })
  };



  // 
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [filterCategory, setFilterCategory] = useState([])
  const handleCategoryChange = (value) => {
    const categoryValue = value?.map((category) => {
      return category?.value
    })
    setFilterCategory(categoryValue)
    setSelectedCategories(value)
  }

  useEffect(() => {
    if (token) {
      setLoading(true);
      dispatch(fetchCategory(token))
        .unwrap()
        .then((data) => {
          setSelectedCategory(data)
        })
        .catch((error) => {
          console.error(error.response?.status, "error");
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, []);


  const optionsCategory = selectedCategory?.map((category) => {
    return {
      value: category?.title,
      label: category?.title,
    };
  });
  const applyFilter = async () => {

    try {
      setLoading(true);
      const { data } = await axios.post('/lp_get_credits_transactions_details',
        {
          ...tableData,
          filter_by_category: filterCategory,
          filter_by_date: selectedCheckboxes[0] || customeDate,
          start_date: startDate,
          end_date: endDate,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      setTotalPage(data?.total_page)
      setQrTransactionList(data?.results)
      setLoading(false)
      closeDrawer()
    } catch (error) {
      setLoading(false)

    }

  };


  // date picker
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [customeDate, setCustomeDate] = useState("");
  const handleStartDateChange = (date) => {
    setCustomeDate("custom_date")
    setStartDate(date);
    setEndDate(null);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  const disabledEndDate = (current) => {
    return current && startDate && current.isBefore(startDate, 'day');
  };


  const resetAllValues = () => {
    setStartDate(null)
    setEndDate(null)
    setSelectedCategories([])
    setSelectedCheckboxes('')

  }

  return (
    <>
      {loading ? (<SpinnerMain />) : (<div className='mt-10'>
        <div className='flex justify-between mt-3 items-center  w-full'>

          <div>
            <h3 className='text-[1.2rem] leading-[1.5rem] font-semibold text-[#202123]'> Usage History</h3>
          </div>
          <div>
            <button block className='text-[#58595A] text-[14px] leading-[18px] font-bold rounded-md flex items-center px-3 py-2' onClick={openDrawer}>
              <span className="material-symbols-outlined mr-2">filter_alt</span>
              Filter
            </button>
          </div>
          <Drawer anchor="right" open={drawerOpen} onClose={closeDrawer}>
            <div style={{ width: '350px' }}>
              {/* Content of your filter drawer */}
              <div style={{ padding: '20px' }}>
                <div className='flex justify-between gap-5 items-center'>
                  <h2 className='text-[22px] leading-[28px] font-semibold text-[#0052cc]'>Filter</h2>
                  <span className="material-symbols-outlined text-[#8F9091] text-[20px] cursor-pointer" onClick={closeDrawer}>
                    close
                  </span>
                </div>
              </div>
              <div className='border-t'></div>
              <div style={{ padding: "20px" }}>
                {/* byCategory */}
                <div className=" mb-4">
                  <label className="text-[16px] leading-[21px] font-semibold mb-2 text-[#000000]">By Categories</label>
                  <Select
                    // value={selectedCategory}
                    value={selectedCategories}
                    onChange={handleCategoryChange}
                    options={optionsCategory}
                    styles={customStyles}
                    className='mt-1'
                    placeholder="Please Select Categories..."
                    isMulti
                  />
                </div>
                {/* by date */}
                <div className="mb-4 mt-5">
                  <label className="text-[16px] leading-[21px] font-semibold mb-2 text-[#000000]">By Date</label>
                  <div className='mt-1'>
                    {/* Start Date Picker */}
                    <DatePicker
                      value={startDate}
                      onChange={handleStartDateChange}
                      format="DD-MM-YYYY"
                      placeholder="Select Start Date"
                      getPopupContainer={(trigger) => trigger.parentNode}
                      popupPlacement="bottomLeft"
                      disabled={selectedCheckboxes.length > 0}
                    />

                    {/* End Date Picker, enabled only when start date is selected */}
                    <DatePicker
                      value={endDate}
                      onChange={handleEndDateChange}
                      format="DD-MM-YYYY"
                      placeholder="Select End Date"
                      disabled={!startDate}
                      getPopupContainer={(trigger) => trigger.parentNode}
                      disabledDate={disabledEndDate}
                      popupPlacement="bottomLeft"
                    />
                  </div>
                </div>
                {/* Checkbox list */}
                <div className="mb-4 mt-5">

                  <div className="flex flex-col gap-2 mt-2">
                    {dateOptions.map((option) => (
                      <label key={option.value} className="flex items-center">
                        <input
                          type="checkbox"
                          className="form-checkbox"
                          checked={selectedCheckboxes.includes(option.value)}
                          onChange={() => handleCheckboxChange(option.value)}
                          style={{ borderColor: selectedCheckboxes.includes(option.value) ? '#0052cc' : '#8F9091', backgroundColor: selectedCheckboxes.includes(option.value) ? '#0052cc' : 'transparent' }}
                          disabled={startDate}

                        />
                        <span className="ml-4 text-[14px] leading-[18px] text-[#58595A] font-semibold">{option.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
              {/* footee button */}
              <div className='flex justify-end  mt-5 mb-5 gap-5'>
                <button className='text-[#58595A]  border border-[#8F9091] text-[14px] leading-[18px] font-bold rounded-md flex  items-center px-3 py-2' onClick={resetAllValues}>
                  Discard
                </button>
                <button block className='bg-[#0052CC] text-white hover:bg-[#0052cc] hover:text-white border border-[#0052cc] mr-5 text-[14px] leading-[18px] font-bold rounded-md flex  items-center px-3 py-2' onClick={applyFilter}>
                  Apply
                </button>
              </div>
            </div>
          </Drawer>

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

              {qrTransactionList?.slice()?.reverse()?.map((qrTransaction) => {
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
                  border: "#E4EFFF"            // Text color when selected
                },
              },
              "& .MuiPaginationItem-previousNext": {
                border: "none",
                color: "gray"  // Remove border for the arrow buttons only
              },
            }}
          />
        </div>



      </div>)}
    </>
  );
};

export default QRUsage;
