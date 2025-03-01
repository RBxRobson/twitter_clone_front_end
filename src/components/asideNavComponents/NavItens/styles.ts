import styled, { css } from 'styled-components';

import { setBreakpoint } from '../../../styles/themes/breakpoints';

export const ItensContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 8px;

    ${setBreakpoint(theme.breakpoints.xl)} {
      align-items: center;
      h2 {
        display: none;
      }
    }
  `};
`;

export const NavButton = styled.a`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    width: fit-content;
    padding: 14px;
    padding-right: 18px;
    gap: 22px;
    border-radius: 9999px;
    transition: ease 200ms;

    &:hover,
    &:active {
      background-color: ${theme.colors.darkShades.d_65};
    }

    img {
      width: 26px;
    }

    h2 {
      font-size: ${theme.fontSizes.lg};
      color: ${theme.colors.whiteShades.w_40};
      font-weight: ${theme.fontWeights.regular};
    }

    &.is-active {
      h2 {
        font-weight: ${theme.fontWeights.bold};
      }
    }

    ${setBreakpoint(theme.breakpoints.xl)} {
      padding: 14px;
      h2 {
        display: none;
      }
    }
  `};
`;
