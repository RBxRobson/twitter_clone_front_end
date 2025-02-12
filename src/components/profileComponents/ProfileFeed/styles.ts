import styled, { css } from 'styled-components';

export const Title = styled.h3`
  ${({ theme }) => css`
    text-align: start;
    font-size: ${theme.fontSizes.sm};
    padding: 16px;
  `}
`;

export const Feed = styled.ul`
  ${({ theme }) => css`
    padding: 14px 0;
    border-top: 1px solid ${theme.colors.darkShades.d_55};

    &>li {
      border-bottom: 1px solid ${theme.colors.darkShades.d_55};
    }
  `}
`;