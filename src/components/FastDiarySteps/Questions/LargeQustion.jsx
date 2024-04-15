import * as S from './Question.style'

export default function LargeQuestion({children}){
    return(
        <S.LargeQuestionWrapper>
            <S.QustionText>
                {children}
            </S.QustionText>
        </S.LargeQuestionWrapper>
    )
}