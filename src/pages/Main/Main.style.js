import styled from 'styled-components';
import { IcHoneyBear } from '../../assets/svg';

export const MainWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter({})};
  background: ${({ theme }) => theme.colors.gradient.gradient_pink};
  height: 100vh;
  padding-bottom: 2rem;
`;
export const HoneyBear = styled(IcHoneyBear)``;
export const HoneyBearWrapper = styled.div`
  width: 35rem;
  position: absolute;
  top: 10rem;
`;
export const MainButtonWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexBox({ direction: 'column', justify: 'space-between', align: 'center' })};
  width: 21rem;
  gap: 1.5rem;
  z-index: 10;
  margin-top: 29rem;
`;
export const MonthlyBox = styled.div`
  ${({ theme: { mixin } }) => mixin.flexBox({ 'direction': 'row', 'justify': 'space-between' })};
  width: 32rem;
  height: 80%;
`