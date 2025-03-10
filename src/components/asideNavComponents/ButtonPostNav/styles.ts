import styled, { css } from 'styled-components';

import { ButtonPrimary } from '../../../styles/common';
import { setBreakpoint } from '../../../styles/themes/breakpoints';

export const ButtonPostNav = styled(ButtonPrimary)`
  ${({ theme }) => css`
    margin-bottom: 20px;
    margin-top: auto;
    padding: 16px;

    span {
      font-size: ${theme.fontSizes.md};
    }

    img {
      display: none;
      width: 24px;
    }

    ${setBreakpoint(theme.breakpoints.xl)} {
      width: fit-content;

      span {
        display: none;
      }

      img {
        display: block;
      }
    }

    ${setBreakpoint(theme.breakpoints.sm)} {
      padding: 12px;
    }
  `};
`;
