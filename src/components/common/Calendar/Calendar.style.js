import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; 

export const CalendarComponentWrapper = styled.div`
    ${({ theme }) => theme.fonts.body_08};
    .react-datepicker {
        border: none;
        background-color: transparent;
    }
    .react-datepicker__month-container {
        width: 32rem;
        border-radius: 3rem;
        background: rgba(255, 255, 255, 0.7);
        backdrop-filter: blur(1.5rem);
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
        ${({ theme }) => theme.fonts.body_08};
        height: 4.5rem;
        width: 4rem;
        margin: 0.1rem 0.1rem 0.1rem 0.1rem;
        padding: 1rem 0 0 0;
        text-align: center;
    }
    .react-datepicker__day--highlighted {
        position: relative;
        background-color: transparent;
        color: black;
    }
    .react-datepicker__day--highlighted::after {
        content: '';
        position: absolute;
        width: 4rem;
        bottom: 0.4rem;
        left: 50%;
        transform: translateX(-50%);
        width: 0.8rem;
        height: 0.8rem;
        border-radius: 0.4rem;
        background-color: #FE693D;
    }
    .react-datepicker__day-names {
        padding: 0.9rem 0 0.9rem 0;
        margin: 0.9rem 0.9rem 0 0.9rem;
        border-top: 0.2rem solid white;
        border-bottom: 0.2rem solid white;
    }
    .react-datepicker__day-name {
        ${({ theme }) => theme.fonts.body_08};
        justify-content : center;
        width: 3.85rem;
        align-items : center;
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
    margin-top: 2.3rem;
    margin-bottom: 2.3rem;
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