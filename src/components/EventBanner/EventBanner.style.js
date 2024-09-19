import styled from 'styled-components';

export const EventBannerWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexBox({ justify: 'space-between', align: 'center'})}
  background: linear-gradient(90deg, rgba(148, 102, 83, 0.80) 0%, rgba(255, 78, 78, 0.80) 100%);
  color: ${({ theme }) => theme.colors.normal.white};
  width: 32rem;
  height: 10rem;
  border-radius: 30px;
  padding: 0 3rem 0 3rem;
`;
export const EventBannerText = styled.span`
  ${({ theme }) => theme.fonts.body_02};
`;