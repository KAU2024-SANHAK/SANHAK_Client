import * as S from './BtnBack.style'

export default function BtnBack({onClick}){
    return(
        <S.ButtonWrapper onClick={()=>{onClick()}}>
            <S.BackButton/>
        </S.ButtonWrapper>
    )
}