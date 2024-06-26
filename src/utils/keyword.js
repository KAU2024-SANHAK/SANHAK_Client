import { feelingKeyword, whatKeyword, whenKeyword, whereKeyword, whoKeyword, realizedKeyword } from "../recoil/atoms";
import { useRecoilValue } from "recoil";

export const keywords = () => {
    const keywordsObj = {
        feeling: useRecoilValue(feelingKeyword),
        what: useRecoilValue(whatKeyword),
        who: useRecoilValue(whoKeyword),
        when: useRecoilValue(whenKeyword),
        where: useRecoilValue(whereKeyword),
        realized: useRecoilValue(realizedKeyword),
    }
    return keywordsObj;  
};