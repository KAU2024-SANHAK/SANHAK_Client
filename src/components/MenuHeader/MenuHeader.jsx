import * as S from './MenuHeader.style';

function MenuHeader() {
  return(
    <S.MenuHeaderWrapper>
      <button>검색</button>
      <button>달력</button>
      <button>마페</button>
    </S.MenuHeaderWrapper>
  );
}
export default MenuHeader;