import * as S from './Modal.style'

export default function Modal({children}){

    return(
        <>
            <S.Overlay/>
            <S.ModalWrapper>
                    {children}
            </S.ModalWrapper>
        </>
    )
}