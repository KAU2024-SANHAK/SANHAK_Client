import styled from 'styled-components'

export const StepWrapper = styled.div`
${({ theme: { mixin } }) => mixin.flexCenter({})};

`
export const QuestionWrapper = styled.div`
    display: flex;
    margin-top: 2.4rem;
`
export const ButtonField = styled.div`
    display: flex;
`