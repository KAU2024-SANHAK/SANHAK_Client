import * as S from './PopUp.style'
import MyPagePopUp from './MyPagePopUp/MyPagePopUp'

export default function PopUp({children}){
    return(
        <S.PopUpWrapper>
            <S.SlideWrapper>
                <S.PopUpSlide/>
            </S.SlideWrapper>
            
            <S.PopUpTitle>
                {children}
            </S.PopUpTitle>

            <MyPagePopUp>

            </MyPagePopUp>
        </S.PopUpWrapper>
    )
}