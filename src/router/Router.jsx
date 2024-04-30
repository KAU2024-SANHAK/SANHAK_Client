// import Start from "../pages/Start/Start";
// import Login from "../components/Login";
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layouts/Layout';
import Start from '../pages/Start/Start';
import Login from '../components/Login';
import OnBoarding  from '../pages/OnBoarding/OnBoarding';
import Main from '../pages/Main/Main';
import SearchByEmotion from '../pages/SearchByEmotion/SearchByEmotion';
import EmotionView from '../pages/EmotionView/EmotionView';
import FastDiary from '../pages/FastDiary/FastDiary';
import DiaryView from '../pages/DiaryView/DiaryView';
import SlowDiary from '../pages/SlowDiary/SlowDiary';
import MyPage from '../pages/MyPage/MyPage';
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
        path: "/searchbyemotion",
        element: <SearchByEmotion/>
      },
      // {
      //   path: "/writediary",
      //   element: <WriteDiary/>
      // }
      {
        path:"/mypage/characterwiki",
        element: <CharacterWiki/>
      },
      {
        path:"/searchbyemotion/diarylist",
        element: <DiaryList/>
      },
      {
        path:"/emotionview",
        element: <EmotionView/>
      }
    ],
  },
]);

export default router;
