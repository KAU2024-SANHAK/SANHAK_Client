import styled from 'styled-components';

export const SearchingWrapper = styled.div`
${({ theme: { mixin } }) => mixin.flexBox({direction: 'column',align: 'center'})};
background: ${({ theme }) => theme.colors.gradient.gradient_pink};
width: 100%;
height: 100vh;
`;

export const Header = styled.div`
${({ theme: { mixin } }) => mixin.flexBox({justify: 'space-between'})};
width: 100%;
padding :3.9rem 1.6rem 1.6rem 2.8rem;
`;

export const BackBtn = styled.button`
color: black;
${({ theme }) => theme.fonts.body_02};
background: none;

`;