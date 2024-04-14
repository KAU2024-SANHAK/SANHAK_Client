import styled from "styled-components";
import svgMyPageButton from "../../../../assets/svg/IcMyPageButton";

export const MyPageButtonIcon = styled(svgMyPageButton)`
    display: flex;
`

export const Wrapper = styled.div`
background-color: transparent;
border: none;
position: absolute;
left: 2.8rem;
top: 15.7rem;
`

export const MyPageButtonText = styled.p`
    ${({ theme }) => theme.fonts.caption_01};
`