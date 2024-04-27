import * as S from './SearchByEmotionPopUp.style'
import EmotionType from '../../../components/common/buttons/EmotionType/EmotionType'


export default function SearchByEmotionPopUp(){
    return(
        <S.Wrapper>
            <S.SearchByEmotionPopUpWrapper1>
                <EmotionType name='기쁨'/>
                <EmotionType name='분노'/>
                <EmotionType name='평온'/>
            </S.SearchByEmotionPopUpWrapper1>

            <S.SearchByEmotionPopUpWrapper2>
                <EmotionType name='슬픔'/>
                <EmotionType name='공포'/>
                <EmotionType name='놀람'/>
            </S.SearchByEmotionPopUpWrapper2>
        </S.Wrapper>
        
    )
}