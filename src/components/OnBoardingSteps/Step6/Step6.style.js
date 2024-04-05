import styled from "styled-components";

export const Wrapper = styled.div`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
    height: 40rem;
`

export const Footer = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: 5rem;
    left: 50%;
    transform: translateX(-50%);
    align-items: center;

`