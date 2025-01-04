import styled, { css } from 'styled-components';

export const Button = styled.button`
  ${({ theme }) => css`
    border: none;
    cursor: pointer;
    outline: none;
    width: 100%;
    max-width: 300px;
    background-color: ${theme.colors.blueShades.b_50};
    padding: 12px 0;
    border-radius: 24px;
    color: ${theme.colors.absoluteColors.white};
    font-weight: ${theme.fontWeights.bold};
    font-size: ${theme.fontSizes.sm};

    &:hover {
      background-color: ${theme.colors.blueShades.b_60};
    }
  `}
`;