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
  bottom: 2rem;
  padding: 0 2rem;
  justify-content: flex-end;
`;

export const QuestionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: space-between;
  width: 100%;
`;
export const InputPng = styled.div`
  background-image: url(${inputCloud});
  width: 33rem;
  height: 9.7rem;
`;
export const InputArea = styled.textarea`
  ${({ theme }) => theme.fonts.body_06};
  width: 27rem;
  height: 100%;
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
