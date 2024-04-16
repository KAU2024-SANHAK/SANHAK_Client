import * as S from './WikiCarousel.style'

export default function CharacterBox({children}){
    return(
        <S.CharacterBoxWrapper>
        <S.CharacterBox>
             <S.HoneyBear height='13.5rem'/>
        </S.CharacterBox>
        <S.CostumeName>
            {children}
        </S.CostumeName>
        </S.CharacterBoxWrapper>
    )
}