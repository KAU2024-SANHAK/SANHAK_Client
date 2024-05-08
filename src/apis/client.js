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
    Authorization: `${getAccessToken()}`,
  },
});

export const aiInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_AI_BASE_URL,
  withCredentials: true,
});
