import styled, { css } from 'styled-components';

import { CentralWrapper } from '../../styles/common';

export { CentralWrapper };

export const LoadingContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    padding-top: 12px;
    border-top: 1px solid ${theme.colors.darkShades.d_55};
  `}
`;