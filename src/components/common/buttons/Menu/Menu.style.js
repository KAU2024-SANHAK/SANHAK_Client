import styled from 'styled-components';
import { IcMenu } from '../../../../assets/svg';

export const ButtonWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexBox({ justify: 'end' })};
  display: flex;
  background-color: transparent;
  margin: 0 1.2rem 0 1.2rem;
`;
export const MenuBtn = styled(IcMenu)`
  display: flex;
`;
export const MenuWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter({})};
  height: 8.5rem;
  width: 15rem;
  background-color: white;
  border-radius: 3rem;
  position: absolute;
  top: 10rem;
`;
export const EditBtn = styled.button`
  ${({ theme }) => theme.fonts.body_08};
  ${({ theme: { mixin } }) => mixin.flexCenter({})};
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  background-color: transparent;
  color: black;
  width: 100%;
`;
export const DeleteBtn = styled.button`
  ${({ theme }) => theme.fonts.body_08};
  ${({ theme: { mixin } }) => mixin.flexCenter({})};
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  background-color: transparent;
  color: black;
  width: 100%;
`;
export const ButtonField = styled.div`
  width: 37.5rem;
`;
