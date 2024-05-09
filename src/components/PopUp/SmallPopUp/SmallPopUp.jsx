import * as S from './SmallPopUp.style'

export default function SmallPopUp({name, children}){
    return(
        <S.PopUpWrapper>
            <S.SlideWrapper>
                <S.PopUpSlide/>
            </S.SlideWrapper>
            
            <S.PopUpTitle>
                {name}
            </S.PopUpTitle>
            
            {children}
        </S.PopUpWrapper>
    )
}