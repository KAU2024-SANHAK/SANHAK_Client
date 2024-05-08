import * as S from './DiaryView.style';
import { useState, useEffect } from 'react';
import CreatedDiary from '../../components/CreatedDiary/CreatedDiary';
import DiaryViewPopUp from './DiaryViewPopUp/DiaryViewPopUp';
import PopUp from '../../components/PopUp/PopUp';
import { useRecoilValue, useRecoilState } from 'recoil';
import { diaryId, diaryAdvice, diaryFeeling, diaryTitle, diaryContent, createdDate } from '../../recoil/atoms';
import usePostAdvice from '../../hooks/queries/create/usePostAdvice';
import BtnShowAdvice from '../../components/common/buttons/ShowAdvice/BtnShowAdvice';

export default function DiaryView() {

  const [isClick, setIsClick] = useState(false);
  const title = useRecoilValue(diaryTitle);
  const content = useRecoilValue(diaryContent);
  const date = useRecoilValue(createdDate);
  const id = useRecoilValue(diaryId);
  const [advice, setAdvice] = useRecoilState(diaryAdvice);
  const mutation = usePostAdvice();
  /*
    // data에 advice가 존재하는 지 여부 확인하기
    const checkAdviceExists = () => {
        return !!advice;
    }

    // advice가 있는지 확인하여 useEffect로 렌더링
    useEffect(() => {
        const adviceExists = checkAdviceExists();
        setAdvice(adviceExists);
    }, []);
*/
    const handleRequest = () => {
      console.log('요청하기')
      const body = {
        diaryId: id,
      }
      mutation.mutate(body,{
        onSuccess: (response) => {
          console.log(response.data);
        }
      })
      setIsClick(!isClick);
    }

    const handleResponse = () => {
      console.log('보여주기')  
      setIsClick(!isClick);
    }

  return (
    <S.DiaryViewPageWrapper>
      <S.Filter>
        <S.CreatedDiaryWrapper>
          <CreatedDiary
            title={title}  
            date={date}
            content={content}
          />
        </S.CreatedDiaryWrapper>
        
        <S.GoToReplyBtnWrapper>
          <BtnShowAdvice handleClick={advice ? handleRequest: handleResponse}>
            {advice ? '답장 생성하기' : '답장 보러가기'}
          </BtnShowAdvice>

            {isClick === true ? (
              <S.PopUpWrapper>

                <S.HoneyBearWrapper>
                  <S.HoneyBear height='17rem'/>
                </S.HoneyBearWrapper>

                <PopUp name="꿀비의 답장">
                  <DiaryViewPopUp spicy={advice.spicy} kind={advice.kind} />
                  
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


