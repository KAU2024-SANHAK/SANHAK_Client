import * as S from './SharedView.style'
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { format } from "date-fns";
import BtnShowAdvice from '../../components/common/buttons/ShowAdvice/BtnShowAdvice'
import BtnSubmit from '../../components/common/buttons/Submit/BtnSubmit';
import useGetSharedDiary from '../../hooks/queries/etc/useGetSharedDiary';
import PopUp from '../../components/PopUp/PopUp';
import DiaryViewPopUp from '../DiaryView/DiaryViewPopUp/DiaryViewPopUp';

export default function SharedView(){
  const { id } = useParams();
  const { data } = useGetSharedDiary(id);
  const [isClick, setIsClick] = useState(false);
  const navigate = useNavigate();

  const parseString =(text) =>{
    text = text.replace(/\\n/g, '\n');
    
    if(text[0] === '"'){
      return text.substring(1, text.length-1);
    }else{
      return text;
    }
 };

  const user = data.data.userName;
  const date = format(new Date(data.data.createdDate), "M월 d일")
  const title = parseString(data.data.diaryTitle);
  const content = parseString(data.data.diaryContent);
  const image = data.data.imageUrl;
  const spicy = (
    data.data.advice.spicy !== null ? 
      data.data.advice.spicy
    :
      `아직 ${user}님이 생성한 조언이 없습니다.`
  );
  const kind = (
    data.data.advice.kind !== null ? 
      data.data.advice.kind
    :
      `아직 ${user}님이 생성한 조언이 없습니다.`
  );

  console.log(spicy)

  const handleGoHome = () => {
    navigate('/');
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
      <BtnShowAdvice
        handleClick={() =>{
          setIsClick(!isClick);
        }}
      >
        답장 보러가기
      </BtnShowAdvice>

      {(data.data.advice!==null) &&isClick && 
        <S.PopUpWrapper>

          {/* <S.HoneyBearWrapper>
            <S.HoneyBear height='17rem'/>
          </S.HoneyBearWrapper> */}

          <PopUp name="꿀비의 답장">
            <DiaryViewPopUp 
              spicy={spicy} 
              kind={kind} 
            />
          </PopUp>
          <S.CloseBtn onClick={()=>{setIsClick(false)}} >
            <S.XBtn />
          </S.CloseBtn>


        </S.PopUpWrapper>       
      }

    </S.SharedViewPageWrapper>
  )
}