import * as S from './DiaryList.sytle'
import { useNavigate, useParams } from 'react-router-dom';
import BtnBack from '../../components/common/buttons/Back/BtnBack';
import DiaryListComponent from '../../components/common/DiaryListComponent/DiaryListComponent';
// utils에서 테스트용 js 파일을 가져오는 코드
import { feelingDiaryList } from '../../utils/feelingDiaryList';

export default function DiaryList(){
    
    // API 연결 시에 활성화 할 부분입니다.
    // const params = useParams();
    // const responseObject = params.response;

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
                {feelingDiaryList.map((item) => (
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