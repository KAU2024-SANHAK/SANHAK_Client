import * as S from './Question.style'

export default function SmallQuestion({children}){
    return(
        <S.SmallQuestionWrapper>
            <S.QustionText>
                {children}
            </S.QustionText>
        </S.SmallQuestionWrapper>
    )
}