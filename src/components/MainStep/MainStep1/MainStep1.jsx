import * as S from './MainStep1.style'
import MyPageButton from '../../common/buttons/MyPageButton/MyPageButton'
import SearchByEmotionButton from '../../common/buttons/SearchByEmotionButton/SearchByEmotionButton'
// import WriteDiaryButton from '../../common/buttons/WriteDiaryButton/WriteDiaryButton'
import HoneyBearMainStep1 from '../../common/HoneyBearMainStep1/HoneyBearMainStep1'
import ThisMonthEmotion from '../../common/buttons/ThisMonthEmotion/ThisMonthEmotion'

export default function MainStep1(){
    return(
        <S.MainStep1Wrapper>
            <S.MainButtonWrapper>
                <MyPageButton />
                <SearchByEmotionButton />
                <ThisMonthEmotion />
            </S.MainButtonWrapper>
            {/* <WriteDiaryButton/> */}
        </S.MainStep1Wrapper>

    )
}