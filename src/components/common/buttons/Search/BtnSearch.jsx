import * as S from './BtnSearch.style';

function BtnSearch({ onClick }) {
  return(
    <S.ButtonWrapper
      onClick={() => {
        onClick();
      }}
    >
      <S.SearchIcon />
    </S.ButtonWrapper>
  );
}
export default BtnSearch;