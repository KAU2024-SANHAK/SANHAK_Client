import * as S from './DiaryList.sytle';
import { useRecoilValue } from 'recoil';
import { diaryListAtom } from '../../recoil/atoms';
import { useNavigate } from 'react-router-dom';
import BtnBack from '../../components/common/buttons/Back/BtnBack';
import DiaryListComponent from '../../components/common/DiaryListComponent/DiaryListComponent';

export default function DiaryList(){
    const diaryList = useRecoilValue(diaryListAtom);
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
                {diaryList.map((item) => (
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