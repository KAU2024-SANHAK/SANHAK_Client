import styled from "styled-components";
import svgWriteDiaryButton from "../../../../assets/svg/IcWriteDiaryButton"

export const WriteDiaryButtonIcon = styled(svgWriteDiaryButton)`
`
export const ButtonWrapper = styled.button`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
    background: transparent;
`