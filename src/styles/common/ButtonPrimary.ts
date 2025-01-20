import styled, { css } from 'styled-components';

export const ButtonPrimary = styled.button`
  ${({ theme }) => css`
    cursor: pointer;
    border: none;
    border-radius: 9999px;
    padding: 15px;
    background-color: ${theme.colors.whiteShades.w_40};
    font-size: ${theme.fontSizes.md};
    font-weight: ${theme.fontWeights.bold};
    transition: ease-out 200ms;

    &:hover,
    &:active {
      background-color: ${theme.colors.whiteShades.w_50};
    }

    &:disabled {
      background-color: ${theme.colors.darkShades.d_45};
      color: ${theme.colors.absoluteColors.black};
      cursor: auto;
    }
  `};
`;