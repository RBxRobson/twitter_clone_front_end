import styled, { css } from 'styled-components';

import { CentralWrapper, HeaderBlur } from '../../styles/common';

export { CentralWrapper };

export const Header = styled(HeaderBlur)`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 30px;
    padding: 14px 10px;
    border-bottom: 1px solid ${theme.colors.darkShades.d_55};

    label {
      margin-left: auto;
    }
  `}
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.lg};
  `}
`;
