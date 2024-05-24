import styled from 'styled-components';
import { IcHoneyBear } from '../../assets/svg';

export const FastDairyPageWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter({})};
  width: 100%;
  height: 100vh;
  background: ${(props) =>
    props.$isEven === 0
      ? ({ theme }) => theme.colors.gradient.gradient_pink
      : ({ theme }) => theme.colors.gradient.gradient_yellow};
`;
export const FastDiaryHeader = styled.div`
  ${({ theme: { mixin } }) => mixin.flexBox({ justify: 'flex-end' })}
  width: 100%;
  height: 100%;
  margin-top: 3.2rem;
`;
export const WritingForm = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter({})};
  width: 100%;
  height: 43.1rem;
  padding: 2.4rem;
  border-radius: 3rem;
  background: rgba(255, 255, 255, 0.5);
  -webkit-backdrop-filter: blur(1.5rem);
  -moz-backdrop-filter: blur(1.5rem);
  -o-backdrop-filter: blur(1.5rem);
  -ms-backdrop-filter: blur(1.5rem);
  backdrop-filter: blur(1.5rem);
`;
export const HomeButtonWrapper = styled.div`
  border: none;
  background: transparent;
  margin-left: 2rem;
  margin-bottom: 10rem;
`;
export const HoneyBearWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 12.1rem;
  right: 5.5rem;
`;
export const HoneyBear = styled(IcHoneyBear)``;
export const ProgressWrapper = styled.div`
  position: absolute;
  ${({ theme: { mixin } }) => mixin.flexBox({ align: 'flex-end' })};

  height: 100%;
  bottom: 0;
`;
