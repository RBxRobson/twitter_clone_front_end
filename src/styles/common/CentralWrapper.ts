import styled, { css } from 'styled-components';

import { setBreakpoint } from '../themes/breakpoints';

export const CentralWrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: 650px;
    margin-right: 12px;
    border: 1px solid ${theme.colors.darkShades.d_55};
    border-top: none;
    border-bottom: none;
    position: relative;
    z-index: 1;

    ${setBreakpoint(theme.breakpoints.sm)} {
      margin-right: 4px;
    }
  `}
`;