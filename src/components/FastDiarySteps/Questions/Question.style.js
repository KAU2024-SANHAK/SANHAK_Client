import styled from 'styled-components';
import smallSpeakCloud from '../../../assets/smallSpeakCloud.png';
import largeSpeakCloud from '../../../assets/largeSpeakCloud.png';

export const SmallQuestionPng = styled.div`
  background-image: url(${smallSpeakCloud});
  width: 34rem;
  height: 7.5rem;
`;

export const LargeQuestionPng = styled.div`
  background-image: url(${largeSpeakCloud});
  width: 34rem;
  height: 11.8rem;
`;
export const QuestionText = styled.p`
  ${({ theme: { mixin } }) => mixin.flexCenter({})};
  ${({ theme }) => theme.fonts.heading_03};
  width: 100%;
  padding-top: 2.7rem;
`;
