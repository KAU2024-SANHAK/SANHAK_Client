import styled from 'styled-components';

export const DiaryBoxWrapper = styled.div`
${({ theme: { mixin } }) => mixin.flexBox({align: 'center'})};
padding: 0.9rem;
background: rgba(255, 255, 255, 0.70);
border-radius: 30px;
width: 32rem;
height: 7.8rem;
gap:1.3rem;
`;

export const Img = styled.img`
width: 6rem;
height: 6rem;
background: gray;
border-radius: 20px;

`;

export const TextWrapper = styled.div`
${({ theme: { mixin } }) => mixin.flexBox({direction: 'column'})};
`;

export const DiaryContent = styled.p`
${({ theme }) => theme.fonts.body_01};

`;

export const Date = styled.p`
${({ theme }) => theme.fonts.body_10};
`;