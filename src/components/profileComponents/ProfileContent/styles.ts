import styled, { css } from 'styled-components';

import { ButtonPrimary } from '../../../styles/common';
import { setBreakpoint } from '../../../styles/themes/breakpoints';

export const ProfileContent = styled.div`
  ${({ theme }) => css`
    position: relative;
    padding: 16px;
    padding-top: 85px;
    text-align: start;

    h2 {
      font-size: ${theme.fontSizes.lg};
      padding-bottom: 2px;
    }

    p, 
    span {
      font-size: ${theme.fontSizes.sm};
    }

    span {
      color: ${theme.colors.darkShades.d_45};
    }

    &>button {
      position: absolute;
      top: 12px;
      right: 16px;
    }

    ${setBreakpoint(theme.breakpoints.sm)} {
      padding-top: 70px;
    }
  `}
`;

export const Username = styled.span`
  display: block;
  padding-bottom: 14px;
`;

export const Bio = styled.p`
  padding-bottom: 14px;
`;

export const CreatedAt = styled.span`
  display: flex;
  gap: 4px;
  padding-bottom: 14px;

  img {
    max-width: 19px;
  }
`;

export const CountersWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

export const Counter = styled.a`
  ${({ theme }) => css`
    cursor: pointer;
    display: flex;
    gap: 4px;

    b {
      font-size: ${theme.fontSizes.sm};
      color: ${theme.colors.whiteShades.w_40};
    }

    &:hover,
    &:active {
      text-decoration: underline ${theme.colors.whiteShades.w_40};
    }
  `};
`;

export const ButtonProfile = styled(ButtonPrimary)`
  ${({ theme }) => css`
    padding: 8px 16px;
    font-size: ${theme.fontSizes.sm};
    background-color: transparent;
    border: 1px solid ${theme.colors.darkShades.d_45};
    color: ${theme.colors.whiteShades.w_40};

    &:hover,
    &:active {
      background-color: ${theme.colors.darkShades.d_40};
    }
  `};
`;