import styled from 'styled-components';
import {
  IcHoneyBear,
  IcBeeHoneyBear,
  IcRichHoneyBear,
  IcPrinceHoneyBear,
  IcStudentHoneyBear,
} from '../../assets/svg';
import {
  IcHoneyBee,
  IcBearHoneyBee,
  IcRichHoneyBee,
  IcPrinceHoneyBee,
  IcStudentHoneyBee,
} from '../../assets/svg';
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

export const HoneyBee = styled(IcHoneyBee)``;

export const BearHoneyBee = styled(IcBearHoneyBee)``;

export const RichHoneyBee = styled(IcRichHoneyBee)``;

export const PrinceHoneyBee = styled(IcPrinceHoneyBee)``;

export const StudentHoneyBee = styled(IcStudentHoneyBee)``;
