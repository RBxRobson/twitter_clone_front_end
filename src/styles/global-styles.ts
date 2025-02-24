import { createGlobalStyle, css } from 'styled-components';

import { fontFaces } from '../styles/fonts';

const GlobalStyles = createGlobalStyle`
  ${fontFaces};

  ${({ theme }) => css`
    body {
      overflow-y: scroll;
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
      scrollbar-color: 
        ${theme.colors.darkShades.d_55}
        ${theme.colors.darkShades.d_65};
    };

    a {
      font-size: ${theme.fontSizes.xs};
      color: ${theme.colors.darkShades.d_50};
      text-decoration: none;
    }

    #root {
      max-width: ${theme.breakpoints.xl};
      width: 100%;
      margin: 0 auto;
    }
  `};
`;

export default GlobalStyles;
