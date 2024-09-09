import styled from 'styled-components';

export const SearchingWrapper = styled.div`
${({ theme: { mixin } }) => mixin.flexBox({direction: 'column',align: 'center'})};
background: ${({ theme }) => theme.colors.gradient.gradient_pink};
width: 100%;
height: 100vh;
gap: 1.6rem;
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

export const FeelingBtnList = styled.div`
${({ theme: { mixin } }) => mixin.flexBox({direction: 'column'})};

gap: 0.4rem;
width: 100%;
padding: 0 0 0 1.4rem ;
p{
    padding: 0 0 0 1.8rem ;
    ${({ theme }) => theme.fonts.body_10};
}

`;

export const CurrentBoxList = styled.div`
gap: 0.4rem;
width: 100%;
p{
    padding: 0 0 0 3.2rem ;
    ${({ theme }) => theme.fonts.body_10};
}
`;