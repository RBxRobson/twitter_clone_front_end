import styled, { css } from 'styled-components';

export const RedirectHome = styled.h1`
  ${({ theme }) => css`
    position: relative;
    text-align: start;
    cursor: pointer;
    border-radius: 50%;
    height: 54px;
    width: 54px;
    transition: ease 200ms;

    &:hover {
      background-color: ${theme.colors.darkShades.d_65};
    }
  `};
`;

export const Logo = styled.img`
  width: 50px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;