import * as S from './MainStep1.style'
import MyPageButton from '../../common/buttons/MyPageButton/MyPageButton'
import SearchByEmotionButton from '../../common/buttons/SearchByEmotionButton/SearchByEmotionButton'
// import WriteDiaryButton from '../../common/buttons/WriteDiaryButton/WriteDiaryButton'
import HoneyBearMainStep1 from '../../common/HoneyBearMainStep1/HoneyBearMainStep1'
import ThisMonthEmotion from '../../common/buttons/ThisMonthEmotion/ThisMonthEmotion'

export default function MainStep1(){
    return(
        <S.MainStep1Wrapper>
            <S.MainStep1HoneyBearWrapper>
                <HoneyBearMainStep1/>
            </S.MainStep1HoneyBearWrapper>

            <S.MainButtonWrapper>
                <MyPageButton/>
                <SearchByEmotionButton/>
                <ThisMonthEmotion/>
            </S.MainButtonWrapper>
            {/* <WriteDiaryButton/> */}
        </S.MainStep1Wrapper>
        
        
            
        
        
        // <S.MainStep1Wrapper>
        //     {/* 전체 페이지 내에서 버튼이 들어갈 영역 중간 차지 */}
        //     <MainButtonWrapper>
        //         <MyPageButton/>  
        //         <SearchByEmotionButton/>    
        //         <ThisMonthEmotion/>
        //     </MainButtonWrapper>

        //     {/* 앱솔루트로 위치값 고정하기 */}
        //     <WriteDiaryButton/>

        //     <FooterWrapper>
        //         {/* 프로그래스 바 설정하기 */}

        //     </FooterWrapper>

            
        // </S.MainStep1Wrapper>
    )
}