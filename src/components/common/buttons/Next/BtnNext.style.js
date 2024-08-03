import styled from 'styled-components';
import { IcNextButton } from '../../../../assets/svg';

export const ButtonWrapper = styled.button`
  display: flex;
  background-color: transparent;
  border-radius: 5rem;
  box-shadow: -0.4rem 0.4rem 0.6rem  rgba(0, 0, 0, 0.3);
  padding: 0;
`;
export const NextButton = styled(IcNextButton)`
  display: flex;
`;