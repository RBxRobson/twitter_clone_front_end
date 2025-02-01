import styled, { css } from 'styled-components';

export const AsideInfos = styled.aside`
  ${({ theme }) => css`
    position: sticky;
    top: 0; 
    height: 100dvh; 
    background-color: transparent;
    display: flex;
    flex-direction: column;
    gap: 18px;
    padding-top: 8px;
    margin-right: 12px;
    margin-left: 18px;
    max-width: 350px;
    width: 100%;
    text-align: start;
    z-index: 1;

    &>nav {
      justify-content: start;
      padding: 0 16px;
      gap: 6px 12px;
    }

    & > nav > :last-child {
      flex-basis: 100%;
    }

    ${theme.setBreakpoint(theme.breakpoints.sm)} {
      display: none;
    }
  `}
`;