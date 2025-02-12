import styled, { css } from 'styled-components';

export const ProfileHero = styled.div`
  position: relative;
  z-index: 1;
`;

export const Cover = styled.img`
  width: 100%;
  max-height: 200px;
  object-fit: cover;
`;

export const Avatar = styled.img`
  width: 100%;
  max-height: 134px;
  object-fit: cover;
`;

export const WrapperAvatar = styled.div`
  ${({ theme }) => css`
    position: absolute;
    bottom: 0;
    left: 20px;
    transform: translateY(66px);
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 134px;
    height: 100%;
    max-height: 134px;
    border-radius: 50%;
    border: 4px solid ${theme.colors.absoluteColors.black};
    background-color: ${theme.colors.whiteShades.w_40};
    overflow: hidden;
  `};
`;
