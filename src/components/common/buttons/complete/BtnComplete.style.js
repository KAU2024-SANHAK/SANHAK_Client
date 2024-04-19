import styled from 'styled-components'

export const ButtonWrapper = styled.button`
    ${({ theme }) => theme.fonts.title};
    background-color: ${({ theme }) => theme.colors.pink.dark_pink};
    width: 31.9rem;
    height: 5rem;
    flex-shrink: 0;
    margin: 1rem;
    border-radius: 2.5rem;
    border: none;
    letter-spacing: -0.0408rem;
`