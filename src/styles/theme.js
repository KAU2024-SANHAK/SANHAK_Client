import mixin from './mixin';
import { css } from 'styled-components';

/*UI/UX 확정 되면 수정하기. 이런 식이라는 느낌만 알기 !*/

const colors = {
  white: '#FFFFFF',
  black: '#222222',
  G_01: '#F8F8F8',
  G_02: '#EBE9EA',
  G_03: '#E1DEDF',
  G_04: '#D3CFD1',
  G_05: '#CAC6C8',
  G_06: '#BDB8BA',
  G_07: '#ACA7A9',
  G_08: '#868384',
  G_09: '#686566',
  G_10: '#4F4D4E',
  P_01: '#FFE9F1',
  P_02: '#FFBAD5',
  P_03: '#FF99C0',
  P_04: '#FF6AA3',
  P_05: '#FF4D91',
  P_06: '#FF2176',
  P_07: '#E81E6B',
  P_08: '#B51754',
  P_09: '#8C1241',
  P_10: '#6B0E32',
  R_01: '#FFEDED',
  R_02: '#FF4A4A',
  B_01: '#EDF1FF',
  B_02: '#4A72FF',
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
