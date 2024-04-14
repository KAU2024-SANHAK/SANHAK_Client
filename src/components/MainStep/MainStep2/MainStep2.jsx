import * as S from './MainStep2.style'
import MyPageButton from '../../common/buttons/MyPageButton/MyPageButton'
import SearchByEmotionButton from '../../common/buttons/SearchByEmotionButton/SearchByEmotionButton'
import WriteDiaryButton from '../../common/buttons/WriteDiaryButton/WriteDiaryButton'
import HoneyBearMainStep2 from '../../common/HoneyBearMainStep2/HoneyBearMainStep2'
import ThisMonthEmotion from '../../common/buttons/ThisMonthEmotion/ThisMonthEmotion'

export default function MainStep2(){
    return(
        <S.Wrapper>
            <MyPageButton/>  
            <SearchByEmotionButton/>   
            <WriteDiaryButton/>
            <ThisMonthEmotion/>

            <S.MainStep1HoneyBearWrapper>
                <HoneyBearMainStep2 height='100rem'/>
            </S.MainStep1HoneyBearWrapper>
        </S.Wrapper>
    )
}