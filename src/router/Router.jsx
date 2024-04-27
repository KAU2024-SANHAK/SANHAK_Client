// import Start from "../pages/Start/Start";
// import Login from "../components/Login";
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layouts/Layout';
import Start from '../pages/Start/Start';
import Login from '../components/Login';
import OnBoarding  from '../pages/OnBoarding/OnBoarding';
import Main from '../pages/Main/Main';
import FastDiary from '../pages/FastDiary/FastDiary';
import DiaryView from '../pages/DiaryView/DiaryView';
import SlowDiary from '../pages/SlowDiary/SlowDiary';
import MyPage from '../pages/MyPage/MyPage';
import SearchByEmotion from '../pages/SearchByEmotion/SearchByEmotion';
import CharacterWiki from '../pages/CharacterWiki/CharacterWiki';
import DiaryList from '../pages/DiaryList/DiaryList';

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
        path: "/searchbyemotion",
        element: <SearchByEmotion/>
      },
      {
        path: "/fastdiary",
        element: <FastDiary/>
      },
      {
        path: "/slowdiary",
        element: <SlowDiary/>
      },
      {
        path: '/diaryview',
        element: <DiaryView/>
      },
      {
        path: "/mypage",
        element: <MyPage/>
      },
      {
        path:"/mypage/characterwiki",
        element: <CharacterWiki/>
      },
      {
        path:"/searchbyemotion/diarylist",
        element: <DiaryList/>
      }
    ],
  },
]);

export default router;
