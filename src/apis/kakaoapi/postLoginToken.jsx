import axios from 'axios';

export const postLoginToken = async (token) => {
  const api = axios.create({
    baseURL: import.meta.env.VITE_APP_SERVER_BASE_URL,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
  const response = await api.post('/api/login');

  return response.data.data;
};
