import * as S from './PopUp.style'

export default function PopUp({name, children}){
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