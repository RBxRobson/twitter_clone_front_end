import styled, { css } from 'styled-components';

export const BtnBack = styled.a`
  ${({ theme }) => css`
    cursor: pointer;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    padding: 8px;

    &:hover,
    &:active {
      background-color: ${theme.colors.darkShades.d_60};
    }

    img {
      width: 20px;
    }
  `}
`;