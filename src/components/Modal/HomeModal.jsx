import * as S from './Modal.style'
import BtnModalHome from "../common/buttons/Modal/BtnModalHome"
import BtnModalKeep from '../common/buttons/Modal/BtnModalKeep'
import Modal from "./Modal"

export default function HomeModal(){
    return(
        <Modal>
            <S.Content>
                홈으로 되돌아가시겠습니까?<br/>
                되돌아가면 감정과 글은 초기화됩니다.
            </S.Content>
            <S.ButtonField>
                <BtnModalHome/>
                <BtnModalKeep/>
            </S.ButtonField>
        </Modal>
    )
}