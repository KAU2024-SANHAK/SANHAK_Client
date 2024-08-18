import * as S from "./WriteDiaryButton.style";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userDiaryType } from "../../../../recoil/atoms";
import useResetKeywords from "../../../../hooks/diary/useResetKeywords";

export default function WriteDiaryButton({ isClick, onUpdate }) {
  const type = useRecoilValue(userDiaryType);
  const navigate = useNavigate();
  const resetKeyWords = useResetKeywords();
  const angle = isClick ? 45 : 0;

  const handleClick = () => {
    resetKeyWords();
    { /*type === 'FASTTYPE' ? 
      navigate('/fastdiary') 
      : 
      navigate('/slowdiary') 
    */} 
    onUpdate();
  }

  return (
    <S.ButtonWrapper onClick={() => {
      handleClick();
    }}>
      <S.WriteDiaryButtonIcon rotate={angle}/>
    </S.ButtonWrapper>
  )
}

