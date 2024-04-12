import styled from 'styled-components'
import { IcHoneyBear } from '../../assets/svg'

export const FastDairyPageWrapper = styled.div`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
    width: 100%;
    height: 100vh;
    background: ${(props) => (props.$isEven === 0 ? ({ theme }) => theme.colors.gradient.gradient_pink
    : ({ theme }) => theme.colors.gradient.gradient_yellow
    )};
`
export const FastDiaryHeader = styled.div`
    ${({ theme: { mixin } }) => mixin.flexBox({justify: 'space-between',align: 'center' })};
    width: 100%;
    margin-top: 3rem;

`
export const WritingForm = styled.form`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
    margin-top: 2rem;
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
export const HoneyBearWrapper=styled.div`
    position: fixed;
    top: 14rem;
    left: -13rem;
`
export const HoneyBear = styled(IcHoneyBear)`
    position: fixed;
`
export const ProgressWrapper = styled.div`
    position: absolute;
    bottom: 0;
`
export const BtnWrapper = styled.button`
    background-color: transparent;
    border: none;
    position: absolute;
    right: 2rem;
`