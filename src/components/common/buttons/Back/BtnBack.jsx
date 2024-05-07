import * as S from './BtnBack.style'

export default function BtnBack({handleClick}){
    return(
        <S.ButtonWrapper onClick={()=>{handleClick}}>
            <S.BackButton/>
        </S.ButtonWrapper>
    )
}