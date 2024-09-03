import * as S from './Main.style';
import CreateDiaryButtonField from '../../components/CreateDiaryButtonField/CreateDiaryButtonField';
import KakaoAd from '../../components/KakaoAd/KakaoAd';
import MenuHeader from '../../components/MenuHeader/MenuHeader';
import WeatherPlaylist from '../../components/WeatherPlaylist/WeatherPlaylist';
import MonthlyEmotion from '../../components/MonthlyEmotion/MonthlyEmotion';
import MonthlyPlaylist from '../../components/MonthlyPlaylist/MonthlyPlaylist';
import useGetSummary from '../../hooks/queries/main/useGetSummary';

function Main() {
  const { data  } = useGetSummary();
  const firstFeeling = data.data.firstFeeling;
  const secondFeeling = data.data.secondFeeling;

  return (
    <S.MainWrapper>
      <S.HoneyBearWrapper>
        <S.HoneyBear />
      </S.HoneyBearWrapper>
      <MenuHeader />
      <S.MainButtonWrapper>
        <WeatherPlaylist />
        <S.MonthlyBox>
          <MonthlyEmotion 
            firstFeeling={firstFeeling}
            secondFeeling={secondFeeling}
          />
          <MonthlyPlaylist 
            firstFeeling={firstFeeling}
            secondFeeling={secondFeeling}
          />
        </S.MonthlyBox>
      </S.MainButtonWrapper>
      <KakaoAd />
      <CreateDiaryButtonField />
    </S.MainWrapper>
  );
}

export default Main;
