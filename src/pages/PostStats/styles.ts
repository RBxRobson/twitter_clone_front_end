import styled, { css } from 'styled-components';

import { CentralWrapper, HeaderBlur } from '../../styles/common';

export const ModCentralWrapper = styled(CentralWrapper)`
  &>ul {
    border-top: none;
  }
`;

export const Header = styled(HeaderBlur)`
  ${({ theme }) => css`
    padding-top: 12px;
    border-bottom: 1px solid ${theme.colors.darkShades.d_55};
  `}
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;

  &.pd-left {
    padding-left: 12px;
    padding-bottom: 12px;
  }
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    padding-left: 12px;
    font-size: ${theme.fontSizes.lg};
  `}
`;

export const Warning = styled.h3`
  ${({ theme }) => css`
    padding-top: 26px;
    font-size: ${theme.fontSizes.md};
    text-align: center;
  `}
`;
