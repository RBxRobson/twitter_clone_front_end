import styled, { css } from 'styled-components';

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100dvh;
  width: 100dvw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #5b708366;
`;

export const ModalForm = styled.form`
  position: relative;
  width: 100%;
  max-width: 600px;
  background-color: #000;
  display: flex;
  flex-direction: column;
  padding: 12px 80px 26px;
  border-radius: 20px;
`;

export const ButtonClose = styled.button`
  ${({ theme }) => css`
    border: none;
    cursor: pointer;
    background-color: transparent;
    display: flex;
    align-items: center;
    position: absolute;
    top: 16px;
    left: 16px;
    border-radius: 50%;
    padding: 8px;
    transition: ease-out 200ms;

    &:hover, 
    &:active {
      background-color: ${theme.colors.darkShades.d_65};
    }

    img {
      width: 22px;
    }
  `};
`;

export const Logo = styled.img`
  align-self: center;
  max-width: 40px;
  margin-bottom: 24px;
`;

export const TitleForm = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.xl};
    text-align: start;
    margin-bottom: 50px;
  `};
`;

export const Label = styled.label`
  ${({ theme }) => css`
    position: relative;
    margin-bottom: 30px;
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
    }

    &:focus-within span,
    input:not(:placeholder-shown) + span {
      top: 8px;
      transform: none;
      font-size: ${theme.fontSizes.sm};
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
  `}
`;

export const ButtonSubmit = styled.button`
  ${({ theme }) => css`
    cursor: pointer;
    border: none;
    border-radius: 9999px;
    padding: 15px;
    margin-top: 50px;
    background-color: ${theme.colors.whiteShades.w_40};
    font-size: ${theme.fontSizes.md};
    font-weight: ${theme.fontWeights.bold};
    transition: ease-out 200ms;

    &:hover,
    &:active {
      background-color: ${theme.colors.whiteShades.w_50};
    }
  `};
`;