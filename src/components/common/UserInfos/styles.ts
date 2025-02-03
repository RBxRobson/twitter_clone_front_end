import styled, { css } from 'styled-components';

export const PostContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: 4px;

    span, time {
        color: ${theme.colors.darkShades.d_45};
        cursor: default;
      }

    .divisor {
      padding: 0 4px;
    }
  `}
`;

export const UserInfos = styled.div`
  ${({ theme }) => css`
    display: table;
    table-layout: fixed;
    width: fit-content;
    text-align: start;

    span, time {
      color: ${theme.colors.darkShades.d_45};
      cursor: default;
    }
  `}
`;

export const WrapperOverflow = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.sm};
    display: block;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;

    a {
      font-weight: ${theme.fontWeights.bold};
      font-size: ${theme.fontSizes.sm};
      color: ${theme.colors.whiteShades.w_40};
    }

    span, h4, a {
      display: inline;
      width: fit-content;
    }

    h4:hover,
    a:hover {
      text-decoration: underline;
    }
  `}
`;