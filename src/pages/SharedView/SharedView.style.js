import styled from 'styled-components';
import { IcXBtn } from '../../assets/svg';

export const SharedViewPageWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter({})};
  background-color: ${({ theme }) => theme.colors.pink.btn_pink};
  width: 100%;
  min-height: 100vh;
`
export const Header = styled.header`
  backgorund-color: ${({ theme }) => theme.colors.pink.background_pink};
  width: 100%;
`
export const HeaderText = styled.p`
  ${({ theme: { mixin } }) => mixin.flexCenter({})};
  ${({ theme }) => theme.fonts.caption_01};
  padding: 2rem 0 1rem 0;
`
export const ButtonField = styled.div`
  ${({ theme: { mixin } }) => mixin.flexBox({justify:'center'})};
  width: 100%;
  gap: 1rem;
  padding-bottom: 1rem;
`
export const IntroText = styled.p`
  ${({ theme }) => theme.fonts.heading_03};
  padding: 1rem 0 1rem 0;
` 
export const DiaryTitle = styled.p`
  ${({ theme: { mixin } }) => mixin.flexCenter({})};
  ${({ theme }) => theme.fonts.heading_03};
  width: 100%;
  padding: 1rem 0 1rem 0;
  background: linear-gradient(
    180deg, 
    #FFF 7.85%, 
    #FFF 16.84%, 
    rgba(255, 255, 255, 0.00) 107.85%
  );
  border-radius: 3rem 3rem 0 0; 
`
export const DiaryContent = styled.p`
  ${({ theme }) => theme.fonts.body_02};
  display: flex;
  width: 32rem;
  border-radius: 3rem;
  background: rgba(255, 255, 255, 0.7);
  margin-top: 2rem;
  margin-bottom: 4rem;   
  padding: 2rem 2rem 2rem 2rem;
  white-space: pre-line;
`

export const DiaryImage = styled.img`
  ${({ theme: { mixin } }) => mixin.flexCenter({})};
  width: 32rem;
  height: 31.4rem;
  flex-shrink: 0;
  border-radius: 30px;
`
export const PopUpWrapper = styled.div`
  position: fixed;
  bottom: 57.5rem;
  margin-right: 37.5rem;
`
export const CloseBtn = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter({})};
  width: 3rem;
  height: 3rem;
  border-radius: 1.5rem;
  background: white;
  position: absolute;
  top: 17rem;
  left: 31.6rem;
`
export const XBtn = styled(IcXBtn)``
export const infobtn = styled.button`
  ${({ theme }) => theme.fonts.body_01};
  background-color: white;
  color: black;
  border-radius: 3rem;
  flex-shrink: 0;
  height: 4rem;
  margin: 0 1.7rem 0 1.7rem;
`