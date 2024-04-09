import styled from "styled-components";
import SvgIcBlank from "../../assets/svg/IcBlank";

export const Wrapper = styled.div`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
    width: 100%;
    height: 100%;
`
export const Header = styled.div`
    ${({ theme: { mixin } }) => mixin.flexBox({justify:'center',align: 'center' })};
    position: absolute;
    top: 5rem;
    width: 100%;
`

export const Body = styled.div`
    ${({ theme: { mixin } }) => mixin.flexBox({direction:'column', align: 'center' })};
    width: 100%;
    text-align: left;
    height: 60%;
`

export const Footer = styled.div`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
    position: absolute;
    bottom: 1rem;
`

export const BlankImage =styled(SvgIcBlank)`
    margin-bottom: 3rem;
    margin-top: 3rem;
`
export const BtnWrapper = styled.button`
    background-color: transparent;
    border: none;
    position: absolute;
    right: 2rem;
`
