import styled from 'styled-components';

export const MainStep1Wrapper = styled.div`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
    width: 100%;
    height: 100vh;
`

export const MainButtonWrapper = styled.div`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
    width: 100%
    height: 40rem;
    gap: 1.5rem;
    left: 2.8rem;
    top: 29.2rem;
`
export const CommonButton = styled.div`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
    width: 9.3rem;
    height: 11.9rem;
    flex-shrink: 0;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.27);
    backdrop-filter: blur(7.5px);
    border: none;
`
export const ThisMonthEmotionComponent = styled.div`
    width: 210px;
    height: 182px;
    flex-shrink: 0;
    border-radius: 30px;
    border: none;
    background: var(--Warm-Pink, linear-gradient(180deg, rgba(255, 255, 255, 0.00) 50%, rgba(255, 255, 255, 0.39) 111.04%), #FFA2A2);
`

export const Button = styled.div`
    width: 9.3rem;
    height: 11.9rem;
    flex-shrink: 0;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.27);
    backdrop-filter: blur(7.5px);
    border: none;
`

export const MainStep1HoneyBearWrapper = styled.div`
    margin-left: 9rem;
    margin-top: -3.3rem;
`

