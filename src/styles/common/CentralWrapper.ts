import styled, { css } from 'styled-components';

export const CentralWrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    margin-right: 12px;
    border: 1px solid ${theme.colors.darkShades.d_55};
    border-top: none;
    border-bottom: none;
    position: relative;
    z-index: 1;
  `}
`;