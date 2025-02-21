import styled, { css } from 'styled-components';

export const MoreButton = styled.button`
  ${({ theme }) => css`
    position: absolute;
    top: 6px;
    right: 8px;
    cursor: pointer;
    border: none;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35px;
    height: 35px;
    border-radius: 50%;

    img {
      width: 20px;
    }

    &:hover,
    &:active {
      background-color: ${theme.colors.darkShades.d_65};
    }
  `}
`;
