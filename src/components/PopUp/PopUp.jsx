import * as S from './PopUp.style'

export default function PopUp({children}){
    return(
        <S.PopUpWrapper>
            <S.PopUpTitle>
                {children}
            </S.PopUpTitle>
        </S.PopUpWrapper>
    )
}