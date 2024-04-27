import styled from "styled-components";

export const DiaryViewPopUpWrapper=styled.div`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
`
export const ReplyWrapper = styled.div`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
    position: absolute;
    height: 30rem;
    width: 32rem;
    background-color: white;
    z-index: 10;
    top: 11.3rem;
    border-radius: 30px;
`
export const ReplyTextWrapper = styled.p`
    ${({ theme }) => theme.fonts.body_08};
`
export const Spicy = styled.p`
    ${({ theme }) => theme.fonts.body_08};
    position: absolute;
    top: 8.9rem;
    left: 8.7rem;
`
export const Kind = styled.p`
    ${({ theme }) => theme.fonts.body_08};
    position: absolute;
    top: 8.9rem;
    left: 16.7rem;
`
export const SpicyTextWrapper = styled.div`
    // cursor: pointer;
    width: 10rem;
    height: 5rem;
    color: ${props => props.selected ? 'white' : 'black'}; // 선택 여부에 따라 색상 변경
`;

export const KindTextWrapper = styled.div`
    // cursor: pointer;
    width: 10rem;
    height: 5rem;
    color: ${props => props.selected ? 'white' : 'black'}; // 선택 여부에 따라 색상 변경
`;