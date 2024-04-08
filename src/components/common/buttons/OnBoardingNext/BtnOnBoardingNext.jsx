import * as S from './BtnNext.style'

export default function BtnNext(props){
    return(
        <S.Wrapper onClick={()=>{props.setStep()}}>
            다음으로
        </S.Wrapper>
    )
}