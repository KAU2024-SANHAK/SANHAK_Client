import * as S from './BtnSetCharacter.style';

export default function BtnSetCharacter({ onClick }) {
  return (
    <S.ButtonWrapper
      onClick={() => {
        onClick();
      }}
    >
      캐릭터 도감 보러가기
    </S.ButtonWrapper>
  );
}
