import axios from "axios";

export const authInstance = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_URL,
    withCredentials: true,
    headers:{'X-Environment': 
    ''
    }
})

export const instance = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_URL,
    withCredentials: true,
    headers:{
        Authorization: Bearer 
    }
})

export const aiInstance = axios.create({
    baseURL: import.meta.env.VITE_AI_BASE_URL,
    withCredentials: true,
    headers:{
        Authorization: Bearer 
    }
})