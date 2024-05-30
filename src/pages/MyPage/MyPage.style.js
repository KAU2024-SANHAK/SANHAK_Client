import styled from "styled-components";
import { IcHoneyBear } from "../../assets/svg";

export const MyPageWrapper=styled.div`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
    background: ${({ theme }) => theme.colors.gradient.gradient_pink};
    width: 100%;
    height: 100vh;
    justify-content: space-between;
`
export const TopWrapper = styled.div`
    width: 100%;
    height: 20rem;
`
export const HoneyBearWrapper = styled.div`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
    // width: 37.5rem;
    // height: 30rem;
    // position: absolute;
    // top: 7rem;
`
export const HoneyBear = styled(IcHoneyBear)`
    display: flex;
`
export const BackButtonWrapper = styled.div`
    ${({ theme: { mixin } }) => mixin.flexBox({})};
    width: 32rem;
    margin-top: 3.2rem;
`
export const PopUpWrapper = styled.div`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
    padding-bottom: 36rem;
`