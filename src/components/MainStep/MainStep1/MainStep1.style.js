import styled from 'styled-components';

export const MainStep1Wrapper = styled.div`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
    width: 100%;
    height: 100vh;
`
export const MainButtonWrapper = styled.div`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
    width: 100%
    height: 40rem;
    gap: 1.5rem;
`
export const MainStep1HoneyBearWrapper = styled.div`
    position: absolute;
    right: 0rem;
    top: 4.254rem;
`

