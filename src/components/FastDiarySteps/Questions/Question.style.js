import styled from 'styled-components'
import SmallQuestionBox from '../../../assets/smallQuestionBox.svg'
import LargeQuestionBox from '../../../assets/largeQuestionBox.svg'

export const SmallQuestionWrapper = styled.div`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
    background-image:url(${SmallQuestionBox});
    display: flex;
    bottom: 32rem;
    width: 34rem;
    height: 7.5rem;
    margin-bottom: 1.3rem;
`
export const LargeQuestionWrapper = styled.div`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
    background-image:url(${LargeQuestionBox});
    display: flex;
    bottom: 28rem;
    width: 34rem;
    height: 11.8rem;
    margin-bottom: 1.3rem;
`
export const QustionText = styled.p`
    ${({ theme }) => theme.fonts.heading_03};
    

`