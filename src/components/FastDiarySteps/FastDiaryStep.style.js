import styled from 'styled-components'
import SmallQuestionBox from '../../assets/smallQuestionBox.svg'

export const StepWrapper = styled.div`
${({ theme: { mixin } }) => mixin.flexCenter({})};

`
export const QuestionWrapper = styled.div`
${({ theme: { mixin } }) => mixin.flexCenter({})};
background-image:url(${SmallQuestionBox});
display: flex;
width: 34rem;
height: 7.5rem;
margin-top: 2.4rem;
margin-bottom: 2rem;
`
export const ButtonField = styled.div`
${({ theme: { mixin } }) => mixin.flexCenter({})};
    width: 10rem;
    display: flex;
`

export const QustionText = styled.p`
    ${({ theme }) => theme.fonts.heading_03};

`