import * as S from './BtnDiaryType.style';

function BtnFastDiary({ onClick }) {
  return(
    <S.ButtonWrapper onClick={() => {
      onClick();
    }}>
      <S.FastWriteButton />
    </S.ButtonWrapper>
  );
}
export default BtnFastDiary;