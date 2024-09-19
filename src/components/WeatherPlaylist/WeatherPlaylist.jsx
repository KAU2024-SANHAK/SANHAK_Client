import * as S from './WeatherPlaylist.style';
import useGetWeather from '../../hooks/queries/main/useGetWeather';
import { useState } from 'react';

function WeatherPlaylist(){
  const { data } = useGetWeather();
  const [isClick, setIsClick] = useState(false);
  console.log(data.data.icon);
  return(
    <S.WeatherPlaylistWrapper>
      <S.WeatherIcon src={data.data.icon}/>

      <S.PlaylistBox>
        <S.Thumbnail 
          onClick={() => {
            setIsClick(!isClick);
          }}
          src={data.data.thumbnail}
        />

        {isClick ? 
          <S.PlaylistTitle
            onClick={() => {
              window.open(data.data.playlist_url);
            }}
          >
            {data.data.title}
          </S.PlaylistTitle>
          :
          null
        }
      </S.PlaylistBox>
    </S.WeatherPlaylistWrapper>
  );
}
export default WeatherPlaylist;