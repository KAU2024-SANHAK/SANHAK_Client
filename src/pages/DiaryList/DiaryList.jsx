import * as S from './DiaryList.sytle';
import { useRecoilValue } from 'recoil';
import { diaryList } from '../../recoil/atoms';
import { useNavigate, useParams } from 'react-router-dom';
import BtnBack from '../../components/common/buttons/Back/BtnBack';
import DiaryListComponent from '../../components/common/DiaryListComponent/DiaryListComponent';
/*
{responseObject.map((item) => (
    <DiaryListComponent
        key={item.diaryId}
        feelingListId={item.diaryId}
        feelingListTitle={item.diaryTitle}
        feelingListDate={item.createdDate}
    />
))}*/

export default function DiaryList(){
    const diaryListAtom = useRecoilValue(diaryList)
    const navigate = useNavigate();
    const handleBackButton = () => {
        navigate('/searchbyemotion');
    };
    
    return(       
        <S.DiaryListWrapper>

            <S.BackButtonWrapper>
                <BtnBack onClick={() => {handleBackButton()}}/>
            </S.BackButtonWrapper>

            <S.DiaryListComponentWrapper>
                {diaryListAtom.map((item) => (
                    <DiaryListComponent
                        key={item.diaryId}
                        feelingListId={item.diaryId}
                        feelingListTitle={item.diaryTitle}
                        feelingListDate={item.createdDate}
                    />
                ))}
            </S.DiaryListComponentWrapper>
        </S.DiaryListWrapper>
    );
}