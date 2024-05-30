import styled from 'styled-components';
import inputCloud from '../../assets/InputCloud.png';

export const FastDiaryStepWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexBox({ direction: 'column', align: 'center' })};
  width: 100%;
  height: 100%;
`;
export const ButtonField = styled.div`
  display: flex;
  width: 100%;
  position: absolute;
  bottom: 0.5rem;
  padding: 0 2rem;
  justify-content: flex-end;
  align-items: center;
  margin-top: 10.8rem;
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
