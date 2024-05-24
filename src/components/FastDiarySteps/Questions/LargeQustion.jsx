import * as S from './Question.style';

export default function LargeQuestion({ children }) {
  return (
    <S.LargeQuestionWrapper>
      <S.LargeQuestionPng>
        <S.QuestionText>{children}</S.QuestionText>
      </S.LargeQuestionPng>
    </S.LargeQuestionWrapper>
  );
}
