import styled, { css } from 'styled-components';

import { HeaderBlur } from '../../../styles/common';

export const HeaderContainer = styled(HeaderBlur)`
  ${({ theme }) => css`
    display: flex;
    border-bottom: 1px solid ${theme.colors.darkShades.d_55};
  `}
`;