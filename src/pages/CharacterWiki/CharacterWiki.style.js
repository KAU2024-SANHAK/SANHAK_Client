import styled from "styled-components";

export const CharacterWikiPageWrapper=styled.div`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
    background-color: ${({ theme }) => theme.colors.pink.white_pink};
    width: 100%;
    height: 100vh;
`
export const WikiWrapper=styled.div`

` 
export const ButtonField=styled.div`
    position: absolute;
    top: 2rem;
    left: 2.8rem;
`