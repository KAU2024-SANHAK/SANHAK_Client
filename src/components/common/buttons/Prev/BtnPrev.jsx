import * as S from './BtnPrev.style'

export default function BtnPrev({onPrev}){
    return(
        <S.ButtonWrapper type='button' onClick={()=>onPrev()}>
            <S.PrevButton/>
        </S.ButtonWrapper>
    )
}