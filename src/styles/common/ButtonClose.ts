import styled, { css } from 'styled-components';

export const ButtonClose = styled.button`
  ${({ theme }) => css`
    border: none;
    cursor: pointer;
    position: absolute;
    top: 16px;
    left: 16px;
    display: flex;
    align-items: center;
    background-color: transparent;
    border-radius: 50%;
    padding: 8px;
    transition: ease-out 200ms;

    &:hover, 
    &:active {
      background-color: ${theme.colors.darkShades.d_65};
    }

    img {
      width: 22px;
    }
  `};
`;