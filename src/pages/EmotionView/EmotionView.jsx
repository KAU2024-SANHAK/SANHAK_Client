import * as S from './EmotionView.style';
import { useLocation } from 'react-router-dom';
import { EmotionViewComponent } from '../../components/EmotionViewComponent/EmotionViewComponent';
import { diaryFeeling } from '../../recoil/atoms';

export default function EmotionView(){
    const location = useLocation();
    console.log(location.state.value);
    const feeling = location.state.value;
    return(
        <S.EmotionViewWrapper>
            {/* TEST: utils 테스트 코드 돌리기 */}
            {/* <EmotionViewComponent feeling={response.feeling}/> */}

            {/* REAL: API 연결시 주석 해제 */}
            <EmotionViewComponent feeling={feeling}/>
        </S.EmotionViewWrapper>
    )
};