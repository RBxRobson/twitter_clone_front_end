import styled, { css } from 'styled-components';

import { CentralWrapper, BtnBack } from '../../styles/common';

export { CentralWrapper, BtnBack };

export const Header = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  gap: 30px;
  padding: 14px 10px;
  background: rgba(0, 0, 0, 0.76);
  backdrop-filter: blur(6px);
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.lg};
  `}
`;

export const RecommendationsList = styled.ul`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 26px;
    padding: 22px 16px;
    text-align: start;
    border-top: 1px solid ${theme.colors.darkShades.d_55};
  `}
`;

export const ListItem = styled.li`
  ${({ theme }) => css`
  cursor: pointer;
    p {
      margin-left: auto;
      font-size: ${theme.fontSizes.md};
      line-height: 20px;
    }
  `}
`;

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  margin-bottom: 6px;
`;
