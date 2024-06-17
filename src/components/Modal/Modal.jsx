import * as S from './Modal.style';

export default function Modal({children, top}){
  return(
    <>
      <S.Overlay/>
      <S.ModalWrapper $top = {top}>
        {children}
      </S.ModalWrapper>
    </>
  );
}