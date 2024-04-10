import * as S from './ModalButton.style'

export default function BtnModalHome(props){
    return(
        <S.BtnWrapper onClick={()=>{props.onMain()}}>
            <S.ModalHomeButton/>
        </S.BtnWrapper>
    )
}