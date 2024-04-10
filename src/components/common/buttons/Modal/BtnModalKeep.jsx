import * as S from './ModalButton.style'

export default function BtnModalKeep(props){
    return(
        <S.BtnWrapper onClick={()=>{props.closeModal()}}>
            <S.ModalKeepButton/>
        </S.BtnWrapper>
    )
}