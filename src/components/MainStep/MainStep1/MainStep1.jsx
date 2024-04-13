import * as S from './MainStep1.style'
import MyPageButton from '../../common/buttons/MyPageButton/MyPageButton'
import SearchByEmotionButton from '../../common/buttons/SearchByEmotionButton/SearchByEmotionButton'
import WriteDiaryButton from '../../common/buttons/WriteDiaryButton/WriteDiaryButton'

export default function MainStep1(){
    return(
        <S.Wrapper>
            <MyPageButton/>  
            <SearchByEmotionButton/>   
            <WriteDiaryButton/> 
        </S.Wrapper>
    )
}