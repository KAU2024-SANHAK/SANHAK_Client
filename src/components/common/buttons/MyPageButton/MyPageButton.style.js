import styled from "styled-components";
import svgMyPage from "../../../../assets/svg/IcMyPageButton";

export const MyPageIcon = styled(svgMyPage)`
    display: flex;
`

export const Wrapper = styled.button`
width: 9.3rem;
height: 11.9rem;
flex-shrink: 0;
border-radius: 12px;
background: rgba(255, 255, 255, 0.27);
backdrop-filter: blur(7.5px);
`

export const MyPageText = styled.p`
    ${({ theme }) => theme.fonts.caption_01};
`