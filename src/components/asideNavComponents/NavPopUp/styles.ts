import styled, { css } from 'styled-components';

import { PopUp } from '../../../styles/common';
import { setBreakpoint } from '../../../styles/themes/breakpoints';

export const PopUpBallon = styled(PopUp)`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    left: 12px;
    transform: translateY(calc(100vh - 190px));
    width: 300px;
    min-height: 100px;
    padding: 12px 0;

    ${setBreakpoint(theme.breakpoints.md)} {
      left: 0;
    }

    ${setBreakpoint(theme.breakpoints.sm)} {
      left: 4px;
      width: 200px;
    }

    /* Triângulo principal */
    &:after {
      content: "";
      position: absolute;
      bottom: -8px;
      left: 20%;
      border-left: 8px solid transparent;
      border-right: 8px solid transparent;
      border-top: 8px solid ${({ theme }) => theme.colors.absoluteColors.black};
      z-index: 2; /* Garantir que fique acima da sombra */

      ${setBreakpoint(theme.breakpoints.md)} {
        left: 13%;
      }

      ${setBreakpoint(theme.breakpoints.sm)} {
        left: 10%;
      }
    }

    /* Triângulo para sombra */
    &:before {
      content: "";
      position: absolute;
      bottom: -11px;
      left: calc(20% - 2px);
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      border-top: 10px solid rgba(255, 255, 255, 0.2);
      z-index: 1;
      filter: blur(2px);

      ${setBreakpoint(theme.breakpoints.md)} {
        left: calc(13% - 2px);
      }

      ${setBreakpoint(theme.breakpoints.sm)} {
        left: calc(10% - 2px);
      }
    }
  `};
`;

export const ExitLink = styled.a`
  ${({ theme }) => css`
    cursor: pointer;
    display: flex;
    gap: 6px;
    width: 100%;
    padding: 16px;
    text-align: start;
    color: ${theme.colors.whiteShades.w_40};
    font-size: ${theme.fontSizes.sm};
    font-weight: ${theme.fontWeights.bold};
    transition: ease 200ms;

    &:active,
    &:hover {
      background-color: ${theme.colors.darkShades.d_60};
    }
  `};
`;

export const WrapperOverflow = styled.div`
  display: table;
  table-layout: fixed;
  width: 100%;

  span {
    display: block;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;

export const ClosePopUp = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  height: 100dvh;
  width: 100dvw;
`;