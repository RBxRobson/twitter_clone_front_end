import styled, { css } from 'styled-components';

import { ButtonPrimary, TextField } from '../../../styles/common';

export const FormPost = styled.form`
  padding-bottom: 12px;
`;

export const InputGroup = styled.div`
  display: flex;
  gap: 12px;
  padding: 16px;
`;

export const ModTextField = styled(TextField)`
  ${({ theme }) => css`
    padding-bottom: 8px;
    border-bottom: 1px solid ${theme.colors.darkShades.d_55};
  `}
`;

export const WrapperButton = styled.div`
  padding: 0 16px;
  width: 100%;
  display: flex;
  justify-content: end;
`;

export const ButtonSubmit = styled(ButtonPrimary)`
  ${({ theme }) => css`
    width: fit-content;
    padding: 8px 16px;
    font-size: ${theme.fontSizes.sm};
  `}
`;
