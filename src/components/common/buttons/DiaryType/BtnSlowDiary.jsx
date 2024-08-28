import * as S from './BtnDiaryType.style';

function BtnSlowDiary({ onClick }) {
  return(
    <S.ButtonWrapper onClick={() => {
      onClick();
    }}>
      <S.SlowCreateButton />
    </S.ButtonWrapper>
  );
}
export default BtnSlowDiary;