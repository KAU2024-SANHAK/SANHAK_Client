import styled from 'styled-components';
import { IcHoneyBear } from '../../assets/svg';

export const MainWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter({})};
  background: ${({ theme }) => theme.colors.gradient.gradient_pink};
`;
export const HoneyBear = styled(IcHoneyBear)``;
export const HoneyBearWrapper = styled.div`
  width: 32rem;
  position: absolute;
  top: 10rem;
`;