import styled from 'styled-components';

export const Wrapper = styled.div`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
    background: linear-gradient(187deg, #FFBBCB 20.43%, #FFDAE3 81.25%, #DCC6CC 100.45%, #999 100.45%);
`
export const MainStepWrapper = styled.div`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
    position: fixed;
    top: 1rem;
    left: 15rem;
`
export const WriteDiaryButtonWrapper = styled.div`
    position: fixed;
    bottom: 0rem;
    right: 0rem;
`