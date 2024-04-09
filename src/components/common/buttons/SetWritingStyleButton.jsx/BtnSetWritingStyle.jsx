import * as S from  './BtnSetWritingStyle.style'

export default function BtnSetWritingStyle(props){
    return(
        <S.Wrapper onClick={()=>{props.setStep()}}>
            <S.SetWritingStyleButton/>
        </S.Wrapper>
    )
}