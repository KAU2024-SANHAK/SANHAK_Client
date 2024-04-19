import styled from 'styled-components'

export const ButtonWrapper=styled.button`
    ${({ theme }) => theme.fonts.body_01};
    background-color: ${(props) => (props.$color)};
    width: 15rem;
    height: ${(props)=>(props.height)};
    flex-shrink: 0;
    border-radius: 3rem;
    border: none;
`