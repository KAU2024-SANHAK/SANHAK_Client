import { feelingKeyword, whoKeyword, whatKeyword, whenKeyword, whereKeyword, realizedKeyword, diaryId, diaryImage, diaryTitle, diaryFeeling, diaryContent, createdDate } from "../../recoil/atoms";
import { useResetRecoilState } from "recoil";

const useResetKeywords = () => {
  const resetFeeling = useResetRecoilState(feelingKeyword);
  const resetWho = useResetRecoilState(whoKeyword);
  const resetWhat = useResetRecoilState(whatKeyword);
  const resetWhen = useResetRecoilState(whenKeyword);
  const resetWhere = useResetRecoilState(whereKeyword);
  const resetRealized = useResetRecoilState(realizedKeyword);
  const resetId = useResetRecoilState(diaryId);
  const resetImage = useResetRecoilState(diaryImage);
  const resetTitle = useResetRecoilState(diaryTitle);
  const resetDiaryFeeling = useResetRecoilState(diaryFeeling);
  const resetContent = useResetRecoilState(diaryContent);
  const resetDate = useResetRecoilState(createdDate)

  const resetKeyWords = () => {
    resetFeeling();
    resetWhat();
    resetWhen();
    resetWhere();
    resetWho();
    resetRealized();
    resetId();
    resetImage();
    resetTitle();
    resetDiaryFeeling();
    resetContent();
    resetDate();
  }

  return resetKeyWords;
};
export default useResetKeywords;