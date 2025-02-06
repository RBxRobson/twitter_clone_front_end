import styled, { css } from 'styled-components';

export const TextField = styled.textarea`
  ${({ theme }) => css`
    border: none;
    outline: none;
    resize: none;
    min-height: 20px;
    width: 100%;
    margin-top: 8px;
    background-color: transparent;
    word-break: break-all;
    white-space: pre-wrap;
    color: ${theme.colors.whiteShades.w_40};
    font-size: ${theme.fontSizes.lg};
    overflow: hidden;
  `}
`;
