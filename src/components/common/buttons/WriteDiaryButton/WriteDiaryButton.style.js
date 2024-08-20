import styled from 'styled-components';
import { IcCreateButton } from '../../../../assets/svg';

export const ButtonWrapper = styled.button`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
    background: transparent;
`;
export const CreateButton = styled(IcCreateButton)`
`;