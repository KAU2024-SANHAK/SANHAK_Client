import * as S from '../FastDiaryStep.style'
import FeelingHive from '../FeelingHive/FeelingHive'
import LargeQuestion from '../Questions/LargeQustion'
import SmallQuestion from '../Questions/SamllQuestion'

export default function FastDiaryStep1(){

    return(
        <S.FastDiaryStepWrapper>
            <SmallQuestion>
                오늘 느낀 감정을 선택해줄래?
            </SmallQuestion>
            <LargeQuestion>
                누구와 함께하는 동안<br/>
                그런 감정을 느꼈어?
            </LargeQuestion>

            <FeelingHive/>

        </S.FastDiaryStepWrapper>
    )
}