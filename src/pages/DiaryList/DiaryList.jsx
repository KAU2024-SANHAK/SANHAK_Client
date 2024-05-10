import * as S from './DiaryList.sytle';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { diaryListAtom } from '../../recoil/atoms';
import { useNavigate } from 'react-router-dom';
import BtnBack from '../../components/common/buttons/Back/BtnBack';
import DiaryListComponent from '../../components/common/DiaryListComponent/DiaryListComponent';
import useParsingDate from '../../hooks/diary/useParsingDate';

export default function DiaryList(){
  const [diaryList, setDiaryList] = useRecoilState(diaryListAtom);
  const navigate = useNavigate();
  const parsingDate = useParsingDate();

  const handleBackButton = () => {
    setDiaryList({});
    navigate('/searchbyemotion');
  };

  useEffect(() => {
    parsingDate();
  }, []);

  console.log(diaryList)
  return(       
    <S.DiaryListWrapper>

      <S.BackButtonWrapper>
        <BtnBack handleClick={() => {handleBackButton()}}/>
      </S.BackButtonWrapper>

      <S.DiaryListComponentWrapper>
          {diaryList.map((item) => (
            <DiaryListComponent
              key = {item.diaryId}
              feelingListId = {item.diaryId}
              feelingListTitle = {item.diaryTitle}
              feelingListDate = {item.createdDate}
            />
          ))}
      </S.DiaryListComponentWrapper>
    </S.DiaryListWrapper>
  );
}