import styled, { css } from 'styled-components';

export const NavButton = styled.a`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    width: fit-content;
    gap: 22px;
    padding: 14px 28px 14px 12px;
    border-radius: 9999px;
    transition: ease 200ms;

    &:hover,
    &:active {
      background-color: ${theme.colors.darkShades.d_65};
    }

    img {
      width: 26px;
    }

    h2 {
      font-size: ${theme.fontSizes.lg};
      color: ${theme.colors.whiteShades.w_40};
      font-weight: ${theme.fontWeights.regular};
    }

    &.is-active {
      h2 {
        font-weight: ${theme.fontWeights.bold};
      }
    }
  `};
`;
