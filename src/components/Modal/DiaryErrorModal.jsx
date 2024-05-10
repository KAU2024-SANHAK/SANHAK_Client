import * as S from './Modal.style'
import Modal from './Modal'
import BtnSubmit from '../common/buttons/Submit/BtnSubmit'

export default function DiaryErrorModal({closeModal, top, children}){
  return(
    <Modal top = {top}>
      <S.Content>
        {children}
      </S.Content>
      <S.ButtonField>
        <BtnSubmit 
          onClick = {() => { 
            closeModal();
          }}
          width = '27.2rem'
          height = '5.6rem' 
          $color = {({ theme }) => theme.colors.pink.red_pink}
        >
          돌아가기
        </BtnSubmit>
      </S.ButtonField>
    </Modal>
  )
}