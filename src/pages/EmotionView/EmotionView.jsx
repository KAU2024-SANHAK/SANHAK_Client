import * as S from './EmotionView.style';
import { EmotionViewComponent } from '../../components/EmotionViewComponent/EmotionViewComponent';
import { useRecoilState } from 'recoil';


export default function EmotionView(){
    const responseObject = params.response;
    return(
        <S.EmotionViewWrapper>
            <EmotionViewComponent emotion={responseObject} />
        </S.EmotionViewWrapper>
    )
};