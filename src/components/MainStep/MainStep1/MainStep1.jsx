import * as S from './MainStep1.style'
import MyPageButton from '../../common/buttons/MyPageButton/MyPageButton'
import SearchByEmotionButton from '../../common/buttons/SearchByEmotionButton/SearchByEmotionButton'
import WriteDiaryButton from '../../common/buttons/WriteDiaryButton/WriteDiaryButton'
import HoneyBear from '../../common/HoneyBear/HoneyBear'
import ThisMonthEmotion from '../../common/buttons/ThisMonthEmotion/ThisMonthEmotion'

export default function MainStep1(){
    return(
        <S.Wrapper>
            <MyPageButton/>  
            <SearchByEmotionButton/>   
            <WriteDiaryButton/>
            <ThisMonthEmotion/>

            <S.MainStep1HoneyBearWrapper>
                <HoneyBear height='50rem'/>
            </S.MainStep1HoneyBearWrapper>
        </S.Wrapper>
    )
}