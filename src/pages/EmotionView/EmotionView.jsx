import * as S from './EmotionView.style';
import { useRecoilValue } from 'recoil';
import { useLocation } from 'react-router-dom';
import { EmotionViewComponent } from '../../components/EmotionViewComponent/EmotionViewComponent';
import { diaryFeeling } from '../../recoil/atoms';

export default function EmotionView(){
    const feeling = useRecoilValue(diaryFeeling)
    console.log(feeling)

    return(
        <S.EmotionViewWrapper>
            <EmotionViewComponent feeling={feeling}/>
        </S.EmotionViewWrapper>
    )
};