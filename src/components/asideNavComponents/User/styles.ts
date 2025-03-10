import styled, { css } from 'styled-components';

import { setBreakpoint } from '../../../styles/themes/breakpoints';

export const User = styled.div`
  ${({ theme }) => css`
    cursor: pointer;
    position: relative;
    display: flex;
    align-items: center;
    gap: 12px;
    border-radius: 9999px;
    padding: 12px;
    padding-right: 34px;

    &:hover,
    &:active {
      background-color: ${theme.colors.darkShades.d_65};
    }

    ${setBreakpoint(theme.breakpoints.xl)} {
      width: fit-content;
      padding-right: 12px;
      
      div, 
      span {
        display: none;
      }
    }
  `}
`;

export const IconEllipsis = styled.span`
  ${({ theme }) => css`
    position: absolute;
    right: 12px;
    top: 15px;
    color: ${theme.colors.whiteShades.w_40};
    font-size: ${theme.fontSizes.lg};
  `}
`;
