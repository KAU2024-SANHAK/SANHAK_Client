import * as S from './Share.style'

export default function Share({handleClick}){
    return(
        <S.ButtonWrapper onClick={()=>{handleClick()}}> 
            <S.ShareBtn/>
        </S.ButtonWrapper>
    )
}