import styled from "styled-components"

export const Wrapper = styled.div`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
`
export const MainBody = styled.div`
    ${({ theme: { mixin } }) => mixin.flexBox({direction:'column', align: 'center' })};
    width: 100%;
`
export const MainFooter = styled.div`
    ${({ theme: { mixin } }) => mixin.flexBox({direction:'column', align: 'center' })};
    position: absolute;
    bottom: 7rem;
    left: 50%;
    transform: translateX(-50%);

`