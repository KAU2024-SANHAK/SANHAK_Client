import * as S from './BtnHomeIcon.style';

function BtnHomeIcon ({ onClick }) {
  return(
    <S.ButtonWrapper
      onClick={() => {
        onClick();
      }}
    >
      <S.HomeIcon />
    </S.ButtonWrapper>
  );
}
export default BtnHomeIcon;