import styled, { css } from 'styled-components';

import { ButtonPrimary } from '../../../styles/common';

export const ButtonFollow = styled(ButtonPrimary)`
  ${({ theme }) => css`
    padding: 8px 16px;
    margin-left: auto;
    font-size: ${theme.fontSizes.sm};
  `}
`;