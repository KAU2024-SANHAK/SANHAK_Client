import * as S from './Modal.style'
import BtnModalHome from "../common/buttons/Modal/BtnModalHome"
import BtnRed from '../common/buttons/BtnRed/BtnRed'
import Modal from "./Modal"
import {useNavigate} from 'react-router-dom'

export default function HomeModal(props){

    const navigate = useNavigate();
    const handleClickGoMain=()=>{
        navigate('/main')
    }

    const handleSetState=()=>{
        props.closeModal();
    }

    return(
        <Modal>
            <S.Content>
                홈으로 되돌아가시겠습니까?<br/>
                되돌아가면 감정과 글은 초기화됩니다.
            </S.Content>
            <S.ButtonField>
                <BtnModalHome onMain = {handleClickGoMain}/>
                <BtnRed onClick={handleSetState}height='5.6rem'>
                    이어서 기록하기
                </BtnRed>
            </S.ButtonField>
        </Modal>
    )
}