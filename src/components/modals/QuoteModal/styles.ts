import styled, { css } from 'styled-components';

export const FormWrapper = styled.div`
    ${({ theme }) => css`
    display: flex;
    gap: 12px;
    padding-bottom: 40px;
    border-bottom: 1px solid ${theme.colors.darkShades.d_55};
  `}
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;

  h4:hover {
    text-decoration: none;
  }
`;