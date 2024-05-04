import styled from 'styled-components';

export const CalendarWrapper = styled.div`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
`
export const CalendarComponentWrapper = styled.div`
    position: absolute;
    top: 19.8rem;    
    display: flex;
    width: 32rem;
    height: 42.7rem;
    flex-shrink: 0;
    border-radius: 30px;
    background: rgba(255, 255, 255, 0.80);
    backdrop-filter: blur(15px);
    // margin-left: 5rem;
`