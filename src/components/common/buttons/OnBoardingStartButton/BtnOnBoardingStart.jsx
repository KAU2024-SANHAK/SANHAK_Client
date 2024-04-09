import * as S from  './BtnOnBoardingStart.style'

export default function BtnOnBoardingStart(props){
    return(
        <S.Wrapper onClick={()=>{props.setStep()}}>
            <S.OnBoardingStartButton/>
        </S.Wrapper>
    )
}