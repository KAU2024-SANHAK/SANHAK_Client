import styled from 'styled-components';
import { IcFastCreateButton, IcFastWriteButton, IcSlowCreateButton, IcSlowWriteButton } from '../../../../assets/svg';

export const ButtonWrapper = styled.button`
  display: flex;
  background: transparent;
`;
export const SlowCreateButton = styled(IcSlowCreateButton)`
`;
export const FastCreateButton = styled(IcFastCreateButton)`
`;