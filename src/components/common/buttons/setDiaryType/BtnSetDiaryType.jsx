import * as S from './BtnSetDiaryType.style'

export default function BtnSetDiaryType(props){
     
    return(
        <S.Wrapper onClick={props.onClick} $isClick = {props.isClick}>
            {props.children}
        </S.Wrapper>
    )
}