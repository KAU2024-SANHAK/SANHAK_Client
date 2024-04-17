import * as S from './MyPagePopUp.style'
import { useState } from 'react'
import { useModal } from '../../../hooks/common/useModal'
import { useNavigate } from 'react-router-dom'
import BtnLogout from '../../../components/common/buttons/Logout/BtnLogout'
import BtnSetCharacter from '../../../components/common/buttons/SetCharcater/BtnSetCharacter'
import BtnSetDiaryModal from '../../../components/common/buttons/SetDiaryModal/BtnSetDiaryModal'

export default function MyPagePopUp(){
    const [isOpen, openModal, closeModal] = useModal();
    const [isClick, seIsClick] = useState(false);

    const navigate = useNavigate();
    const GoWiki=()=>{
        navigate('/mypage/characterwiki')
    }
    return(
        <S.MyPagePopUpWrapper>


            <S.TextWrapper>일기 작성 스타일</S.TextWrapper>


            <BtnSetDiaryModal onClick={()=>{openModal()}}/>

            <BtnSetCharacter onClick={()=>{GoWiki()}}/>

            <BtnLogout/>
        </S.MyPagePopUpWrapper>
    )
}