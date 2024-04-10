import React from 'react'
import * as S from './Modal.style'

export default function Modal({children}){

    return(
        <>
            <S.Overlay/>
            <S.ModalWrapper>
                <S.ModalBody>
                    {children}
                </S.ModalBody>
            </S.ModalWrapper>
        </>
    )
}