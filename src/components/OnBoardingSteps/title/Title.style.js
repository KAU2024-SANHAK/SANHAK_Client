import styled from "styled-components";

export const TitleWrapper = styled.p`
    ${({ theme }) => theme.fonts.title};
    width: 308px;
    letter-spacing: -0.408px;
`

export const SubTitleWrapper = styled.p`
    ${({ theme }) => theme.fonts.caption_01};
    width: 100%;
    padding-left: 3.4rem;
    margin-top: 0.4rem;
    letter-spacing: -0.408px;
`

export const CaptionWrapper = styled.p`
    width: 100%;
    margin-left: 2.2rem;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px; /* 133.333% */
    letter-spacing: -0.408px;
`