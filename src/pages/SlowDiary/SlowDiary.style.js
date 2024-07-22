import styled from 'styled-components';

export const SlowDiaryPageWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter({})};
  width: 100%;
  min-height: 100vh;
  background: ${(props) => (props.$isEven === 0 ? ({ theme }) => theme.colors.gradient.gradient_pink
  :({ theme }) => theme.colors.gradient.gradient_yellow
  )};
`;
export const SlowDiaryHeader = styled.div`
  width: 32rem;
  height: 16rem;
  padding-top: 4rem;
`;
export const Caption =styled.p`
  ${({ theme }) => theme.fonts.body_10};
  color: ${({ theme }) => theme.colors.gray.text_gray};
  
  margin-bottom: 0.5rem;
  margin-left: 7.6rem;
`;
