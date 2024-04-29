import * as S from './EmotionView.style';
import { EmotionViewComponent } from '../../components/EmotionViewComponent/EmotionViewComponent';

function EmotionView(){
    return(
        <S.EmotionViewWrapper>
            <EmotionViewComponent/>
        </S.EmotionViewWrapper>
    )
}
export default EmotionView;