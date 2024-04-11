import * as S from  './BtnSetSlow.style'

export default function BtnSetSlow(props){
    return(
        <S.Wrapper onClick={props.onClick}>
            <S.SetSlowButton color = {props.color}/>
        </S.Wrapper>
    )
}