import { useResetRecoilState } from "recoil";
import { diaryAdvice, diaryContent, diaryFeeling, diaryId, diaryTitle, diaryImage } from "../../recoil/atoms";

const useResetDiary = () => {
  const resetAdvice = useResetRecoilState(diaryAdvice);
  const resetContent = useResetRecoilState(diaryContent);
  const resetFeeling = useResetRecoilState(diaryFeeling);
  const resetId = useResetRecoilState(diaryId);
  const resetTitle = useResetRecoilState(diaryTitle);
  const resetImage = useResetRecoilState(diaryImage);
  
  return {resetAdvice, resetContent, resetTitle, resetFeeling, resetId, resetImage};

};
export default useResetDiary;
