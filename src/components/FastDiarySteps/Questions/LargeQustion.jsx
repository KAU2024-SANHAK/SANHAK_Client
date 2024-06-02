import * as S from './Question.style';

export default function LargeQuestion({ children }) {
  return (
      <S.LargeQuestionPng>
        <S.QuestionText>{children}</S.QuestionText>
      </S.LargeQuestionPng>
  );
}
