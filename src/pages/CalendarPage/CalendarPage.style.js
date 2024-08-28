import styled from 'styled-components';

export const CalendarPageWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter({})};
  background: ${({ theme }) => theme.colors.gradient.gradient_pink};
  width: 100%;
  min-height: 100vh;
  height: auto;
  max-height: fit-content;
`;
export const ErrorBox = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter({})};
  ${({ theme }) => theme.fonts.body_08};
  width: 32rem;
  height: 9.3rem;
  flex-shrink: 0;
  border-radius: 3rem;
  background: rgba(255, 255, 255, 0.27);
`;
export const CalendarWrapper = styled.div`
  margin: 10rem 0 2rem 0;
`;