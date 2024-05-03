import * as S from './Modal.style'
import {useNavigate} from 'react-router-dom'
import Modal from "./Modal"
import BtnSubmit from '../common/buttons/Submit/BtnSubmit'

export default function HomeModal({closeModal}){
    
    const navigate = useNavigate();
    const handleGoMain=()=>{
        navigate('/main')
    }

    const handleSetState=()=>{
        closeModal();
    }

    return(
        <Modal top = '50%'>
            <S.Content>
                홈으로 되돌아가시겠습니까?<br/>
                되돌아가면 감정과 글은 초기화됩니다.
            </S.Content>
            <S.ButtonField>
                <BtnSubmit onClick={handleGoMain} width='15rem' $color={({ theme }) => theme.colors.normal.white}>
                    홈으로 돌아가기
                </BtnSubmit>
                <BtnSubmit onClick={handleSetState} width='15rem' $color={({ theme }) => theme.colors.pink.red_pink}>
                    이어서 기록하기
                </BtnSubmit>
            </S.ButtonField>
        </Modal>
    )
}