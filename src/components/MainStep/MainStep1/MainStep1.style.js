import styled from 'styled-components';

export const MainStep1Wrapper = styled.div`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
    width: 100%;
    height: 100vh;
`
export const MainButtonWrapper = styled.div`
    ${({ theme: { mixin } }) => mixin.flexBox({direction:'column'})};
    margin-top: 8.7rem;
    margin-right: 11rem;
    gap: 1.5rem;
`
export const MainStep1HoneyBearWrapper = styled.div`
    position: absolute;
    top: 4rem;
    left: 8.7rem;
`