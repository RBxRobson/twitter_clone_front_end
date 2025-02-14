import styled, { css } from 'styled-components';

export const Feed = styled.ul`
  ${({ theme }) => css`
    padding-bottom: 14px;
    border-top: 1px solid ${theme.colors.darkShades.d_55};

    &>li {
      border-bottom: 1px solid ${theme.colors.darkShades.d_55};
    }
  `}
`;