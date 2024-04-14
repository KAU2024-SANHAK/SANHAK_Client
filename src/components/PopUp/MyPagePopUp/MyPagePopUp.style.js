import styled from "styled-components";

export const MyPagePopUpWrapper=styled.div`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
`
export const DiaryTypeWrapper=styled.div`

`
export const TextWrapper = styled.p`
    ${({ theme }) => theme.fonts.heading_03};
    position: relative;
    padding-left: 3.3rem;
    padding-bottom: 0.4rem;

    color: ${({ theme }) => theme.colors.normal.black};    
    letter-spacing: -0.0408rem;
`