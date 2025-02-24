import styled, { css } from 'styled-components';

import { Label } from '../../../styles/common';

export const ModLabel = styled(Label)`
  ${({ theme }) => css`
    position: relative;
    width: 100%;
    max-width: 360px;

    svg {
      position: absolute;
      bottom: 50%;
      left: 10px;
      transform: translateY(51%);
      max-width: 16px;
      width: 100%;
    }

    input {
      padding: 10px 18px;
      padding-left: 28px;
      border-radius: 9999px;
      font-size: ${theme.fontSizes.sm};
    }
  `}
`;

