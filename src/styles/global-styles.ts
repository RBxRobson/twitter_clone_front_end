import { createGlobalStyle, css } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  ${({ theme }) => css`
    body {
      font-size: 15px;
      color: ${theme.colors.whiteShades.w_45};
      background-color: ${theme.colors.absoluteColors.black};
    }
  `}
`;

export default GlobalStyles;
