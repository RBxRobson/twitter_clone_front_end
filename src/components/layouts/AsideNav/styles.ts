import styled, { css } from 'styled-components';

import { setBreakpoint } from '../../../styles/themes/breakpoints';

export const AsideNav = styled.nav`
  ${({ theme }) => css`
    position: sticky;
    top: 0; 
    display: flex;
    flex-direction: column;
    gap: 8px;
    height: 100dvh; 
    padding: 12px;
    margin-left: 8px;
    padding-top: 0;
    max-width: 275px;
    width: 100%;

    ${setBreakpoint(theme.breakpoints.xl)} {
      max-width: 88px;
      align-items: center;
    }

    ${setBreakpoint(theme.breakpoints.sm)} {
      max-width: 65px;
      padding: 12px 2px;
      margin: 0;
    }
  `}
`;

