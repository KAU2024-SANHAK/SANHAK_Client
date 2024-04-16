import * as S from './MyPagePopUp.style'
import { useModal } from '../../../hooks/common/useModal'
import { useNavigate } from 'react-router-dom'

import BtnLogout from '../../common/buttons/Logout/BtnLogout'
import BtnSetCharacter from '../../common/buttons/SetCharcater/BtnSetCharacter'
import BtnSetDiaryModal from '../../common/buttons/SetDiaryModal/BtnSetDiaryModal'
import SetWritingStyleModal from '../../Modal/SetWritingStyleModal/SetWritingStyleModal'

export default function MyPagePopUp(){
    const [isOpen, openModal, closeModal] = useModal();

    const navigate = useNavigate();
    const GoWiki=()=>{
        navigate('/mypage/characterwiki')
    }
    return(
        <S.MyPagePopUpWrapper>

            {isOpen && <SetWritingStyleModal onClick={()=>{closeModal()}}/>}
            <S.DiaryTypeWrapper>
                <S.TextWrapper>일기 작성 스타일</S.TextWrapper>
                <BtnSetDiaryModal onClick={()=>{openModal()}}/>
            </S.DiaryTypeWrapper>

            <BtnSetCharacter onClick={()=>{GoWiki()}}/>

            <BtnLogout/>
        </S.MyPagePopUpWrapper>
    )
}