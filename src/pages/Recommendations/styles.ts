import styled, { css } from 'styled-components';

import { CentralWrapper, BtnBack, HeaderBlur } from '../../styles/common';

export { CentralWrapper, BtnBack };

export const Header = styled(HeaderBlur)`
  display: flex;
  align-items: center;
  gap: 30px;
  padding: 14px 10px;
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.lg};
  `}
`;
