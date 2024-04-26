import * as S from './SearchByEmotionPopUp.style'
import EmotionType from '../../../components/common/buttons/EmotionType/EmotionType'


export default function SearchByEmotionPopUp(){
    return(
        <S.Wrapper>
            <S.SearchByEmotionPopUpWrapper1>
                <EmotionType name='기쁨' page='happy'/>
                <EmotionType name='분노' page='mad'/>
                <EmotionType name='평온' page='peace'/>
            </S.SearchByEmotionPopUpWrapper1>

            <S.SearchByEmotionPopUpWrapper2>
                <EmotionType name='슬픔' page='sad'/>
                <EmotionType name='공포' page='feer'/>
                <EmotionType name='놀람' page='surprised'/>
            </S.SearchByEmotionPopUpWrapper2>
        </S.Wrapper>
        
    )
}