import styled from "styled-components";

export const SetWritingStyleModalWrapper=styled.div`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
    width: 36rem;
    height: 32rem;
    z-index: 9999;
    position: absolute;
    top: 63%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 1rem;
    background-color: transparent;
    overflow: auto;
`
export const SetStyleWrapper=styled.div`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
    background-color: ${({ theme }) => theme.colors.normal.white};
    width: 32rem;
    height: 20rem;
    border-radius: 2.5rem;
    padding-bottom: 6rem;
    margin-bottom: 3rem;

`
export const ButtonField=styled.div`
    padding-bottom: 2rem;
`