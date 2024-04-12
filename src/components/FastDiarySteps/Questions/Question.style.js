import styled from 'styled-components'
import SmallQuestionBox from '../../../assets/smallQuestionBox.svg'
import LargeQuestionBox from '../../../assets/largeQuestionBox.svg'

export const SmallQuestionWrapper = styled.div`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
    background-image:url(${SmallQuestionBox});
    display: flex;
    width: 34rem;
    height: 7.5rem;
    margin-bottom: 2rem;
`
export const LargeQuestionWrapper = styled.div`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
    background-image:url(${LargeQuestionBox});
    display: flex;
    width: 34rem;
    height: 11.8rem;
    margin-bottom: 2rem;
`
export const QustionText = styled.p`
    ${({ theme }) => theme.fonts.heading_03};
    

`