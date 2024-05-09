import * as S from './MainStep1.style'
import MyPageButton from '../../common/buttons/MyPageButton/MyPageButton'
import SearchByEmotionButton from '../../common/buttons/SearchByEmotionButton/SearchByEmotionButton'
import HoneyBearMainStep1 from '../../common/HoneyBearMainStep1/HoneyBearMainStep1'
import ThisMonthEmotion from '../../common/buttons/ThisMonthEmotion/ThisMonthEmotion'
// import { HoneyBear } from '../../../pages/MyPage/MyPage.style'

export default function MainStep1(){
    return(
        <S.MainStep1Wrapper>
            <S.MainStep1HoneyBearWrapper>
              <HoneyBearMainStep1/>
            </S.MainStep1HoneyBearWrapper>

            {/* honeyBear가 height=50이 가장 커진거라서...ㅜㅜ 재사용하기가 힘듭니다 */}
            {/* <S.MainStep1HoneyBearWrapper>
              <HoneyBear height='50rem' />
            </S.MainStep1HoneyBearWrapper> */}

            <S.MainButtonWrapper>
                <MyPageButton />
                <SearchByEmotionButton />
                <ThisMonthEmotion />
            </S.MainButtonWrapper>
        </S.MainStep1Wrapper>

    )
}