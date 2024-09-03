import styled from 'styled-components';
import { IcHoneyBear } from '../../assets/svg';

export const MainWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter({})};
  background: ${({ theme }) => theme.colors.gradient.gradient_pink};
  height: 100vh;
  gap: 2rem;
  padding-bottom: 2rem;
`;
export const HoneyBear = styled(IcHoneyBear)``;
export const HoneyBearWrapper = styled.div`
  width: 32rem;
  position: absolute;
  top: 10rem;
`;
export const MainButtonWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexBox({ direction: 'column', justify: 'space-between' })};
  width: 21rem;
  margin-top: 8.7rem;
  margin-right: 11rem;
  gap: 1.5rem;
`;