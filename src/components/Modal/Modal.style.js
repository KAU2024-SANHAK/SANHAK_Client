
import styled from 'styled-components'

export const Overlay = styled.div`
    background-color: rgba(0, 0, 0, 0.4);
    width: 100%;
    height: 100vh;
    z-index: 9999;
    position: fixed;
    top: 0;
    left: 0;
`

export const ModalWrapper = styled.div`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
    width: 360px;
    height: 185px;
    z-index: 9999;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 10px;
    background-color: white;
    justify-content: center;
    overflow: auto;
`

export const Content = styled.p`
    text-align: center;
`