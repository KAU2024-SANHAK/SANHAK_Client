import styled from 'styled-components'
import InputCloud from '../../assets/InputCloud.svg'

export const FastDiaryStepWrapper = styled.div`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};

`
export const ButtonField = styled.div`
    display: flex;
    width: 100%;
    position: absolute;
    bottom: 2rem;
    right: 2rem;
    justify-content: flex-end;
    
`
export const FastDiaryTextAreaWrapper = styled.div`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
    background-image: url(${InputCloud});
    width: 33rem;
    height: 9.7rem;
    margin-left: 1rem;
    margin-bottom: 17rem;
`
export const InputArea =styled.textarea`
    ${({ theme }) => theme.fonts.body_06};
    width: 27rem;
    height: 5rem;
    background-color: transparent;
    border: none;
    letter-spacing: -0.408px;

`
export const FastDiaryContentWrapper = styled.div`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
    display: flex;
    height: 39.8rem;
    padding-bottom: 4rem;
`
