import * as S from './Menu.style'

export default function Menu({handleClick}){
    return(
        <S.ButtonWrapper onClick={()=>{handleClick()}}> 
            <S.MenuBtn/>
        </S.ButtonWrapper>
    )
}