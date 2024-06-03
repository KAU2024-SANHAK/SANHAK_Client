import styled from "styled-components";

export const WeatherPlaylistWrapper = styled.div`
  width: 100%;
`;
export const WeatherIcon = styled.img`
  width: 3rem;
  height: 3rem;
  margin-left: 0.3rem;
  margin-bottom: 0.4rem;
`;
export const PlaylistBox = styled.div`
  ${({ theme: { mixin } }) => mixin.flexBox({align: 'center'})};
  gap: 0.5rem;
`;
export const Thumbnail = styled.img`
  width: 3.6rem;
  height: 3.6rem;
  border-radius: 70%;
  cursor: pointer;  
`;
export const PlaylistTitle = styled.p`
  ${({ theme }) => theme.fonts.caption_01};
  cursor: pointer;
`;