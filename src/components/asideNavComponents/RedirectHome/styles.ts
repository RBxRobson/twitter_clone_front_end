import styled, { css } from 'styled-components';

import { setBreakpoint } from '../../../styles/themes/breakpoints';

export const RedirectHome = styled.h1`
  ${({ theme }) => css`
    display: flex;
    position: relative;
    cursor: pointer;
    border-radius: 50%;
    height: 54px;
    width: 54px;
    transition: ease 200ms;
    margin: 4px 0;

    &:hover {
      background-color: ${theme.colors.darkShades.d_65};
    }

    ${setBreakpoint(theme.breakpoints.sm)} {
      width: 48px;
      height: 48px;
    }
  `};
`;

export const Logo = styled.img`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-48.5%) translateY(-50%);
`;