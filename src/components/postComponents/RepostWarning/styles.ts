import styled, { css } from 'styled-components';

export const RepostWarning = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 4px;
    width: 100%;
    text-align: start;
    color: ${theme.colors.darkShades.d_45};
    position: absolute;
    top: 0;
    left: 18px;
    font-weight: bold;
    font-size: ${theme.fontSizes.xs};

    svg {
      width: 100%;
      max-width: 15px;
      fill: ${theme.colors.darkShades.d_45};
    }

    a {
      font-size: ${theme.fontSizes.xs};
      cursor: pointer;
      font-weight: bold;
      text-overflow: ellipsis;
      overflow: hidden;

      &:hover {
        text-decoration: underline;
      }
    }
  `};
`;