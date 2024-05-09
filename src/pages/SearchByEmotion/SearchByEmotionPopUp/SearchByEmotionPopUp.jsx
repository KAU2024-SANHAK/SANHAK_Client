import * as S from './SearchByEmotionPopUp.style';
import { useState } from 'react';
import { useRecoilState } from "recoil";
import { diaryListAtom } from "../../../recoil/atoms";
import { useNavigate } from "react-router-dom";
import usePostFeelingList from "../../../hooks/queries/mypage/usePostFeelingList";
import useParsingDate from '../../../hooks/diary/useParsingDate';
import { useModal } from '../../../hooks/common/useModal';
import DiaryErrorModal from '../../../components/Modal/DiaryErrorModal';
import BtnEmotionType from '../../../components/common/buttons/EmotionType/EmotionType';

export default function SearchByEmotionPopUp(){
  const [diaryList, setDiaryList] = useRecoilState(diaryListAtom);
  const [errorMessage, setErrorMessage] = useState('');
  const [isOpen, openModal, closeModal] = useModal();
  const mutation = usePostFeelingList();
  const parsingDate = useParsingDate();
  const navigate = useNavigate();
  
  const handleClick = (btnEnum) => {
    const body = {
      feeling : btnEnum,
    };

    mutation.mutate(body, {
      onSuccess: (response) => {
        setDiaryList(response.data.feelingList);    
        navigate('/searchbyemotion/diarylist');

      },
      onError: (error) => {
        setErrorMessage(error.response.data.message);
        console.log(errorMessage);
        openModal();
      }
    });
  };

  return(
    <S.Wrapper>
      {isOpen && 
        <DiaryErrorModal 
          closeModal = {closeModal} 
          top = '50%'
        >
          {errorMessage}
        </DiaryErrorModal>
      }
      <S.SearchByEmotionPopUpWrapper1>
        <BtnEmotionType 
          name = '기쁨'
          onClick = {() => {
            handleClick('HAPPY');
          }}
        />
        <BtnEmotionType 
          name = '분노'
          onClick = {() => {
            handleClick('ANGRY');
          }}
        />
        <BtnEmotionType 
          name = '평온'
          onClick = {() => {
            handleClick('RELAX');
          }}
        />
      </S.SearchByEmotionPopUpWrapper1>

      <S.SearchByEmotionPopUpWrapper2>
      <BtnEmotionType 
          name = '슬픔'
          onClick = {() => {
            handleClick('SAD');
          }}
        />
        <BtnEmotionType 
          name = '걱정'
          onClick = {() => {
            handleClick('WORRIED');
          }}
        />
        <BtnEmotionType 
          name = '놀람'
          onClick = {() => {
            handleClick('SURPRISED');
          }}
        />
      </S.SearchByEmotionPopUpWrapper2>
    </S.Wrapper>
      
  )
}