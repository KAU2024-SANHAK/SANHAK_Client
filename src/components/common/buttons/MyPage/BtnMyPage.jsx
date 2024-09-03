import * as S from './BtnMyPage.style';

function BtnMyPage({ onClick }) {
  return(
    <S.ButtonWrapper
      onClick={() => {
        onClick();
      }}
    >
      <S.MyPageIcon />
    </S.ButtonWrapper>
  );
}
export default BtnMyPage;