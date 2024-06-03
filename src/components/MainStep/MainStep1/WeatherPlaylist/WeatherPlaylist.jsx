import * as S from './WeatherPlaylist.style';
import useGetWeather from '../../../../hooks/queries/main/useGetWeather';

function WeatherPlaylist(){
  const { data } = useGetWeather();
  console.log(data);
  return(
    <S.WeatherPlaylistWrapper>
      <S.WeatherIcon />
      <S.Thumbnail 
        onClick={() => {
          alert('np')
        }}
      />
    </S.WeatherPlaylistWrapper>
  );
}
export default WeatherPlaylist;