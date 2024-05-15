import styled from "styled-components";
import { IcHoneyBear } from "../../assets/svg";

export const MyPageWrapper=styled.div`
    background: ${({ theme }) => theme.colors.gradient.gradient_pink};
    width: 100%;
    height: 100vh;
`
export const HoneyBearWrapper = styled.div`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
    width: 37.5rem;
    position: absolute;
    top: 5rem;
`
export const HoneyBear = styled(IcHoneyBear)`
    display: flex;
`
export const BackButtonWrapper = styled.div`
    position: relative;
    top: 2rem;
    left: 2.8rem;
`
