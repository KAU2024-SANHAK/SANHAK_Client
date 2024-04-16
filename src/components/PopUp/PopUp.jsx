import * as S from './PopUp.style'
import MyPagePopUp from './MyPagePopUp/MyPagePopUp'

export default function PopUp({name}){
    return(
        <S.PopUpWrapper>
            <S.SlideWrapper>
                <S.PopUpSlide/>
            </S.SlideWrapper>
            
            <S.PopUpTitle>
                {name}
            </S.PopUpTitle>

            <MyPagePopUp>

            </MyPagePopUp>
        </S.PopUpWrapper>
    )
}