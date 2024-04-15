import styled from 'styled-components'

export const Wrapper = styled.button`
    ${({ theme }) => theme.fonts.title};
    background-color: ${({ theme }) => theme.colors.pink.dark_pink};
    width: 31.9rem;
    height: 5rem;
    flex-shrink: 0;
    margin: 1rem;
    border-radius: 25px;
    border: none;
    letter-spacing: -0.0408rem;
`