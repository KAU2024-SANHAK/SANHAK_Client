import styled from "styled-components";
import svgMyPageButton from "../../../../assets/svg/IcMyPageButton";

export const MyPageButtonIcon = styled(svgMyPageButton)`
    display: flex;
`

export const Wrapper = styled.button`
background-color: transparent;
border: none;
position: absolute;
left: 3rem;
`

export const MyPageButtonText = styled.p`
    ${({ theme }) => theme.fonts.caption_01};
`