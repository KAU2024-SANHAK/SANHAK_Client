import styled from 'styled-components';

export const CarouselWrapper = styled.div`
  width: 100%;
  display: flex;
  overflow-x: scroll; /* 가로 스크롤을 활성화 */
  scroll-snap-type: x mandatory; /* 스크롤 스냅을 적용하여 자연스러운 캐러셀 */
  gap: 1.4rem;
  
  &::-webkit-scrollbar {
    display: none; /* 스크롤바 숨기기 */
  }
  
`;

export const FeelingBoxWrapper = styled.div`
${({ theme: { mixin } }) => mixin.flexBox({justify: 'center', align: 'center'})};
width: 15rem;
height: 9rem;
gap: 1.5rem;
padding:0 2rem;
background: rgba(255, 89, 89, 0.20); 
border: 2px solid white;
border-radius: 30px; 
${({ theme }) => theme.fonts.body_01};

`;

