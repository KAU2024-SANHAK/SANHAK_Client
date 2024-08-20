import * as S from './BtnDiaryType.style';

function BtnSlowDiary({ onClick }) {
  return(
    <S.ButtonWrapper onClick={() => {
      onClick();
    }}>
      <S.SlowWriteButton />
    </S.ButtonWrapper>
  );
}
export default BtnSlowDiary;