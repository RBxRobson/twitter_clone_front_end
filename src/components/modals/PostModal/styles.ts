import styled, { css } from 'styled-components';

export const InputGroup = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: 12px;
    padding-bottom: 40px;
    border-bottom: 1px solid ${theme.colors.darkShades.d_55};
  `}
`;
