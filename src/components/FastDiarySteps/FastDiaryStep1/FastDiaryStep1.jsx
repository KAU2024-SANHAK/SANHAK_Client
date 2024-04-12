import * as S from '../FastDiaryStep.style'
import FeelingHive from '../FeelingHive/FeelingHive'

export default function FastDiaryStep1(){

    return(
        <S.StepWrapper>
            <S.QuestionWrapper>
                    <S.QustionText>
                        오늘 느낀 감정을 선택해줄래?
                    </S.QustionText>
            </S.QuestionWrapper>

            <FeelingHive/>

        </S.StepWrapper>
    )
}