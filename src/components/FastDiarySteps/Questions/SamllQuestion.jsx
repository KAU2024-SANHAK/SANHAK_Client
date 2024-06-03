import * as S from './Question.style';

export default function SmallQuestion({ children }) {
  return (
      <S.SmallQuestionPng>
        <S.QuestionText>{children}</S.QuestionText>
      </S.SmallQuestionPng>
  );
}
