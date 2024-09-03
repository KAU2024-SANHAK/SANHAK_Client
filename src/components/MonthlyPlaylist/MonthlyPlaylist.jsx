import * as S from './MonthlyPlaylist.style';
import usePostPlaylist from '../../hooks/queries/main/usePostPlaylist';

function MonthlyPlaylist({ firstFeeling, secondFeeling }) {
  const mutation = usePostPlaylist();  
  const handlePlaylist = () => {
    const body = {      
      'month feeling 1': firstFeeling,
      'month feeling 2': secondFeeling,
      
    };
    mutation.mutate(body, {
      onSuccess: (response) => {
        const data = response.data.data;
        console.log(data.playlist_url);
        window.open(`${data.playlist_url}`);
      }
    });
  };
  return(
    <S.MonthlyPlaylistWrapper>
      <S.ThumbnailImg />
      <S.PlaylistText>
        이번달 감정과 비슷한 <br />
        플리를 추천해드려요.
      </S.PlaylistText>
    </S.MonthlyPlaylistWrapper>
  );
}
export default MonthlyPlaylist;