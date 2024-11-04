import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';



const baseUrl = import.meta.env.VITE_KEY;

const instance = axios.create({
    baseURL: `${baseUrl}`,
});

// Handle logout by clearing the persist store and token
const handleLogout = () => {

    // Clear persisted state and token
    localStorage.removeItem('persist:root'); 
    localStorage.removeItem('token'); 

    // Redirect to login page
    window.location.href = '/login'; 
    // navigate('/login')
};

// Add a response interceptor
instance.interceptors.response.use(
    response => {
        // If the request succeeds, just return the response
        return response;
    },
    error => {
        // Check if the error response has a 403 status code
        if (error.response.data.message  && error.response.status === 403) {
            // console.log(error.response.data.message  , "error in interceptor response")
            // // toast.error(error.response.message)
            // console.log(error.response.status, "error in interceptor response");

            // Call the logout handler
            // handleLogout();
            
        }

        // Otherwise, return the error to be handled later
        return Promise.reject(error);
    }
);

export default instance;
