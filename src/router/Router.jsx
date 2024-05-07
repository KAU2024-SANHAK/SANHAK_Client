// import Start from "../pages/Start/Start";
// import Login from "../components/Login";
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layouts/Layout';
import Start from '../pages/Start/Start';
import OnBoarding from '../pages/OnBoarding/OnBoarding';
import Main from '../pages/Main/Main';
import SearchByEmotion from '../pages/SearchByEmotion/SearchByEmotion';
import EmotionView from '../pages/EmotionView/EmotionView';
import FastDiary from '../pages/FastDiary/FastDiary';
import DiaryView from '../pages/DiaryView/DiaryView';
import SlowDiary from '../pages/SlowDiary/SlowDiary';
import MyPage from '../pages/MyPage/MyPage';
import CharacterWiki from '../pages/CharacterWiki/CharacterWiki';
import DiaryList from '../pages/DiaryList/DiaryList';
import LoginCallback from '../components/common/buttons/KakaoLogin/LoginCallback/LoginCallback';
import FallbackUI from '../pages/FallbackUI/FallbackUI';
import SummaryTest from '../pages/SummaryTest/SummaryTest';

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
        path: '/loading',
        element: <LoginCallback />,
      },
      {
        path: '/onboarding',
        element: <OnBoarding />,
      },
      {
        path: '/main',
        element: <Main />,
      },
      {
        path: "/searchbyemotion",
        element: <SearchByEmotion/>
      },
      {
        path: '/fastdiary',
        element: <FastDiary />,
      },
      {
        path: '/slowdiary',
        element: <SlowDiary />,
      },
      {
        path: '/diaryview',
        element: <DiaryView />,
      },
      {
        path: '/mypage',
        element: <MyPage />,
      },
      {
        path: "/searchbyemotion",
        element: <SearchByEmotion/>
      },
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
      },
      {
        path: '/mypage/characterwiki',
        element: <CharacterWiki />,
      },
      {
        path:"/searchbyemotion/diarylist",
        element: <DiaryList />
      },
      {
        path: '/summary',
        element: <SummaryTest />
      },
    ],
  },
]);

export default router;
