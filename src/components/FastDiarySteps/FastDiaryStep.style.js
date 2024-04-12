import styled from 'styled-components'
import InputCloud from '../../assets/inputCloud.svg'

export const FastDiaryStepWrapper = styled.div`
${({ theme: { mixin } }) => mixin.flexCenter({})};

`
export const ButtonField = styled.div`
    ${({ theme: { mixin } }) => mixin.flexBox({justify:'flex-end'})};
    width: 100%;
    position: absolute;
    bottom: 3rem;
    width: 100%;
    margin-right: 2.4rem;
    
`
export const FastDiaryTextAreaWrapper = styled.div`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
    background-image: url(${InputCloud});
    width: 33rem;
    height: 10rem;
    margin-left: 1rem;
`
export const InputArea =styled.textarea`
    ${({ theme }) => theme.fonts.body_06};
    width: 27rem;
    height: 5rem;
    background-color: transparent;
    border: none;
    letter-spacing: -0.408px;

`