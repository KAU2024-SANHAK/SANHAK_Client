import styled from 'styled-components'
import {IcQuestionBox} from '../../assets/svg'

export const StepWrapper = styled.div`
${({ theme: { mixin } }) => mixin.flexCenter({})};

`
export const QuestionWrapper = styled.div`
    display: flex;
    margin-top: 2.4rem;
`
export const ButtonField = styled.div`
${({ theme: { mixin } }) => mixin.flexCenter({})};
    width: 10rem;
    display: flex;
`
export const QuestionBox = styled(IcQuestionBox)`
`