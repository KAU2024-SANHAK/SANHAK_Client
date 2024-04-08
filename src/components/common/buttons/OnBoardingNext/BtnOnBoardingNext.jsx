import * as S from './BtnOnBoardingNext.style'

export default function BtnOnBoardingNext(props){
    return(
        <S.Wrapper onClick={()=>{props.setStep()}}>
            다음으로
        </S.Wrapper>
    )
}