import styled, { css } from 'styled-components';

import {  
  Modal, 
  ButtonClose, 
  Overlay, 
  ButtonPrimary
} from '../../../styles/common';
import { setBreakpoint } from '../../../styles/themes/breakpoints';

export { ButtonClose };

export const ModalOverlay = styled(Overlay)`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    padding-top: 50px;

    ${setBreakpoint(theme.breakpoints.sm)} {
      padding-top: 0;
    }
  `}
`;

export const ModalForm = styled(Modal)`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding: 66px 16px 16px;
    height: fit-content;

    ${ButtonClose} {
      top: 10px;
      left: 10px;
    }

    ${setBreakpoint(theme.breakpoints.sm)} {
      max-width: 100%;
      border-radius: 0;
      height: 100dvh;
      padding: 80px 22px 16px;

      ${ButtonClose} {
        top: 8px;
        left: 0;
      }
    }
  `}
`;

export const InputGroup = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: 12px;
    padding-bottom: 40px;
    border-bottom: 1px solid ${theme.colors.darkShades.d_55};
  `}
`;

export const TextField = styled.textarea`
  ${({ theme }) => css`
    border: none;
    outline: none;
    resize: none;
    min-height: 200px;
    width: 100%;
    padding-right: 8px;
    background-color: transparent;
    line-height: 24px;
    color: ${theme.colors.whiteShades.w_40};
    font-size: ${theme.fontSizes.lg};
  `}
`;

export const ButtonSubmit = styled(ButtonPrimary)`
  width: fit-content;
  padding: 8px 16px;
  margin-top: 16px;
  margin-left: auto;
`;