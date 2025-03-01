import styled, { css } from 'styled-components';

import { setBreakpoint } from '../../../styles/themes/breakpoints';

export const RedirectHome = styled.h1`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-radius: 50%;
    height: 54px;
    width: 54px;
    transition: ease 200ms;
    margin: 4px 0;

    &:hover {
      background-color: ${theme.colors.darkShades.d_65};
    }

    ${setBreakpoint(theme.breakpoints.xl)} {
      transform: none;
    }
  `};
`;

export const Logo = styled.img`
  width: 50px;
`;