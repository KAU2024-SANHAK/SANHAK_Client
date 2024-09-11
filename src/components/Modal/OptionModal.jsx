import * as S from './Modal.style'
import Modal from "./Modal"
import BtnSubmit from '../common/buttons/Submit/BtnSubmit'

export default function OptionModal({closeModal, children, handleOption, optionText, closeText}){

  return(
    <Modal top = '50%'>
      <S.Content>
        {children}
      </S.Content>
      
      <S.ButtonField>
        <BtnSubmit 
          onClick = {() => {
            handleOption();
          }} 
          width = '15rem'
          height = '5.6rem'
          $color={({ theme }) => theme.colors.normal.white}
        >
          {optionText}
        </BtnSubmit>
        <BtnSubmit 
          onClick = {() => {
            closeModal();
          }} 
          width = '15rem'
          height = '5.6rem'
          $color={({ theme }) => theme.colors.pink.red_pink}
        >
          {closeText}
        </BtnSubmit>
      </S.ButtonField>
    </Modal>
  )
}