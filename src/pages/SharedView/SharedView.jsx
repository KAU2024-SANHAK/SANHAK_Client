import * as S from './SharedView.style'
import { useNavigate, useParams } from 'react-router-dom'
import { format } from "date-fns";
import BtnSubmit from '../../components/common/buttons/Submit/BtnSubmit';
import useGetSharedDiary from '../../hooks/queries/etc/useGetSharedDiary';

export default function SharedView(){
  const { id } = useParams();
  const { data } = useGetSharedDiary(id);
  const navigate = useNavigate();

  const parseString =(text) =>{
    text = text.replace(/\\n/g, '\n');
    
    if(text[0] === '"'){
      return text.substring(1, text.length-1);
    }else{
      return text;
    }
 };
  //따옴표 파싱하기
  const user = data.data.userName;
  const date = format(new Date(data.data.createdDate), "M월 d일")
  const title = parseString(data.data.diaryTitle);
  const content = parseString(data.data.diaryContent);
  const image = data.data.imageUrl;


  const handleGoHome = () => {
    navigate('/start');
  }

  return(
    <S.SharedViewPageWrapper>
      <S.Header>
        <S.HeaderText>생성형 일기 어플 허니어리를 직접 이용해보세요!</S.HeaderText>

        <S.ButtonField>
          <BtnSubmit
            onClick={() => {
              handleGoHome();
            }}
            width='19.6rem'
            height='4rem'
            $color = {({ theme }) => theme.colors.pink.red_pink}
          >
            허니어리 사용하기
          </BtnSubmit>
          <BtnSubmit
            width='11.6rem'
            height='4rem'
            $color = {({ theme }) => theme.colors.normal.white}
          >
            허니어리란?
          </BtnSubmit>
        </S.ButtonField>
      </S.Header>

      <S.IntroText>
        {user} 님의 {date} 일기
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