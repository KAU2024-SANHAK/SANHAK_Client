import * as S from './BtnNext.style'

export default function BtnNext({onNxt}){
    return(
        <S.Warpper type='button' onClick={()=>onNxt()}>
            <S.NextButton/>
        </S.Warpper>
    )
}