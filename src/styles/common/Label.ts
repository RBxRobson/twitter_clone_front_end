import styled, { css } from 'styled-components';

export const Label = styled.label`
  ${({ theme }) => css`
    position: relative;
    margin-bottom: 6px;
    cursor: text;

    span {
      position: absolute;
      top: 50%;
      left: 8px;
      transform: translateY(-50%);
      transition: ease-in 100ms;
      font-size: ${theme.fontSizes.md};
      color: ${theme.colors.darkShades.d_50};
    }

    &:focus-within span {
      color: ${theme.colors.blueShades.b_50};

      &.error {
        color: red;
      }
    }

    &:focus-within span,
    input:not(:placeholder-shown) + span {
      top: 8px;
      transform: none;
      font-size: ${theme.fontSizes.sm};
    }

    input {
    width: 100%;
    max-width: 440px;
    outline: none;
    background-color: transparent;
    border: 1px solid ${theme.colors.darkShades.d_50};
    font-size: ${theme.fontSizes.md};
    color: ${theme.colors.whiteShades.w_40};
    border-radius: 4px;
    padding: 28px 8px 8px;
    z-index: 1;

    &:focus {
      border: 1px solid ${theme.colors.blueShades.b_50};
      outline: 1px solid ${theme.colors.blueShades.b_50};
    }

    &.error {
      border: 1px solid red;
      outline: 1px solid red;
    }
    }
  `};
`;

export const Input = styled.input`
  ${({ theme }) => css`
    width: 100%;
    max-width: 440px;
    outline: none;
    background-color: transparent;
    border: 1px solid ${theme.colors.darkShades.d_50};
    font-size: ${theme.fontSizes.md};
    color: ${theme.colors.whiteShades.w_40};
    border-radius: 4px;
    padding: 28px 8px 8px;
    z-index: 1;

    &:focus {
      border: 1px solid ${theme.colors.blueShades.b_50};
      outline: 1px solid ${theme.colors.blueShades.b_50};
    }

    &.error {
      border: 1px solid red;
      outline: 1px solid red;
    }
  `}
`;

export const MessageError = styled.small`
  ${({ theme }) => css`
    color: red;
    margin-bottom: 30px;
    padding-left: 8px;
    font-size: ${theme.fontSizes.xs};
  `};
`;