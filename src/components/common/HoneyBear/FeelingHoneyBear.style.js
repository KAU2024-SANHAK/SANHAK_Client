import styled from "styled-components";
import { IcHappyHoneyBear, IcSadHoneyBear, IcWorriedHoneyBear, IcAngryHoneyBear, IcRelaxHoneyBear, IcSurprisedHoneyBear, IcNoneHoneyBear } from "../../../assets/svg";


export const Wrapper = styled.div`
  display: flex;
  width: ${(props) => props.width};
  padding-left: 0.6rem;
`

export const Happy = styled(IcHappyHoneyBear)``;
export const Sad = styled(IcSadHoneyBear)``;
export const Angry = styled(IcAngryHoneyBear)``;
export const Worried = styled(IcWorriedHoneyBear)``;
export const Relax = styled(IcRelaxHoneyBear)``;
export const Surprised = styled(IcSurprisedHoneyBear)``;
export const None = styled(IcNoneHoneyBear)``;