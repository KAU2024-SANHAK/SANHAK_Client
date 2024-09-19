import styled from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => theme.colors.gradient.this_month_emotion_gradient};
  z-index: 10;
  width: 16.3rem;
  height: 18rem;
  border-radius: 30px;
`;
export const Bubble = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter({})};
  ${({ theme }) => theme.fonts.body_01};
  background-color: ${({ theme }) => theme.colors.normal.white};
  position: absolute;
  width: 13.2rem;
  height: 5rem;
  margin-left: 1.6rem;
  margin-top: 5rem;
  border-radius: 3rem;
  text-align: center;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;
export const BubbleText = styled.span`
  ${({ theme: { mixin } }) => mixin.flexCenter({})};
  ${({ theme }) => theme.fonts.body_08};
  font-weight: 600;
  margin-top: 1.6rem;
`
export const PlayList = styled.p`
  ${({ theme }) => theme.fonts.caption_01};
  margin-left: 3.9rem;
  margin-top: 0.8rem;
  cursor: pointer;
`;
export const HoneyBearWrapper = styled.div`
  width: 10rem;
  height: 0.1rem;
  display: flex;
  position: relative;
  margin-left: 5rem;
  bottom: 11rem;
`;