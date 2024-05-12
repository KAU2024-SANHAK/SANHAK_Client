import * as S from './BtnLogout.style';

export default function BtnLogout({ onClick }) {
  return (
    <S.ButtonWrapper
      onClick={() => {
        onClick();
      }}
    >
      로그아웃
    </S.ButtonWrapper>
  );
}
