import styled from 'styled-components';

export const TitleWrapper = styled.p`
  ${({ theme }) => theme.fonts.title};
  width: 30.8rem;
  margin-top: 1.9rem;
`;
export const SubTitleWrapper = styled.p`
  ${({ theme }) => theme.fonts.caption_01};
  width: 30.8rem;
  margin-top: 0.4rem;
  margin-bottom: 7rem;
`;
export const CaptionWrapper = styled.li`
  ${({ theme }) => theme.fonts.caption_02};
  width: 100%;
  margin-left: 1.5rem;
`;
