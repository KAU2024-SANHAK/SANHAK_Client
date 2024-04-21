import * as S from './Modal.style'
import Modal from './Modal'
import BtnSubmit from '../common/buttons/Submit/BtnSubmit'

export default function DiaryErrorModal(){
    return(
        <Modal>
            <S.Content>
                모든 질문에 답변해주세요.<br/>
                답변을 토대로 AI일기가 생성됩니다.
            </S.Content>
            <S.ButtonField>
                <BtnSubmit height='5.6rem' $color={({ theme }) => theme.colors.pink.red_pink}>
                    돌아가기
                </BtnSubmit>
            </S.ButtonField>
        </Modal>
    )
}