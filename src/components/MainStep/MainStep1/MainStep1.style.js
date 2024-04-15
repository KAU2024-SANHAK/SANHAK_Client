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
export const CommonButton = styled.div`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
    width: 9.3rem;
    height: 11.9rem;
    flex-shrink: 0;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.27);
    backdrop-filter: blur(7.5px);
    border: none;
`

export const MainStep1HoneyBearWrapper = styled.div`
    position: absolute;
    right: 0rem;
    top: 4.254rem;
`

