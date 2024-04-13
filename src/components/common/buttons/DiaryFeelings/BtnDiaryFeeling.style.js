import styled from 'styled-components'
import { IcDiaryFeeling } from "../../../../assets/svg"

//버튼 텍스트 정렬이 안됩니다....
export const DiaryFeelingButtonWrapper = styled.button`
    ${({ theme }) => theme.fonts.heading_01};
    width: 9.6rem;
    background-color: transparent;
    border: none;
    text-align: center;
`
export const DiaryFeelingButton = styled(IcDiaryFeeling)`
    display: flex;
`