// import Start from "../pages/Start/Start";
// import Login from "../components/Login";
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layouts/Layout';
import Start from '../pages/Start/Start';
import Login from '../components/Login';
import OnBoarding  from '../pages/OnBoarding/OnBoarding';
import Main from '../pages/Main/Main'
import FastDiary from '../pages/FastDiary/FastDiary'

/*이런 식으로 작성하기*/
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Start />,
      },
      //   {
      //     path: "/mypage",
      //     element: <Mypage />,
      //   },
      {
        path: "/api/oauth/kakao/login",
        element: <Login />,
      },
      {
        path: "/onboarding",
        element: <OnBoarding/>
      },
      {
        path: "/main",
        element: <Main/>
      },
      {
        path: "/fastdiary",
        element: <FastDiary/>
      },

    ],
  },
]);

export default router;
