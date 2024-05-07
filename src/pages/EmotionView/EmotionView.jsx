import * as S from './EmotionView.style';
import { EmotionViewComponent } from '../../components/EmotionViewComponent/EmotionViewComponent';
import { useRecoilState } from 'recoil';
import { diaryContent } from '../../utils/diaryContent';

export default function EmotionView(){
    const response = diaryContent[0];

    return(
        <S.EmotionViewWrapper>
            <EmotionViewComponent feeling={response.feeling}/>
        </S.EmotionViewWrapper>
    )
};