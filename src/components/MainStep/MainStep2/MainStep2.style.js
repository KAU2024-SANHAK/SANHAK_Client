import styled from 'styled-components';

export const Main2Wrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexBox({ direction: 'column' })};
  width: 100%;
  min-height: 100vh;
  height: auto;
  max-height: fit-content;
`;
export const MainStep2Wrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter({})};
`;
export const MainStep2ComponentWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter({})};
  width: 32rem;
  margin: 19.8rem 0 10.9rem 0;
  gap: 0.8rem;
  z-index: 10;
`;
export const NoDiaryExist = styled.div`
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
