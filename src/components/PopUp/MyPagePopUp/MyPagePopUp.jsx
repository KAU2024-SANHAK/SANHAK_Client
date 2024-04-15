import * as S from './MyPagePopUp.style'
import { useModal } from '../../../hooks/common/useModal'
import BtnLogout from '../../common/buttons/Logout/BtnLogout'
import BtnSetCharacter from '../../common/buttons/SetCharcater/BtnSetCharacter'
import BtnSetDiaryModal from '../../common/buttons/SetDiaryModal/BtnSetDiaryModal'
import SetWritingStyleModal from '../../Modal/SetWritingStyleModal/SetWritingStyleModal'

export default function MyPagePopUp(){
    const [isOpen, openModal, closeModal] = useModal();

    return(
        <S.MyPagePopUpWrapper>

            {isOpen && <SetWritingStyleModal />}
            <S.DiaryTypeWrapper>
                <S.TextWrapper>일기 작성 스타일</S.TextWrapper>
                <BtnSetDiaryModal onClick={()=>{openModal()}}/>
            </S.DiaryTypeWrapper>

            <BtnSetCharacter/>

            <BtnLogout/>
        </S.MyPagePopUpWrapper>
    )
}