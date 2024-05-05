import * as S from './BtnPrevMonth.style'

export default function BtnPrevMonth({onPrev}){
    return(
        <S.ButtonWrapper type='button' onClick={()=>onPrev()}>
            <S.PrevMonthButton/>
        </S.ButtonWrapper>
    )
}