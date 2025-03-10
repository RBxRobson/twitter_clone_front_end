import styled, { css } from 'styled-components';

import { CentralWrapper, HeaderBlur } from '../../styles/common';
import { setBreakpoint } from '../../styles/themes/breakpoints';

export { CentralWrapper };

export const Header = styled(HeaderBlur)`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 30px;
    padding: 14px 10px;
    border-bottom: 1px solid ${theme.colors.darkShades.d_55};

    ${setBreakpoint(theme.breakpoints.xs)} {
      gap: 8px;
    }

    label {
      margin-left: auto;

      ${setBreakpoint(theme.breakpoints.sm)} {
        margin: 0 auto;
        transform: translateX(-22px);
      }

      ${setBreakpoint(theme.breakpoints.xs)} {
        transform: none;
      }
    }
  `}
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.lg};
    white-space: nowrap;

    ${setBreakpoint(theme.breakpoints.sm)} {
      display: none;
    }
  `}
`;
