import * as S from './BtnComplete.style'

//변수명 좋은 게 생각이 안나네요..
export default function BtnComplete(props){
     
    return(
        <S.Wrapper onClick={props.onClick}>
            {props.children}
        </S.Wrapper>
    )
}