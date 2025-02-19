import styled, { css } from 'styled-components';

import { PopUp } from '../../../styles/common';

export const PostPopUp = styled(PopUp)`
  position: absolute;
  top: 26px;
  right: 20px;
  width: fit-content;
  max-width: 384px;
  min-width: 150px;
  border-radius: 8px;
`;

export const ButtonPopUp = styled.button`
  ${({ theme }) => css`
    cursor: pointer;
    background-color: transparent;
    border: none;
    font-size: ${theme.fontSizes.sm};
    font-weight: ${theme.fontWeights.bold};
    display: flex;
    align-items: center;
    width: 100%;
    gap: 12px;
    padding: 12px 16px;
    color: ${theme.colors.whiteShades.w_40};
    white-space: nowrap;

    // Definindo a animação blink
    @keyframes blink {
      0% {
        opacity: 1;
      }
      50% {
        opacity: 0.5;
      }
      100% {
        opacity: 1;
      }
    }

    &.loading {
      animation: blink 1s infinite;
    }

    img {
      width: 20px;
    }

    &>.delete {
      color: #F4212E;
    }
  `}
`;

export const UsernameWrapper = styled.div`
  display: table;
  table-layout: fixed;
  text-align: start;
  white-space: nowrap;
  width: fit-content;

  span{
    display: block;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;