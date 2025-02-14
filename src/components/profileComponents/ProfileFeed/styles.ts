import styled, { css } from 'styled-components';

export const Title = styled.h3`
  ${({ theme }) => css`
    text-align: start;
    font-size: ${theme.fontSizes.sm};
    padding: 16px;
  `}
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding-top: 12px;
    border-top: 1px solid ${theme.colors.darkShades.d_55};
  `}
`;