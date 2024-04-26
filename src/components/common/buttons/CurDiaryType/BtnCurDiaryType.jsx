import * as S from './BtnCurDiaryType.style'

export default function BtnCurDiaryType({onClick, curType}){
    return(
        <S.ButtonWrapper onClick={()=>{onClick()}}>
            {curType === 'FASTTYPE' ? '빠른 일기' : '느린 일기' }    
        </S.ButtonWrapper>
    )
}