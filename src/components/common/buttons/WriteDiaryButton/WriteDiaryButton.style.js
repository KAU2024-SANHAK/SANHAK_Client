import styled from "styled-components";
import svgWriteDiaryButton from "../../../../assets/svg/IcWriteDiaryButton"

export const WriteDiaryButtonIcon = styled(svgWriteDiaryButton)`
    display: flex;
`
export const Wrapper = styled.div`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
    position: absolute;
    right: 0.4rem;
    bottom: 0rem;
`