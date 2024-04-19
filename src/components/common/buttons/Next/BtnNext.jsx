import * as S from './BtnNext.style'

export default function BtnNext({onNext}){
    return(
        <S.ButtonWrapper type='button' onClick={()=>onNext()}>
            <S.NextButton/>
        </S.ButtonWrapper>
    )
}