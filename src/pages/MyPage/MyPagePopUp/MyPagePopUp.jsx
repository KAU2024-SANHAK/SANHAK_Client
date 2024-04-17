import * as S from './MyPagePopUp.style'
import { useState } from 'react'
import { useModal } from '../../../hooks/common/useModal'
import { useNavigate } from 'react-router-dom'
import BtnLogout from '../../../components/common/buttons/Logout/BtnLogout'
import BtnComplete from '../../../components/common/buttons/complete/BtnComplete'
import BtnSetCharacter from '../../../components/common/buttons/SetCharcater/BtnSetCharacter'
import BtnSetDiaryModal from '../../../components/common/buttons/SetDiaryModal/BtnSetDiaryModal'
import SetWritingStyle from '../../../components/SetWritingStyle/SetWritingStyle'

export default function MyPagePopUp(){
    const [isOpen, openModal, closeModal] = useModal();
    const [isClick, setIsClick] = useState(false);

    const navigate = useNavigate();
    const GoWiki=()=>{
        navigate('/mypage/characterwiki')
    }
    return(
        <S.MyPagePopUpWrapper>


            <S.TextWrapper>일기 작성 스타일</S.TextWrapper>
                {isClick === false ? 
                <S.MyPagePopUpBodyWrapper>
                    <BtnSetDiaryModal onClick={()=>{setIsClick(true)}}/>
                    <BtnSetCharacter onClick={()=>{GoWiki()}}/>
                    <BtnLogout/>
                </S.MyPagePopUpBodyWrapper>
                :
                <S.MyPagePopUpBodyWrapper>
                <SetWritingStyle/>
                <BtnComplete onClick={()=>{setIsClick(false)}}>선택 완료</BtnComplete>                
                </S.MyPagePopUpBodyWrapper>


                }

        </S.MyPagePopUpWrapper>
    )
}