import * as S from './BtnSubmit.style'

export default function BtnSubmit(props){
    return(
        <S.Wrapper onClick= {props.onClick} height= {props.height} $color= {props.$color}>
            {props.children}
        </S.Wrapper>
    )
}