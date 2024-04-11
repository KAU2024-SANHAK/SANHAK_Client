import mixin from './mixin';
import { css } from 'styled-components';

const colors = {
  normal: {
    white: '#FFFFFF',
    background_white: '#F9F9F9',
    black: '#000000',
  },
  pink: {
    background_pink: '#FFBBCB',
    dark_pink: '#FF7575',
    btn_hover_pink: '#FFA8BC',
    btn_pink: '#FFDFE7',
    white_pink: '#FFEEF2',
    warm_pink: '#FFA2A2',
    red_pink: '#FF5959',
  },
  feeling: {
    happy_yellow: '#FFF1A8',
    sad_blue: '#B4F2FF',
    surprised_orange: '#FFCA99',
    relax_green: '#B9FFB3',
    worried_purple: '#C3C9FF',
    angry_pink: '#FFB6B6',
  },
  yellow: {
    background_yellow: '#FFE768',
  },
  gray: {
    white_gray: '#D9D9D9',
    dark_gray: '#CBC7C7',
    text_gray: '#858585',
  },
};

const fonts = {
  big_title: css`
    font-family: 'Pretendard';
    font-size: 3.2rem;
    font-style: normal;
    font-weight: 700;
    line-height: 2.2rem;
  `,
  title: css`
    font-family: 'Pretendard';
    font-size: 2.6rem;
    font-style: normal;
    font-weight: 700;
    line-height: 3rem;
  `,
  heading_01: css`
    font-family: 'Pretendard';
    font-size: 2.4rem;
    font-style: normal;
    font-weight: 600;
    line-height: 3rem;
  `,
  heading_03: css`
    font-family: 'Pretendard';
    font-size: 2.1rem;
    font-style: normal;
    font-weight: 700;
    line-height: 3rem;
  `,

  body_01: css`
    font-family: 'Pretendard';
    font-size: 1.8rem;
    font-style: normal;
    font-weight: 700;
    line-height: 2.2rem;
  `,
  body_02: css`
    font-family: 'Pretendard';
    font-size: 1.8rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2.2rem;
  `,
  body_06: css`
    font-family: 'Pretendard';
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 500;
    line-height: 2.2rem;
  `,
  body_08: css`
    font-family: 'Pretendard';
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2.2rem;
  `,
  body_10: css`
    font-family: 'Pretendard';
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2.2rem;
  `,

  caption_01: css`
    font-family: 'Pretendard';
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.6rem;
  `,
  caption_02: css`
    font-family: 'Pretendard';
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.6rem;
  `,
  caption_04: css`
    font-family: 'Pretendard';
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2.2rem;
  `,
};

const theme = { mixin, colors, fonts };

export default theme;
