import styled from 'styled-components';
import { IcCross, IcDiaryFeeling, IcWriteDiaryButton } from '../../../../assets/svg';

export const ButtonWrapper = styled.button`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
    background: transparent;
`;
export const WriteDiaryButtonIcon = styled(IcWriteDiaryButton)`
`;
export const WriteButton = styled(IcDiaryFeeling)`
`;
export const CorssImg = styled(IcCross)`
`;