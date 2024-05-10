import { keywords } from "../../utils/keyword";
import { feelingKeyword, whoKeyword, whatKeyword, whenKeyword, whereKeyword, realizedKeyword } from "../../recoil/atoms";
import { useResetRecoilState } from "recoil";

const useResetKeywords = () => {
  const resetFeeling = useResetRecoilState(feelingKeyword);
  const resetWho = useResetRecoilState(whoKeyword);
  const resetWhat = useResetRecoilState(whatKeyword);
  const resetWhen = useResetRecoilState(whenKeyword);
  const resetWhere = useResetRecoilState(whereKeyword);
  const resetRealized = useResetRecoilState(realizedKeyword);

  const resetKeyWords = () => {
    resetFeeling();
    resetWhat();
    resetWhen();
    resetWhere();
    resetWho();
    resetRealized();
  }

  return resetKeyWords;
};
export default useResetKeywords;