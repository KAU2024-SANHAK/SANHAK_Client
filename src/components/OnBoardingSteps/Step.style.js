import styled from "styled-components";
import SvgIcBlank from "../../assets/svg/IcBlank";

export const Wrapper = styled.div`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
`
export const Body = styled.div`
    ${({ theme: { mixin } }) => mixin.flexBox({direction:'column', align: 'center' })};
    width: 100%;
`
export const Footer = styled.div`
    ${({ theme: { mixin } }) => mixin.flexBox({direction:'column', align: 'center' })};
    position: absolute;
    bottom: 7rem;
    left: 50%;
    transform: translateX(-50%);

`

export const BlankImage =styled(SvgIcBlank)`
    margin-bottom: 3rem;
    margin-top: 3rem;
`