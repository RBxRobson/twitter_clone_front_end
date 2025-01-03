import { css } from 'styled-components';

import fonts from '../assets/fonts';

export const fontFaces = css`
  @font-face {
    font-family: 'Twitter Chirp';
    src: url(${fonts.heavy});
    font-weight: 900;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Twitter Chirp';
    src: url(${fonts.bold});
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Twitter Chirp';
    src: url(${fonts.medium});
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Twitter Chirp';
    src: url(${fonts.regular});
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
`;
