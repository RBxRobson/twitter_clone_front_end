import styled, { css } from 'styled-components';

import { setBreakpoint } from '../../../styles/themes/breakpoints';

export const ContainerAuth = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1;

    ${setBreakpoint(theme.breakpoints.sm)} {
      flex-direction: column;
      align-items: start;
      flex-grow: 0;
      height: 100dvh;
      padding: 16px;
    }
  `}
`;

export const Logo = styled.h1`
  ${({ theme }) => css`
    text-align: center;
    flex: 1;

    img {
      width: 100%;
      max-width: 500px;
    };

    ${setBreakpoint(theme.breakpoints.sm)} {
      position: absolute;
      top: 40px;
      left: 0;
      flex: 0;

      img {
        width: 80px;
      };
    }
  `}
`;