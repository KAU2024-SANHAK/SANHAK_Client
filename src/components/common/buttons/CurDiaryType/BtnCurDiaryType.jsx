import * as S from './BtnCurDiaryType.style'

export default function BtnCurDiaryType({onClick, curType}){
    return(
        <S.ButtonWrapper onClick={()=>{onClick()}}>
            {curType}    
        </S.ButtonWrapper>
    )
}