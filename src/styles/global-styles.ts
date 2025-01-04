import { createGlobalStyle, css } from 'styled-components';

import { fontFaces } from '../styles/fonts';

const GlobalStyles = createGlobalStyle`
  ${fontFaces};

  ${({ theme }) => css`
    body {
      font-size: ${theme.fontSizes.sm};
      color: ${theme.colors.whiteShades.w_45};
      background-color: ${theme.colors.absoluteColors.black};
    };

    * {
      box-sizing: border-box;
      padding: 0;
      margin: 0;
      font-family: Twitter Chirp, sans-serif;
      list-style: none;
    };

    a {
      font-size: ${theme.fontSizes.xs};
      color: ${theme.colors.darkShades.d_50};
      text-decoration: none;
    }

    #root {
      max-width: 1400px;
      width: 100%;
      margin: 0 auto;
    }
  `};
`;

export default GlobalStyles;
