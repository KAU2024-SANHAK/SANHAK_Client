import * as S from './Modal.style'
import Modal from './Modal'
import BtnSubmit from '../common/buttons/Submit/BtnSubmit'

export default function DiaryErrorModal({closeModal}){
    return(
        <Modal top = 'none'>
            <S.Content>
                모든 질문에 답변해주세요.<br/>
                답변을 토대로 AI일기가 생성됩니다.
            </S.Content>
            <S.ButtonField>
                <BtnSubmit onClick={()=>{closeModal()}}width='27.2rem' $color={({ theme }) => theme.colors.pink.red_pink}>
                    돌아가기
                </BtnSubmit>
            </S.ButtonField>
        </Modal>
    )
}