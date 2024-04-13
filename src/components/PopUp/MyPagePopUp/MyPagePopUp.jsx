import * as S from './MyPagePopUp.style'
import BtnLogout from '../../common/buttons/Logout/BtnLogout'
import BtnSetCharacter from '../../common/buttons/SetCharcater/BtnSetCharacter'
import BtnSetDiaryModal from '../../common/buttons/SetDiaryModal/BtnSetDiaryModal'

export default function MyPagePopUp(){
    return(
        <S.MyPagePopUpWrapper>
            <S.DiaryTypeWrapper>
                <p>일기 작성 스타일</p>
                <BtnSetDiaryModal/>
            </S.DiaryTypeWrapper>

            <BtnSetCharacter/>

            <BtnLogout/>
        </S.MyPagePopUpWrapper>
    )
}