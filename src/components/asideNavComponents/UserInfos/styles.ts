import styled, { css } from 'styled-components';

import { SmallAvatar } from '../../../styles/common';

export { SmallAvatar };

export const UserInfos = styled.div`
  ${({ theme }) => css`
    cursor: pointer;
    position: relative;
    display: flex;
    align-items: center;
    gap: 12px;
    border-radius: 9999px;
    padding: 12px;

    &:hover,
    &:active {
      background-color: ${theme.colors.darkShades.d_65};
    }
  `}
`;

export const TextContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 4px;
    text-align: start;

    h4,
    span {
      font-size: ${theme.fontSizes.sm};
    }

    span {
      color: ${theme.colors.darkShades.d_45};
    }
  `}
`;

export const IconEllipsis = styled.span`
  ${({ theme }) => css`
    position: absolute;
    right: 12px;
    top: 15px;
    color: ${theme.colors.whiteShades.w_40};
    font-size: ${theme.fontSizes.lg};
  `}
`;
