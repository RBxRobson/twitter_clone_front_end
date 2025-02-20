import styled, { css } from 'styled-components';

export const UsersList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 26px;
  padding: 22px 16px;
  text-align: start;
`;

export const User = styled.li`
  ${({ theme }) => css`
    cursor: pointer;

    &>p {
      padding-left: 48px;
      font-size: ${theme.fontSizes.md};
      line-height: 20px;
    }
  `}
`;

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  margin-bottom: 6px;
`;
