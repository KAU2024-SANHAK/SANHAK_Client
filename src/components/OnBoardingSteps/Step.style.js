import styled from "styled-components";
import SvgIcBlank from "../../assets/svg/IcBlank";

export const Wrapper = styled.div`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
`
export const Body = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    hegiht: 21.25rem;
`
export const Footer = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: 7rem;
    left: 50%;
    transform: translateX(-50%);
    align-items: center;

`

export const BlankImage =styled(SvgIcBlank)`
    margin-bottom: 3rem;
    margin-top: 3rem;
`