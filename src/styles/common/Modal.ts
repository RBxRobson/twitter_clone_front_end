import styled, { css } from 'styled-components';

export const Modal = styled.form`
  ${({ theme }) => css`
    position: relative;
    width: 100%;
    max-width: 600px;
    background-color: ${theme.colors.absoluteColors.black};
    border-radius: 20px;

    &.loading {
      cursor: progress;
    }
  `}
`;
