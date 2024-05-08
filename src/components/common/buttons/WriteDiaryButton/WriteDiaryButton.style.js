import styled from "styled-components";
import svgWriteDiaryButton from "../../../../assets/svg/IcWriteDiaryButton"

export const WriteDiaryButtonIcon = styled(svgWriteDiaryButton)`
`
export const Wrapper = styled.div`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
`