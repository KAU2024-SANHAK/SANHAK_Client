import * as S from './Question.style'

export default function SmallQuestion({children}){
    return(
        <S.SmallQuestionWrapper>
            <S.QuestionText>
                {children}
            </S.QuestionText>
        </S.SmallQuestionWrapper>
    )
}