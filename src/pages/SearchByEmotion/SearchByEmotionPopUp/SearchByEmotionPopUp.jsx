import * as S from './SearchByEmotionPopUp.style';
import { useRecoilState } from "recoil";
import { diaryListAtom } from "../../../recoil/atoms";
import { useNavigate } from "react-router-dom";
import { usePostFeelingList } from "../../../hooks/queries/mypage/usePostFeelingList";
import BtnEmotionType from '../../../components/common/buttons/EmotionType/EmotionType';

export default function SearchByEmotionPopUp(){
  const [diaryList, setDiaryList] = useRecoilState(diaryListAtom);
  const { mutation } = usePostFeelingList();
  const navigate = useNavigate();
  
  const handleClick = (btnEnum) => {
    const body = {
      feeling : btnEnum,
    };

    mutation.mutate(body, {
      onSuccess: (response) => {
        console.log(response);
        setDiaryList(response.data.feelingList);    
        navigate('/searchbyemotion/diarylist');
      }
    });
  };

  return(
    <S.Wrapper>
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