import * as S from './BtnNext.style'

export default function BtnNext({onPrev}){
    return(
        <S.Warpper type='button' onClick={()=>onPrev()}>
            <S.PrevButton/>
        </S.Warpper>
    )
}