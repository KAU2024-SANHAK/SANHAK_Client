import axios from "axios";

export const getAccessToken = ()=>{
    const accessToken = localStorage.getItem('LOGIN_TOKEN')
    return accessToken ? `Bearer ${accessToken}` : ''
};

export const getRefreshToken = ()=>{
    const refreshToken = localStorage.getItem('LOGIN_REFRESH_TOKEN')
    return refreshToken ? `Bearer ${refreshToken}` : ''
};

export const authInstance = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_URL,
    withCredentials: true,
    headers:{'X-Environment': 
    ''
    }
});

export const instance = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_URL,
    withCredentials: true,
    headers:{
        Authorization: `${getAccessToken()}`
    }
});

export const aiInstance = axios.create({
    baseURL: import.meta.env.VITE_AI_BASE_URL,
    withCredentials: true,
    headers:{
        Authorization: `${getAccessToken()}`
    }
});