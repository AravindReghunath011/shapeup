import axios from "axios";
const BASE_URL = 'http://localhost:'; 

export default ()=>{
    return axios.create({
        withCredentials:true
    })
};

export const axiosPrivet = axios.create({
        baseURL:BASE_URL,
        headers: {'Content-Type' : 'application/json'},
        withCredentials : true,
    })
