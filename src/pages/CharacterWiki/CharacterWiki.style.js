import styled from "styled-components";

export const CharacterWikiPageWrapper=styled.div`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
    background-color: ${({ theme }) => theme.colors.pink.white_pink};
    width: 100%;
    height: 100vh;
    padding-top: 10rem;
`
export const WikiWrapper=styled.div`
    position: relative;
    padding-bottom: 4rem;
` 
export const ButtonField=styled.div`
    position: absolute;
    top: 2rem;
    left: 2.8rem;
`
export const CharacterNameWrapper=styled.p`
    ${({ theme }) => theme.fonts.body_01};
    padding-left: 4.2rem;
    padding-bottom: 1rem;
    letter-spacing: -0.0408rem;

`