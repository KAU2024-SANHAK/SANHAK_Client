import * as S from './DiaryView.style';
import { useState, useEffect } from 'react';
import CreatedDiary from '../../components/CreatedDiary/CreatedDiary';
import DiaryViewPopUp from './DiaryViewPopUp/DiaryViewPopUp';
import PopUp from '../../components/PopUp/PopUp';
import { useRecoilValue, useRecoilState } from 'recoil';
import { diaryId, diaryAdvice, diaryFeeling, diaryTitle, diaryContent, createdDate, diaryImage } from '../../recoil/atoms';
import usePostAdvice from '../../hooks/queries/create/usePostAdvice';
import BtnShowAdvice from '../../components/common/buttons/ShowAdvice/BtnShowAdvice';
import AdviceLoading from '../../components/Loading/AdviceLoading/AdviceLoading';
import { shareKakao } from '../../utils/shareKakao';

export default function DiaryView() {

  const [isClick, setIsClick] = useState(false);
  const title = useRecoilValue(diaryTitle);
  const content = useRecoilValue(diaryContent);
  const date = useRecoilValue(createdDate);
  const id = useRecoilValue(diaryId);
  const image = useRecoilValue(diaryImage);
  const [advice, setAdvice] = useRecoilState(diaryAdvice);
  console.log(advice)
  const isAdvice = advice.kind !== null && advice.kind !== "";
  const mutation = usePostAdvice();

  const handleRequest = () => {
    console.log('요청하기')
    const body = {
      diaryId: id,
    }
    mutation.mutate(body,{
      onSuccess: (response) => {
        console.log(response.data);
        setAdvice(response.data.advice);
      }
    })
    setIsClick(!isClick);
  }

  const handleResponse = () => {
    console.log('보여주기')  
    setIsClick(!isClick);
  }

  console.log(isAdvice)

  return (
    <S.DiaryViewPageWrapper>
      <S.Filter>
        <button 
          onClick={() => {
            shareKakao(title, image);
          }}
        >
          카카오 공유하기
        </button>
        <S.CreatedDiaryWrapper>
          <CreatedDiary
            title={title}  
            date={date}
            content={content}
            id={id}
            image={image}
          />
        </S.CreatedDiaryWrapper>
        
        <S.GoToReplyBtnWrapper>
          <BtnShowAdvice handleClick={isAdvice ?() => {handleResponse()}: () => {handleRequest()}}>
            {isAdvice ? '답장 보러가기' : '답장 생성하기'}
          </BtnShowAdvice>

            {isClick === true ? (
              <S.PopUpWrapper>

                <S.HoneyBearWrapper>
                  <S.HoneyBear height='17rem'/>
                </S.HoneyBearWrapper>

                <PopUp name="꿀비의 답장">
                  {mutation.isPending ? <AdviceLoading /> : 
                  <DiaryViewPopUp spicy={advice.spicy} kind={advice.kind} />
                  }
                  
                  <S.CloseBtn onClick={()=>{setIsClick(false)}} >
                    <S.XBtn />
                  </S.CloseBtn>

                </PopUp>

              </S.PopUpWrapper>    
            ) : null}

        </S.GoToReplyBtnWrapper>
      </S.Filter>        
    </S.DiaryViewPageWrapper>
  );
}


