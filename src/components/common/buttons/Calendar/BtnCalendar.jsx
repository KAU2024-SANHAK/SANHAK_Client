import * as S from './BtnCalendar.style';

function BtnCalendar({ onClick }) {
  return (
    <S.ButtonWrapper
      onClick={() => {
        onClick();
      }}
    >
      <S.CalendarIcon />
    </S.ButtonWrapper>
  );
}
export default BtnCalendar;