import styled, { css } from 'styled-components';

import { 
  ButtonPrimary, 
  Modal, 
  ButtonClose, 
  Overlay,
  Label
} from '../../../styles/common';
import { setBreakpoint } from '../../../styles/themes/breakpoints';

export { ButtonClose, Label };

export const ModalOverlay = styled(Overlay)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalForm = styled(Modal)`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding: 12px 80px 26px;

    ${setBreakpoint(theme.breakpoints.sm)} {
      align-items: center;
      justify-content: center;
      max-width: 100%;
      border-radius: 0;
      height: 100dvh;
      min-height: 650px;
      overflow-y: scroll; 
      padding: 12px;

      label {
        width: 90%;
        max-width: 400px;
      }
    }
  `};
`;

export const Logo = styled.img`
  ${({ theme }) => css`
    align-self: center;
    max-width: 40px;
    margin-bottom: 24px;

    ${setBreakpoint(theme.breakpoints.sm)} {
      position: absolute;
      top: 20px;
      max-width: 60px;
    }
  `};
`;

export const TitleForm = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.xl};
    text-align: start;
    margin-bottom: 50px;
  `};
`;

export const MessageError = styled.small`
  ${({ theme }) => css`
    color: red;
    margin-bottom: 30px;
    padding-left: 8px;
    font-size: ${theme.fontSizes.xs};
  `};
`;

export const ButtonSubmit = styled(ButtonPrimary)`
  ${({ theme }) => css`
    margin-top: 50px;

    ${setBreakpoint(theme.breakpoints.sm)} {
      width: 90%;
      max-width: 400px;
    }
  `};
`;