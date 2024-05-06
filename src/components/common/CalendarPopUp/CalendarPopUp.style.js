import styled from "styled-components";

export const CalendarPopUpWrapper = styled.div`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
    width: 37.5rem;
    height: 25.5rem;
    background-color: white;    
`
export const Months = styled.div`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
    // ${({ theme }) => theme.fonts.body_08};

`
export const MonthsWrapper = styled.div`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
    width: 34.7rem;
    height: 6.5rem;

    .slick-slide {
        opacity: 0.5;
        background-color: pink;
        border-top: 1px solid #EEE;
        border-bottom: 1px solid #EEE;
        align-items: center;
        width: 26.7rem;
        ${({ theme }) => theme.fonts.body_08};
    }
    
    // .slick-active만 화면상에 나타나도록 하고
    // .slick-center = .slick-currnet가 중간에 오게 한다

    .slick-center {
        opacity: 1;
        border-radius: 25px;
        background: var(--Btn-Hover-Pink, #FFA8BC);
        width: 34.7rem;
        justify-content: center;
        align-itmes: center;
        ${({ theme }) => theme.fonts.title};
    }
`
export const TextWrapper = styled.p`
    
`