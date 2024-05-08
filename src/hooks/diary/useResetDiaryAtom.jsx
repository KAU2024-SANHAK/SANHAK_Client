import { useResetRecoilState } from "recoil";
import { diaryAdvice, diaryContent, diaryFeeling, diaryId, diaryTitle, diaryImage } from "../../recoil/atoms";

const useResetDiary = () => {
  const resetAdvice = useResetRecoilState(diaryAdvice);
  const resetContent = useResetRecoilState(diaryContent);
  const resetFeeling = useResetRecoilState(diaryFeeling);
  const resetId = useResetRecoilState(diaryId);
  const resetTitle = useResetRecoilState(diaryTitle);
  const resetImage = useResetRecoilState(diaryImage);

  const resetDiary = () => {
    resetAdvice();
    resetContent();
    resetFeeling();
    resetId();
    resetTitle();
    resetImage();
  }
  
  return resetDiary;

};
export default useResetDiary;
