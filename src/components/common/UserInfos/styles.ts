import styled, { css } from 'styled-components';

export const UserInfos = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 4px;
    text-align: start;

    h4,
    span {
      font-size: ${theme.fontSizes.sm};
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 100%;
      max-width: 13ch;
    }

    span {
      color: ${theme.colors.darkShades.d_45};
    }
  `}
`;