import axios from 'axios';

export const getAccessToken = () => {
  const accessToken = localStorage.getItem('LOGIN_TOKEN');
  return accessToken ? `Bearer ${accessToken}` : '';
};

export const getRefreshToken = () => {
  const refreshToken = localStorage.getItem('LOGIN_REFRESH_TOKEN');
  return refreshToken ? `Bearer ${refreshToken}` : '';
};

export const authInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_SERVER_BASE_URL,
  withCredentials: true,
  headers: {},
});

export const serverInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_SERVER_BASE_URL,
  withCredentials: true,
  headers: {
   // Authorization: `${getAccessToken()}`,
   'Content-Type': 'multipart/form-data',
    Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE3MTQ2NTMzNDgsImV4cCI6MTc0NjE4OTM0OCwibWVtYmVySWQiOjExfQ.ovtL5K3131x3aMwxpw8EFCyr2mtAKcTIlBtz2Dep01YGl8MN_8TRcapiRQi20K26RYF3fmhO9vqdyTLuR-icFA',
  },
});

export const aiInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_AI_BASE_URL,
  withCredentials: true,
  headers: {
    Authorization: `${getAccessToken()}`,
  },
});
