import styled, { css } from 'styled-components';

import { setBreakpoint } from '../../../styles/themes/breakpoints';

export const RepostWarning = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 4px;
    width: calc(100% - 22px);
    max-width: 550px;
    height: 0;
    text-align: start;
    color: ${theme.colors.darkShades.d_45};
    font-weight: bold;
    font-size: ${theme.fontSizes.xs};
    transform: translateY(-15px) translateX(6px);

    svg {
      width: 100%;
      max-width: 15px;
      fill: ${theme.colors.darkShades.d_45};
    }

    a {
      font-size: ${theme.fontSizes.xs};
      cursor: pointer;
      font-weight: bold;
      text-overflow: ellipsis;
      overflow: hidden;

      &:hover {
        text-decoration: underline;
      }
    }

    ${setBreakpoint(theme.breakpoints.lg)} {
      max-width: 450px;
    }

    ${setBreakpoint(theme.breakpoints.sm)} {
      max-width: 280px;
    }
  `};
`;