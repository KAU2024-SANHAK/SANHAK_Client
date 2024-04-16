import * as S from './WikiCarousel.style'

export default function CharacterBox({children, name}){
    return(
        <S.CharacterBoxWrapper>
        <S.CharacterBox>
            {children}
        </S.CharacterBox>
        
        <S.CostumeName>
            {name}
        </S.CostumeName>
        </S.CharacterBoxWrapper>
    )
}