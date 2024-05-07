import * as S from './EmotionView.style';
import { EmotionViewComponent } from '../../components/EmotionViewComponent/EmotionViewComponent';

// TEST: utils에서 테스트용 js 파일을 가져오는 코드
// import { diaryContent } from '../../utils/diaryContent';

// REAL: recoil에서 atom 가져오기
import { diaryFeeling } from '../../recoil/atoms';

export default function EmotionView(){

    // TEST: utils 테스트 코드 돌리기
    const response = diaryContent[0];

    return(
        <S.EmotionViewWrapper>
            {/* TEST: utils 테스트 코드 돌리기 */}
            {/* <EmotionViewComponent feeling={response.feeling}/> */}

            {/* REAL: API 연결시 주석 해제 */}
            <EmotionViewComponent feeling={diaryFeeling}/>
        </S.EmotionViewWrapper>
    )
};