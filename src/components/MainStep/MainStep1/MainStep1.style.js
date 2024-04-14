import styled from 'styled-components';

export const Wrapper = styled.div`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
    width: 100%;
    height: 100%;
`
export const MainStep1HoneyBearWrapper = styled.div`
    margin-left: 27rem;
    height: 57%;
`