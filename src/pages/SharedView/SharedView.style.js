import styled from 'styled-components';

export const SharedViewPageWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter({})};
  background-color: ${({ theme }) => theme.colors.pink.white_pink};
  width: 100%;
  min-height: 100vh;
`
export const IntroText = styled.p`
  ${({ theme }) => theme.fonts.heading_03};
` 
export const DiaryTitle = styled.p`
  ${({ theme: { mixin } }) => mixin.flexCenter({})};
  ${({ theme }) => theme.fonts.heading_03};
  padding: 0.2rem 0.2rem 0 0.2rem;
`
export const DiaryContent = styled.p`
  ${({ theme }) => theme.fonts.body_02};
  display: flex;
  width: 27rem;
  margin-left: 2.5rem;
  margin-top: 4rem;
  margin-bottom: 4rem;    
  white-space: pre-line;
`
export const DiaryImage = styled.img`
  ${({ theme: { mixin } }) => mixin.flexCenter({})};
  width: 32rem;
  height: 31.4rem;
  flex-shrink: 0;
  border-radius: 30px;
`