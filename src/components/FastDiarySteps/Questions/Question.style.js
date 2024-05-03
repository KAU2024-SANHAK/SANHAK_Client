import styled from 'styled-components'
import smallSpeakCloud from '../../../assets/smallSpeakCloud.png'
import largeSpeakCloud from '../../../assets/largeSpeakCloud.png'

export const SmallQuestionWrapper = styled.div`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
    background-image:url(${smallSpeakCloud});
    display: flex;
    bottom: 32rem;
    width: 34rem;
    height: 7.5rem;
    margin-bottom: 1.3rem;
`
export const LargeQuestionWrapper = styled.div`
    ${({ theme: { mixin } }) => mixin.flexCenter({})};
    background-image:url(${largeSpeakCloud});
    display: flex;
    bottom: 28rem;
    width: 34rem;
    height: 11.8rem;
    margin-bottom: 1.3rem;
`
export const QustionText = styled.p`
    ${({ theme }) => theme.fonts.heading_03};
`
