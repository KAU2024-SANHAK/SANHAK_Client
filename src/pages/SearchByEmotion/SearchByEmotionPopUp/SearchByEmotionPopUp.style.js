import styled from "styled-components";

export const Wrapper=styled.div`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};

`
export const SearchByEmotionPopUpWrapper1=styled.div`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
    position: absolute;
    top: 9.6rem;
    left: 2.6rem;
    gap: 1.2rem;
`
export const SearchByEmotionPopUpWrapper2=styled.div`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
    position: absolute;
    top: 9.6rem;
    left: 19.4rem;
    gap: 1.2rem;
`
