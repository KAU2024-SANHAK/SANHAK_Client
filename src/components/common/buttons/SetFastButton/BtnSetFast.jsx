import * as S from  './BtnSetFast.style'

export default function BtnSetFast(props){
    return(
        <S.Wrapper onClick={props.onClick}>
            <S.SetFastButton color = {props.color}/>
        </S.Wrapper>
    )
}