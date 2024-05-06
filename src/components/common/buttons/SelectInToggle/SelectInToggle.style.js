import styled from "styled-components";
import { IcCalendarToggle } from "../../../../assets/svg";

export const Wrapper = styled.div`
    ${({ theme: { mixin } }) => mixin.flexBox({})};
    justify-content: center;
    ${({ theme }) => theme.fonts.heading_01};
    width: 17.8rem;
    margin-left: 1rem;
`

export const CalendarToggle = styled(IcCalendarToggle)`
    
`
export const CalendarToggleWrapper = styled.div`
    margin-left: 0.7rem;
    margin-top: -0.3rem;
`