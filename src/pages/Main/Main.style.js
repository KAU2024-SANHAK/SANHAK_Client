import styled from 'styled-components';
import { IcHoneyBear } from '../../assets/svg';

export const WholeWrapper = styled.div`
`
export const Wrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter({})};
  background: linear-gradient(
    187deg,
    #ffbbcb 20.43%,
    #ffdae3 81.25%,
    #dcc6cc 100.45%,
    #999 100.45%
  );
`;
export const Honeybear = styled(IcHoneyBear)``;
export const MainStepWrapper = styled.div`
  position: fixed;
  left: 41.5%;
  top: 1rem;
`;
export const WriteDiaryButtonWrapper = styled.div`
  position: fixed;
  right: 0rem;;
  bottom: 0rem;
`;
export const MainStep1HoneyBearWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 4rem;
  left: 8.7rem;
`;
export const MainStep2HoneyBearWrapper = styled.div`
  position: fixed;
  height: 100vh;
  right: 9rem;
  top: 4rem;
`;
