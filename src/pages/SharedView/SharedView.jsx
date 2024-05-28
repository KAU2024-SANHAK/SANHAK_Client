import useGetSharedDiary from '../../hooks/queries/etc/useGetSharedDiary';
import * as S from './SharedView.style'
import { useParams } from 'react-router-dom'

export default function SharedView(){
  const { id } = useParams();
  const { data } = useGetSharedDiary(id);
  console.log(data.data)
  //따옴표 파싱하기
  const user = data.data.userName;
  const title = data.data.diaryTitle;
  const content = data.data.diaryContent;
  const image = data.data.imageUrl;

  return(
    <S.SharedViewPageWrapper>
      <S.Header>
        <S.HeaderText>생성형 일기 어플 허니어리를 직접 이용해보세요!</S.HeaderText>
      </S.Header>
      <S.IntroText>
        {user} 님의 오늘 일기
      </S.IntroText>
      <S.DiaryTitle>
        {title}
      </S.DiaryTitle>
      <S.DiaryImage src={image}/>

      <S.DiaryContent>
        {content}
      </S.DiaryContent>
    </S.SharedViewPageWrapper>
  )
}