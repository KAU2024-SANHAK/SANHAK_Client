import styled from "styled-components";

export const Wrapper = styled.div`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
    align-items: center;
    width: 100%;
    height: 100vh;

`