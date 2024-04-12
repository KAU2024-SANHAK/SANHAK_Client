import * as S from '../FastDiaryStep.style'
import FeelingHive from '../FeelingHive/FeelingHive'
import SmallQuestion from '../Questions/SamllQuestion'

export default function FastDiaryStep1(){

    return(
        <S.FastDiaryStepWrapper>
            <SmallQuestion>
                오늘 느낀 감정을 선택해줄래?
            </SmallQuestion>
            
            <FeelingHive/>

        </S.FastDiaryStepWrapper>
    )
}