import * as S from './BtnSetDiaryType.style';

export default function BtnSetDiaryType(props) {
  return (
    <S.ButtonWrapper onClick={props.onClick} $isClick={props.isClick}>
      {props.children}
    </S.ButtonWrapper>
  );
}
