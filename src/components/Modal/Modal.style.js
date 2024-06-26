import styled from 'styled-components'

export const Overlay = styled.div`
    background-color: rgba(0, 0, 0, 0.4);
    width: 100%;
    height: 100vh;
    z-index: 9999;
    position: fixed;
    bottom: 0;
    left: 0;
`
export const ModalWrapper = styled.div`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
    background-color: ${({ theme }) => theme.colors.normal.white};
    width: 36rem;
    height: 18.5rem;
    z-index: 9999;
    position: fixed;
    top: ${(props) =>props.$top };
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 1rem;
    justify-content: center;
    overflow: auto;
`
export const ErrorModalWrapper = styled.div`
    position: absolute;
    top: 0;
`
export const Content = styled.p`
    ${({ theme }) => theme.fonts.body_01};
    letter-spacing: -0.0408rem;
    margin-bottom: 2rem;
    margin-top: 4rem;
`
export const ButtonField = styled.div`
    display: flex;
    margin-bottom: 1.8rem;
`
