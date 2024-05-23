import * as S from './DiaryList.sytle';
import { useRecoilState } from 'recoil';
import { diaryListAtom } from '../../recoil/atoms';
import { useNavigate } from 'react-router-dom';
import BtnBack from '../../components/common/buttons/Back/BtnBack';
import DiaryListComponent from '../../components/common/DiaryListComponent/DiaryListComponent';

export default function DiaryList(){
  const [diaryList, setDiaryList] = useRecoilState(diaryListAtom);
  const navigate = useNavigate();

  const handleBackButton = () => {
    setDiaryList({});
    navigate('/searchbyemotion');
  };

  const fillTheBlank = () => {
    const additions = [];
    for (let i = 0; i < numOfAdditions; i++) {
      additions.push(<S.BackgroundAddition key={i} />);
    }
    return additions;
  };

  const numOfAdditions = Math.max(4 - diaryList.length, 0);

  console.log(diaryList)
  return(       
    <S.DiaryListWrapper>
      <S.BackButtonWrapper>
        <BtnBack handleClick={handleBackButton} />
      </S.BackButtonWrapper>

      <S.DiaryListComponentWrapper>
        {diaryList.map((item) => (
          <DiaryListComponent
            key={item.diaryId}
            feelingListId={item.diaryId}
            feelingListTitle={item.diaryTitle}
            feelingListDate={item.createdDate}
            imageUrl={item.imageUrl}
          />
        ))}
      </S.DiaryListComponentWrapper>
      
      {fillTheBlank()}

    </S.DiaryListWrapper>
  );
}