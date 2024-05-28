import styled from 'styled-components';

export const SharedViewPageWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter({})};
  background-color: ${({ theme }) => theme.colors.pink.white_pink};
  width: 100%;
  min-height: 100vh;
`
export const Header = styled.header`
  backgorund-color: ${({ theme }) => theme.colors.pink.background_pink};
  width: 100%;
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
  width: 32rem;
  border-radius: 3rem;
  background: rgba(255, 255, 255, 0.7);
  margin-top: 4rem;
  margin-bottom: 4rem;    
  padding-left: 2rem;
  white-space: pre-line;
`
export const HeaderText = styled.p`
  ${({ theme: { mixin } }) => mixin.flexCenter({})};
  ${({ theme }) => theme.fonts.caption_01};
`
export const DiaryImage = styled.img`
  ${({ theme: { mixin } }) => mixin.flexCenter({})};
  width: 32rem;
  height: 31.4rem;
  flex-shrink: 0;
  border-radius: 30px;
`