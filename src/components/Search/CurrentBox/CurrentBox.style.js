import styled from 'styled-components';

export const CurrentBoxListWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter({})};
  gap: 0.8rem; 
`;

export const CurrentBoxWrapper = styled.div`
${({ theme: { mixin } }) => mixin.flexBox({justify: 'space-between', align: 'center'})};
width: 32rem;
height: 5.5rem;
border-radius: 20px;
padding : 0 2.4rem;
background: rgba(255, 255, 255, 0.75);
`;

export const Text = styled.div`
color: black;
${({ theme }) => theme.fonts.body_01};
`;