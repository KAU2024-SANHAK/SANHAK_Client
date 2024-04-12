import styled from "styled-components";

export const OnBoardingPageWrapper = styled.div`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
    align-items: center;
    width: 100%;
    height: 100vh;
    background: linear-gradient(187deg, #FFBBCB 20.43%, #FFDAE3 81.25%, #DCC6CC 100.45%, #999 100.45%);
`