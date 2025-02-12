import styled, { css } from 'styled-components';

export const PopUp = styled.div`
  ${({ theme }) => css`
    z-index: 2;
    border-radius: 16px;
    background-color: ${theme.colors.absoluteColors.black};
    box-shadow: 
      rgba(255, 255, 255, 0.2) 0px 0px 15px, 
      rgba(255, 255, 255, 0.15) 0px 0px 3px 1px;
  `};
`;