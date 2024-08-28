import styled from 'styled-components';

export const CalendarPageWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter({})};
  background: ${({ theme }) => theme.colors.gradient.gradient_pink};
  width: 100%;
  min-height: 100vh;
`;
export const ErrorText = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter({})};
  width: 32rem;
  height: 9.3rem;
  flex-shrink: 0;
  border-radius: 3rem;
  background: rgba(255, 255, 255, 0.27);
  -webkit-backdrop-filter: blur(1.5rem);
  -moz-backdrop-filter: blur(1.5rem);
  -o-backdrop-filter: blur(1.5rem);
  -ms-backdrop-filter: blur(1.5rem);
  backdrop-filter: blur(1.5rem);
  color: #575757;
  ${({ theme }) => theme.fonts.body_08}
`;