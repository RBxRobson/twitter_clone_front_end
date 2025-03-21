import styled, { css } from 'styled-components';

import { CentralWrapper, HeaderBlur } from '../../styles/common';

export { CentralWrapper };

export const Header = styled(HeaderBlur)`
  ${({ theme }) => css`
    border-bottom: 1px solid ${theme.colors.darkShades.d_55};
  `}
`;

export const FlexContainer = styled.div`
  display: flex;
  padding-top: 12px;

  &.pd-left {
    padding-left: 12px;
  }
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
  `}
`;
