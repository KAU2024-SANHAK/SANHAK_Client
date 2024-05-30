import styled from 'styled-components';
import { IcHoneyBear } from '../../assets/svg';

export const FastDairyPageWrapper = styled.div`
  ${({ theme: { mixin } }) =>
    mixin.flexBox({ direction: 'column', justify: 'space-between', align: 'center' })};
  width: 100%;
  height: 100vh;
  background: ${(props) =>
    props.$isEven === 0
      ? ({ theme }) => theme.colors.gradient.gradient_pink
      : ({ theme }) => theme.colors.gradient.gradient_yellow};
`;
export const FastDiaryHeader = styled.div`
  ${({ theme: { mixin } }) => mixin.flexBox({ justify: 'space-between', align: 'center' })}
  width: 32rem;
  height: 25rem;
`;

export const WritingForm = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter({})};

  width: 100%;
  padding: 2.4rem 1.5rem 0 1.5rem;
  border-radius: 3rem;
  background: rgba(255, 255, 255, 0.5);
  -webkit-backdrop-filter: blur(1.5rem);
  -moz-backdrop-filter: blur(1.5rem);
  -o-backdrop-filter: blur(1.5rem);
  -ms-backdrop-filter: blur(1.5rem);
  backdrop-filter: blur(1.5rem);
  z-index: 999;
`;

export const WritingWrapper = styled.div`
  display: flex;
  bottom: 0;
  width: 100%;
  height: 44rem;
`;

export const HoneyBearWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexBox({justify:'start'})};
  width: 37.5rem;
  position: absolute;
  height: 30rem;
  top: 13rem;
`;
export const HoneyBear = styled(IcHoneyBear)``;

export const ProgressWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexBox({ align: 'flex-end' })};
  bottom: 0;
`;

export const HomeButtonWrapper = styled.div`
  padding-bottom: 12rem;
`
