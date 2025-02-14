import styled, { css } from 'styled-components';

export const HeaderContainer = styled.header`
  ${({ theme }) => css`
    position: sticky;
    top: 0;
    display: flex;
    border-bottom: 1px solid ${theme.colors.darkShades.d_55};
    z-index: 1;
  `}
`;

export const ButtonHeader = styled.button`
  cursor: pointer;
  background-color: transparent;
  transition: ease 300ms;
  border: none;
  width: 100%;
  height: 52px;
  background: rgba(0, 0, 0, 0.76);
  backdrop-filter: blur(6px);

  &:hover,
  &:active {
    background: rgba(32, 32, 32, 0.76);
  }
`;

export const TextButton = styled.span`
  ${({ theme }) => css`
    display: block;
    color: ${theme.colors.darkShades.d_50};
    font-weight: ${theme.fontWeights.medium};
    font-size: ${theme.fontSizes.sm};
    height: 100%;
    padding-top: 16px;
    width: fit-content;
    margin: 0 auto;

    &.active {
      font-weight: ${theme.fontWeights.bold};
      color: ${theme.colors.whiteShades.w_40};
      position: relative;

      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 100%;
        height: 4px;
        background: ${theme.colors.blueShades.b_50};
        border-radius: 9999px;
      }
    }
  `}
`;
