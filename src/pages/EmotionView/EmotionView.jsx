import * as S from './EmotionView.style';
import { EmotionViewComponent } from '../../components/EmotionViewComponent/EmotionViewComponent';
import { useRecoilState } from 'recoil';

export default function EmotionView(){
    return(
        <S.EmotionViewWrapper>
            <EmotionViewComponent/>
        </S.EmotionViewWrapper>
    )
};