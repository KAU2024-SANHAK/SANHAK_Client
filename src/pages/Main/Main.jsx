import * as S from './Main.style';
import CreateDiaryButtonField from '../../components/CreateDiaryButtonField/CreateDiaryButtonField';
import KakaoAd from '../../components/KakaoAd/KakaoAd';
import MenuHeader from '../../components/MenuHeader/MenuHeader';
import WeatherPlaylist from '../../components/WeatherPlaylist/WeatherPlaylist';
import MonthlyEmotion from '../../components/MonthlyEmotion/MonthlyEmotion';

function Main() {
  return (
    <S.MainWrapper>
      <S.HoneyBearWrapper>
        <S.HoneyBear />
      </S.HoneyBearWrapper>
      <MenuHeader />
      <S.MainButtonWrapper>
        <WeatherPlaylist />
        <MonthlyEmotion />
      </S.MainButtonWrapper>
      <KakaoAd />
      <CreateDiaryButtonField />
    </S.MainWrapper>
  );
}

export default Main;
