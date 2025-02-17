import styled, { css } from 'styled-components';

import { CentralWrapper, BtnBack, HeaderBlur } from '../../styles/common';

export { CentralWrapper, BtnBack };

export const Header = styled(HeaderBlur)`
  ${BtnBack} {
    margin-left: 12px;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  padding-top: 12px;
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    text-align: start;
    padding-left: 12px;
    font-size: ${theme.fontSizes.lg};

    span {
      font-size: ${theme.fontSizes.xs};
      color: ${theme.colors.darkShades.d_50};
    }
  `}
`;

export const Warning = styled.h3`
  ${({ theme }) => css`
    padding-top: 26px;
    font-size: ${theme.fontSizes.md};
    text-align: center;
    border-top: 1px solid ${theme.colors.darkShades.d_55};
  `}
`;
