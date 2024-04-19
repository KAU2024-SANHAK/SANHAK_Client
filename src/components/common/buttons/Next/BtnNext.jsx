import * as S from './BtnNext.style'

export default function BtnNext({onNxt}){
    return(
        <S.ButtonWrapper type='button' onClick={()=>onNxt()}>
            <S.NextButton/>
        </S.ButtonWrapper>
    )
}