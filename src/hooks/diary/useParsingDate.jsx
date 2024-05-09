import { diaryListAtom, createdDate } from "../../recoil/atoms";
import { useRecoilState } from "recoil";

const useParsingDate = () => {
  const [diaryList, setDiaryList] = useRecoilState(diaryListAtom);

  const parsingDate = () => {
    diaryList.map((item) => {
      console.log(item.createdDate)
      const date = new Date(item.createdDate);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      const newDate = `${year}년 ${month}월 ${day}일`

      setDiaryList({...diaryList, createdDate: newDate});
    })
  };

  return parsingDate;
}
export default useParsingDate;