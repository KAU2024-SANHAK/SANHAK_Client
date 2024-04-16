import styled from 'styled-components';

export const MainStep2Wrapper = styled.div`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
    width: 100%;
    height: 100vh;
`
export const MainStep2HoneyBearWrapper = styled.div`
    position: absolute;
    left: 0rem;
    top: 3.929rem;
`
export const MainStep2ComponentWrapper = styled.div`
    ${({ theme: { mixin } }) => mixin.flexBox({direction:'column', justify: 'center'})};
    margin-top: 19.8rem;
    gap: 0.8rem;
`