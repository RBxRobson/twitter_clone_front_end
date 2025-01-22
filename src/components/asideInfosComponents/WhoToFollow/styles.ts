import styled, { css } from 'styled-components';

export const ListContainer = styled.ul`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    text-align: start;
    gap: 24px;
    padding: 12px 16px 16px;
    border: 1px solid ${theme.colors.darkShades.d_55};
    border-radius: 16px;

    &>span {
      display: flex;
      justify-content: center;
    }
  `}
`;

export const ListTitle = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.lg};
  `}
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  text-align: start;
  gap: 8px;
  width: 100%;
`;

export const ShowMore = styled.a`
  ${({ theme }) => css`
    cursor: pointer;
    font-size: ${theme.fontSizes.sm};
    color: ${theme.colors.blueShades.b_50};
    padding-top: 6px;
  `}
`;