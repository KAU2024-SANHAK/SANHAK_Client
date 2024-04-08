import styled from "styled-components";
import SvgIcBlank from "../../assets/svg/IcBlank";

export const Wrapper = styled.div`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
    width: 100%;
`
export const Body = styled.div`
    ${({ theme: { mixin } }) => mixin.flexBox({direction:'column', align: 'center' })};
    width: 100%;
`
export const Header = styled.div`
    ${({ theme: { mixin } }) => mixin.flexBox({justify:'center', align: 'center' })};
    width: 100%;
`

export const BlankImage =styled(SvgIcBlank)`
    margin-bottom: 3rem;
    margin-top: 3rem;
`