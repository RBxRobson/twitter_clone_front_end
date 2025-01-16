import styled, { css } from 'styled-components';

export const SmallAvatar = styled.img`
  ${({ theme }) => css`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    background-color: ${theme.colors.whiteShades.w_40};
  `}
`;