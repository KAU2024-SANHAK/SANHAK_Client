import * as S from './MainStep2.style'
import HoneyBearMainStep2 from '../../common/HoneyBearMainStep2/HoneyBearMainStep2'
import Calendar from '../../common/Calendar/Calendar'

export default function MainStep1(){
    return(
        <S.MainStep2Wrapper>
            <S.MainStep2HoneyBearWrapper>
                <HoneyBearMainStep2/>
            </S.MainStep2HoneyBearWrapper>
            <S.MainStep2ComponentWrapper>
                <Calendar/>
                {/* 일기 리스트 들어가기 */}

            </S.MainStep2ComponentWrapper>
        </S.MainStep2Wrapper>
    )
}