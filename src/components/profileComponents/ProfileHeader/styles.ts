import styled, { css } from 'styled-components';

export const Header = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  gap: 30px;
  padding: 14px 10px;
  background: rgba(0, 0, 0, 0.76);
  backdrop-filter: blur(6px);
  z-index: 2;
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.lg};
  `}
`;