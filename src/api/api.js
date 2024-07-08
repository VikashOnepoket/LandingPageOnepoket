import axios from "axios";

const baseUrl = import.meta.env.VITE_KEY;

const instance = axios.create({
    baseURL: `${baseUrl}`
})

export default instance;