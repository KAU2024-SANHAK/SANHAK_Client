import * as S from '../FastDiaryStep.style'
import FeelingHive from '../FeelingHive/FeelingHive'

export default function FastDiaryStep1(){

    return(
        <S.StepWrapper>
            <S.QuestionWrapper>
                <S.QuestionBox/>
            </S.QuestionWrapper>

            <FeelingHive/>

        </S.StepWrapper>
    )
}