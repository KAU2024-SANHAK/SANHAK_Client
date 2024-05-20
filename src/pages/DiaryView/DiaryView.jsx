import * as S from './DiaryView.style';
import { useState } from 'react';
import CreatedDiary from '../../components/CreatedDiary/CreatedDiary';
import DiaryViewPopUp from './DiaryViewPopUp/DiaryViewPopUp';
import PopUp from '../../components/PopUp/PopUp';
import { useRecoilValue, useRecoilState } from 'recoil';
import { diaryId, diaryAdvice, diaryTitle, diaryContent, createdDate, diaryImage } from '../../recoil/atoms';
import usePostAdvice from '../../hooks/queries/create/usePostAdvice';
import BtnShowAdvice from '../../components/common/buttons/ShowAdvice/BtnShowAdvice';
import useResetDiary from '../../hooks/diary/useResetDiaryAtom';
import CircleLoading from '../../components/Loading/CircleLoading/CircleLoading';
import BtnBack from '../../components/common/buttons/Back/BtnBack';
import BtnMenu from '../../components/common/buttons/Menu/Menu';
import BtnShare from '../../components/common/buttons/Share/Share';
import { useNavigate } from 'react-router-dom';
import { useModal } from '../../hooks/common/useModal';
import HomeModal from '../../components/Modal/HomeModal';

export default function DiaryView() {

  const [isClick, setIsClick] = useState(false);
  const title = useRecoilValue(diaryTitle);
  const content = useRecoilValue(diaryContent);
  const date = useRecoilValue(createdDate);
  const id = useRecoilValue(diaryId);
  const image = useRecoilValue(diaryImage);
  const [advice, setAdvice] = useRecoilState(diaryAdvice);
  const isAdvice = advice.kind !== null && advice.kind !== "";
  const mutation = usePostAdvice();
  const navigate = useNavigate();
  const { resetAdvice, resetContent, resetTitle, resetFeeling, resetId, resetImage } = useResetDiary();
  const [isOpen, openModal, closeModal] = useModal();

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

  const handleBack = () => {
    resetAdvice();
    resetContent();
    resetTitle();
    resetFeeling();
    resetId();
    resetImage();
    navigate('/main');
  };

  return (
    <S.DiaryViewPageWrapper>
      <S.Filter>
        {isOpen && 
          <HomeModal 
            closeModal={closeModal} 
          />  
        }

        <S.HeaderWrapper>
          <S.BtnBackWrapper>
            <BtnBack handleClick={handleBack} />
          </S.BtnBackWrapper>
          <S.ExtraBtnWrapper>
            <BtnShare title={title} image={image} />
            <BtnMenu openModal={openModal}/>
          </S.ExtraBtnWrapper>
        </S.HeaderWrapper>
        <S.CreatedDiaryWrapper>
          <CreatedDiary
            title={title}  
            date={date}
            content={content}
            id={id}
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
                  {mutation.isPending ?
                    <CircleLoading>
                      조언을 생성 중입니다.
                    </CircleLoading> 
                  : 
                    <DiaryViewPopUp 
                      spicy={advice.spicy} 
                      kind={advice.kind} 
                    />
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


