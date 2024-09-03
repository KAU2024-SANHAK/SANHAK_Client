import styled from 'styled-components';

export const MonthlyPlaylistWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter({})};
  width: 14.7rem;
  height: 18rem;
  background: rgba(255, 255, 255, 0.59);
  border-radius: 3rem;
  z-index: 100;
  gap: 1.2rem;
`;
export const ThumbnailImg = styled.img`
  width: 11rem;
  height: 10.6rem;
  border-radius: 3rem;
`;
export const PlaylistText = styled.span`
  ${({ theme }) => theme.fonts.body_10};
  font-weight: 700;
`;