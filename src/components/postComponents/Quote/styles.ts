import styled, { css } from 'styled-components';

import { UserInfos } from '../../common/UserInfos/styles';

export { UserInfos };

export const Wrapper = styled.div`
  ${({ theme }) => css`  
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 12px;
    border-radius: 12px;
    border: 1px solid ${theme.colors.darkShades.d_55};
  `}
`;

export const QuoteHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  img {
    min-width: 28px;
    max-width: 28px;
    height: 28px;
    cursor: default;
  }
`;

export const ContentPost = styled.p`
  text-align: start;
  word-break: break-word;
`;
