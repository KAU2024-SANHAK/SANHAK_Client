
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

export const ModalBody = styled.div`
`
export const Content = styled.p`
    text-align: center;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 22px; /* 122.222% */
    letter-spacing: -0.408px;
    margin-bottom: 2rem;
    margin-top: 4rem;
    

`
export const ButtonField = styled.div`
    display: flex;
    margin-bottom: 1.8rem;
`