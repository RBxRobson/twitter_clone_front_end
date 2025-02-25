import styled, { css } from 'styled-components';

import { 
  ButtonPrimary, 
  CentralWrapper, 
  HeaderBlur, 
  TextField 
} from '../../styles/common';
import { PostInteractions } from '../../components/postComponents/Interactions/styles';

export { CentralWrapper, TextField };

export const ModCentralWrapper = styled(CentralWrapper)`
  ul {
    border-top: none;
  }
`;

export const Header = styled(HeaderBlur)`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 26px;
    padding: 15px;
    border-bottom: 1px solid ${theme.colors.darkShades.d_55};
    margin-bottom: 12px;
  `}
`;

export const ButtonComment = styled.button`
  ${({ theme }) => css`
    cursor: pointer;
    background-color: transparent;
    padding: 8px 16px;
    border: 1px solid ${theme.colors.darkShades.d_55};
    color: ${theme.colors.whiteShades.w_40};
    font-size: ${theme.fontSizes.sm};
    font-weight: ${theme.fontWeights.bold};
    border-radius: 9999px;
    margin-left: auto;
    transition: 200ms ease;

    &:hover,
    &:active {
      background-color: ${theme.colors.darkShades.d_40};
    }
  `}
`;

export const PostContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    padding: 12px 16px;
    padding-top: 0;
    position: relative;
    border-bottom: 1px solid ${theme.colors.darkShades.d_55};

    ${PostInteractions} {
      margin: 0;
      margin-top: 16px;
      padding: 4px 0;
      border: 1px solid ${theme.colors.darkShades.d_55};
      border-left: none;
      border-right: none;

      svg {
        max-width: 22px;
      }
    }
  `}
`;

export const PostHeader = styled.div`
  display: flex;
  gap: 8px;

  button {
    position: static;
    margin-left: auto;
  }
`;

export const Content = styled.p`
  ${({ theme }) => css`
    text-align: start;
    margin: 18px 0 14px;
    font-size: ${theme.fontSizes.md};
  `}
`;

export const Time = styled.time`
  ${({ theme }) => css`
    cursor: default;
    display: block;
    font-size: ${theme.fontSizes.sm};
    color: ${theme.colors.darkShades.d_50};
    text-align: start;
    margin-top: 16px;
    &:hover {
      text-decoration: underline;
    }
  `}
`;

export const FormComment = styled.form`
  display: flex;
  gap: 10px;
  padding-top: 18px;
  position: relative;
  transition: 200ms ease-in;

  &:focus-within,
  &:has(${TextField}:not(:placeholder-shown)) {
    padding: 45px 0 70px;
  }
`;

export const ButtonSubmit = styled(ButtonPrimary)`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.sm};
    padding: 9px 16px;
    position: absolute;
    bottom: 16px;
    right: 0;
    width: fit-content;
    height: fit-content;
    transition: 300ms ease-in-out;

    ${FormComment}:focus-within &,
    ${FormComment}:has(${TextField}:not(:placeholder-shown)) & {
      bottom: 20px;
    }
  `}
`;

export const TagReply = styled.p`
  ${({ theme }) => css`
    display: none;
    position: absolute;
    top: 12px;
    left: 48px;
    color: ${theme.colors.darkShades.d_50};
    font-size: ${theme.fontSizes.sm};

    span {
      color: ${theme.colors.blueShades.b_50};
    }

    ${FormComment}:focus-within &,
    ${FormComment}:has(${TextField}:not(:placeholder-shown)) & {
      display: block;
    }
  `}
`;