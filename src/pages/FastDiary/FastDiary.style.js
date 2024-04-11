import styled from 'styled-components'
import { HomeButton } from '../../components/common/buttons/Home/BtnHome.style'

export const FastDairyPageWrapper = styled.div`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
    width: 100%;
    height: 100vh;
    background: ${(props) => (props.$isEven === 0 ? 'linear-gradient(187deg, #FFBBCB 20.43%, #FFDAE3 81.25%, #DCC6CC 100.45%, #999 100.45%)'
    : 'linear-gradient(187deg, #FFE768 20.43%, #FFF3B7 84.05%)'
    )};
`
export const FastDiaryHeader = styled.div`
    ${({ theme: { mixin } }) => mixin.flexBox({justify: 'space-between',align: 'center' })};
    width: 100%;
    margin-top: 3rem;

`
export const WritingForm = styled.form`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
    margin-top: 1rem;
    width: 100%;
    height: 43.1rem;
    border-radius: 3rem;
    background: rgba(255, 255, 255, 0.50);
    backdrop-filter: blur(15px);
`
export const HomeButtonWrapper = styled.button`
    border: none;
    background: transparent;
    margin-left: 2rem;
    margin-bottom: 10rem;
`