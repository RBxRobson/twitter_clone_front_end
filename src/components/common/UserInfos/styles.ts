import styled, { css } from 'styled-components';

import { RepostWarning } from '../../postComponents/RepostWarning/styles';

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

    a:hover {
      text-decoration: underline;
    }
  `}
`;

export const PostContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: 4px;
    max-width: calc(100% - 28px);

    span, time {
      color: ${theme.colors.darkShades.d_45};
      cursor: default;
    }

    .divisor {
      padding-right: 4px;
    }
  `}
`;

export const ReplyWarning = styled(RepostWarning)`
  ${({ theme }) => css`
    position: static;
    font-size: ${theme.fontSizes.sm};
    font-weight: ${theme.fontWeights.regular};
    margin-top: 2px;
    
    span {
    }
    a {
      color: ${theme.colors.blueShades.b_50};
      font-weight: ${theme.fontWeights.regular};
      font-size: ${theme.fontSizes.sm};
    }
  `}
`;