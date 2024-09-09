import styled from 'styled-components';

export const SearchingWrapper = styled.div`
${({ theme: { mixin } }) => mixin.flexCenter({})};
background: ${({ theme }) => theme.colors.gradient.gradient_pink};
width: 100%;
height: 100vh;
`;