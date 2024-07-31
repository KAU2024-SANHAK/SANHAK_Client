import axios from 'axios';

export const getAccessToken = () => {
  const accessToken = localStorage.getItem('LOGIN_TOKEN');
  console.log(accessToken);
  return accessToken ? accessToken : '';
};

export const getRefreshToken = () => {
  const refreshToken = localStorage.getItem('LOGIN_REFRESH_TOKEN');
  return refreshToken ? `Bearer ${refreshToken}` : '';
};

export const getMemberId = () => {
  const memberId = localStorage.getItem('MemberId');
  return memberId ? `${memberId}` : '';
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
    Authorization: `Bearer ${getAccessToken()}`,
  },
});

export const cleanHeadServerInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_SERVER_BASE_URL,
  withCredentials: true,
  headers: {},
});

export const aiInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_AI_BASE_URL,
  withCredentials: true,
  headers: {
    Authorization: `${getMemberId()}`,
  },
});

aiInstance.interceptors.request.use(
  (config) => {
    if (!localStorage.getItem('MemberId') || !localStorage.getItem('LOGIN_REFRESH_TOKEN')) {
      window.location.href = '/login-error';
      return config;
    }

    config.headers.Authorization = `${getMemberId()}`;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

serverInstance.interceptors.request.use(
  (config) => {
    if (!localStorage.getItem('LOGIN_REFRESH_TOKEN')) {
      window.location.href = '/login-error';
      return config;
    }

    config.headers.Authorization = `Bearer ${localStorage.getItem('LOGIN_TOKEN')}`;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// instance.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const originalConfig = error.response?.config;
//     const msg = error.response?.data?.message;
//     const status = error.response?.data?.status;

//     if (status === 401) {
//       console.log('401에러가 떠서 interceptor 실행한다.');
//       if (msg === '액세스 토큰이 만료되었습니다. 재발급 받아주세요.') {
//         console.log('엑세스 토큰 만료 메세지 인식 했다.');

//         try {
//           const response = await postRefreshToken();

//           if (response?.data?.status === 200) {
//             console.log('엑세스 토큰 api 요청 성공했다.');
//             updateTokens(response.data.data.accessToken, response.data.data.refreshToken);
//             originalConfig.headers.Authorization = `Bearer ${response.data.data.accessToken}`;
//             return axios(originalConfig);
//           }
//         } catch (error) {
//           // @ts-ignore
//           handleRefreshTokenError(error);
//         }
//       }
//     }

//     return Promise.reject(error);
//   },
// );
