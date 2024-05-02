// import { useNavigate } from 'react-router-dom';
// import { useEffect } from 'react';
// import axios from 'axios';
// import { useMutation } from 'react-query';

// const useLogin = async () => {
//   const navigate = useNavigate();
//   const params = new URL(document.URL).searchParams;
//   const query = params.get('code');

//   const getKakaoToken = useMutation({
//     mutationFn: async (code) => {
//       const data = {
//         grant_type: 'authorization_code',
//         client_id: import.meta.env.VITE_REST_API_KEY || '',
//         redirect_uri: import.meta.env.VITE_LOCAL_REDIRECT_URI,
//         code,
//       };
//       const queryString = Object.keys(data)
//         .map((key) => `${key}=${data[key]}`)
//         .join('&');
//       return await axios.post('https://kauth.kakao.com/oauth/token', queryString, {
//         headers: {
//           'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
//         },
//       });
//     },
//     onSuccess: (res) => {
//       console.log(res.data.access_token);
//       putKakaoTokenToServer.mutate(res.data.access_token);
//     },
//     retry: false,
//   });

//   const putKakaoTokenToServer = useMutation({
//     mutationFn: async (token) => {
//       const authInstance = axios.create({
//         baseURL: import.meta.env.VITE_APP_SERVER_BASE_URL,
//         withCredentials: true,
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       return await authInstance.post('/api/login');
//     },
//     onSuccess: (res) => {
//       const data = res.data;
//       console.log(data);
//       // const jwt= data.data.memberToken.accessToken;
//       // const RefreshToken = data.data.memberToken.refreshToken;

//       // if (res.status == 201 || res.status == 200) {
//       //   localStorage.setItem('LOGIN_TOKEN', jwt);
//       //   localStorage.setItem('LOGIN_REFRESH_TOKEN', RefreshToken);
//       //   axios.defaults.headers.common["Authorization"] = `${jwt}`;
//       //   navigate('/');
//       // } else {
//       //   window.alert("로그인에 실패하였습니다.");
//       // }
//     },
//   });

//   useEffect(() => {
//     if (query) {
//       getKakaoToken.mutate(query);
//     }
//   }, [query]);
//   return {
//     isLoading: getKakaoToken.isLoading || putKakaoTokenToServer.isLoading,
//   };
// };

// export default useLogin;
