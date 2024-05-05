import * as S from './BtnNextMonth.style'

export default function BtnNextMonth({onNext}){
    return(
        <S.ButtonWrapper type='button' onClick={()=>onNext()}>
            <S.NextMonthButton/>
        </S.ButtonWrapper>
    )
}