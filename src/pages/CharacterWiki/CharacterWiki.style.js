import styled from 'styled-components';
import { IcHoneyBear } from '../../assets/svg';
import { IcBeeHoneyBear } from '../../assets/svg';
import { IcRichHoneyBear } from '../../assets/svg';
import { IcPrinceHoneyBear } from '../../assets/svg';
import { IcStudentHoneyBear } from '../../assets/svg';

export const CharacterWikiPageWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter({})};
  background-color: ${({ theme }) => theme.colors.pink.white_pink};
  width: 100%;
  height: 100vh;
  padding-top: 13rem;
`;
export const WikiWrapper = styled.div`
  position: relative;
  padding-bottom: 4rem;
`;
export const ButtonField = styled.div`
  position: absolute;
  top: 2rem;
  left: 2.8rem;
`;
export const CharacterNameWrapper = styled.p`
  ${({ theme }) => theme.fonts.body_01};
  padding-left: 4.2rem;
  padding-bottom: 1rem;
  letter-spacing: -0.0408rem;
`;
export const HoneyBear = styled(IcHoneyBear)``;

export const BeeHoneyBear = styled(IcBeeHoneyBear)``;

export const RichHoneyBear = styled(IcRichHoneyBear)``;

export const PrinceHoneyBear = styled(IcPrinceHoneyBear)``;

export const StudentHoneyBear = styled(IcStudentHoneyBear)``;
