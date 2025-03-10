import styled, { css } from 'styled-components';

import { setBreakpoint } from '../../../styles/themes/breakpoints';

export const WrapperLogin = styled.div`
  ${({ theme }) => css`
    flex: 1;

    h2 {
      font-size: ${theme.fontSizes.xxl};
      font-weight: ${theme.fontWeights.heavy};
      padding-bottom: 48px;
    };

    h3 {
      font-size: ${theme.fontSizes.xl};
      font-weight: ${theme.fontWeights.heavy};
      padding-bottom: 32px;
    };

    h4 {
      font-size: ${theme.fontSizes.md};
      padding: 16px 0 20px;
    };

    ${setBreakpoint(theme.breakpoints.sm)} {
      flex: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0 auto;

      h2 {
        font-size: 52px;
        font-weight: ${theme.fontWeights.bold};
        padding-bottom: 48px;
      };
    }

    ${setBreakpoint(theme.breakpoints.xs)} {
      h2 {
        font-size: 42px;
      };
    }
  `};
`;

export const ConsentMessage = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.darkShades.d_50};
    font-size: ${theme.fontSizes.xxs};
    padding: 8px 0;
    max-width: 300px;

      a {
        font-size: ${theme.fontSizes.xxs};
        color: ${theme.colors.blueShades.b_50};

        &:hover {
          text-decoration: underline;
        };
      };
  `};
`;

export const Divider = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    max-width: 300px;
    padding-top: 16px;

    span {
      padding: 0 12px;
    };

    &::after,
    &::before {
      content: '';
      border-bottom: 1px solid ${theme.colors.darkShades.d_55};
      flex: 1 0 auto;
      height: 1px;
    };
  `};
`;