import * as S from './BtnPrev.style'

export default function BtnPrev({onPrev}){
    return(
        <S.Warpper type='button' onClick={()=>onPrev()}>
            <S.PrevButton/>
        </S.Warpper>
    )
}