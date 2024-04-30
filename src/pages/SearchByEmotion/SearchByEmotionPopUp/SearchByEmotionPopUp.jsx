import * as S from './SearchByEmotionPopUp.style'
import EmotionType from '../../../components/common/buttons/EmotionType/EmotionType'


export default function SearchByEmotionPopUp(){
    return(
        <S.Wrapper>
            <S.SearchByEmotionPopUpWrapper1>
                <EmotionType name='기쁨' btnEnum="HAPPY"/>
                <EmotionType name='분노' btnEnum="ANGRY"/>
                <EmotionType name='평온' btnEnum="RELAX"/>
            </S.SearchByEmotionPopUpWrapper1>

            <S.SearchByEmotionPopUpWrapper2>
                <EmotionType name='슬픔' btnEnum="SAD"/>
                <EmotionType name='걱정' btnEnum="WORRIED"/>
                <EmotionType name='놀람' btnEnum="SURPRISED"/>
            </S.SearchByEmotionPopUpWrapper2>
        </S.Wrapper>
        
    )
}