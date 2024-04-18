import * as S from './BtnSetDiaryModal.style'

export default function BtnSetDiaryModal({onClick, curType}){
    return(
        <S.ButtonWrapper onClick={()=>{onClick()}}>
            {curType}    
        </S.ButtonWrapper>
    )
}