import * as S from './SearchByEmotionPopUp.style'
import BtnEmotionType from '../../../components/common/buttons/EmotionType/EmotionType'


export default function SearchByEmotionPopUp(){
    return(
        <S.Wrapper>
            <S.SearchByEmotionPopUpWrapper1>
                <BtnEmotionType name='기쁨' btnEnum="HAPPY"/>
                <BtnEmotionType name='분노' btnEnum="ANGRY"/>
                <BtnEmotionType name='평온' btnEnum="RELAX"/>
            </S.SearchByEmotionPopUpWrapper1>

            <S.SearchByEmotionPopUpWrapper2>
                <BtnEmotionType name='슬픔' btnEnum="SAD"/>
                <BtnEmotionType name='걱정' btnEnum="WORRIED"/>
                <BtnEmotionType name='놀람' btnEnum="SURPRISED"/>
            </S.SearchByEmotionPopUpWrapper2>
        </S.Wrapper>
        
    )
}