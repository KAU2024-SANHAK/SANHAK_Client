import * as S from './EmotionView.style';
import { EmotionViewComponent } from '../../components/EmotionViewComponent/EmotionViewComponent';

export default function EmotionView(){
    return(
        <S.EmotionViewWrapper>
            <EmotionViewComponent/>
        </S.EmotionViewWrapper>
    )
}