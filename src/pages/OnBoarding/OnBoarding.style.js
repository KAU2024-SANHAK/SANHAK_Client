import styled from "styled-components";

export const Wrapper = styled.div`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
    align-items: center;
    width: 100%;
    height: 100vh;
    background: linear-gradient(187deg, #D9ACB7 20.43%, #DCC6CC 100.45%, #999 100.45%);

`