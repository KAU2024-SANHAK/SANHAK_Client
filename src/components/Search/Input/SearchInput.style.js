import styled from 'styled-components';
export const InputWrappr = styled.div`
display:flex;
padding : 2.2rem;
width: 27.6rem;
height: 6rem;
border-radius: 20px; 
background-color: white; 
    opacity: 0.5; 

`;

export const Input = styled.input`
${({ theme }) => theme.fonts.body_02};
${({ theme }) => theme.colors.text_gray};
border: none;
outline: none;
`;
