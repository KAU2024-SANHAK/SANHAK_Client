import * as S from './BtnSetDiaryModal.style'

export default function BtnSetDiaryModal({onClick}){
    return(
        <S.ButtonWrapper onClick={()=>{onClick()}}>
            빠른 일기    
        </S.ButtonWrapper>
    )
}