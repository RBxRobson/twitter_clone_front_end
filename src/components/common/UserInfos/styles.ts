import styled, { css } from 'styled-components';

export const UserInfos = styled.div`
  ${({ theme }) => css`
    display: table;
    table-layout: fixed;
    width: 100%;
    text-align: start;

    h4,
    span {
      font-size: ${theme.fontSizes.sm};
      display: block;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    span {
      color: ${theme.colors.darkShades.d_45};
    }
  `}
`;