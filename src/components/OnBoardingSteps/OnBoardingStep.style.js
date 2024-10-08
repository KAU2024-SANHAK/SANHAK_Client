import styled from 'styled-components';

export const OnBoardingStepWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter({})};
  width: 100%;
  height: 100vh;
`;
export const OnBoardingBody = styled.div`
  ${({ theme: { mixin } }) => mixin.flexBox({ direction: 'column', align: 'center' })};
  width: 32rem;
  text-align: left;
  height: 64%;
  padding-top: 6.5rem;
`;
export const OnBoardingFooter = styled.footer`
  ${({ theme: { mixin } }) => mixin.flexCenter({})};
  width: 32rem;
  position: fixed;
  bottom: 1rem;
  margin-top: 10rem;
`;
export const OnBoardingTitleWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter({})};
  position: absolute;
  top: 6.5rem;
  width: 100%;
`;
export const OnBoardingImgWrapper = styled.div`
  position: fixed;
  bottom: 0rem;
`;
export const OnBoardingImg = styled.img``;
export const OnBoardingHoneyBearWrapper = styled.div`
  margin-left: 1rem;
  height: 57%;
`;
export const ButtonField = styled.div`
  ${({ theme: { mixin } }) => mixin.flexBox({ justify: 'flex-end' })};  
  display: flex;
  position: absolute;
  width: 35rem;
  bottom: 2rem;
`;