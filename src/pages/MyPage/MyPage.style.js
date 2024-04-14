import styled from "styled-components";
import { IcHoneyBear } from "../../assets/svg";

export const MyPageWrapper=styled.div`
    background: ${({ theme }) => theme.colors.gradient.gradient_pink};
    width: 100%;
    height: 100vh;
`
export const HoneyBearWrapper = styled.div`
    position: fixed;
    top: 6.8rem;
    right: 0.2rem;
    left: -0.4rem;
`
export const HoneyBear = styled(IcHoneyBear)`
    display: flex;
`
export const BackButtonWrapper = styled.div`
    position: absolute;
    top: 2rem;
    left: 2.8rem;
`