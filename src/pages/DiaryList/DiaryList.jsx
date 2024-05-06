import * as S from './DiaryList.sytle';
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
    
    const params = useParams();
    const responseObject = params.response;

    const navigate=useNavigate();
    const handleBackButton=()=>{
        navigate('/searchbyemotion');
    };
    
    return(       
        <S.DiaryListWrapper>

            <S.BackButtonWrapper>
                <BtnBack onClick={() => {handleBackButton()}}/>
            </S.BackButtonWrapper>

            <S.DiaryListComponentWrapper>

            </S.DiaryListComponentWrapper>
        </S.DiaryListWrapper>
    );
}