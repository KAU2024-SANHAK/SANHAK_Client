import styled from 'styled-components'

export const ButtonWrapper=styled.button`
    ${({ theme }) => theme.fonts.body_01};
    background-color: ${(props) => (props.$color)};
    width: ${(props)=>(props.width)};
    height: 5.6rem;
    flex-shrink: 0;
    border-radius: 3rem;
`