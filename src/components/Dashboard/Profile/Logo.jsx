import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchLogo } from '../slice/logoSlice';
import { useDispatch, useSelector } from 'react-redux';
import SpinnerMain from '../Spinner/SpinnerMain';
import axios from '../../../api/api'
import toast from 'react-hot-toast';

const Logo = () => {
  const [loading, setLoading] = useState(false)
  const token = useSelector((state) => state.auth.token);
  const logos = useSelector((state) => state.logoDetails.logo); // Assuming logos are stored here after fetching
  console.log(logos, "logo")
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/profile/logo/add_logo`);
  };

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
  }, [token]);

  const deleteLogo = async (id) => {
    console.log(id, "id")
    try {
      setLoading(true);
      const { data } = await axios.delete('/delete_logo', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: { id }, // Add id in the request body
      });
      toast.success(data?.message)
      dispatch(fetchLogo(token))
      console.log(data, "logo deleted successfully");
      setLoading(false);

    }
    catch (error) {
      setLoading(false);
      console.log(error)
    }
  }

  return (
    <>
      {loading ? (<SpinnerMain />) : (<div className='mt-10'>
        <div className='flex sm:justify-between gap-10 sm:items-center sm:flex-row flex-col'>
          <div>
            <h3 className='text-[1.2rem] leading-[1.5rem] font-semibold text-[#202123]'>Logo</h3>
          </div>
          <div onClick={handleNavigate}>
            <button
              className='bg-[#0052CC] text-white hover:bg-[#0052cc] hover:text-white border border-[#0052cc] text-[14px] leading-[18px] font-bold rounded-md flex items-center px-3 py-2'>
              <span className="material-symbols-outlined mr-2">add</span>
              Add Logo
            </button>
          </div>
        </div>

        {/* table */}
        <div className="container mx-auto mt-10">
          <div className="overflow-x-auto">
            <table className="min-w-full border-gray-200">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b text-left text-[#202123BF] text-[12px] leading-[17px] font-semibold">Logo</th>
                  <th className="py-2 px-4 border-b text-left text-[#202123BF] text-[12px] leading-[17px] font-semibold">Name</th>
                  <th className="py-2 px-4 border-b text-left text-[#202123BF] text-[12px] leading-[17px] font-semibold">Action</th>
                </tr>
              </thead>
              <tbody>
                {logos && logos?.slice()?.reverse()?.map((logo, index) => (
                  <tr key={index} className="p-5">
                    <td className="py-5 px-4 border-b font-medium text-[#202123BF] text-[12px] leading-[16px]">
                      <div className="h-[50px] w-[50px] border border-[#F1F1F1] rounded-md bg-[#D9D9D9]">
                        <img
                          src={logo?.image}
                          alt={logo.title}
                          className='h-full w-full object-cover rounded-md'
                        />
                      </div>
                    </td>
                    <td className="py-5 px-4 border-b font-medium text-[#202123BF] text-[12px] leading-[16px]">{logo?.title}</td>
                    <td className="py-5 px-4 border-b font-medium text-[#202123BF] text-[12px] leading-[16px] cursor-pointer" >
                      <span className="material-symbols-outlined mr-2 text-[20px] leading-[28px]cursor-pointer" onClick={() => deleteLogo(logo?.id)}>delete</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>)}
    </>
  );
};

export default Logo;
