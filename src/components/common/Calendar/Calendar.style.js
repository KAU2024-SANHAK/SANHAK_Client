import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; 

export const CalendarComponentWrapper = styled.div`
    .react-datepicker {
        border: none;
        background-color: transparent;
    }
    .react-datepicker__month-container {
        width: 32rem;
        border-radius: 3rem;
        background: rgba(255, 255, 255, 0.8);
        backdrop-filter: blur(7.5rem);
        border: none;
    }
    .react-datepicker__header {
        background: transparent;
        border-radius: 3rem;
        border: none;
    }
    .react-datepicker__month {
        height: auto;
        margin-bottom: 2.1rem;
    }
    .react-datepicker__week {

    }
    .react-datepicker__day {
        padding: 1.2rem 2.5rem 1.2rem 1.2rem;
        ${({ theme }) => theme.fonts.body_08};
    }
    .react-datepicker__day-names {
        padding: 0.9rem;
        margin: 0.9rem 0.9rem 0 0.9rem;
        justify-content: center;
        border-top: 0.2rem solid white;
        border-bottom: 0.2rem solid white;
    }
    .react-datepicker__day-name {
        padding: 0 2.5rem 0 1.2rem;
        ${({ theme }) => theme.fonts.body_08};
        justify-content: center;
    }
    .react-datepicker__day--weekend {
        color: red;
    }
    .react-datepicker__day--selected {
        background: #FE693D;
        border-radius: 2rem;
        height: 4rem;
        color: white;
    }
    .react-datepicker__day--keyboard-selected {
        background: transparent;
    }
    .react-datepicker__day--disabled {
        color: lightgrey;
    }
    .react-datepicker__day--outside-month {
        opacity: 0.35;
`;
export const HeaderWrapper = styled.div`
    ${({ theme: { mixin } }) => mixin.flexBox({})};
    margin-top: 3rem;
    margin-bottom: 3rem;
`
export const CustomDatePicker = styled(DatePicker)`
`
export const BtnLeftWrapper = styled.div`
    ${({ theme: { mixin } }) => mixin.flexBox({})};
    margin-left: 2.2rem;
    margin-right: 4rem;
`
export const BtnRightWrapper = styled.div`
    ${({ theme: { mixin } }) => mixin.flexBox({})};
    margin-right: 2.2rem;
    margin-left: 4rem;
`
export const YearSelector = styled.select`
    ${({ theme: { mixin } }) => mixin.flexBox({})};
    margin-left: 7rem;
    background-color: transparent;
    border: none;
    ${({ theme }) => theme.fonts.heading_01};

`
export const YearOption = styled.option`
`
export const MonthSelector = styled.select`
    ${({ theme: { mixin } }) => mixin.flexBox({})};
    background-color: transparent;
    border: none;
    ${({ theme }) => theme.fonts.heading_01};

`
export const MonthOption = styled.option`
`