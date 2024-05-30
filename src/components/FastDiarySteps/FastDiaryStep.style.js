import styled from 'styled-components';
import inputCloud from '../../assets/InputCloud.png';

export const FastDiaryStepWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexBox({ direction: 'column', align: 'center' })};
  width: 100%;
  height: 36.5rem;
`;
export const ButtonField = styled.div`
${({ theme: { mixin } }) => mixin.flexBox({ justify: 'space-between', align: 'center' })};
  width: 37.5rem;
  position: absolute;
  bottom: 0.5rem;
  padding: 0 2.5rem 0 2.5rem;
`;

export const QuestionWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter({})};

  width: 100%;
  gap: 1.6rem;
`;
export const InputPng = styled.div`
  background-image: url(${inputCloud});
  width: 33rem;
  height: 9.7rem;
  padding: 3.6rem 2.1rem;
  margin-left: 1rem;
`;
export const InputArea = styled.textarea`
  ${({ theme: { mixin } }) => mixin.flexCenter({})};
  ${({ theme }) => theme.fonts.body_06};
  width: 100%;
  background-color: transparent;
  border: none;
  margin-left: 1rem;
  letter-spacing: -0.0408rem;
`;
export const FastDiaryContentWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter({})};
  display: flex;
  height: 39.8rem;
  padding-bottom: 4rem;
`;
