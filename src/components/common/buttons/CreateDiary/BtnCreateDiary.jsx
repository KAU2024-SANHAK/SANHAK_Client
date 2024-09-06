import * as S from './BtnCreateDiary.style';

function BtnCreateDiary({ onClick }) {
  return(
    <S.ButtonWrapper
      onClick={() => {
        onClick();
      }}
    >
      일기 생성하기
    </S.ButtonWrapper>
  );
}
export default BtnCreateDiary;