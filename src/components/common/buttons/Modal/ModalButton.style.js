import styled from 'styled-components'
import SvgIcModalHome from '../../../../assets/svg/IcModalHome'
import SvgIcModalKeep from '../../../../assets/svg/IcModalKeep'

export const BtnWrapper = styled.button`
    background-color: transparent;
    border: none;
`

export const ModalHomeButton = styled(SvgIcModalHome)`
    display: flex;
`;

export const ModalKeepButton = styled(SvgIcModalKeep)`
    display: flex;
`;