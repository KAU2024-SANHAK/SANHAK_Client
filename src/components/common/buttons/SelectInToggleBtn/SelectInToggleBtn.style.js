import styled from "styled-components";
import { IcCalendarToggle } from "../../../../assets/svg";

export const Wrapper = styled.button`
    ${({ theme: { mixin } }) => mixin.flexBox({})};
    justify-content: center;
    ${({ theme }) => theme.fonts.heading_01};
    color: black;
    width: 17.8rem;
    margin-left: 1rem;
    background: transparent;
`

export const CalendarToggle = styled(IcCalendarToggle)`
    
`
export const CalendarToggleWrapper = styled.div`
    margin-left: 0.7rem;
    margin-top: -0.3rem;
`