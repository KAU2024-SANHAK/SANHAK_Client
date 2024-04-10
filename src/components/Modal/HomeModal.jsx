import * as S from './Modal.style'
import BtnModalHome from "../common/buttons/Modal/BtnModalHome"
import BtnModalKeep from '../common/buttons/Modal/BtnModalKeep'
import Modal from "./Modal"
import {useNavigate} from 'react-router-dom'

//여기 함수 부분들은 따로 빼지 않고 둬도 될까요?
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
                <BtnModalKeep closeModal = {handleSetState}/>
            </S.ButtonField>
        </Modal>
    )
}