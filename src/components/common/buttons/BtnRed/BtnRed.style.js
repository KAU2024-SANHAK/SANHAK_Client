import styled from 'styled-components'

export const Wrapper=styled.button`
    ${({ theme }) => theme.fonts.body_01};
    background-color: ${({ theme }) => theme.colors.pink.red_pink};
    width: 15rem;
    height: ${(props)=>(props.height)}
    flex-shrink: 0;
    border-radius: 3rem;
    border: none;
`