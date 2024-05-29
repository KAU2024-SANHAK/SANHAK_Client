import styled from 'styled-components';

export const FeelingHiveWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexBox({ justify: 'space-between', align: 'center' })};
  width: 26rem;
  margin-bottom: 10rem;
  margin-right: 4rem;
`;
export const FirstLayer = styled.div`
  width: 7rem;
  height: 10rem;
  margin: auto;
`;
export const SecondLayer = styled.div`
  width: 7rem;
  height: 18.3rem;
  margin: auto;
`;
export const ThirdLayer = styled.div`
  width: 7rem;
  height: 10rem;
  margin: auto;
`;
export const HoneyPotWrapper = styled.div`
  margin-top: 1rem;
`;
