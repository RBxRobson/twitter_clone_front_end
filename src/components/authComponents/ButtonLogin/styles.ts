import styled, { css } from 'styled-components';

export const Button = styled.button`
  ${({ theme }) => css`
    cursor: pointer;
    outline: none;
    width: 100%;
    max-width: 300px;
    border: 1px solid ${theme.colors.darkShades.d_55};
    background-color: transparent;
    padding: 12px 0;
    border-radius: 24px;
    color: ${theme.colors.blueShades.b_50};
    font-weight: ${theme.fontWeights.bold};
    font-size: ${theme.fontSizes.sm};

    &:hover {
      background-color: #1d9bf01a;
    }
  `}
`;